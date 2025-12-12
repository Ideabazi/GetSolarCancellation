import bbbBadge from "@assets/bbb-241x300_1764222562153.png";
import guaranteeBadge from "@assets/generated_images/satisfaction_guarantee_seal_badge.png";

export function TrustBadges() {
  return (
    <section className="py-20 bg-accent/20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Solar Cancellation Hub?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Backed by licensed attorneys and certified in contract law. Recognized by advocacy groups and rated A+ by the BBB.
          </p>
        </div>

        <div className="bg-white rounded-md p-8 md:p-12 shadow-lg">
          <p className="text-center text-lg text-muted-foreground mb-8">
            We follow a legal driven effective process to cancel unfair solar contracts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-48 h-48 flex items-center justify-center">
                <img
                  src={guaranteeBadge}
                  alt="100% Satisfaction Guarantee"
                  className="w-full h-full object-contain"
                  data-testid="img-guarantee-badge"
                />
              </div>
              <p className="text-center font-semibold text-foreground">
                100% Client Satisfaction Guarantee
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-48 h-48 flex items-center justify-center">
                <img
                  src={bbbBadge}
                  alt="BBB A+ Rating"
                  className="w-full h-full object-contain"
                  data-testid="img-bbb-badge"
                />
              </div>
              <p className="text-center font-semibold text-foreground">
                A+ BBB Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
