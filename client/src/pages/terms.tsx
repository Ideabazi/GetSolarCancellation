import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" asChild data-testid="button-back-home">
            <Link href="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms and Conditions</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Solar Cancellation Hub website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Provided</h2>
              <p>
                Solar Cancellation Hub connects consumers with licensed attorneys who specialize in solar contract cancellation. We are not a law firm and do not provide legal advice directly. All legal services are provided by independent, licensed attorneys.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. No Guarantee of Results</h2>
              <p>
                While we work diligently to help clients cancel their solar contracts, results may vary based on individual circumstances. We cannot guarantee specific outcomes, and past results do not guarantee future success. Each case is evaluated on its own merits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Communication Consent</h2>
              <p>
                By providing your contact information, you consent to receive communications from Solar Cancellation Hub and our partner attorneys via phone, email, and text message. These communications may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Case updates and consultations</li>
                <li>Appointment confirmations and reminders</li>
                <li>Service-related information</li>
                <li>Marketing and promotional offers (you may opt out at any time)</li>
              </ul>
              <p className="mt-4">
                Standard message and data rates may apply. You may opt out of text messages by replying STOP at any time. For help, reply HELP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Fees and Payment</h2>
              <p>
                Our service operates on a one-time fixed fee basis. Fees will be disclosed during your initial consultation. Payment terms will be provided before any services are rendered. All fees are non-refundable once services have commenced.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Privacy and Confidentiality</h2>
              <p>
                We take your privacy seriously. All information provided to us is handled in accordance with our Privacy Policy. Attorney-client communications are protected by attorney-client privilege as applicable under law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                Solar Cancellation Hub and its attorneys shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
              <p>
                If you have questions about these Terms and Conditions, please contact us:
              </p>
              <p className="mt-2">
                <strong>Phone:</strong> <a href="tel:8775118931" className="text-primary hover:underline">877-511-8931</a><br />
                <strong>Email:</strong> <a href="mailto:info@getsolarcancelation.com" className="text-primary hover:underline">info@getsolarcancelation.com</a>
              </p>
            </section>

            <p className="text-sm text-muted-foreground italic mt-8">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
