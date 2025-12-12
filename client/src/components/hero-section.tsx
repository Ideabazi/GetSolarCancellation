import { CheckCircle2, Phone, Users } from "lucide-react";
import heroImage from "@assets/generated_images/concerned_homeowners_with_solar_panels.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Solar panels on house"
          className="w-full h-full object-cover object-left md:object-center"
        />
        {/* Dark wash gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8 md:py-24">
        <div className="max-w-3xl space-y-5 md:space-y-8">
          {/* Social proof badge - mobile prominent */}
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 px-3 py-1.5 rounded-full text-sm font-medium">
            <Users className="w-4 h-4" />
            <span>2,500+ Homeowners Helped This Year</span>
          </div>

          {/* Headline - Shorter on mobile */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Trapped in a Solar Contract You Regret?
          </h1>

          {/* Subheadline - Shorter on mobile */}
          <p className="text-lg md:text-2xl text-white/90 max-w-2xl">
            We help homeowners break free from unfair solar agreements—legally and permanently.
          </p>

          {/* Value Propositions - Compact on mobile */}
          <div className="flex flex-col gap-2 md:gap-4 text-white">
            {[
              "Licensed attorneys on your side",
              "One-time affordable fixed fee",
              "100% satisfaction guarantee",
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2 md:gap-3">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-green-400 flex-shrink-0" />
                <span className="text-base md:text-xl">{text}</span>
              </div>
            ))}
          </div>

          {/* Main CTA - Phone - LARGER on mobile */}
          <div className="pt-2 md:pt-4 space-y-3">
            <a
              href="tel:877-511-8931"
              className="group inline-flex items-center justify-center gap-3 md:gap-4 bg-green-500 hover:bg-green-400 text-white w-full md:w-auto px-6 md:px-8 py-4 md:py-5 rounded-xl font-bold text-xl md:text-2xl transition-all hover:scale-105 shadow-2xl"
              data-testid="link-hero-phone"
            >
              <Phone className="w-6 h-6 md:w-7 md:h-7 group-hover:animate-bounce" />
              <span>Call Now: 877-511-8931</span>
            </a>
            
            {/* Urgency text */}
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
              <p className="text-white/80 text-sm md:text-lg">
                Free consultation • No obligation
              </p>
              <span className="hidden md:inline text-white/60">|</span>
              <p className="text-green-400 text-sm md:text-lg font-medium animate-pulse">
                Experts available now
              </p>
            </div>
          </div>

          {/* Secondary CTA - Less prominent on mobile */}
          <div className="pt-1 md:pt-2">
            <a
              href="#contact-form"
              className="inline-block text-white/70 text-sm md:text-lg underline hover:text-white transition-colors"
              data-testid="link-hero-contact-form"
            >
              Prefer to message? Fill out our quick form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
