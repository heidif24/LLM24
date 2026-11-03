import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Smartphone,
  CreditCard,
  Globe,
  Mail,
  Server,
  Search,
  CheckCircle2,
  Layout,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">NB</span>
              </div>
              <span className="font-bold text-xl tracking-tight">NaijaBuild</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
              <a href="#services" className="text-sm text-gray-600 hover:text-gray-900">Everything You Need</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
              <Link href="/domains" className="text-sm text-gray-600 hover:text-gray-900">Domains</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Log in
              </Link>
              <Link
                href="/build"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-full transition"
              >
                Start Building
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/80 to-white" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Made for Nigeria
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 text-balance">
              Everything you need to
              <span className="block text-green-600">get online in Nigeria</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Build a beautiful website with AI, buy a domain, host it, and get professional email — all in one place, paid in Naira.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/build"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-full text-base transition shadow-lg shadow-green-600/20"
              >
                Build My Website
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/domains"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-medium px-8 py-3.5 rounded-full text-base transition"
              >
                Search Domain
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No coding. Pay in Naira. Works on your phone.
            </p>
          </div>
        </div>
      </section>

      {/* Everything You Need */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">One platform. Everything you need.</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Stop jumping between different websites and dollar cards. NaijaBuild brings website, domain, hosting and email together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Layout,
                title: "AI Website Builder",
                desc: "Describe your business in plain English. Get a professional website in minutes. Edit and publish easily.",
                href: "/build",
                cta: "Build Website",
              },
              {
                icon: Search,
                title: "Domain Name",
                desc: "Search and buy .com, .com.ng, .ng and other domains. Check availability instantly and register in Naira.",
                href: "/domains",
                cta: "Search Domain",
              },
              {
                icon: Server,
                title: "Reliable Hosting",
                desc: "Fast hosting that works well on Nigerian networks. Free SSL, automatic backups, and simple management.",
                href: "/build",
                cta: "Included",
              },
              {
                icon: Mail,
                title: "Professional Email",
                desc: "Get you@yourbusiness.com email. Looks professional and builds trust with customers.",
                href: "/email",
                cta: "Get Email",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed flex-1">{item.desc}</p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-800"
                >
                  {item.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
            <p className="mt-3 text-gray-600">From zero to fully online in a few simple steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Describe your website", desc: "Tell us about your business, church, shop or brand in plain English." },
              { step: "2", title: "AI builds it", desc: "We generate a beautiful, mobile-ready website with real content." },
              { step: "3", title: "Add domain & email", desc: "Search and buy a domain, then get professional email if you want." },
              { step: "4", title: "Publish & go live", desc: "Pay in Naira once. Your website is live and ready for customers." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Built for how Nigerians actually work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI does the hard work",
                desc: "No design skills or coding needed. Just describe what you want.",
              },
              {
                icon: CreditCard,
                title: "Pay in Naira",
                desc: "No dollar cards. Pay easily with Paystack using your Nigerian bank or card.",
              },
              {
                icon: Smartphone,
                title: "Mobile first",
                desc: "Most of your customers are on phone. Every site looks perfect on mobile.",
              },
              {
                icon: Globe,
                title: "Domain + Hosting",
                desc: "Buy your domain and host everything in one place. No technical stress.",
              },
              {
                icon: Mail,
                title: "Professional Email",
                desc: "you@yourbusiness.com makes you look established and trustworthy.",
              },
              {
                icon: Shield,
                title: "Simple & secure",
                desc: "Free SSL, reliable uptime, and a dashboard that is easy to understand.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Simple pricing in Naira</h2>
          <p className="mt-3 text-gray-600">
            One-time payments. No confusing monthly dollar subscriptions.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
            {[
              { name: "Starter", price: "₦4,500", desc: "Website + free subdomain" },
              { name: "Business", price: "₦12,000", desc: "Website + custom domain ready" },
              { name: "Pro", price: "₦25,000", desc: "Multiple sites + priority support" },
            ].map((p) => (
              <div key={p.name} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="font-semibold text-gray-900">{p.name}</div>
                <div className="text-2xl font-bold mt-1">{p.price}</div>
                <div className="text-sm text-gray-500 mt-1">{p.desc}</div>
              </div>
            ))}
          </div>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-800"
          >
            See full pricing
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to get your business online?</h2>
          <p className="mt-4 text-green-100 text-lg">
            Build your website, get a domain, host it, and add professional email — all in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/build"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 font-semibold px-8 py-3.5 rounded-full hover:bg-green-50 transition"
            >
              Start Building Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/domains"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition"
            >
              Search for a Domain
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">NB</span>
            </div>
            <span className="font-semibold">NaijaBuild</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/build">Build</Link>
            <Link href="/domains">Domains</Link>
            <Link href="/email">Email</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <p className="text-sm text-gray-500">Made with love for Nigeria 🇳🇬</p>
        </div>
      </footer>
    </div>
  );
}
