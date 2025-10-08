import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";
import RegistrationForm from "@/components/registration-form";

export default function Register() {
  return (
    <div className="bg-background text-foreground antialiased">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50" data-testid="register-page">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black mb-4" data-testid="text-register-title">
                Daftar Paket <span className="gradient-text">Internet</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Isi formulir di bawah ini untuk mendaftar layanan internet RnBNET
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <i className="fas fa-gift text-3xl text-primary"></i>
                  <h2 className="text-2xl font-bold">Benefit Pendaftaran:</h2>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span>GRATIS Instalasi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span>Internet Unlimited tanpa FUP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span>100% Full Fiber Optic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fas fa-check-circle text-green-500"></i>
                    <span>Support 24/7</span>
                  </li>
                </ul>
              </div>

              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
