import { MessageSquare, FileText, Search, Cog, PartyPopper, Phone } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Call us and speak with a specialist.",
  },
  {
    number: 2,
    icon: FileText,
    title: "Share Details",
    description: "Tell us about your solar contract.",
  },
  {
    number: 3,
    icon: Search,
    title: "Case Review",
    description: "Experts create your cancellation strategy.",
  },
  {
    number: 4,
    icon: Cog,
    title: "We Take Action",
    description: "Legal process begins on your behalf.",
  },
  {
    number: 5,
    icon: PartyPopper,
    title: "Freedom!",
    description: "Contract cancelled permanently.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <p className="text-xs md:text-sm uppercase tracking-wide text-primary font-semibold mb-2">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            5 Simple Steps to Solar Freedom
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Our proven process gets results
          </p>
        </div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-primary/20" style={{ left: "10%", right: "10%" }} />
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div className="w-32 h-32 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 relative z-10 border-4 border-background shadow-lg">
                    <step.icon className="w-12 h-12" />
                  </div>
                  
                  {/* Step content */}
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Compact horizontal scroll */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[75%] sm:w-[45%] snap-center bg-card rounded-xl p-4 border border-card-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
          
          {/* Swipe hint */}
          <p className="text-center text-xs text-muted-foreground mt-2">
            Swipe to see all steps
          </p>
        </div>

        {/* Quick CTA after steps - mobile prominent */}
        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground mb-3">
            Start with Step 1 - It's free!
          </p>
          <a
            href="tel:877-511-8931"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-lg md:text-xl transition-colors"
            data-testid="link-steps-phone"
          >
            <Phone className="w-5 h-5" />
            Call: 877-511-8931
          </a>
        </div>
      </div>
    </section>
  );
}
