"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentUser, getSiteById, saveSite, type SavedSite } from "@/lib/auth";
import { PLANS } from "@/lib/paystack";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const siteId = searchParams.get("site");

  const [site, setSite] = useState<SavedSite | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "business" | "pro">("business");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    if (!user) {
      router.push("/login");
      return;
    }
    if (siteId) {
      const s = getSiteById(siteId);
      setSite(s);
    }
  }, [siteId, router]);

  const handlePay = async () => {
    setLoading(true);
    // Simulate successful payment for MVP
    // In production: load Paystack inline JS and open checkout
    await new Promise((r) => setTimeout(r, 2000));

    if (site) {
      const subdomain = site.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
        .slice(0, 30);

      saveSite({
        ...site,
        status: "published",
        publishedAt: new Date().toISOString(),
        subdomain: subdomain || "my-site",
      });
    }

    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl border shadow-sm p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Website Published!</h1>
          <p className="mt-3 text-gray-600">
            Your website is now live. You can view it anytime from your dashboard.
          </p>
          {site && (
            <p className="mt-4 text-sm font-medium text-green-700 bg-green-50 rounded-lg px-3 py-2">
              {site.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30)}.naijabuild.com
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3">
            <Button onClick={() => router.push("/dashboard")} size="lg">
              Go to Dashboard
            </Button>
            {site && (
              <Button variant="outline" onClick={() => router.push(`/preview/${site.id}`)}>
                View Website
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <Link href="/dashboard" className="flex items-center gap-2 text-sm text-gray-600">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Publish your website</h1>
        <p className="text-gray-600 mb-8">
          Choose a plan and publish {site ? `“${site.title}”` : "your website"} instantly.
        </p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {(Object.keys(PLANS) as Array<keyof typeof PLANS>).map((key) => {
            const plan = PLANS[key];
            const selected = selectedPlan === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`text-left rounded-2xl border p-5 transition ${
                  selected
                    ? "border-green-500 bg-green-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="font-semibold">{plan.name}</div>
                <div className="text-2xl font-bold mt-1">{plan.display}</div>
                <div className="text-xs text-gray-500 mt-1">one-time</div>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">Total</span>
            <span className="text-2xl font-bold">{PLANS[selectedPlan].display}</span>
          </div>
          <Button className="w-full" size="lg" onClick={handlePay} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Processing...
              </>
            ) : (
              `Pay ${PLANS[selectedPlan].display} & Publish`
            )}
          </Button>
          <p className="text-xs text-center text-gray-500 mt-4">
            Payment is simulated for now. Real Paystack integration is ready to be connected with your keys.
          </p>
        </div>
      </main>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
