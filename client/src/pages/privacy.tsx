import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function Privacy() {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Details about your solar contract and installation</li>
                <li>Communication preferences</li>
                <li>Information provided during consultations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Connect you with qualified attorneys</li>
                <li>Communicate with you about your case</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Analyze and improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p>
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Licensed Attorneys:</strong> We share your information with partner attorneys who will handle your case</li>
                <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and conducting business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Communication Preferences</h2>
              <p>
                By providing your contact information, you consent to receive:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Phone calls regarding your case and services</li>
                <li>Email communications about your case, updates, and promotional offers</li>
                <li>Text messages (SMS) for appointment reminders, case updates, and marketing (you can opt out by replying STOP)</li>
              </ul>
              <p className="mt-4">
                You can opt out of marketing communications at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Clicking the unsubscribe link in our emails</li>
                <li>Replying STOP to text messages</li>
                <li>Contacting us directly at info@getsolarcancelation.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analyze website traffic and user behavior</li>
                <li>Improve user experience</li>
                <li>Track advertising campaign effectiveness</li>
                <li>Provide personalized content</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. Note that disabling cookies may limit your ability to use certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Analytics</h2>
              <p>
                We use third-party analytics services, including Google Analytics and Meta Pixel (Facebook), to understand how users interact with our website. These services may collect information about your use of our website and other websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us:
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
