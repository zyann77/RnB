import { Link } from "wouter";

export default function ContactCTA() {
  return (
    <section className="py-20 gradient-bg" data-testid="contact-cta">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6" data-testid="text-cta-title">
            Daftar Sekarang Juga!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Isi formulir pendaftaran online atau hubungi kami via WhatsApp
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/register">
              <a 
                className="flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                data-testid="button-register-main"
              >
                <i className="fas fa-user-plus text-2xl"></i>
                <span>Daftar Online</span>
              </a>
            </Link>
            
            <a 
              href="https://wa.me/6287842861656" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              data-testid="button-contact-main"
            >
              <i className="fab fa-whatsapp text-2xl text-green-600"></i>
              <span>087842861656</span>
            </a>
          </div>
          
          <p className="text-sm text-white/70" data-testid="text-terms">
            *Syarat dan ketentuan berlaku
          </p>
        </div>
      </div>
    </section>
  );
}
