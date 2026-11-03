import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60;

const SYSTEM_PROMPT = `You are an expert website designer and copywriter specializing in Nigerian businesses and organizations.

When given a description, generate a complete, beautiful, conversion-focused website structure in valid JSON format only.

Return ONLY a JSON object with this exact structure (no markdown, no explanation):

{
  "title": "Website title",
  "tagline": "Short tagline",
  "primaryColor": "#16a34a",
  "pages": [
    {
      "name": "Home",
      "sections": [
        {
          "type": "hero",
          "headline": "...",
          "subheadline": "...",
          "ctaText": "...",
          "ctaLink": "#contact"
        },
        {
          "type": "features",
          "title": "...",
          "items": [
            { "title": "...", "description": "..." }
          ]
        },
        {
          "type": "about",
          "title": "...",
          "content": "..."
        },
        {
          "type": "contact",
          "title": "Contact Us",
          "phone": "...",
          "whatsapp": "...",
          "email": "...",
          "address": "..."
        }
      ]
    }
  ]
}

Rules:
- Use Nigerian-friendly language and realistic local details when appropriate.
- Make content professional but warm.
- Always include a WhatsApp-friendly contact option.
- Keep it practical for small businesses, churches, freelancers, schools etc.
- primaryColor should be a nice hex color that fits the business.
- Return pure JSON only.`;

async function callAI(prompt: string) {
  const provider = process.env.AI_PROVIDER || "groq";

  if (provider === "groq" && process.env.GROQ_API_KEY) {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 2500,
      }),
    });

    if (!res.ok) throw new Error(`Groq error: ${res.status}`);
    const data = await res.json();
    return data.choices[0].message.content;
  }

  if (provider === "deepseek" && process.env.DEEPSEEK_API_KEY) {
    const res = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 2500,
      }),
    });

    if (!res.ok) throw new Error(`DeepSeek error: ${res.status}`);
    const data = await res.json();
    return data.choices[0].message.content;
  }

  // Fallback mock response when no API key is set (for development)
  return JSON.stringify({
    title: "Your Business",
    tagline: "Quality service you can trust",
    primaryColor: "#16a34a",
    pages: [
      {
        name: "Home",
        sections: [
          {
            type: "hero",
            headline: "Welcome to Your Business",
            subheadline: "We deliver excellent products and services tailored for you.",
            ctaText: "Contact Us on WhatsApp",
            ctaLink: "#contact",
          },
          {
            type: "features",
            title: "Why Choose Us",
            items: [
              { title: "Quality", description: "We never compromise on standards." },
              { title: "Fast Delivery", description: "Quick and reliable service." },
              { title: "Affordable", description: "Great value for your money." },
            ],
          },
          {
            type: "about",
            title: "About Us",
            content: "We are a passionate Nigerian business dedicated to serving our customers with excellence and integrity.",
          },
          {
            type: "contact",
            title: "Get in Touch",
            phone: "+234 800 000 0000",
            whatsapp: "+2348000000000",
            email: "hello@yourbusiness.com",
            address: "Lagos, Nigeria",
          },
        ],
      },
    ],
  });
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const raw = await callAI(prompt);

    // Clean possible markdown code blocks
    let cleaned = raw.trim();
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    const site = JSON.parse(cleaned);

    return NextResponse.json({ site });
  } catch (error: any) {
    console.error("Generation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate website" },
      { status: 500 }
    );
  }
}
