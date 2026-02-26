import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function TermsPage() {
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
            Terms and Conditions
          </h1>
          <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
            Last updated: February 25, 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-6">
            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>1. Acceptance of Terms</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                By accessing and using CoinVoidly (the "App"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>2. Description of Service</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                CoinVoidly is a cryptocurrency portfolio tracking application that provides:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Portfolio tracking and analytics</li>
                <li>Real-time market data from third-party providers</li>
                <li>Price alerts and notifications</li>
                <li>Crypto news aggregation</li>
                <li>AI-powered portfolio insights (Premium)</li>
              </ul>
              <p className="mt-4 font-semibold" style={{ color: 'var(--danger)' }}>
                Important: CoinVoidly is NOT a trading platform, exchange, or custodial wallet. We do not hold, trade, or have access to your cryptocurrency assets.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>3. User Accounts</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                To use CoinVoidly, you must:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Be at least 18 years of age</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>4. Data Accuracy and Reliability</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                While we strive to provide accurate market data and analytics:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Market data is provided by third-party sources (CoinGecko) and may contain errors or delays</li>
                <li>Portfolio calculations are based on data you manually input</li>
                <li>We do not guarantee the accuracy, completeness, or timeliness of any information</li>
                <li>You are responsible for verifying all data before making investment decisions</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>5. Investment Disclaimer</h2>
              <p className="mb-4 font-semibold" style={{ color: 'var(--danger)' }}>
                CoinVoidly does not provide investment, financial, tax, or legal advice.
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>The App is for informational and tracking purposes only</li>
                <li>AI-generated insights are not investment recommendations</li>
                <li>Cryptocurrency investments carry significant risk</li>
                <li>Past performance does not indicate future results</li>
                <li>You should consult with qualified professionals before making investment decisions</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>6. Subscription and Billing</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Premium subscription terms:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Subscriptions are billed monthly ($9.99) or yearly ($99.99)</li>
                <li>Payment is processed through Apple App Store</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Cancel anytime through your App Store account settings</li>
                <li>No refunds for partial billing periods</li>
                <li>Free trial (if offered) converts to paid subscription unless cancelled</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>7. Acceptable Use</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>Use the App for any illegal purpose</li>
                <li>Attempt to reverse engineer or hack the App</li>
                <li>Share your account with others</li>
                <li>Upload malicious code or viruses</li>
                <li>Scrape or extract data from the App</li>
                <li>Impersonate others or provide false information</li>
                <li>Interfere with the App's operation</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>8. Intellectual Property</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                All content, features, and functionality of CoinVoidly, including but not limited to text, graphics, logos, and software, are owned by Neothone Technologies and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express permission.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>9. Limitation of Liability</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--text-secondary)' }}>
                <li>CoinVoidly is provided "as is" without warranties of any kind</li>
                <li>We are not liable for any losses resulting from your use of the App</li>
                <li>We are not responsible for third-party data or service interruptions</li>
                <li>Our total liability shall not exceed the amount you paid for the service in the past 12 months</li>
              </ul>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>10. Termination</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                We reserve the right to suspend or terminate your account at any time for violation of these terms or for any other reason. You may delete your account at any time through our <Link to="/user-deletion" style={{ color: 'var(--primary)' }}>account deletion page</Link>.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>11. Changes to Terms</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                We may modify these Terms and Conditions at any time. We will notify you of significant changes via email or in-app notification. Continued use of the App after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>12. Governing Law</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or in courts of competent jurisdiction.
              </p>
            </section>

            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>13. Contact Information</h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                For questions about these Terms and Conditions, contact us at:
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
