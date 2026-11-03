"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Check, X, ArrowRight, Loader2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const POPULAR_TLDS = [".com.ng", ".ng", ".com", ".org.ng", ".com.ng"];

// Simulated availability check for MVP
function checkAvailability(name: string, tld: string) {
  const full = (name + tld).toLowerCase();
  // Simple deterministic mock so results feel consistent
  const hash = full.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const available = hash % 3 !== 0; // roughly 2/3 available
  const prices: Record<string, string> = {
    ".com.ng": "₦8,500",
    ".ng": "₦12,000",
    ".com": "₦18,500",
    ".org.ng": "₦9,500",
  };
  return {
    domain: full,
    available,
    price: prices[tld] || "₦15,000",
  };
}

export default function DomainsPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof checkAvailability>[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const clean = query.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
    if (!clean) return;

    setLoading(true);
    setSearched(true);
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 900));

    const tlds = [".com.ng", ".ng", ".com", ".org.ng"];
    setResults(tlds.map((tld) => checkAvailability(clean, tld)));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
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

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <Globe className="w-4 h-4" />
            Domain Search
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Find your perfect domain</h1>
          <p className="mt-3 text-gray-600">
            Search .com.ng, .ng, .com and more. Pay in Naira. Connect it to your NaijaBuild website easily.
          </p>
        </div>

        <form onSubmit={handleSearch} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2 flex gap-2">
          <div className="flex-1 flex items-center gap-2 px-3">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="yourbusiness"
              className="w-full h-12 text-base focus:outline-none"
            />
          </div>
          <Button type="submit" size="lg" disabled={loading || !query.trim()}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Search"}
          </Button>
        </form>

        <div className="mt-3 flex flex-wrap gap-2 justify-center">
          {[".com.ng", ".ng", ".com", ".org.ng"].map((tld) => (
            <span key={tld} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
              {tld}
            </span>
          ))}
        </div>

        {searched && (
          <div className="mt-10 space-y-3">
            {loading ? (
              <div className="text-center py-10 text-gray-500">Checking availability...</div>
            ) : (
              results.map((r) => (
                <div
                  key={r.domain}
                  className="bg-white rounded-xl border border-gray-200 px-5 py-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {r.available ? (
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <X className="w-4 h-4 text-red-500" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="font-medium text-gray-900 truncate">{r.domain}</div>
                      <div className="text-sm text-gray-500">
                        {r.available ? "Available" : "Already taken"}
                      </div>
                    </div>
                  </div>
                  {r.available ? (
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-semibold text-gray-900">{r.price}</span>
                      <span className="text-xs text-gray-500">/year</span>
                      <Button size="sm">Buy</Button>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400">Unavailable</span>
                  )}
                </div>
              ))
            )}
          </div>
        )}

        <div className="mt-14 bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="font-semibold text-lg text-gray-900">Why buy domain with NaijaBuild?</h2>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex gap-2">
              <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              Pay in Naira — no dollar card needed
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              Connect the domain to your website in one click
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              Free SSL certificate included
            </li>
            <li className="flex gap-2">
              <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
              Easy renewal reminders so you never lose your domain
            </li>
          </ul>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Domain availability is simulated for now. Real registrar API (Namecheap / GoDaddy / local Nigerian registrars) will be connected next.
        </p>
      </main>
    </div>
  );
}
