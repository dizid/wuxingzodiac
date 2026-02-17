# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**wuxingzodiac.me** — A comprehensive Chinese zodiac authority site covering all 60 element+animal combinations (5 elements x 12 animals). Sister site to firehorse.info. Static content site with SEO pre-rendering and light dynamic features (blog, future horoscopes).

## Stack

- Vue 3 + TypeScript (strict mode)
- Tailwind CSS 4 (`@theme {}` syntax, not `tailwind.config.js`)
- Vite + `@netlify/vite-plugin`
- `vite-ssg` for static pre-rendering of all ~82 pages
- Neon PostgreSQL via `@neondatabase/serverless` (blog only)
- Netlify hosting + Netlify Functions

## Commands

```bash
npm run dev          # Local dev server (NOT netlify dev)
npm run build        # Production build with type-checking
npm run test         # Vitest test suite
npm run test -- path/to/file   # Run single test file
```

## Architecture

### Data Flow

Sign content uses a two-tier lazy-loading strategy:
- **Profiles** (`lib/sign-content/profiles.ts`): Lightweight array of all 60 signs (slug, name, years, tagline) — loaded eagerly for the directory grid and calculator
- **Full content** (`lib/sign-content/<slug>.ts`): Complete sign data per file — lazy-loaded via dynamic `import()` only when visiting a sign page

### Element Theming System

The entire UI adapts to the current zodiac element via the `useElementTheme` composable + CSS custom properties. Five complete palettes (Wood/green, Fire/orange, Earth/amber, Metal/silver, Water/blue) are defined in `styles/main.css` under `@theme {}`. All `Element*` UI components read these properties — the sign page, glass cards, glow effects, particles, and text highlights all shift together.

The homepage uses all 5 elements equally (no single element dominates).

### URL Slug Convention

Sign slugs follow `{element}-{animal}` format: `fire-horse`, `water-rat`, `wood-tiger`. These slugs are used in URLs (`/zodiac/fire-horse`), file names (`fire-horse.ts`), and as lookup keys throughout the codebase.

### Compatibility Matrix

Pre-computed 60x60 matrix in `lib/compatibility-matrix.ts`. No API calls — all client-side calculation. The `useCompatibility` composable provides the interface.

### Monetization

`MonetizationSlot` component handles three types: `'ad'`, `'affiliate'`, `'premium'`. Ad slots sit between sign page sections 3-4 and 7-8. Keep monetization non-intrusive.

### API Layer

Netlify Functions in `netlify/functions/` — currently only blog. Do NOT use `netlify dev`; the Vite plugin (`@netlify/vite-plugin`) handles function emulation.

### SEO

Every page needs: dynamic `<title>` + `<meta description>`, Open Graph tags, JSON-LD schema (Article for sign pages, WebSite for home). The `useSignSeo` composable handles sign pages. Sitemap auto-generated at build time.

### Cross-linking Requirements

Each sign page must link to:
- Top 3 compatible + top 3 challenging signs
- Same animal with other elements (e.g., Fire Horse → Wood Horse, Water Horse...)
- Same element with other animals (e.g., Fire Horse → Fire Rat, Fire Tiger...)
- firehorse.info ↔ wuxingzodiac.me bidirectional links

## Key Patterns

- Sign content files must conform to the `SignContent` interface in `lib/sign-content/types.ts`
- Each sign page has 10 sections rendered as tab-navigable components (`SignHero` through `SignHoroscope`)
- All pages must be pre-renderable (no client-only data fetching for SEO-critical content)
- Pages are lazy-loaded via Vue Router
- Do NOT use Neon Netlify extension — use manual `DATABASE_URL` env var
