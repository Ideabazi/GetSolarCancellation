import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonial1 from "@assets/generated_images/senior_woman_testimonial_photo.png";
import testimonial2 from "@assets/generated_images/hispanic_man_testimonial_photo.png";
import testimonial3 from "@assets/generated_images/young_woman_testimonial_photo.png";
import testimonial4 from "@assets/generated_images/mature_woman_testimonial_photo.png";
import testimonial5 from "@assets/generated_images/middle-aged_man_testimonial_photo.png";

const testimonials = [
  {
    name: "Patricia W.",
    location: "Tampa, FL",
    image: testimonial3,
    text: "I'm a retiree and didn't understand I was locked into a 25-year plan. Solar Cancellation Hub was patient, professional, and got results fast.",
  },
  {
    name: "Miguel R.",
    location: "Houston, TX",
    image: testimonial5,
    text: "My panels stopped working and I was still being billed. They helped me file the right legal notices and finally terminate the contract. Such a relief.",
  },
  {
    name: "Sarah M.",
    location: "Henderson, NV",
    image: testimonial1,
    text: "I felt trapped for signing up. They got me out of a $45,000 loan I didn't understand. If you're feeling stuck—reach out to them.",
  },
  {
    name: "Diana L.",
    location: "Sacramento, CA",
    image: testimonial4,
    text: "My payments nearly doubled after installation. They walked me through every step and got me released from the contract in under six weeks.",
  },
  {
    name: "Robert K.",
    location: "Scottsdale, AZ",
    image: testimonial2,
    text: "The solar contract scared off buyers for my home. These experts helped cancel the agreement and guided me through the process with my realtor.",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="py-10 md:py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            <span className="ml-1">4.9/5 Rating</span>
          </div>
          
          <p className="text-xs md:text-sm uppercase tracking-wide text-primary font-semibold mb-2">
            CLIENT SUCCESS STORIES
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Real People. Real Results.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            See how our team made a difference.
          </p>
        </div>

        {/* Desktop: Show 3 testimonials */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <Card key={idx} className="hover-elevate" data-testid={`testimonial-card-${idx}`}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                  <div className="flex items-center gap-4 pt-2 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile: Show 1 testimonial with swipe animation */}
        <div className="md:hidden mb-6">
          <Card className="overflow-hidden" data-testid="testimonial-card-mobile">
            <CardContent className="p-5">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-foreground text-sm">{testimonials[currentIndex].name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonials[currentIndex].location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="h-8 w-8 md:h-10 md:w-10"
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                data-testid={`testimonial-dot-${idx}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="h-8 w-8 md:h-10 md:w-10"
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* CTA after testimonials */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Join 2,500+ satisfied clients
          </p>
          <a
            href="tel:877-511-8931"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-base md:text-lg transition-colors"
            data-testid="link-testimonials-phone"
          >
            <Phone className="w-4 h-4" />
            Get your free consultation: 877-511-8931
          </a>
        </div>
      </div>
    </section>
  );
}
