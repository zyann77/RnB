import { useEffect, useRef } from "react";

interface Package {
  speed: number;
  price: string;
  popular?: boolean;
}

const packages: Package[] = [
  { speed: 10, price: "Rp 150.000" },
  { speed: 20, price: "Rp 200.000", popular: true },
  { speed: 30, price: "Rp 250.000" },
  { speed: 50, price: "Rp 500.000" }
];

export default function PricingPackages() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pricing-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getGradientClass = (speed: number) => {
    switch (speed) {
      case 10: return "from-cyan-400 to-cyan-600";
      case 20: return "from-cyan-500 to-blue-600";
      case 30: return "from-blue-500 to-blue-700";
      case 50: return "from-blue-600 to-indigo-700";
      default: return "from-cyan-400 to-cyan-600";
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-muted/30" data-testid="pricing-packages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="text-pricing-title">
            Pilih Paket <span className="gradient-text">Internet</span> Anda
          </h2>
          <p className="text-xl text-muted-foreground">Dapatkan koneksi internet super cepat dengan harga terjangkau</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.speed}
              className={`pricing-card scroll-reveal bg-white rounded-3xl p-8 shadow-xl border-2 ${
                pkg.popular ? 'border-primary' : 'border-border hover:border-primary'
              } relative overflow-hidden`}
              data-testid={`card-package-${pkg.speed}`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold" data-testid="badge-popular">
                  POPULER
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${getGradientClass(pkg.speed)} rounded-full flex items-center justify-center`}>
                  <span className="text-white text-3xl font-black">{pkg.speed}</span>
                </div>
                <p className="text-5xl font-black text-primary mb-2" data-testid={`text-speed-${pkg.speed}`}>{pkg.speed}</p>
                <p className="text-xl text-muted-foreground font-semibold">Mbps</p>
              </div>
              
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 mb-6">
                <p className="text-sm text-muted-foreground mb-1">Harga Per Bulan</p>
                <p className="text-4xl font-black text-foreground" data-testid={`text-price-${pkg.speed}`}>{pkg.price}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span className="text-sm">Download hingga {pkg.speed} Mbps</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span className="text-sm">Upload hingga {pkg.speed} Mbps</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-check-circle text-primary"></i>
                  <span className="text-sm">Unlimited Kuota</span>
                </li>
              </ul>
              
              <a 
                href={`https://wa.me/6287842861656?text=Halo, saya tertarik dengan paket ${pkg.speed} Mbps`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                data-testid={`button-select-${pkg.speed}`}
              >
                Pilih Paket Ini
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
