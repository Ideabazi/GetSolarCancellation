import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import attorneyPhoto from "@assets/generated_images/female_attorney_professional_headshot.png";

export function AttorneyProfile() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wide text-primary font-semibold mb-4">
            MEET OUR LEGAL TEAM
          </h2>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Attorney Photo */}
              <div className="relative h-[400px] md:h-auto">
                <img
                  src={attorneyPhoto}
                  alt="Mary Neilson, General Counsel"
                  className="w-full h-full object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none"
                />
              </div>

              {/* Attorney Info */}
              <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Meet Mary Neilson,
                  </h3>
                  <p className="text-xl md:text-2xl font-semibold text-primary uppercase tracking-wide">
                    GENERAL COUNSEL
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Serving as general counsel to Solar Cancellation Hub, Mary oversees corporate compliance and business operations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Ms. Neilson is licensed to practice law in Nevada and Arizona, and her legal expertise supports the company's operational framework and industry standards.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  With a background in resolving a wide range of consumer disputes — including misrepresentation, breach of contract, and unfair service contracts — Mary brings deep legal knowledge to the company.
                </p>

                <div className="space-y-4 pt-4">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Education:</h4>
                    <p className="text-muted-foreground">Michigan State University College of Law</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-2">Practice Areas:</h4>
                    <p className="text-muted-foreground">
                      Corporate Compliance, Consumer Contracts, Arbitration Disputes, Unfair Business Practices
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button size="lg" asChild className="bg-green-500 hover:bg-green-400" data-testid="button-call-attorney">
                    <a href="tel:8775118931" className="inline-flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call Now: 877-511-8931
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
