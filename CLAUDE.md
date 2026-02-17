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
             SignNavTabs, SignShop, MonetizationSlot
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
    affiliate-config.ts           # Affiliate product configurations
    sign-shop.ts                  # Auto-generated shop categories per sign
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

- `MonetizationSlot` component handles three types: `'ad'`, `'affiliate'`, `'premium'`
- `SignShop` component renders personalized product recommendations per sign
- Affiliate config in `lib/affiliate-config.ts`, shop logic in `lib/sign-shop.ts`
- Amazon Associates ID: `wuxing20-20`
- Ad slots sit between sign page sections 3-4 and 7-8. Keep monetization non-intrusive.

### API Layer

Netlify Functions in `netlify/functions/`:
- `blog-posts.ts` — Blog CRUD API (Neon PostgreSQL)
- `newsletter-subscribe.ts` — Newsletter subscription endpoint

Do NOT use `netlify dev`; the Vite plugin (`@netlify/vite-plugin`) handles function emulation.

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
- Each sign page has 10+ sections rendered as tab-navigable components (SignHero → SignHoroscope + SignShop)
- All pages must be pre-renderable (no client-only data fetching for SEO-critical content)
- Pages are lazy-loaded via Vue Router
- Sign content loaded via `import.meta.glob` for proper Vite chunk splitting
- Do NOT use Neon Netlify extension — use manual `DATABASE_URL` env var
