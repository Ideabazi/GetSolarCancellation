import { Phone, MessageCircle } from "lucide-react";

export function FloatingCallButton() {
  return (
    <>
      {/* Mobile: Full-width bottom call bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-green-500 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <a
          href="tel:877-511-8931"
          className="flex items-center justify-center gap-3 py-4 px-4 text-white"
          data-testid="button-mobile-bottom-call"
        >
          {/* Phone icon with animation */}
          <div className="relative">
            <Phone className="w-7 h-7 animate-bounce" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
          </div>
          
          <div className="flex flex-col items-start">
            <span className="text-xs font-medium opacity-90">TAP TO CALL FREE</span>
            <span className="text-xl font-bold tracking-wide">877-511-8931</span>
          </div>
          
          <div className="ml-auto bg-white/20 px-3 py-1.5 rounded-full">
            <span className="text-sm font-bold">FREE</span>
          </div>
        </a>
      </div>

      {/* Desktop: Floating button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <a
          href="tel:877-511-8931"
          className="group relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105"
          data-testid="button-floating-call"
        >
          {/* Pulsing ring effect */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25" />
          
          <Phone className="w-7 h-7 relative z-10 group-hover:animate-bounce" />
          <span className="relative z-10 font-bold text-lg whitespace-nowrap">Call Now</span>
          <span className="relative z-10 font-bold text-lg border-l border-white/30 pl-3 ml-1">
            877-511-8931
          </span>
        </a>
      </div>

      {/* Add bottom padding on mobile to prevent content from being hidden behind the bar */}
      <div className="md:hidden h-20" />
    </>
  );
}
