import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PricingPackages from "@/components/pricing-packages";
import PremiumTVAddon from "@/components/premium-tv-addon";
import WhyChooseUs from "@/components/why-choose-us";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";
import FloatingWhatsapp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="bg-background text-foreground antialiased">
      <Navigation />
      <HeroSection />
      
      {/* Unlimited Access Banner */}
      <section className="gradient-bg py-6">
        <div className="container mx-auto px-4">
          <p className="text-white text-center text-2xl md:text-3xl font-bold italic">
            <i className="fas fa-infinity mr-3"></i>
            AKSES INTERNET UNLIMITED DI RUMAH ANDA
          </p>
        </div>
      </section>
      
      <PricingPackages />
      <PremiumTVAddon />
      <WhyChooseUs />
      <ContactCTA />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
