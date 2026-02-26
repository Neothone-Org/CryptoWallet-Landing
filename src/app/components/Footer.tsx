import { Link } from "react-router";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.jpeg"
                alt="CoinVoidly logo"
                className="h-9 w-9 rounded-xl object-cover"
              />
              <span className="text-xl" style={{ color: 'var(--text-primary)' }}>CoinVoidly</span>
            </div>
            <p className="mb-4 max-w-md" style={{ color: 'var(--text-secondary)' }}>
              Track your crypto portfolio with powerful analytics, real-time market data, and AI-powered insights. Available now on iOS.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:contact@neothone.com"
                className="p-2 rounded-lg transition-colors"
                style={{ backgroundColor: 'var(--surface)', color: 'var(--text-secondary)' }}
                aria-label="Email Neothone Technologies"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4" style={{ color: 'var(--text-primary)' }}>Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>Features</a></li>
              <li><a href="#pricing" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>Pricing</a></li>
              <li><a href="#faq" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4" style={{ color: 'var(--text-primary)' }}>Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>Terms & Conditions</Link></li>
              <li><Link to="/user-deletion" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>Account Deletion</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <p className="text-center" style={{ color: 'var(--text-secondary)' }}>
            © 2026 Neothone Technologies. All rights reserved. CoinVoidly is owned and operated by Neothone Technologies, Romania, Oradea. Contact:{" "}
            <a href="mailto:contact@neothone.com" style={{ color: 'var(--text-secondary)' }}>
              contact@neothone.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
