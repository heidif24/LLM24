import Link from "next/link";
import { Mail, Check, ArrowRight, Shield, Smartphone, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmailPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">NB</span>
            </div>
            <span className="font-bold">NaijaBuild</span>
          </Link>
          <Link href="/build">
            <Button size="sm">Build Website</Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
            <Mail className="w-4 h-4" />
            Professional Email
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get email that matches your domain
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stop using Gmail for business. Look professional with addresses like
            <span className="font-medium text-gray-900"> you@yourbusiness.com</span> or
            <span className="font-medium text-gray-900"> info@yourchurch.ng</span>.
          </p>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Builds trust",
                  desc: "Customers take you more seriously when your email matches your website domain.",
                },
                {
                  icon: Inbox,
                  title: "Works everywhere",
                  desc: "Access your email on phone, laptop or any browser. Syncs automatically.",
                },
                {
                  icon: Smartphone,
                  title: "Easy to use",
                  desc: "Simple setup. We connect it to your domain so you don’t struggle with technical settings.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">Simple email plans</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="font-semibold text-lg">Starter Mail</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">₦3,500</span>
                  <span className="text-gray-500">/year</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /> 1 email address</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /> 5 GB storage</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /> Web + mobile access</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /> Spam protection</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Coming Soon</Button>
              </div>

              <div className="rounded-2xl border-2 border-green-500 p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Recommended
                </div>
                <h3 className="font-semibold text-lg">Business Mail</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">₦9,500</span>
                  <span className="text-gray-500">/year</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /> Up to 5 email addresses</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /> 15 GB storage each</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /> Custom domain email</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-green-600 shrink-0" /> Priority support</li>
                </ul>
                <Button className="w-full mt-6">Coming Soon</Button>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900">How email works with NaijaBuild</h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
              {[
                { step: "1", title: "Buy a domain", desc: "Search and register your domain on NaijaBuild." },
                { step: "2", title: "Add email", desc: "Choose a plan and create addresses like info@yourdomain.com" },
                { step: "3", title: "Start using", desc: "We set up the technical parts. You just log in and send emails." },
              ].map((s) => (
                <div key={s.step} className="bg-white rounded-xl p-5 border">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center mb-3">
                    {s.step}
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-gray-500">
              Real email hosting (via partners like Zoho, Titan, or Google Workspace reseller) will be connected in the next phase.
            </p>
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Start with your website first</h2>
          <p className="mt-3 text-gray-600">Build and publish your site, then add domain and email.</p>
          <Link href="/build" className="mt-6 inline-flex">
            <Button size="lg">
              Build My Website
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </section>
      </main>
    </div>
  );
}
