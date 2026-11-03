"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Loader2, Wand2, Layout, Type, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const EXAMPLE_PROMPTS = [
  "A modern website for my fashion boutique in Lagos that sells Ankara and ready-to-wear clothes",
  "A simple and elegant website for my church in Abuja with service times, sermons and contact",
  "A portfolio website for me as a freelance graphic designer and photographer",
  "A clean website for my small restaurant that shows the menu and allows people to order via WhatsApp",
  "A professional website for my secondary school with admissions info and gallery",
];

export default function BuildPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [step, setStep] = useState<"input" | "generating" | "preview">("input");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setStep("generating");

    // Simulate generation for now (will connect to real AI later)
    await new Promise((resolve) => setTimeout(resolve, 3500));

    setIsGenerating(false);
    setStep("preview");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
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
          <div className="w-16" />
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

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: I need a website for my small bakery in Ibadan. It should show our cakes, allow customers to place orders on WhatsApp, and have our location and contact details..."
                className="w-full h-48 p-5 text-base resize-none focus:outline-none placeholder:text-gray-400"
              />
              <div className="border-t border-gray-100 px-5 py-4 flex items-center justify-between bg-gray-50">
                <p className="text-xs text-gray-500">
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
                    {example.length > 70 ? example.slice(0, 70) + "..." : example}
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
                  className="flex items-center gap-3 text-sm text-gray-600 animate-pulse"
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  <item.icon className="w-4 h-4 text-green-600" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === "preview" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-500 bg-white px-3 py-1 rounded-full">
                    yourwebsite.naijabuild.com
                  </span>
                </div>
              </div>
              <div className="p-8 min-h-[420px] bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-lg mx-auto text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 mx-auto flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Your website is ready!</h2>
                  <p className="text-gray-600">
                    This is a preview of what was generated. In the full version you will be able to edit every section, change colors, add pages and publish.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <Button size="lg">Publish Website</Button>
                    <Button variant="outline" size="lg" onClick={() => setStep("input")}>
                      Edit Prompt
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
              <strong>Note:</strong> Real AI generation will be connected next. Right now this is the complete user flow and beautiful interface. We will plug in DeepSeek / Qwen / Groq shortly.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
