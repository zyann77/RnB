import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm" data-testid="navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-3 cursor-pointer" data-testid="logo">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-2xl">RnB</span>
              </div>
              <div>
                <h1 className="text-2xl font-black text-foreground">RnBNET</h1>
                <p className="text-sm text-muted-foreground italic">Your Digital Connectivity</p>
              </div>
            </a>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/register">
              <a 
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                data-testid="button-register-nav"
              >
                <i className="fas fa-user-plus"></i>
                <span>Daftar Sekarang</span>
              </a>
            </Link>
            
            <a 
              href="https://wa.me/6287842861656" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              data-testid="button-contact-nav"
            >
              <i className="fab fa-whatsapp text-xl"></i>
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
