# NaijaBuild

**Beautiful AI Website Builder made specifically for Nigeria** 🇳🇬

Create professional websites in minutes using AI. Pay in Naira. Hosted for you.

## Live Features (Current)

- ✅ Modern landing page tailored for Nigerian users
- ✅ AI website generation flow (`/build`)
- ✅ Real AI API integration (Groq / DeepSeek ready)
- ✅ Live preview of generated websites
- ✅ Dashboard to manage websites
- ✅ Pricing page in Naira
- ✅ Paystack helper structure ready
- ✅ Mobile-first, clean green-themed design

## How Generation Works

1. User describes their business / website in plain English
2. Backend calls Groq (or DeepSeek) with a carefully designed system prompt
3. AI returns structured JSON (title, sections, colors, contact info, WhatsApp etc.)
4. Frontend renders a beautiful live preview
5. User can save to dashboard and later publish

## Setup

```bash
git clone https://github.com/heidif24/LLM24.git
cd LLM24
npm install
```

Create a `.env.local` file:

```env
GROQ_API_KEY=your_groq_key
# or
DEEPSEEK_API_KEY=your_deepseek_key

AI_PROVIDER=groq
```

Then run:

```bash
npm run dev
```

Open http://localhost:3000

### Getting free AI keys

- **Groq**: https://console.groq.com (very fast, generous free tier)
- **DeepSeek**: https://platform.deepseek.com (cheap and high quality)

## Project Structure

```
src/
  app/
    page.tsx              → Landing page
    build/page.tsx        → Main AI builder
    dashboard/page.tsx    → User dashboard
    preview/[id]/page.tsx → Full website preview
    pricing/page.tsx      → Naira pricing
    login/page.tsx        → Auth skeleton
    api/generate/route.ts → AI generation endpoint
  components/ui/          → Reusable UI components
  lib/
    utils.ts
    paystack.ts           → Payment helpers
```

## Roadmap (Next)

- [ ] Real user authentication (NextAuth or Clerk)
- [ ] Database (Supabase / PlanetScale) to store websites permanently
- [ ] Full Paystack checkout + webhook verification
- [ ] One-click publish to custom subdomain
- [ ] Visual editor (edit text, colors, sections after generation)
- [ ] WhatsApp order / contact button automation
- [ ] Custom domain support

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Groq / DeepSeek for AI
- Paystack (Naira payments)

---

Built with ❤️ for Nigerian businesses, churches, freelancers and creators.
