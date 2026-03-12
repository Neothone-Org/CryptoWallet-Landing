import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Apple,
  ArrowRight,
  BarChart3,
  Bell,
  BrainCircuit,
  Check,
  ChevronRight,
  Globe,
  Lock,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const APP_STORE_URL = "https://apps.apple.com/ro/app/crypto-tracker-coin-voidly/id6757703005";

const featureCards = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Portfolio command center",
    description:
      "Keep wallets, coins, cost basis, and allocation in one place instead of scattered across exchange tabs and notes.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Real-time market pulse",
    description:
      "Track price moves, market cap, volume, and momentum across major coins and long-tail assets as the market shifts.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "AI portfolio insights",
    description:
      "Turn raw holdings into readable summaries, concentration warnings, and performance context that help you react faster.",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Alerts that matter",
    description:
      "Monitor price targets and important moves without babysitting charts all day.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Watchlists and discovery",
    description:
      "Save coins you care about, compare market action, and keep opportunities visible before they are already obvious.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure sign-in",
    description:
      "Use email, Apple, or Google login for quick access without turning the app into a trading or custody platform.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Add your wallets",
    description: "Organize your holdings by wallet so the portfolio view actually reflects how you invest.",
  },
  {
    step: "02",
    title: "Monitor the market",
    description: "See live prices, movers, and market context without jumping between multiple apps.",
  },
  {
    step: "03",
    title: "Act on insights",
    description: "Use alerts, watchlists, and AI summaries to understand risk, momentum, and portfolio health.",
  },
];

const faqs = [
  {
    question: "What is CoinVoidly?",
    answer:
      "CoinVoidly is a crypto portfolio tracking app for iPhone. It helps you monitor holdings, follow prices, manage watchlists, and understand portfolio performance with AI-assisted insights.",
  },
  {
    question: "Can I trade or store crypto inside the app?",
    answer:
      "No. CoinVoidly is built for tracking and analysis, not trading or custody. That keeps the product focused on visibility, insights, and market awareness.",
  },
  {
    question: "How do I sign in?",
    answer:
      "You can create an account with email and password, or use Apple Sign In and Google Sign In for faster access.",
  },
  {
    question: "Is CoinVoidly available on Android or web?",
    answer:
      "The current app is available on iOS. Android and web are positioned as upcoming experiences.",
  },
  {
    question: "What kind of market data is included?",
    answer:
      "The app surfaces live market pricing, performance context, watchlists, and analytics to help you follow the assets you care about.",
  },
  {
    question: "Who is the app for?",
    answer:
      "It works for first-time holders who want a cleaner overview and for active crypto users who want a faster way to check allocations, performance, and market moves.",
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "var(--background)", color: "var(--text-primary)" }}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "rgba(0, 194, 255, 0.18)" }}
        />
        <div
          className="absolute right-[-4rem] top-40 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "rgba(247, 147, 26, 0.18)" }}
        />
        <div
          className="absolute left-1/3 top-[42rem] h-96 w-96 rounded-full blur-3xl"
          style={{ background: "rgba(0, 224, 176, 0.08)" }}
        />
      </div>

      <Header />

      <main className="relative">
        <section id="overview" className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-26">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div
                  className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
                  style={{ backgroundColor: "var(--surface-elevated)", borderColor: "var(--border-strong)", color: "var(--secondary)" }}
                >
                  <Sparkles className="h-4 w-4" />
                  iPhone-first crypto tracking with AI summaries
                </div>

                <h1 className="max-w-3xl text-5xl leading-[1.02] md:text-6xl lg:text-7xl" style={{ color: "var(--text-primary)" }}>
                  See your crypto portfolio like a{" "}
                  <span style={{ color: "var(--primary)" }}>modern control room</span>
                </h1>

                <p className="mt-6 max-w-2xl text-lg md:text-xl" style={{ color: "var(--text-secondary)" }}>
                  CoinVoidly helps users understand what they hold, how it is performing, and what deserves attention next. Track wallets, monitor the market, set alerts, and get AI-powered context in one clean app.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 transition-transform hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, var(--primary), #5bdcff)", color: "#041017" }}
                  >
                    <Apple className="h-5 w-5" />
                    Download for iOS
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border px-7 py-4"
                    style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text-primary)" }}
                  >
                    Explore features
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Email login", "Apple Sign In", "Google Sign In", "Live market data", "AI reports"].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border px-4 py-2 text-sm"
                      style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "var(--border)", color: "var(--text-secondary)" }}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    { value: "10k+", label: "coins visible" },
                    { value: "24/7", label: "market coverage" },
                    { value: "3 taps", label: "to core insights" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border p-4"
                      style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
                    >
                      <div className="text-3xl" style={{ color: "var(--text-primary)" }}>
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm uppercase tracking-[0.24em]" style={{ color: "var(--text-secondary)" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div
                  className="absolute inset-6 rounded-[2rem] border"
                  style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))", borderColor: "rgba(255,255,255,0.12)" }}
                />
                <div className="relative rounded-[2rem] border p-4 shadow-2xl" style={{ backgroundColor: "rgba(7, 13, 18, 0.78)", borderColor: "rgba(255,255,255,0.08)" }}>
                  <div className="mb-4 flex items-center justify-between rounded-2xl border px-4 py-3" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                    <div>
                      <div className="text-sm uppercase tracking-[0.22em]" style={{ color: "var(--text-secondary)" }}>
                        Portfolio pulse
                      </div>
                      <div className="mt-1 text-xl" style={{ color: "var(--text-primary)" }}>
                        Up 8.42% this month
                      </div>
                    </div>
                    <div className="rounded-full px-3 py-1 text-sm" style={{ backgroundColor: "rgba(0, 224, 176, 0.14)", color: "var(--success)" }}>
                      Healthy mix
                    </div>
                  </div>

                  <div className="relative mx-auto max-w-[22rem]">
                    <div
                      className="absolute -left-8 top-16 z-20 hidden w-44 rounded-2xl border p-4 lg:block"
                      style={{ backgroundColor: "rgba(9, 20, 28, 0.95)", borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      <div className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary)" }}>
                        <Bell className="h-4 w-4" />
                        Alert ready
                      </div>
                      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        BTC breaks above your target price.
                      </p>
                    </div>

                    <ImageWithFallback
                      src="/screenshots/ss1.png"
                      alt="CoinVoidly app interface"
                      className="relative z-10 w-full rounded-[2rem] border object-cover"
                      style={{ borderColor: "rgba(255,255,255,0.08)" }}
                      loading="eager"
                      fetchPriority="high"
                    />

                    <div
                      className="absolute -right-6 bottom-16 z-20 hidden w-48 rounded-2xl border p-4 lg:block"
                      style={{ backgroundColor: "rgba(9, 20, 28, 0.96)", borderColor: "rgba(255,255,255,0.08)" }}
                    >
                      <div className="flex items-center gap-2 text-sm" style={{ color: "var(--primary)" }}>
                        <BrainCircuit className="h-4 w-4" />
                        AI insight
                      </div>
                      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        Your exposure is concentrated. Consider rebalancing your top positions.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border p-4" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "var(--secondary)" }}>
                        <Target className="h-4 w-4" />
                        Watchlist focus
                      </div>
                      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        Keep the next move visible with saved assets and price targets.
                      </p>
                    </div>
                    <div className="rounded-2xl border p-4" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "var(--success)" }}>
                        <Shield className="h-4 w-4" />
                        Clean access
                      </div>
                      <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                        Sign in quickly and keep your tracking separate from exchange execution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border px-6 py-8 lg:px-10" style={{ backgroundColor: "rgba(9, 20, 28, 0.72)", borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.28em]" style={{ color: "var(--secondary)" }}>
                  Why it lands fast
                </div>
                <h2 className="mt-3 text-3xl md:text-4xl" style={{ color: "var(--text-primary)" }}>
                  The product story is obvious in seconds
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "It tracks your portfolio across wallets.",
                  "It highlights market moves and alerts.",
                  "It explains performance with AI context.",
                ].map((line) => (
                  <div key={line} className="rounded-2xl border p-4" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                    <div className="flex items-center gap-2 text-sm" style={{ color: "var(--primary)" }}>
                      <Zap className="h-4 w-4" />
                      Core benefit
                    </div>
                    <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm uppercase tracking-[0.28em]" style={{ color: "var(--secondary)" }}>
                  Feature set
                </div>
                <h2 className="mt-3 text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
                  Built like a crypto dashboard, not a generic brochure
                </h2>
              </div>
              <p className="max-w-xl text-lg" style={{ color: "var(--text-secondary)" }}>
                The landing page now mirrors the app itself: direct, data-rich, and clear about what a user gets the moment they install it.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-[2rem] border p-8 lg:col-span-2" style={{ background: "linear-gradient(135deg, rgba(0, 194, 255, 0.14), rgba(0, 224, 176, 0.08))", borderColor: "rgba(255,255,255,0.08)" }}>
                <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm" style={{ backgroundColor: "rgba(4, 16, 23, 0.42)", borderColor: "rgba(255,255,255,0.08)", color: "var(--text-primary)" }}>
                      <BarChart3 className="h-4 w-4" />
                      Portfolio overview
                    </div>
                    <h3 className="mt-5 text-3xl" style={{ color: "var(--text-primary)" }}>
                      See allocation, movers, and performance in one view
                    </h3>
                    <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
                      Users should immediately understand that CoinVoidly is where they check the state of their crypto world, not just another price ticker.
                    </p>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {["Wallet tracking", "P&L visibility", "Allocation clarity", "Market context"].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl border px-4 py-3" style={{ backgroundColor: "rgba(4, 16, 23, 0.46)", borderColor: "rgba(255,255,255,0.08)", color: "var(--text-secondary)" }}>
                          <Check className="h-4 w-4" style={{ color: "var(--success)" }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[1.75rem] border p-3" style={{ backgroundColor: "rgba(4, 16, 23, 0.62)", borderColor: "rgba(255,255,255,0.08)" }}>
                    <ImageWithFallback
                      src="/screenshots/portfolio.png"
                      alt="CoinVoidly portfolio dashboard"
                      className="w-full rounded-[1.4rem] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border p-8" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm" style={{ backgroundColor: "var(--surface-elevated)", borderColor: "var(--border-strong)", color: "var(--primary)" }}>
                  <BrainCircuit className="h-4 w-4" />
                  AI layer
                </div>
                <h3 className="mt-5 text-2xl" style={{ color: "var(--text-primary)" }}>
                  More signal, less noise
                </h3>
                <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
                  AI reports turn portfolio data into readable summaries so users know what changed and why it matters.
                </p>
                <div className="mt-6 rounded-2xl border p-5" style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "var(--border)" }}>
                  <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--secondary)" }}>
                    Example summary
                  </div>
                  <p className="mt-3" style={{ color: "var(--text-primary)" }}>
                    “Your top two holdings are driving most portfolio volatility this week.”
                  </p>
                </div>
                <div className="mt-4 rounded-2xl border p-5" style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "var(--border)" }}>
                  <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "var(--secondary)" }}>
                    Report coverage
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      {
                        title: "Recommendations",
                        example: "Example: reduce overexposure to one coin after a sharp run-up.",
                      },
                      {
                        title: "Watchouts",
                        example: "Example: flag unusual volatility or a sudden drawdown in a major holding.",
                      },
                      {
                        title: "Portfolio health",
                        example: "Example: show whether your mix looks balanced, risky, or overly reactive.",
                      },
                      {
                        title: "Positions, diversification, concentration",
                        example: "Example: identify which assets drive results, whether the portfolio is spread enough, and when one holding dominates.",
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border p-4"
                        style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "var(--border)" }}
                      >
                        <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                          <span style={{ color: "var(--secondary)" }}>{item.title}:</span> {item.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featureCards.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[1.75rem] border p-6 transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ backgroundColor: "var(--surface-elevated)", color: "var(--primary)" }}>
                    {feature.icon}
                  </div>
                  <h3 className="mt-5 text-2xl" style={{ color: "var(--text-primary)" }}>
                    {feature.title}
                  </h3>
                  <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-3xl">
              <div className="text-sm uppercase tracking-[0.28em]" style={{ color: "var(--secondary)" }}>
                Product walkthrough
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
                From portfolio chaos to a readable workflow
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {workflowSteps.map((item) => (
                <div key={item.step} className="rounded-[2rem] border p-8" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                  <div className="text-sm uppercase tracking-[0.28em]" style={{ color: "var(--primary)" }}>
                    Step {item.step}
                  </div>
                  <h3 className="mt-5 text-2xl" style={{ color: "var(--text-primary)" }}>
                    {item.title}
                  </h3>
                  <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border p-8" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
              <div className="text-sm uppercase tracking-[0.28em]" style={{ color: "var(--secondary)" }}>
                Inside the app
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl" style={{ color: "var(--text-primary)" }}>
                Visuals that explain the app instead of decorating it
              </h2>
              <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
                The screenshots are framed as product proof points, so users can connect the interface to the value proposition immediately.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Portfolio dashboard for balances, performance, and allocation.",
                  "Market screen for price movement and coin discovery.",
                  "AI report screen for condensed performance takeaways.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border px-4 py-4" style={{ backgroundColor: "rgba(255,255,255,0.02)", borderColor: "var(--border)" }}>
                    <ChevronRight className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                    <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  src: "/screenshots/portfolio.png",
                  alt: "Portfolio overview in CoinVoidly",
                  title: "Portfolio overview",
                  body: "A high-signal home screen with core positions and account health.",
                },
                {
                  src: "/screenshots/market.png",
                  alt: "Market watch in CoinVoidly",
                  title: "Market watch",
                  body: "A fast way to scan assets, movements, and opportunities worth following.",
                },
                {
                  src: "/screenshots/ai_report.png",
                  alt: "AI portfolio report in CoinVoidly",
                  title: "AI report",
                  body: "Readable insight layers that make portfolio behavior easier to understand.",
                },
              ].map((screen) => (
                <div key={screen.title} className="overflow-hidden rounded-[2rem] border" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                  <ImageWithFallback src={screen.src} alt={screen.alt} className="aspect-[9/16] w-full object-cover" loading="lazy" />
                  <div className="p-5">
                    <h3 className="text-xl" style={{ color: "var(--text-primary)" }}>
                      {screen.title}
                    </h3>
                    <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
                      {screen.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <div className="text-sm uppercase tracking-[0.28em]" style={{ color: "var(--secondary)" }}>
                Pricing
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
                Start simple, upgrade when you want more depth
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-[2rem] border p-8" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                <h3 className="text-2xl" style={{ color: "var(--text-primary)" }}>
                  Free
                </h3>
                <div className="mt-4 text-5xl" style={{ color: "var(--text-primary)" }}>
                  $0
                </div>
                <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
                  Enough to track your portfolio and understand the basics.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Up to 2 wallets",
                    "Basic portfolio tracking",
                    "Real-time market data",
                    "1 watchlist",
                    "4 active alerts",
                    "Weekly reports",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--success)" }} />
                      <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-center"
                  style={{ backgroundColor: "var(--surface-elevated)", color: "var(--text-primary)" }}
                >
                  Get started free
                </a>
              </div>

              <div
                className="relative rounded-[2rem] border p-8"
                style={{ background: "linear-gradient(160deg, rgba(0, 194, 255, 0.18), rgba(91, 220, 255, 0.16))", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="absolute right-6 top-6 rounded-full px-3 py-1 text-sm" style={{ backgroundColor: "rgba(0, 224, 176, 0.16)", color: "var(--success)" }}>
                  Most popular
                </div>
                <h3 className="text-2xl" style={{ color: "var(--text-primary)" }}>
                  PRO
                </h3>
                <div className="mt-4 text-5xl" style={{ color: "var(--text-primary)" }}>
                  $5.99
                </div>
                <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
                  Per month or $39.99/year for the full insight layer.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Unlimited wallets",
                    "AI-powered insights and reports",
                    "Unlimited watchlists",
                    "Unlimited alerts",
                    "Advanced analytics",
                    "Priority support",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "var(--text-primary)" }} />
                      <span style={{ color: "var(--text-primary)" }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-center"
                  style={{ backgroundColor: "var(--text-primary)", color: "#07131a" }}
                >
                  Start PRO
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="text-sm uppercase tracking-[0.28em]" style={{ color: "var(--secondary)" }}>
                FAQ
              </div>
              <h2 className="mt-3 text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
                Common questions before install
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-[1.75rem] border p-6" style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
                  <h3 className="flex items-center gap-3 text-xl" style={{ color: "var(--text-primary)" }}>
                    <ChevronRight className="h-5 w-5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                    {faq.question}
                  </h3>
                  <p className="mt-3" style={{ color: "var(--text-secondary)" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-8 pt-10 sm:px-6 lg:px-8">
          <div
            className="mx-auto max-w-7xl rounded-[2.5rem] border px-6 py-12 text-center md:px-10 md:py-16"
            style={{ background: "linear-gradient(135deg, rgba(0, 194, 255, 0.16), rgba(91, 220, 255, 0.18))", borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm" style={{ backgroundColor: "rgba(7, 19, 26, 0.44)", borderColor: "rgba(255,255,255,0.08)", color: "var(--text-primary)" }}>
                <Shield className="h-4 w-4" />
                Built to help users understand their portfolio faster
              </div>
              <h2 className="mt-5 text-4xl md:text-5xl" style={{ color: "var(--text-primary)" }}>
                Make the first impression feel like the product
              </h2>
              <p className="mt-4 text-lg" style={{ color: "var(--text-secondary)" }}>
                Download CoinVoidly on iPhone and give users a cleaner way to follow holdings, watch the market, and understand what their portfolio is doing.
              </p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4"
                style={{ backgroundColor: "var(--text-primary)", color: "#07131a" }}
              >
                <Apple className="h-5 w-5" />
                Download on the App Store
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
