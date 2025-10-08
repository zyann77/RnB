export default function HeroSection() {
  return (
    <section 
      className="relative min-h-[600px] flex items-center" 
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      data-testid="hero-section"
    >
      <div className="hero-overlay absolute inset-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg" data-testid="badge-home">
            <p className="text-primary font-bold text-lg">🏠 Makin Betah di Rumah</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight" data-testid="text-hero-title">
            Internet Rumah<br/>
            <span className="text-cyan-300">Unlimited</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="feature-badge rounded-2xl p-4 shadow-lg" data-testid="card-feature-bandwidth">
              <div className="flex items-center gap-3">
                <i className="fas fa-wifi text-3xl text-primary"></i>
                <div>
                  <p className="font-bold text-foreground">Bandwidth CIR 1:1</p>
                  <p className="text-sm text-muted-foreground">Kecepatan Stabil</p>
                </div>
              </div>
            </div>
            
            <div className="feature-badge rounded-2xl p-4 shadow-lg" data-testid="card-feature-fiber">
              <div className="flex items-center gap-3">
                <i className="fas fa-network-wired text-3xl text-primary"></i>
                <div>
                  <p className="font-bold text-foreground">100% Full Fiber Optic</p>
                  <p className="text-sm text-muted-foreground">Teknologi Terdepan</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 inline-block px-8 py-4 rounded-2xl shadow-2xl" data-testid="badge-free-installation">
            <p className="text-white text-3xl font-black">
              <i className="fas fa-gift mr-2"></i> GRATIS Instalasi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
