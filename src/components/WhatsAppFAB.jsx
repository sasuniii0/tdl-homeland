import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/94XXXXXXXXX?text=Hi%20TDL%20Home%20Land%2C%20I%27m%20interested%20in%20a%20property."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white
                 w-14 h-14 rounded-full shadow-lg hover:shadow-xl
                 flex items-center justify-center
                 transition-all duration-300 hover:scale-110 active:scale-95
                 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="white" stroke="none" />
      {/* Tooltip */}
      <span className="absolute right-16 bg-forest-800 text-white text-xs font-medium
                       px-3 py-1.5 rounded-lg whitespace-nowrap
                       opacity-0 group-hover:opacity-100 transition-all duration-200
                       pointer-events-none shadow-md">
        Chat on WhatsApp
      </span>
    </a>
  );
}
