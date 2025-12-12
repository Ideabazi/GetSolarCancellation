import { Phone, Zap } from "lucide-react";
import { Link } from "wouter";

export function StickyHeader() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      {/* Urgency Banner - More prominent on mobile */}
      <div className="bg-destructive text-destructive-foreground py-2 text-center text-xs md:text-sm font-bold">
        <div className="flex items-center justify-center gap-2 animate-pulse">
          <Zap className="w-4 h-4" />
          <span>
            LIMITED TIME: Free Case Evaluation
          </span>
          <Zap className="w-4 h-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo / Brand */}
          <Link href="/">
            <span className="text-xs md:text-lg font-bold cursor-pointer hover:opacity-90 transition-opacity whitespace-nowrap" data-testid="link-header-home">
              Solar Cancellation Hub
            </span>
          </Link>

          {/* Phone Number - Always Visible */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop: Full phone display */}
            <a 
              href="tel:877-511-8931" 
              className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-2.5 rounded-md transition-all font-bold"
              data-testid="link-header-phone-desktop"
            >
              <Phone className="w-5 h-5 animate-pulse" />
              <span className="text-lg tracking-wide">877-511-8931</span>
            </a>

            {/* Mobile: Large tap-friendly call button */}
            <a 
              href="tel:877-511-8931" 
              className="md:hidden flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-md font-bold text-sm shadow-lg"
              data-testid="link-header-phone-mobile"
            >
              <Phone className="w-5 h-5 animate-bounce" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
