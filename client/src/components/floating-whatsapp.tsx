export default function FloatingWhatsapp() {
  return (
    <a 
      href="https://wa.me/6287842861656" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      data-testid="floating-whatsapp"
    >
      <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors duration-300 whatsapp-pulse">
        <i className="fab fa-whatsapp text-3xl"></i>
      </div>
    </a>
  );
}
