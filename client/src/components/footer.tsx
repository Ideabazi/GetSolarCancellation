import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              Solar Cancellation Hub
            </h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:8775118931" className="hover:text-primary transition-colors" data-testid="link-footer-phone">
                  877-511-8931
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@getsolarcancelation.com" className="hover:text-primary transition-colors">
                  info@getsolarcancelation.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-how-it-works">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-terms">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">About Us</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We help homeowners legally cancel unfair solar contracts through our team of experienced consumer protection attorneys and legal experts.
            </p>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-card-border pt-8 space-y-4">
          <div className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            <p className="mb-3">
              <strong>SMS/Marketing Consent:</strong> By providing your contact details and submitting a form on this website, you agree to receive marketing and customer care calls and text messages from Solar Cancellation Hub about cancelling your solar purchase agreement. These communications may include appointment confirmations, service updates, account alerts, and occasional promotional offers (if applicable), and may be delivered using automated technology or prerecorded messages. Message and data rates may apply. To opt out of future messages, reply STOP at any time. For assistance, reply HELP. Message frequency may vary, and you can unsubscribe at any time.
            </p>
            <p>
              <strong>Legal Disclaimer:</strong> Solar Cancellation Hub is not a law firm and does not provide legal advice. We connect consumers with licensed attorneys who specialize in contract cancellation. Results may vary based on individual circumstances, and we cannot guarantee specific outcomes. Past results do not guarantee future success.
            </p>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-4">
            <p>&copy; {new Date().getFullYear()} Solar Cancellation Hub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
