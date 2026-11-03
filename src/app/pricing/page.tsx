import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₦4,500",
    period: "one-time",
    description: "Perfect for a simple personal or small business site",
    features: [
      "1 website",
      "AI generation",
      "Mobile-friendly design",
      "Free subdomain",
      "Basic editing",
    ],
    cta: "Get Starter",
    popular: false,
  },
  {
    name: "Business",
    price: "₦12,000",
    period: "one-time",
    description: "Best for shops, churches, freelancers and growing brands",
    features: [
      "1 website",
      "Unlimited AI regenerations",
      "Custom domain support",
      "WhatsApp contact button",
      "Priority support",
      "Remove NaijaBuild badge",
    ],
    cta: "Get Business",
    popular: true,
  },
  {
    name: "Pro",
    price: "₦25,000",
    period: "one-time",
    description: "For those who need more power and multiple pages",
    features: [
      "Up to 3 websites",
      "Advanced AI editing",
      "Custom domain",
      "Basic analytics",
      "Email support",
      "All Business features",
    ],
    cta: "Get Pro",
    popular: false,
  },
];

export default function PricingPage() {
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
            <Button size="sm">Start Building</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple pricing in Naira</h1>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            No monthly surprises. Pay once and own your website. All prices are in Nigerian Naira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                plan.popular
                  ? "border-green-500 shadow-lg shadow-green-100 scale-[1.02]"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-5">
                <h3 className="font-semibold text-lg">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-gray-500">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "default" : "outline"}
                className="w-full"
                asChild
              >
                <Link href="/build">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          All plans include free hosting on a NaijaBuild subdomain. Custom domain available on Business and Pro.
        </p>
      </main>
    </div>
  );
}
