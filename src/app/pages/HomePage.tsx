import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { 
  Wallet, 
  TrendingUp, 
  Bell, 
  Globe, 
  Shield, 
  Zap, 
  Eye, 
  BarChart3, 
  Newspaper,
  Sparkles,
  Check,
  Apple,
  ChevronRight,
  Lock,
  RefreshCw,
  Target,
  Users,
  DollarSign,
  PieChart
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)', color: 'var(--text-primary)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--fill-muted-primary)', color: 'var(--secondary)' }}>
                <Sparkles className="h-4 w-4" />
                <span className="text-sm">Now Available on iOS</span>
              </div>
              <h1 className="text-5xl md:text-6xl mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
                Track Your Crypto Portfolio With{' '}
                <span style={{ color: 'var(--primary)' }}>Intelligence</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                CoinVoidly helps you monitor all your crypto holdings, analyze performance with AI-powered insights, and stay ahead of the market. All in one beautiful iOS app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all hover:opacity-90" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}>
                  <Apple className="h-5 w-5" />
                  Download for iOS
                </button>
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all hover:opacity-90" style={{ backgroundColor: 'var(--surface)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}>
                  <Globe className="h-5 w-5" />
                  Web App Coming Soon
                </button>
              </div>
              <div className="flex items-center gap-8 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" style={{ color: 'var(--success)' }} />
                  <span>Bank-level security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" style={{ color: 'var(--primary)' }} />
                  <span>Real-time data</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20" style={{ backgroundColor: 'var(--primary)' }}></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614787913638-65ff1dacc76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJpdGNvaW4lMjBwaG9uZSUyMGFwcHxlbnwxfHx8fDE3NzIwMTA1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CoinVoidly App Interface"
                className="relative rounded-3xl shadow-2xl w-full"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10,000+", label: "Cryptocurrencies Tracked" },
              { value: "24/7", label: "Real-time Market Data" },
              { value: "50+", label: "Supported Exchanges" },
              { value: "15+", label: "Languages Supported" }
            ].map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
                <div className="text-3xl md:text-4xl mb-2" style={{ color: 'var(--primary)' }}>{stat.value}</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Everything You Need to Track Crypto
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Comprehensive features designed to give you complete control over your cryptocurrency portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Wallet className="h-6 w-6" />,
                title: "Multi-Wallet Management",
                description: "Create unlimited wallets and track all your holdings across different exchanges and blockchains in one place."
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Portfolio Analytics",
                description: "Deep insights into your portfolio performance with realized/unrealized P&L, allocation charts, and trend analysis."
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "AI-Powered Reports",
                description: "Get intelligent portfolio analysis and personalized recommendations powered by advanced AI algorithms."
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Real-Time Market Data",
                description: "Live prices, market cap, volume, and comprehensive data from CoinGecko for 10,000+ cryptocurrencies."
              },
              {
                icon: <Bell className="h-6 w-6" />,
                title: "Smart Alerts",
                description: "Set price, volume, and custom alerts with instant push notifications to never miss important market movements."
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: "Custom Watchlists",
                description: "Create and organize multiple watchlists to monitor your favorite coins and track market opportunities."
              },
              {
                icon: <Newspaper className="h-6 w-6" />,
                title: "Crypto News Feed",
                description: "Stay informed with curated crypto news from NewsData API, filtered by coins and topics you care about."
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Multi-Currency Support",
                description: "View your portfolio in any currency with real-time FX rates and seamless currency conversion."
              },
              {
                icon: <Lock className="h-6 w-6" />,
                title: "Secure Authentication",
                description: "Sign in securely with email/password or use Apple and Google social login for quick access."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}
              >
                <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--fill-muted-primary)', color: 'var(--primary)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Beautiful Design Meets Powerful Features
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Experience an intuitive interface designed for both beginners and advanced traders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557680784-6db47c6f56ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMHNjcmVlbiUyMG1vY2t1cCUyMGRhcmt8ZW58MXx8fHwxNzcyMDEwNTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Portfolio Overview"
                className="w-full aspect-[9/16] object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>Portfolio Dashboard</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Track all your holdings with comprehensive performance metrics and visual insights.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768055105681-7d2096c5165f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBjaGFydCUyMHBvcnRmb2xpbyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzIwMTA1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Market Analysis"
                className="w-full aspect-[9/16] object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>Market Analysis</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Deep dive into market trends with advanced charts and real-time data visualization.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608858132869-4fe7467333b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG8lMjB0cmFkaW5nJTIwd29ya3NwYWNlJTIwZGFya3xlbnwxfHx8fDE3NzIwMTA1OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Insights"
                className="w-full aspect-[9/16] object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl mb-2" style={{ color: 'var(--text-primary)' }}>AI-Powered Insights</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Get personalized recommendations and portfolio health reports generated by AI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Facts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl p-12" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
            <h2 className="text-3xl md:text-4xl mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
              Did You Know?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--fill-muted-primary)' }}>
                <DollarSign className="h-8 w-8 mb-4" style={{ color: 'var(--primary)' }} />
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>Bitcoin's Total Supply</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  There will only ever be 21 million Bitcoin in existence. As of 2026, over 19.6 million BTC have been mined, representing more than 93% of the total supply.
                </p>
              </div>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--fill-muted-secondary)' }}>
                <Users className="h-8 w-8 mb-4" style={{ color: 'var(--secondary)' }} />
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>Global Crypto Adoption</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Over 420 million people worldwide own cryptocurrency, with adoption growing fastest in emerging markets across Asia, Africa, and Latin America.
                </p>
              </div>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--fill-muted-secondary)' }}>
                <RefreshCw className="h-8 w-8 mb-4" style={{ color: 'var(--secondary)' }} />
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>Daily Transaction Volume</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  The crypto market processes over $100 billion in transactions daily across exchanges, with Bitcoin and Ethereum accounting for the majority of trading volume.
                </p>
              </div>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--fill-muted-primary)' }}>
                <PieChart className="h-8 w-8 mb-4" style={{ color: 'var(--primary)' }} />
                <h3 className="text-xl mb-3" style={{ color: 'var(--text-primary)' }}>Market Dominance</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Bitcoin maintains approximately 45% market dominance, followed by Ethereum at around 18%. These two cryptocurrencies represent over 60% of the total crypto market cap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Quotes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              What Experts Say About Crypto Tracking
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <div className="text-4xl mb-4" style={{ color: 'var(--primary)' }}>"</div>
              <p className="text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                Portfolio tracking is essential for crypto investors. You can't manage what you don't measure.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                <div>
                  <p style={{ color: 'var(--text-primary)' }}>Crypto Industry Insight</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Investment Best Practice</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <div className="text-4xl mb-4" style={{ color: 'var(--secondary)' }}>"</div>
              <p className="text-lg mb-6" style={{ color: 'var(--text-primary)' }}>
                The key to successful crypto investing is staying informed with real-time data and understanding your portfolio's true performance.
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full" style={{ backgroundColor: 'var(--secondary)' }}></div>
                <div>
                  <p style={{ color: 'var(--text-primary)' }}>Financial Advisory</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Market Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Choose Your Plan
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Start for free or unlock advanced features with our premium subscription.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 rounded-3xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
              <h3 className="text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>Free</h3>
              <div className="mb-6">
                <span className="text-4xl" style={{ color: 'var(--text-primary)' }}>$0</span>
                <span style={{ color: 'var(--text-secondary)' }}>/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Up to 3 wallets",
                  "Basic portfolio tracking",
                  "Real-time market data",
                  "3 watchlists",
                  "5 price alerts",
                  "News feed access",
                  "Multi-currency support"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--success)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl transition-all" style={{ backgroundColor: 'var(--fill-muted-primary)', color: 'var(--primary)' }}>
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="p-8 rounded-3xl relative" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}>
              <div className="absolute -top-4 right-8 px-4 py-1 rounded-full text-sm" style={{ backgroundColor: 'var(--success)' }}>
                Most Popular
              </div>
              <h3 className="text-2xl mb-2">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl">$9.99</span>
                <span className="opacity-80">/month</span>
              </div>
              <p className="mb-6 opacity-90">Or $99.99/year (save 17%)</p>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited wallets",
                  "Advanced portfolio analytics",
                  "AI-powered insights & reports",
                  "Unlimited watchlists",
                  "Unlimited alerts",
                  "Weekly email reports",
                  "Priority support",
                  "Portfolio health score",
                  "Advanced charts & tools"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl transition-all hover:opacity-90" style={{ backgroundColor: '#ffffff', color: 'var(--primary)' }}>
                Start Premium Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-primary)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Is CoinVoidly available on Android?",
                answer: "Currently, CoinVoidly is available exclusively on iOS. We're working on an Android version and a web app, which will be launching soon. Stay tuned for updates!"
              },
              {
                question: "Does CoinVoidly support trading?",
                answer: "No, CoinVoidly is a portfolio tracking app only. We focus on providing the best tracking, analytics, and insights experience without handling actual trading or custody of your assets."
              },
              {
                question: "How do you get the market data?",
                answer: "We integrate with CoinGecko to provide real-time market data for over 10,000 cryptocurrencies, including prices, market cap, volume, and historical data."
              },
              {
                question: "Can I import my transactions automatically?",
                answer: "Currently, you need to manually add transactions to your wallets. We're working on API integrations with major exchanges to enable automatic transaction imports in a future update."
              },
              {
                question: "What currencies are supported?",
                answer: "CoinVoidly supports over 50 fiat currencies with real-time FX conversion. You can view your portfolio value in your preferred currency, and we support 15+ interface languages."
              },
              {
                question: "How does the AI analysis work?",
                answer: "Our AI analyzes your portfolio composition, performance trends, risk factors, and market conditions to generate personalized insights and recommendations. This feature is available with the Premium subscription."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--border)', border: '1px solid' }}>
                <h3 className="text-lg mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <ChevronRight className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                  {faq.question}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl p-12 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--primary)' }}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full" style={{ backgroundColor: '#ffffff' }}></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ backgroundColor: '#ffffff' }}></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl mb-4 text-white">
                Ready to Take Control of Your Crypto?
              </h2>
              <p className="text-lg mb-8 text-white opacity-90 max-w-2xl mx-auto">
                Join thousands of crypto investors tracking their portfolios with CoinVoidly. Download now and start managing your investments like a pro.
              </p>
              <button className="px-8 py-4 rounded-xl transition-all hover:opacity-90 inline-flex items-center gap-2" style={{ backgroundColor: '#ffffff', color: 'var(--primary)' }}>
                <Apple className="h-5 w-5" />
                Download for iOS
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
