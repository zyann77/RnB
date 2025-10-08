const channels = [
  { name: "YouTube", icon: "fab fa-youtube", color: "text-red-500" },
  { name: "Channel Lokal Full", icon: "fas fa-tv", color: "text-cyan-400" },
  { name: "Channel HBO", icon: "fas fa-film", color: "text-purple-400" },
  { name: "VOD", icon: "fas fa-play-circle", color: "text-green-400" },
  { name: "Channel Sport", icon: "fas fa-football-ball", color: "text-orange-400" },
  { name: "Channel Kids", icon: "fas fa-child", color: "text-pink-400" }
];

export default function PremiumTVAddon() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white" data-testid="premium-tv-addon">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6" data-testid="badge-addon-premium">
                <p className="font-bold">✨ Add-On Premium</p>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6" data-testid="text-addon-title">
                Premium TV<br/>
                <span className="text-cyan-300">Channels</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-8">
                Nikmati ratusan channel premium untuk hiburan keluarga Anda!
              </p>
              
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Channel Yang Tersedia:</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {channels.map((channel, index) => (
                    <div key={index} className="flex items-center gap-3" data-testid={`channel-${index}`}>
                      <i className={`${channel.icon} text-2xl ${channel.color}`}></i>
                      <span className="font-semibold">{channel.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-cyan-400 text-blue-900 rounded-2xl p-6 shadow-2xl" data-testid="card-addon-price">
                <p className="text-sm font-semibold mb-2">Harga Spesial</p>
                <p className="text-4xl font-black mb-4">Cukup Bayar Rp 50.000</p>
                <p className="text-sm">*Biaya tambahan per bulan</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Smart TV with streaming services" 
                className="rounded-3xl shadow-2xl w-full h-auto"
                data-testid="img-smart-tv"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 rounded-2xl p-6 shadow-2xl max-w-xs" data-testid="badge-savings">
                <p className="text-sm font-semibold text-muted-foreground mb-1">Hemat hingga</p>
                <p className="text-3xl font-black">70% dari harga normal!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
