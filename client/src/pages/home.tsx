import { HeroSection } from "@/components/hero-section";
import { MediaLogos } from "@/components/media-logos";
import { ProcessSteps } from "@/components/process-steps";
import { Testimonials } from "@/components/testimonials";
import { TrustBadges } from "@/components/trust-badges";
import { CtaSection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { StickyHeader } from "@/components/sticky-header";
import { FloatingCallButton } from "@/components/floating-call-button";
import { Phone, Shield, Clock, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <StickyHeader />
      <HeroSection />
      <FloatingCallButton />
      
      {/* Quick Stats Bar - Mobile social proof */}
      <div className="md:hidden bg-primary/10 py-3">
        <div className="flex justify-center gap-6 text-xs font-medium text-foreground">
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-primary" />
            <span>A+ BBB Rated</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>2,500+ Helped</span>
          </div>
        </div>
      </div>

      <MediaLogos />
      <ProcessSteps />
      
      {/* Mid-page CTA - Mobile optimized */}
      <div className="py-8 md:py-12 bg-green-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/90 text-sm md:text-base font-medium mb-3">
            READY TO GET STARTED?
          </p>
          <a
            href="tel:877-511-8931"
            className="inline-flex items-center justify-center gap-3 bg-white text-green-600 w-full md:w-auto px-8 py-4 rounded-xl font-bold text-xl md:text-2xl shadow-lg hover:shadow-xl transition-all"
            data-testid="link-midpage-phone"
          >
            <Phone className="w-6 h-6 animate-pulse" />
            <span>Tap to Call: 877-511-8931</span>
          </a>
          <p className="text-white/80 text-xs md:text-sm mt-2">
            Free • No obligation • Talk to an expert now
          </p>
        </div>
      </div>

      <Testimonials />
      
      {/* Empowerment Section - Mobile optimized */}
      <div className="py-10 md:py-16 bg-accent/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">
              Empowering Homeowners to Break Free
            </h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-muted-foreground">
              <p>
                Are your solar payments higher than promised? Were you misled or pressured into signing? You may not be stuck.
              </p>
              <p>
                <strong className="text-foreground">At Solar Cancellation Hub,</strong> we work with experienced consumer protection attorneys who know how to challenge unfair contracts. Even if your cancellation window has passed, you may still qualify.
              </p>
            </div>
            
            {/* Quick benefits */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 py-4">
              <div className="flex flex-col items-center gap-1 text-center">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-xs md:text-sm font-medium">Legal Protection</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-xs md:text-sm font-medium">24hr Response</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <span className="text-xs md:text-sm font-medium">Satisfaction Guaranteed</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:877-511-8931"
                className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg md:text-xl transition-all hover:scale-105 shadow-lg"
                data-testid="link-empowerment-phone"
              >
                <Phone className="w-6 h-6" />
                Call Now: 877-511-8931
              </a>
              <p className="text-muted-foreground text-xs md:text-sm mt-2">Free consultation • No obligation</p>
            </div>
          </div>
        </div>
      </div>
      
      <TrustBadges />
      <CtaSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
