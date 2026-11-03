# NaijaBuild

**Beautiful AI Website Builder made specifically for Nigeria** 🇳🇬

Create professional websites in minutes using AI. Pay in Naira. Hosted for you.

---

## Full End-to-End MVP (Current Status)

| Feature                        | Status      | Notes                                      |
|--------------------------------|-------------|--------------------------------------------|
| Landing page                   | ✅ Done     | Nigerian-focused, clean green design       |
| AI website generation          | ✅ Done     | Groq / DeepSeek ready                      |
| Live preview of generated site | ✅ Done     | Real sections, colors, WhatsApp links      |
| User authentication            | ✅ Done     | Register / Login (client-side MVP)         |
| Dashboard                      | ✅ Done     | View, open, delete websites                |
| Save websites permanently      | ✅ Done     | Tied to user account                       |
| Pricing page (Naira)           | ✅ Done     | ₦4,500 / ₦12,000 / ₦25,000                 |
| Checkout & Publish flow        | ✅ Done     | Simulated payment → publish                |
| Published status + subdomain   | ✅ Done     | Marks site as live                         |
| Paystack structure             | ✅ Ready    | Just add your keys                         |

---

## User Journey (End-to-End)

1. Land on homepage → click **Start Building**
2. Describe the website in plain English
3. AI generates a full structured website
4. Preview the result immediately
5. Sign up / Log in
6. Website is saved to dashboard
7. Click **Publish** → choose plan → pay (simulated)
8. Website becomes **Published**

---

## Quick Start

```bash
git clone https://github.com/heidif24/LLM24.git
cd LLM24
npm install
```

Create `.env.local`:

```env
GROQ_API_KEY=gsk_your_key_here
AI_PROVIDER=groq
```

Run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Free AI Keys
- Groq → https://console.groq.com (recommended, very fast)
- DeepSeek → https://platform.deepseek.com

---

## Project Structure

```
src/
  app/
    page.tsx                 → Landing
    build/page.tsx           → AI Builder
    dashboard/page.tsx       → User dashboard
    preview/[id]/page.tsx    → Full website view
    checkout/page.tsx        → Payment + Publish
    pricing/page.tsx         → Pricing
    login/page.tsx           → Auth
    api/generate/route.ts    → AI endpoint
  lib/
    auth.ts                  → Auth + site storage
    paystack.ts              → Payment helpers
    utils.ts
  components/ui/
```

---

## Next Production Steps

1. Replace client-side auth with real backend (NextAuth + database)
2. Move site storage from localStorage to Supabase / Postgres
3. Connect real Paystack (public + secret keys + webhook)
4. Deploy to Vercel
5. Add custom domain support
6. Add visual editor after generation

---

Built with ❤️ for Nigerian businesses, churches, freelancers and creators.

**Repository:** https://github.com/heidif24/LLM24
