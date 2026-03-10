import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { ArrowLeft, Mail, Clock3, MapPin, Building2 } from "lucide-react";

export function SupportPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}
    >
      <Header />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-8 transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl mb-4" style={{ color: "var(--text-primary)" }}>
            Support
          </h1>
          <p className="mb-8 text-lg" style={{ color: "var(--text-secondary)" }}>
            Need help with CoinVoidly? Contact our support team and we will assist you.
          </p>

          <div className="space-y-6">
            <section
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
                border: "1px solid",
              }}
            >
              <h2 className="text-2xl mb-4" style={{ color: "var(--text-primary)" }}>
                Contact Details
              </h2>
              <div className="space-y-4" style={{ color: "var(--text-secondary)" }}>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                  <div>
                    <p style={{ color: "var(--text-primary)" }}>Email Support</p>
                    <a href="mailto:contact@neothone.com" style={{ color: "var(--primary)" }}>
                      contact@neothone.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                  <div>
                    <p style={{ color: "var(--text-primary)" }}>Company</p>
                    <p>Neothone Technologies</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                  <div>
                    <p style={{ color: "var(--text-primary)" }}>Location</p>
                    <p>Romania, Oradea</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3 className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                  <div>
                    <p style={{ color: "var(--text-primary)" }}>Response Time</p>
                    <p>We typically reply within 1-2 business days.</p>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
                border: "1px solid",
              }}
            >
              <h2 className="text-2xl mb-4" style={{ color: "var(--text-primary)" }}>
                Faster Support
              </h2>
              <p style={{ color: "var(--text-secondary)" }}>
                To help us resolve your issue faster, include your account email, device type, app version, and a
                short description of the problem.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
