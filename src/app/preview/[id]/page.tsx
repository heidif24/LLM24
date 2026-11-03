"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PreviewPage({ params }: { params: { id: string } }) {
  const [site, setSite] = useState<any>(null);

  useEffect(() => {
    const raw = localStorage.getItem("naijabuild_last_site");
    if (raw) {
      try {
        setSite(JSON.parse(raw));
      } catch (e) {}
    }
  }, []);

  if (!site) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">No website found.</p>
          <Link href="/build" className="text-green-600 font-medium mt-2 inline-block">
            Create one
          </Link>
        </div>
      </div>
    );
  }

  const color = site.primaryColor || "#16a34a";

  return (
    <div className="min-h-screen bg-white">
      {/* Preview toolbar */}
      <div className="sticky top-0 z-30 bg-gray-900 text-white px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="flex items-center gap-1.5 hover:text-gray-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <span className="text-gray-500">|</span>
          <span className="text-gray-400">Preview Mode</span>
        </div>
        <Button size="sm" className="bg-green-600 hover:bg-green-500">
          Publish Website
        </Button>
      </div>

      {/* Actual website preview */}
      <div style={{ borderTop: `5px solid ${color}` }}>
        {site.pages?.[0]?.sections?.map((section: any, idx: number) => {
          if (section.type === "hero") {
            return (
              <section key={idx} className="px-4 py-20 text-center max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                  {section.headline}
                </h1>
                <p className="mt-5 text-lg text-gray-600">{section.subheadline}</p>
                <div className="mt-8">
                  <a
                    href={section.ctaLink || "#contact"}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-semibold text-base shadow-lg"
                    style={{ backgroundColor: color }}
                  >
                    {section.ctaText}
                  </a>
                </div>
              </section>
            );
          }

          if (section.type === "features") {
            return (
              <section key={idx} className="px-4 py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto">
                  <h2 className="text-2xl font-bold text-center mb-10">{section.title}</h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {section.items?.map((item: any, i: number) => (
                      <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                        <div
                          className="w-10 h-10 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold"
                          style={{ backgroundColor: color }}
                        >
                          {i + 1}
                        </div>
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          if (section.type === "about") {
            return (
              <section key={idx} className="px-4 py-16 max-w-2xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </section>
            );
          }

          if (section.type === "contact") {
            return (
              <section key={idx} id="contact" className="px-4 py-16 bg-gray-900 text-white">
                <div className="max-w-xl mx-auto text-center">
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <div className="space-y-3 text-gray-300">
                    {section.whatsapp && (
                      <p>
                        <a
                          href={`https://wa.me/${section.whatsapp.replace(/\D/g, "")}`}
                          className="hover:text-white underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          WhatsApp: {section.whatsapp}
                        </a>
                      </p>
                    )}
                    {section.phone && <p>Phone: {section.phone}</p>}
                    {section.email && <p>Email: {section.email}</p>}
                    {section.address && <p>{section.address}</p>}
                  </div>
                </div>
              </section>
            );
          }

          return null;
        })}

        <footer className="py-6 text-center text-sm text-gray-400 border-t">
          Built with NaijaBuild
        </footer>
      </div>
    </div>
  );
}
