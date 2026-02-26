import { Link } from "react-router";
import { Apple, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md" style={{ borderColor: 'var(--border)', backgroundColor: 'rgba(10, 10, 11, 0.8)' }}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.jpeg"
              alt="CoinVoidly logo"
              className="h-9 w-9 rounded-xl object-cover"
            />
            <span className="text-xl" style={{ color: 'var(--text-primary)' }}>CoinVoidly</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
              Features
            </a>
            <a href="#pricing" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
              FAQ
            </a>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl transition-all hover:opacity-90" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}>
              <Apple className="h-4 w-4" />
              Download for iOS
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--text-primary)' }}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-3 border-t" style={{ borderColor: 'var(--border)' }}>
            <a
              href="#features"
              className="block py-2 transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block py-2 transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block py-2 transition-colors"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <button className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}>
              <Apple className="h-4 w-4" />
              Download for iOS
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
