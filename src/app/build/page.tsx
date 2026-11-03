"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Sparkles,
  Loader2,
  Wand2,
  Layout,
  Type,
  Image as ImageIcon,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EXAMPLE_PROMPTS = [
  "A modern website for my fashion boutique in Lagos that sells Ankara and ready-to-wear clothes",
  "A simple and elegant website for my church in Abuja with service times, sermons and contact",
  "A portfolio website for me as a freelance graphic designer and photographer",
  "A clean website for my small restaurant that shows the menu and allows people to order via WhatsApp",
  "A professional website for my secondary school with admissions info and gallery",
];

export default function BuildPage() {
  const router = useRouter();
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState<"input" | "generating" | "preview">("input");
  const [generatedSite, setGeneratedSite] = useState<any>(null);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setStep("generating");
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Generation failed");
      }

      setGeneratedSite(data.site);
      // Save to localStorage for now (later will use real DB)
      localStorage.setItem("naijabuild_last_site", JSON.stringify(data.site));
      setStep("preview");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong. Please try again.");
      setStep("input");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">NB</span>
            </div>
            <span className="font-semibold text-sm">NaijaBuild</span>
          </div>
          <Link href="/dashboard" className="text-sm text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {step === "input" && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                AI Website Builder
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Describe the website you want
              </h1>
              <p className="mt-3 text-gray-600">
                Write in plain English. Be as detailed or as simple as you like.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: I need a website for my small bakery in Ibadan. It should show our cakes, allow customers to place orders on WhatsApp, and have our location and contact details..."
                className="w-full h-48 p-5 text-base resize-none focus:outline-none placeholder:text-gray-400"
              />
              <div className="border-t border-gray-100 px-5 py-4 flex items-center justify-between bg-gray-50">
                <p className="text-xs text-gray-500 hidden sm:block">
                  Tip: Mention your business type, location and what visitors should do
                </p>
                <Button
                  onClick={handleGenerate}
                  disabled={!prompt.trim() || isGenerating}
                  size="lg"
                  className="min-w-[140px]"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Building...
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-4 h-4" />
                      Generate Website
                    </>
                  )}
                </Button>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Or try an example:</p>
              <div className="flex flex-wrap gap-2">
                {EXAMPLE_PROMPTS.map((example) => (
                  <button
                    key={example}
                    onClick={() => setPrompt(example)}
                    className="text-left text-sm bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 rounded-xl px-4 py-2.5 transition text-gray-700"
                  >
                    {example.length > 65 ? example.slice(0, 65) + "..." : example}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === "generating" && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
              <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Building your website...</h2>
            <p className="mt-3 text-gray-600 max-w-md mx-auto">
              Our AI is designing the layout, writing content and preparing a beautiful site for you.
            </p>
            <div className="mt-10 space-y-3 max-w-sm mx-auto text-left">
              {[
                { icon: Layout, text: "Creating page structure" },
                { icon: Type, text: "Writing content that fits your business" },
                { icon: ImageIcon, text: "Choosing colors and style" },
              ].map((item, i) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm text-gray-600"
                >
                  <item.icon className="w-4 h-4 text-green-600" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === "preview" && generatedSite && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium">Website generated successfully!</span>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full">
                    preview.naijabuild.com
                  </span>
                </div>
              </div>

              {/* Simple live preview of generated content */}
              <div className="p-6 sm:p-10" style={{ borderTop: `4px solid ${generatedSite.primaryColor || "#16a34a"}` }}>
                <div className="max-w-xl mx-auto space-y-10">
                  <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">{generatedSite.title}</h1>
                    <p className="mt-2 text-gray-600">{generatedSite.tagline}</p>
                  </div>

                  {generatedSite.pages?.[0]?.sections?.map((section: any, idx: number) => {
                    if (section.type === "hero") {
                      return (
                        <div key={idx} className="text-center space-y-4 py-6">
                          <h2 className="text-2xl font-bold">{section.headline}</h2>
                          <p className="text-gray-600">{section.subheadline}</p>
                          <Button style={{ backgroundColor: generatedSite.primaryColor }}>
                            {section.ctaText}
                          </Button>
                        </div>
                      );
                    }
                    if (section.type === "features") {
                      return (
                        <div key={idx}>
                          <h3 className="text-xl font-semibold text-center mb-6">{section.title}</h3>
                          <div className="grid sm:grid-cols-3 gap-4">
                            {section.items?.map((item: any, i: number) => (
                              <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                                <h4 className="font-medium">{item.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    if (section.type === "about") {
                      return (
                        <div key={idx} className="text-center">
                          <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                          <p className="text-gray-600">{section.content}</p>
                        </div>
                      );
                    }
                    if (section.type === "contact") {
                      return (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center">
                          <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                          <div className="space-y-2 text-sm text-gray-700">
                            {section.whatsapp && <p>WhatsApp: {section.whatsapp}</p>}
                            {section.phone && <p>Phone: {section.phone}</p>}
                            {section.email && <p>Email: {section.email}</p>}
                            {section.address && <p>{section.address}</p>}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1"
                onClick={() => router.push("/dashboard")}
              >
                Save & Go to Dashboard
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="flex-1"
                onClick={() => {
                  setStep("input");
                  setGeneratedSite(null);
                }}
              >
                Generate Another
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
