import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { ArrowLeft, AlertTriangle, Trash2 } from "lucide-react";

export function UserDeletionPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      <Header />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 transition-colors" style={{ color: 'var(--text-secondary)' }}>
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--danger)', opacity: 0.2 }}>
              <Trash2 className="h-6 w-6" style={{ color: 'var(--danger)' }} />
            </div>
            <h1 className="text-4xl md:text-5xl" style={{ color: 'var(--text-primary)' }}>
              Account Deletion
            </h1>
          </div>
          
          <p className="mb-8 text-lg" style={{ color: 'var(--text-secondary)' }}>
            Request permanent deletion of your CoinVoidly account and associated data.
          </p>

          <div className="space-y-6">
            {/* Warning Box */}
            <div className="p-6 rounded-2xl flex gap-4" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'var(--danger)', border: '1px solid' }}>
              <AlertTriangle className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: 'var(--danger)' }} />
              <div>
                <h3 className="text-lg mb-2" style={{ color: 'var(--danger)' }}>
                  This action is permanent and cannot be undone
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Once you delete your account, all your data will be permanently removed from our servers. This includes your portfolio data, watchlists, alerts, preferences, and transaction history.
                </p>
              </div>
            </div>

            {/* What Gets Deleted */}
            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>What Will Be Deleted</h2>
              <ul className="space-y-3">
                {[
                  "All wallet and portfolio data",
                  "Transaction history and holdings",
                  "Custom watchlists and alerts",
                  "User preferences and settings",
                  "AI-generated reports and insights",
                  "News preferences and saved articles",
                  "Account credentials and profile information",
                  "Subscription and billing history"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Trash2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--danger)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Before You Delete */}
            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Before You Delete</h2>
              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>1. Export Your Data</h4>
                  <p>
                    If you want to keep a copy of your portfolio data, export it from the app before deleting your account. Go to Settings → Privacy → Export Data.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>2. Cancel Active Subscriptions</h4>
                  <p>
                    If you have an active Premium subscription, cancel it through your App Store account settings before deleting your account. Deleting your account does not automatically cancel subscriptions.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>3. Clear Outstanding Issues</h4>
                  <p>
                    If you have any open support tickets or billing issues, please resolve them before account deletion.
                  </p>
                </div>
              </div>
            </section>

            {/* How to Delete */}
            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>How to Delete Your Account</h2>
              <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>Option 1: In the App</h4>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Open the CoinVoidly app</li>
                    <li>Go to Settings → Account</li>
                    <li>Scroll down and tap "Delete Account"</li>
                    <li>Confirm by entering your password</li>
                    <li>Tap "Permanently Delete My Account"</li>
                  </ol>
                </div>
                <div>
                  <h4 className="mb-2" style={{ color: 'var(--text-primary)' }}>Option 2: Email Request</h4>
                  <p>
                    Send an email to{" "}
                    <a href="mailto:contact@neothone.com" style={{ color: 'var(--primary)' }}>
                      contact@neothone.com
                    </a>{" "}
                    with the subject line "Account Deletion Request" from the email address associated with your account. Include your full name and account email. We will process your request within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Data Retention Policy</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                After you delete your account:
              </p>
              <ul className="space-y-2 list-disc list-inside" style={{ color: 'var(--text-secondary)' }}>
                <li>Your account will be immediately deactivated</li>
                <li>Personal data will be deleted within 30 days</li>
                <li>Some data may be retained for legal or compliance purposes (e.g., billing records, support tickets) for up to 7 years as required by law</li>
                <li>Anonymized analytics data may be retained indefinitely</li>
              </ul>
            </section>

            {/* Alternatives */}
            <section className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--fill-muted-primary)', borderColor: 'var(--primary)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Not Ready to Delete?</h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                Consider these alternatives:
              </p>
              <ul className="space-y-2 list-disc list-inside" style={{ color: 'var(--text-secondary)' }}>
                <li><strong>Downgrade to Free:</strong> Cancel your Premium subscription and continue using the free tier</li>
                <li><strong>Temporarily Deactivate:</strong> Take a break without losing your data (contact support)</li>
                <li><strong>Clear Portfolio Data:</strong> Delete individual wallets and transactions while keeping your account</li>
              </ul>
            </section>

            {/* Contact Support */}
            <section className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h2 className="text-2xl mb-4" style={{ color: 'var(--text-primary)' }}>Need Help?</h2>
              <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                If you're having issues with the app or have questions about account deletion, our support team is here to help.
              </p>
              <a
                href="mailto:contact@neothone.com"
                className="inline-flex px-8 py-3 rounded-xl transition-all hover:opacity-90"
                style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
              >
                Contact Support
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
