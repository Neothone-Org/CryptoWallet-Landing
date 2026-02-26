import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      <Header />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'var(--text-secondary)' }}>
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Privacy Policy
          </h1>
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Last updated: February 25, 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>1. Introduction</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                CoinVoidly ("we," "our," or "us") is owned and operated by Neothone Technologies and is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>2. Information We Collect</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                We collect information that you provide directly to us:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Account information (email address, password)</li>
                <li>Profile information (name, preferences, language settings)</li>
                <li>Portfolio data (wallet addresses, transactions, holdings)</li>
                <li>Usage data (features used, interaction patterns)</li>
                <li>Device information (device type, operating system, app version)</li>
                <li>Communication data (support tickets, feedback)</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>3. How We Use Your Information</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Provide, maintain, and improve our services</li>
                <li>Create and manage your account</li>
                <li>Track your portfolio and generate analytics</li>
                <li>Send you notifications, alerts, and weekly reports</li>
                <li>Provide customer support</li>
                <li>Process subscription payments</li>
                <li>Generate AI-powered insights (Premium users)</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>4. Data Security</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>5. Third-Party Services</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                We integrate with third-party services to provide our features:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>CoinGecko for market data</li>
                <li>NewsData API for crypto news</li>
                <li>Apple and Google for social authentication</li>
                <li>Payment processors for subscription billing</li>
              </ul>
              <p className="mt-4" style={{ color: 'var(--text-secondary)' }}>
                These services have their own privacy policies and we encourage you to review them.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>6. Data Retention</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                We retain your information for as long as your account is active or as needed to provide services. You can request deletion of your account and data at any time through our <Link to="/user-deletion" style={{ color: 'var(--primary)' }}>account deletion page</Link>.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>7. Your Rights</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your portfolio data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>8. Children's Privacy</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                CoinVoidly is not intended for users under the age of 18. We do not knowingly collect information from children under 18. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>9. Changes to This Policy</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>10. Contact Us</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 space-y-1" style={{ color: 'var(--text-secondary)' }}>
                <p>Neothone Technologies</p>
                <p>Romania, Oradea</p>
                <a href="mailto:contact@neothone.com" style={{ color: 'var(--primary)' }}>
                  contact@neothone.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
