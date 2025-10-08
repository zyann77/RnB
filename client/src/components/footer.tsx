export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4" data-testid="footer-logo">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                <span className="text-white font-black text-lg">RnB</span>
              </div>
              <div>
                <h3 className="text-xl font-black">RnBNET</h3>
                <p className="text-sm text-white/70">Your Digital Connectivity</p>
              </div>
            </div>
            <p className="text-white/70">
              Penyedia layanan internet rumah dengan teknologi fiber optic terdepan.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4" data-testid="text-services-title">Layanan</h4>
            <ul className="space-y-2 text-white/70">
              <li>Internet Rumah</li>
              <li>Premium TV Add-On</li>
              <li>Instalasi Gratis</li>
              <li>Customer Support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4" data-testid="text-contact-title">Hubungi Kami</h4>
            <div className="space-y-3 text-white/70">
              <p className="flex items-center gap-2">
                <i className="fab fa-whatsapp text-green-400"></i>
                <span data-testid="text-phone">087842861656</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fas fa-building text-cyan-400"></i>
                <span data-testid="text-company">PT. SAKTI WIJAYA NETWORK</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p data-testid="text-copyright">&copy; 2024 RnBNET - PT. SAKTI WIJAYA NETWORK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
