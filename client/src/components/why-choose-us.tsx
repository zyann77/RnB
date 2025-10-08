const features = [
  {
    icon: "fas fa-bolt",
    title: "Koneksi Super Cepat",
    description: "Teknologi fiber optic terbaru untuk kecepatan maksimal"
  },
  {
    icon: "fas fa-headset",
    title: "Support 24/7",
    description: "Tim support siap membantu Anda kapan saja"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Aman & Terpercaya",
    description: "Jaringan aman dengan uptime 99.9%"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white" data-testid="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4" data-testid="text-why-choose-title">
            Kenapa Pilih <span className="gradient-text">RnBNET</span>?
          </h2>
          <p className="text-xl text-muted-foreground">Kualitas terbaik dengan harga terjangkau</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-xl transition-all duration-300"
              data-testid={`card-feature-${index}`}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <i className={`${feature.icon} text-3xl text-white`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-muted-foreground" data-testid={`text-feature-desc-${index}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
