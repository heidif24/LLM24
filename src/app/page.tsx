import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield, Smartphone, CreditCard, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
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
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#examples" className="text-sm text-gray-600 hover:text-gray-900">Examples</a>
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
              Build a beautiful website
              <span className="block text-green-600">in minutes with AI</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Just describe what you need. NaijaBuild creates a professional website for your business, church, shop or personal brand. Pay in Naira. Hosted for you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/build"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-full text-base transition shadow-lg shadow-green-600/20"
              >
                Create Your Website
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#examples"
                className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-gray-800 font-medium px-8 py-3.5 rounded-full text-base transition"
              >
                See Examples
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No coding. No stress. Works on phone and computer.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">Everything you need</h2>
            <p className="mt-3 text-gray-600">Built specifically for how Nigerians actually work and do business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI does the hard work",
                desc: "Describe your business in plain English (or Pidgin). Get a complete website in under 2 minutes.",
              },
              {
                icon: CreditCard,
                title: "Pay in Naira",
                desc: "No dollar cards needed. Pay easily with Paystack using your Nigerian bank or card.",
              },
              {
                icon: Smartphone,
                title: "Mobile first",
                desc: "Most of your customers are on phone. Every site looks perfect on mobile by default.",
              },
              {
                icon: Globe,
                title: "Hosting included",
                desc: "We host your website. Fast loading even on Nigerian networks. No technical setup.",
              },
              {
                icon: Shield,
                title: "Simple & secure",
                desc: "No complicated dashboards. Just your website, easy editing, and reliable uptime.",
              },
              {
                icon: Sparkles,
                title: "Local examples",
                desc: "Templates and styles that fit churches, boutiques, freelancers, schools and event planners.",
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

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Ready to get online?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of Nigerian businesses, creators and churches building with AI.
          </p>
          <Link
            href="/build"
            className="mt-8 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-full transition"
          >
            Start Building for Free
            <ArrowRight className="w-5 h-5" />
          </Link>
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
          <p className="text-sm text-gray-500">Made with love for Nigeria 🇳🇬</p>
        </div>
      </footer>
    </div>
  );
}
