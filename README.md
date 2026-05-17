# Energy Planner

Marketing site for Energy Planner Ltd — independent UK business energy procurement, audits and bill validation. Built by JCL Marketing / Orriq.

## Stack

- Next.js 16 (App Router, React 19, Turbopack)
- TypeScript
- Tailwind CSS v4 (CSS-first config in `globals.css`)
- Framer Motion + custom `Reveal` IntersectionObserver
- Supabase (Hostinger self-hosted, `t_energyplanner` tenant) for quote form submissions
- EmailIt for transactional email
- Vercel for hosting

## Local development

```
npm install
npm run dev
# http://localhost:3000
```

## Environment variables

Required for production form submissions (optional in dev — submissions log to console without them):

```
SUPABASE_URL=https://srv1581646.hstgr.cloud
SUPABASE_SERVICE_KEY=<service-role-key>
EMAILIT_API_KEY=<emailit-api-key>
```

The quote API at `src/app/api/quote/route.ts` writes to the `leads` table under the `t_energyplanner` schema profile, mirroring the multi-tenant pattern used by other JCL projects on the same Hostinger Supabase instance.

## SEO foundations

Every page ships with:
- Unique title + meta description
- Open Graph + Twitter card metadata
- BreadcrumbList JSON-LD
- Service / FAQPage / Article JSON-LD where relevant
- Canonical URL

Site-wide:
- `/sitemap.xml` (auto-generated from `app/sitemap.ts`)
- `/robots.txt` (auto-generated)
- `/llms.txt` (markdown index for AI crawlers)

## Adding a new guide

1. Add metadata to `src/lib/guides.ts`
2. Create `src/content/guides/my-new-guide.tsx` exporting a body component
3. Wire it into `src/content/guides/index.tsx`
4. Route `/guides/my-new-guide` auto-generates

## Pillar pages

Use the `<PillarPage />` component from `src/components/sections/PillarPage.tsx`. See `src/app/business-gas/page.tsx` for the canonical example.

## Deferred for future phases

- Sector pages: `/business-energy/manufacturing/`, `/hospitality/`, `/care-homes/`
- Local pages: `/business-energy-broker/lancashire/`, `/blackpool/`, `/preston/`, `/north-west/`
- Remaining 4 cornerstone guides (currently stubs with answer blocks)
- Trustpilot widget once profile is registered
- Real accreditation badges once UIA approved
- OG image generation

## Production deploy

Pushed to GitHub `jclmarketing/energyplanner`. Auto-deploys to Vercel on push to `main`. Preview URL only. Do not point DNS at this until client approval.
