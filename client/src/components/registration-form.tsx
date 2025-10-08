import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertRegistrationSchema } from "@shared/schema";
import type { InsertRegistration } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const packages = [
  { speed: 10, price: "Rp 150.000" },
  { speed: 20, price: "Rp 200.000" },
  { speed: 30, price: "Rp 250.000" },
  { speed: 50, price: "Rp 500.000" }
];

export default function RegistrationForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertRegistration>({
    resolver: zodResolver(insertRegistrationSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      packageSpeed: 20,
      addPremiumTV: "no",
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: InsertRegistration) => {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to submit registration");
      }
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      form.reset();
      toast({
        title: "Pendaftaran Berhasil!",
        description: "Terima kasih telah mendaftar. Kami akan segera menghubungi Anda.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Pendaftaran Gagal",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertRegistration) => {
    registrationMutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12" data-testid="registration-success">
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <i className="fas fa-check-circle text-4xl text-green-500"></i>
        </div>
        <h3 className="text-2xl font-bold mb-4">Pendaftaran Berhasil!</h3>
        <p className="text-muted-foreground mb-6">
          Terima kasih telah mendaftar. Tim kami akan segera menghubungi Anda untuk proses instalasi.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          className="bg-gradient-to-r from-primary to-secondary"
          data-testid="button-register-again"
        >
          Daftar Lagi
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-registration">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Masukkan nama lengkap" {...field} data-testid="input-name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor WhatsApp</FormLabel>
              <FormControl>
                <Input placeholder="08xxxxxxxxxx" {...field} data-testid="input-phone" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (Opsional)</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field} value={field.value || ""} data-testid="input-email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat Lengkap</FormLabel>
              <FormControl>
                <Textarea placeholder="Jl. ..." {...field} data-testid="input-address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kota</FormLabel>
              <FormControl>
                <Input placeholder="Nama kota" {...field} data-testid="input-city" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="packageSpeed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pilih Paket Internet</FormLabel>
              <Select
                onValueChange={(value) => field.onChange(Number(value))}
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger data-testid="select-package">
                    <SelectValue placeholder="Pilih paket" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {packages.map((pkg) => (
                    <SelectItem key={pkg.speed} value={pkg.speed.toString()}>
                      {pkg.speed} Mbps - {pkg.price}/bulan
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="addPremiumTV"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value === "yes"}
                  onCheckedChange={(checked) => field.onChange(checked ? "yes" : "no")}
                  data-testid="checkbox-premium-tv"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Tambah Premium TV Add-On (+Rp 50.000/bulan)
                </FormLabel>
                <p className="text-sm text-muted-foreground">
                  Dapatkan akses ke YouTube, HBO, VOD, Channel Sport, dan banyak lagi
                </p>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-lg py-6"
          disabled={registrationMutation.isPending}
          data-testid="button-submit-registration"
        >
          {registrationMutation.isPending ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>
              Memproses...
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane mr-2"></i>
              Daftar Sekarang
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
