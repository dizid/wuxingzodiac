# Wu Xing Zodiac

**wuxingzodiac.me** — A comprehensive Chinese zodiac authority site covering all 60 element+animal combinations (5 elements x 12 animals).

Sister site to [firehorse.info](https://firehorse.info).

## Features

- **60 Sign Pages** — Complete content for every element+animal combination (Wood Rat through Water Pig)
- **Element Theming** — UI adapts to each sign's element with 5 distinct color palettes
- **Compatibility Checker** — Pre-computed 60x60 compatibility matrix with shareable pair pages
- **Birth Year Calculator** — Find your Chinese zodiac sign by birth year
- **Sign Directory** — Filterable grid of all 60 signs by element and animal
- **Animal & Element Overview Pages** — 12 animal pages + 5 element pages
- **Blog** — PostgreSQL-backed blog via Netlify Functions
- **Newsletter** — Email subscription endpoint
- **Affiliate Shop** — Personalized product recommendations per sign
- **SEO Optimized** — Static pre-rendering, JSON-LD, Open Graph, auto-generated sitemap

## Tech Stack

- Vue 3 + TypeScript (strict mode)
- Tailwind CSS 4
- Vite + vite-ssg (static pre-rendering)
- Netlify hosting + Netlify Functions
- Neon PostgreSQL (blog)

## Development

```bash
npm install
npm run dev          # Local dev server
npm run build        # Production build with type-checking
npm run test         # Run test suite
```

> Use `npm run dev`, NOT `netlify dev`. The `@netlify/vite-plugin` handles Netlify Function emulation.

## URL Structure

```
/                              Homepage
/zodiac                        Directory of all 60 signs
/zodiac/:slug                  Individual sign (e.g. /zodiac/fire-horse)
/zodiac/animal/:animal         Animal overview (e.g. /zodiac/animal/horse)
/zodiac/element/:element       Element overview (e.g. /zodiac/element/fire)
/compatibility                 Compatibility checker tool
/compatibility/:slugA/:slugB   Shareable compatibility pair page
/calculator                    Birth year sign calculator
/blog                          Blog listing
/blog/:slug                    Blog post
```

## License

Private. All rights reserved.
