import { Link } from "wouter";
import { CheckCircle2, Phone, FileText, Users, Scale, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { StickyHeader } from "@/components/sticky-header";
import { FloatingCallButton } from "@/components/floating-call-button";
import heroImage from "@assets/generated_images/concerned_homeowners_with_solar_panels.png";

const steps = [
  {
    number: 1,
    title: "Expert Consultation",
    description: "Speak with a solar cancellation specialist.",
    icon: Phone,
  },
  {
    number: 2,
    title: "Contract Details",
    description: "Provide details of your solar financed purchase or lease.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Case Proposal",
    description: "Our cancellation experts review your case and create a cancellation strategy.",
    icon: Users,
  },
  {
    number: 4,
    title: "Begin Process",
    description: "The cancellation of your solar contract begins.",
    icon: Scale,
  },
  {
    number: 5,
    title: "Settlement",
    description: "Companies agree to resolution through settlement or money back.",
    icon: Shield,
  },
  {
    number: 6,
    title: "Freedom",
    description: "Permanent cancellation and termination of your solar contract.",
    icon: CheckCircle2,
  },
];

const federalProtections = [
  {
    letter: "A",
    title: "Truth in Lending Act (TILA)",
  },
  {
    letter: "B",
    title: "Federal Trade Commission Act (FTC Act)",
  },
  {
    letter: "C",
    title: "Fair Debt Collection Practices Act (FDCPA)",
  },
  {
    letter: "D",
    title: "Unfair and Deceptive Acts and Practices (UDAP) Laws",
  },
  {
    letter: "E",
    title: "Additional Federal Protections",
  },
];

const programBenefits = [
  {
    title: "Legal driven strategy for solar contract cancellation",
    description: "Our cancellation strategy allows you to successfully and legally terminate your contract while protecting your consumer rights.",
  },
  {
    title: "Accountability and transparency",
    description: "When working with us you are assigned to a case management team to provide you with information updates and advances on your case throughout the whole process.",
  },
  {
    title: "Solar contract cancellation results in terminating THE SOLAR PURCHASE AGREEMENT",
    description: "Our team successfully negotiates the termination of your solar system purchase agreement.",
  },
];

const cancellationRisks = [
  "Legal action against you.",
  "Garnishment of wages.",
  "Placing a lien on your bank accounts or any real estate you may own.",
  "Severely affecting your credit by negative reporting.",
  "Collection intimidation and harassment.",
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <StickyHeader />
      <FloatingCallButton />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Solar panels on house"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                How It Works
              </h1>
              <p className="text-xl text-white/90">
                Millions have found themselves locked into unfair solar contracts.
              </p>
              <p className="text-2xl font-semibold text-primary">
                You can finally break free!
              </p>
              
              <ul className="space-y-3">
                {[
                  "Your #1 Solar consumer protection organization in the USA. Handling cases nationwide.",
                  "Decades of legal and solar experience combined.",
                  "One time affordable fixed fee resulting in tens of thousands of dollars saved.",
                  "Let our cancellation specialists fight for you and WIN!",
                ].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <a href="tel:877-511-8931">
                  <Button size="lg" className="text-lg px-8 bg-green-500 hover:bg-green-400" data-testid="button-hero-call">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 877-511-8931
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Solar Cancellation */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Steps to Solar Cancellation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Millions have found themselves locked into unfair solar contracts. You can finally break free!
            </p>
            <p className="text-2xl font-semibold text-primary">
              Steps to Solar Freedom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <Card key={step.number} className="p-6 hover-elevate transition-all" data-testid={`card-step-${step.number}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <step.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consumer Rights Section */}
      <section className="py-20 bg-accent/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Rights, Our Commitment to Protection
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You may be able to utilize key federal statutes that are designed to protect consumers from deceptive, misleading, and unfair business practices. These include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {federalProtections.map((protection) => (
              <Card key={protection.letter} className="p-6 text-center hover-elevate" data-testid={`card-protection-${protection.letter}`}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {protection.letter}
                </div>
                <h3 className="font-semibold text-foreground">{protection.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What You'll Receive With Our Solar Contract Cancellation Program
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programBenefits.map((benefit, idx) => (
              <Card key={idx} className="p-6 hover-elevate" data-testid={`card-benefit-${idx}`}>
                <div className="space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Risks Section */}
      <section className="py-20 bg-destructive/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-destructive" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Contract Cancellation Risks
                </h2>
              </div>
              <p className="text-lg text-foreground font-medium">
                Noncompliance of your contract and defaulting on financial obligations could lead to serious consequences.
              </p>
              <p className="text-muted-foreground">
                Sales and finance companies in the solar industry have the right to take legal action against you, which may result in:
              </p>
              <ul className="space-y-3">
                {cancellationRisks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Card className="p-8 bg-background">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Start Your Case Review Now
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let our experts help you navigate the process safely and legally.
                </p>
                <a href="/#contact-form">
                  <Button size="lg" className="w-full text-lg" data-testid="button-risks-contact">
                    Get Free Consultation
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            At Solar Cancellation Hub, we protect your consumer rights.
          </h2>
          <p className="text-xl text-primary-foreground/90">
            If you are experiencing any problems with your solar company or financial services company that you worked with to get your solar system, we're the solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="tel:877-511-8931">
              <Button size="lg" className="text-lg px-8 bg-green-500 hover:bg-green-400" data-testid="button-call-now">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 877-511-8931
              </Button>
            </a>
            <a href="/#contact-form">
              <Button size="lg" variant="secondary" className="text-lg px-8" data-testid="button-final-contact">
                Get Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
