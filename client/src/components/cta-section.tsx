import { Phone, Clock, Shield, CheckCircle2, Star } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-10">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight">
            Ready to Break Free?
          </h2>
          <p className="text-base md:text-xl opacity-90 max-w-2xl mx-auto">
            Don't wait another day trapped in an unfair contract. Our experts are standing by now.
          </p>
        </div>

        {/* Main CTA - Phone - Optimized for mobile taps */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-5 md:p-10 border border-white/20 mb-6 md:mb-8">
          <div className="text-center">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-1 bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400" />
              <Star className="w-4 h-4 fill-yellow-400" />
              <span className="ml-1">4.9/5 from 500+ reviews</span>
            </div>

            <p className="text-xs md:text-sm font-medium opacity-80 mb-3 md:mb-4">TAP TO CALL - FREE CONSULTATION</p>
            <a 
              href="tel:877-511-8931" 
              className="group flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 bg-green-500 hover:bg-green-400 w-full md:w-auto md:inline-flex px-6 md:px-8 py-4 md:py-5 rounded-xl transition-all hover:scale-105"
              data-testid="link-cta-phone-large"
            >
              <div className="bg-white/20 p-2.5 md:p-3 rounded-full">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
              </div>
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                877-511-8931
              </span>
            </a>
            <p className="text-xs md:text-sm mt-3 md:mt-4 opacity-80">
              Toll-free • Available 7 days a week • No obligation
            </p>
          </div>
        </div>

        {/* Trust indicators - Stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          <div className="flex items-center gap-3 justify-center bg-white/5 rounded-lg px-4 py-3">
            <Clock className="w-5 h-5 text-green-300 flex-shrink-0" />
            <span className="text-sm font-medium">24-Hour Response</span>
          </div>
          <div className="flex items-center gap-3 justify-center bg-white/5 rounded-lg px-4 py-3">
            <Shield className="w-5 h-5 text-green-300 flex-shrink-0" />
            <span className="text-sm font-medium">100% Confidential</span>
          </div>
          <div className="flex items-center gap-3 justify-center bg-white/5 rounded-lg px-4 py-3">
            <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
            <span className="text-sm font-medium">No Obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
