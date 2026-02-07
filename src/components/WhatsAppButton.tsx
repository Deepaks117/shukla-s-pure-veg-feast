import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919214381274";
  const message = "Hello, I am interested in your catering services. Please share more details.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-forest rounded-full animate-ping opacity-30" />
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-forest hover:bg-forest-light rounded-full shadow-lg transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-cream" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-card text-foreground px-4 py-2 rounded-lg shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        <span className="text-sm font-medium">Chat with us!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-card rotate-45" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
