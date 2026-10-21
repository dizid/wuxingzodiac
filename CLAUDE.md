# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**wuxingzodiac.me** — A comprehensive Chinese zodiac authority site covering all 60 element+animal combinations (5 elements x 12 animals). Sister site to firehorse.info. Static content site with SEO pre-rendering and light dynamic features (blog, newsletter, future horoscopes).

## Stack

- Vue 3 + TypeScript (strict mode)
- Tailwind CSS 4 (`@theme {}` syntax, not `tailwind.config.js`)
- Vite + `@netlify/vite-plugin`
- `vite-ssg` for static pre-rendering of all ~82 pages
- Neon PostgreSQL via `@neondatabase/serverless` (blog only)
- Netlify hosting + Netlify Functions
- `@unhead/vue` for dynamic meta tags
- `marked` + `@tailwindcss/typography` for markdown rendering

## Commands

```bash
npm run dev          # Local dev server (NOT netlify dev)
npm run build        # Production build with type-checking (vue-tsc + vite-ssg)
npm run preview      # Preview production build
npm run test         # Vitest test suite (single run)
npm run test:watch   # Vitest in watch mode
```

## Project Structure

```
src/
  pages/                          # Route-level page components
    HomePage.vue                  # Element wheel, "Find Your Sign" CTA
    ZodiacDirectoryPage.vue       # Filterable grid of all 60 signs
    ZodiacSignPage.vue            # /zodiac/:slug (loads sign content)
    ZodiacAnimalPage.vue          # /zodiac/animal/:animal
    ZodiacElementPage.vue         # /zodiac/element/:element
    CompatibilityPage.vue         # Compatibility checker + shareable pair pages
    CalculatorPage.vue            # Birth year/date → sign calculator
    BlogPage.vue / BlogPostPage.vue
    NotFoundPage.vue
  components/
    layout/  NavBar.vue, FooterBar.vue
    ui/      ElementGlassCard.vue, NewsletterForm.vue, ShareButtons.vue
    zodiac/  SignHero, SignTraits, SignCompatibility, SignCareer, SignLove,
             SignHealth, SignLucky, SignFamous, SignCulture, SignHoroscope,
             SignNavTabs, BlueprintCTA
    blog/    BlogCard.vue
    compatibility/  CompatibilityPicker.vue, CompatibilityResults.vue
  composables/
    useElementTheme.ts            # Element-specific colors via CSS custom props
    useSignSeo.ts                 # Sign page meta tags + JSON-LD
    useCompatibilitySeo.ts        # Compatibility page SEO
    useAnalytics.ts               # GA4 event tracking (G-5M7CY55LL8)
  lib/
    sign-content/
      index.ts                    # import.meta.glob lazy-loader
      profiles.ts                 # All 60 lightweight SignProfile objects
      <slug>.ts                   # 60 individual sign content files
    zodiac-data.ts                # Animals, elements, year mappings
    compatibility-matrix.ts       # Pre-computed 60x60 compatibility scores
    db.ts                         # Neon PostgreSQL connection
    markdown.ts                   # Markdown rendering utility
  types/index.ts                  # All shared TypeScript interfaces
  styles/main.css                 # Tailwind @theme with 5 element palettes
  router/index.ts                 # All routes with slug validation guards
netlify/functions/
  blog-posts.ts                   # Blog CRUD API
  newsletter-subscribe.ts         # Newsletter subscription endpoint
```

## Architecture

### Data Flow

Sign content uses a two-tier lazy-loading strategy:
- **Profiles** (`lib/sign-content/profiles.ts`): Lightweight array of all 60 signs (slug, name, years, tagline) — loaded eagerly for the directory grid and calculator
- **Full content** (`lib/sign-content/<slug>.ts`): Complete sign data per file — lazy-loaded via `import.meta.glob` dynamic chunks, only when visiting a sign page

### Element Theming System

The entire UI adapts to the current zodiac element via the `useElementTheme` composable + CSS custom properties. Five complete palettes (Wood/green, Fire/orange, Earth/amber, Metal/silver, Water/blue) are defined in `styles/main.css` under `@theme {}`. All `Element*` UI components read these properties — the sign page, glass cards, glow effects, particles, and text highlights all shift together.

The homepage uses all 5 elements equally (no single element dominates).

### URL Slug Convention

Sign slugs follow `{element}-{animal}` format: `fire-horse`, `water-rat`, `wood-tiger`. These slugs are used in URLs (`/zodiac/fire-horse`), file names (`fire-horse.ts`), and as lookup keys throughout the codebase.

### Route Validation

Router guards in `router/index.ts` validate all dynamic params against known slugs/animals/elements. Invalid slugs redirect to the 404 page. Compatibility pair URLs enforce alphabetical slug order for canonical URLs.

### Compatibility System

- Pre-computed 60x60 matrix in `lib/compatibility-matrix.ts` — all client-side, no API calls
- Shareable compatibility pages at `/compatibility/:slugA/:slugB` with dedicated SEO via `useCompatibilitySeo`
- Standalone picker tool at `/compatibility`

### Monetization

- Personalized PDF reading via Stripe Checkout (see Personalized Readings below)
- Fourthwall merch (`SignMerchCTA`, `/shop`)
- Promoten/PlugAff inbound affiliate tracking (`index.html`, `netlify.toml` CSP, `create-checkout.ts` cookie → Stripe metadata)
- No outbound affiliate links or ads (Amazon Associates removed 2026-10-13). Keep monetization non-intrusive.

### API Layer

Netlify Functions in `netlify/functions/`:
- `blog-posts.ts` — Blog CRUD API (Neon PostgreSQL)
- `newsletter-subscribe.ts` — Newsletter subscription endpoint
- `create-checkout.ts` — Validates reading intake, creates Stripe Checkout session (all inputs in metadata)
- `stripe-webhook.ts` — Records order in `report_orders`, queues reading generation, GA4 purchase event
- `generate-reading-background.ts` — Background function: Claude text → Playwright PDF → emailed via Resend (nothing stored)
- `download-report.ts` — Status for `/report/download?session_id=` (reading: generating/delivered/failed) + legacy Blueprint PDF download (`?session=`)

Do NOT use `netlify dev`; the Vite plugin (`@netlify/vite-plugin`) handles function emulation.

### Personalized Readings

Replaces the static per-sign Elemental Blueprint PDFs (legacy orders still download them).

- **Flow:** `BlueprintCTA` → `ReadingIntakeForm` (name, birth date, email, gift) → `create-checkout` → Stripe → `stripe-webhook` (paid) → `generate-reading-background` → PDF emailed to the buyer. `/report/download` just shows status ("in your inbox")
- **Nothing is stored:** inputs live in Stripe session metadata; the PDF exists only in memory until Resend sends it. `report_orders` tracks delivery state only (`reading_status` queued/generating/delivered/failed, `reading_attempts`, `reading_error`, `delivered_at` — migration `scripts/migrations/002-reading-delivery.sql`). `reading_status IS NULL` = legacy Blueprint order
- **Engine:** `src/lib/readings/` — `types.ts` + `sign.ts` are browser-safe (validation, Stripe metadata codec, birth date → sign). `server/` is Node-only (excluded from the app tsconfig, checked by `tsconfig.server.json`): context, Claude call (`claude-sonnet-5-5`, effort `medium`, structured outputs, streaming), HTML templates, Playwright render, `orders.ts` (DB state), `email.ts` (Resend)
- **Reading types:** one `server/prompts/<type>.ts` + `server/templates/<type>.ts` per type, registered in `server/registry.ts`. Only `personal` is live; `relationship`, `year-2027`, `child` are declared in `types.ts` with `available: false`
- **Safety / cost:** background function re-verifies payment with Stripe and atomically claims the order (max 3 attempts, retried in-process 30 s apart — Netlify does NOT reliably retry background functions). Final failure emails `SUPPORT_EMAIL`. See `AI-COST-RISK.md`. All text is HTML-escaped; rendering only allows Google Fonts requests
- **Element chart:** element "percentages" from `sign-visual-data.ts` are independent 0–100 strength scores (same as the site's pentagon), shown as `/100` — never as shares
- **Chromium on Netlify:** `@sparticuz/chromium-min` (the full package exceeds Lambda's 50 MB zipped limit) downloads the pack from GitHub on cold start; override with `CHROMIUM_PACK_URL`. Keep `playwright-core` and `@sparticuz/chromium-min` versions pinned together
- **Server code imports:** shared `src/` files used by functions must use relative runtime imports — the `@/` alias only works in Vite (type-only `@/` imports are fine)
- **Sample PDF:** `npx tsx scripts/generate-sample-reading.ts --name "Marc" --date 1984-06-12 [--send-to you@example.com]` (`--from-json` re-renders saved text without calling Claude). Output in `scripts/sample-readings/` (gitignored)
- **Env vars:** `ANTHROPIC_API_KEY`, `RESEND_API_KEY` (send-only, wuxingzodiac.me), `SUPPORT_EMAIL` (alerts + reply-to), `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`, `DATABASE_URL`, optional `CHROMIUM_PACK_URL`
- **On/off switch:** `READING_LIVE=true` (Netlify env, builds + functions; set 2026-10-21) shows the order form on `/reading` and lets `create-checkout` start a checkout. Unset = `/reading` shows the launch waitlist and `create-checkout` returns 410. Needs a redeploy after changing. The reading is only sold on `/reading` (sign/calculator/result pages link there via `ReadingCTA`)
- **Testing on Netlify without real money:** draft deploy with per-deploy Stripe test env — `npx netlify-cli@27 deploy --alias readings-test --env STRIPE_SECRET_KEY=sk_test_… --env STRIPE_PRICE_ID=<test price> --env STRIPE_WEBHOOK_SECRET=<stripe listen --print-secret> --env SITE_URL=https://readings-test--wuxingzodiac.netlify.app`, then `stripe listen --forward-to <draft>/api/stripe-webhook` and pay with card 4242 4242 4242 4242. Note: the draft still uses the production `DATABASE_URL`. Add `--env READING_LIVE=true` and build with `READING_LIVE=true` in the shell. As of 2026-10-21 every local Stripe test key (`.env`, Stripe CLI login) had expired, and a per-deploy `--env STRIPE_WEBHOOK_SECRET` did not reach the draft's webhook function (the other overrides did)

### SEO

Every page needs: dynamic `<title>` + `<meta description>`, Open Graph tags, JSON-LD schema (Article for sign pages, WebSite for home). Composables:
- `useSignSeo` — sign pages
- `useCompatibilitySeo` — compatibility pair pages
- `useAnalytics` — GA4 event tracking

Sitemap auto-generated at build time via `vite-ssg-sitemap`.

### Cross-linking Requirements

Each sign page must link to:
- Top 3 compatible + top 3 challenging signs
- Same animal with other elements (e.g., Fire Horse → Wood Horse, Water Horse...)
- Same element with other animals (e.g., Fire Horse → Fire Rat, Fire Tiger...)
- firehorse.info ↔ wuxingzodiac.me bidirectional links

## Key Patterns

- Sign content files must conform to the `SignContent` interface in `types/index.ts`
- Each sign page has 10+ sections rendered as tab-navigable components (SignHero → SignMatchesV2 → BlueprintCTA → SignMerchCTA)
- All pages must be pre-renderable (no client-only data fetching for SEO-critical content)
- Pages are lazy-loaded via Vue Router
- Sign content loaded via `import.meta.glob` for proper Vite chunk splitting
- Do NOT use Neon Netlify extension — use manual `DATABASE_URL` env var

## Deployment

- **Domain:** https://wuxingzodiac.me (Netlify DNS zone `6993c75e0d1a62592643d6ce`)
- **Netlify:** site `wuxingzodiac`, ID `d2d7189e-e380-4f0d-8abf-9bf7c739260a`, team `dizid` (account ID `5a893ecd48769b7222157c43`); functions region us-east-2; env vars set for all contexts (non-secret)
- **GitHub:** https://github.com/dizid/wuxingzodiac (branch `main` auto-deploys)
- **Neon:** project `still-resonance-44574632` (name `wuxingzodiac`, aws-us-east-2), branch `br-royal-river-ajv8s3ss` (main), database `neondb`, role `neondb_owner`, endpoint `ep-sparkling-sky-ajhsmw8w` (pooled) — dedicated to this site (`blog_posts`, `report_orders`). Password rotated 2026-10-21; `DATABASE_URL` is the only Netlify var using it (plus local `.env`)
- **Stripe:** account `acct_1STUbg8gBja0qkMx` (Dizid, shared with other projects); live webhook `we_1T1oI88gBja0qkMxcYlrrl3F` → `/api/stripe-webhook` (events: `checkout.session.completed`, `checkout.session.async_payment_succeeded`); product `prod_TznkMqLSwRJh4g` ("WuXing Personal Reading"), live price `price_1T1o9B8gBja0qkMxsDGlLY57` ($9.90); test price `price_1UQ2vm8gBja0qkMxWMghpgi8`
- **Resend:** domain `wuxingzodiac.me` (ID `718db53b-ea69-480b-b367-6675b95baa0a`, eu-west-1, verified); sender `readings@wuxingzodiac.me`; API key `wuxingzodiac-readings` is send-only for this domain
- **GA4:** `G-5M7CY55LL8`
