import { MessageCircle } from "lucide-react";

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/94741141827?text=Hi%20TDL%20Home%20Land%2C%20I%27m%20interested%20in%20a%20property."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-white
                 w-16 h-16 rounded-2xl shadow-xl hover:shadow-2xl
                 flex items-center justify-center
                 transition-all duration-300 hover:scale-110 active:scale-95
                 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" stroke="none" />

      {/* Tooltip */}
      <span className="absolute right-20 bottom-1 bg-slate-900 text-white text-sm font-medium
                       px-4 py-2.5 rounded-2xl whitespace-nowrap
                       opacity-0 group-hover:opacity-100 transition-all duration-200
                       pointer-events-none shadow-xl border border-slate-700">
        Chat on WhatsApp
        {/* Small arrow */}
        <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-slate-900 border-r border-b border-slate-700 rotate-45"></span>
      </span>
    </a>
  );
}