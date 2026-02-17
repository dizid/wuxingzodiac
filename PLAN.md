# Plan: Wu Xing Zodiac -- 60 Chinese Zodiac Sign Pages + Monetization

## Context

firehorse.info currently covers the **Fire Horse** (1 of 60 combinations in the Chinese sexagenary cycle). The 12 animals x 5 elements (Wood, Fire, Earth, Metal, Water) = **60 unique zodiac signs** repeating every 60 years.

**Goal:** Build **wuxingzodiac.me** as a comprehensive 60-sign zodiac authority site, with firehorse.info remaining the flagship Fire Horse brand. Two separate codebases, cross-linked for SEO.

**Why now:** 2026 is the Year of the Fire Horse. Searches spike 5-10x around Chinese New Year. Building all 60 signs creates a comprehensive resource capturing long-tail traffic year-round.

---

## Dual Domain Strategy

| Domain | Purpose | Focus |
|--------|---------|-------|
| **firehorse.info** | Flagship Fire Horse brand (existing) | Fire Horse celebration, encyclopedia, 2026 content |
| **wuxingzodiac.me** | Full 60-sign zodiac authority (NEW) | All 60 element+animal combinations, directory, compatibility tools |

**Cross-linking:** firehorse.info links to wuxingzodiac.me/zodiac/fire-horse (and vice versa). Each site builds independent authority but they reinforce each other.

**Technical:** Separate Vue 3 codebases. Same stack (Vue 3, TypeScript, Tailwind CSS 4, Netlify). Shared design language but independent branding -- wuxingzodiac.me gets its own identity emphasizing all 5 elements equally.

---

## wuxingzodiac.me -- URL Structure

```
wuxingzodiac.me/                           -- Homepage: "Discover Your Sign" + element wheel
wuxingzodiac.me/zodiac/                    -- Directory of all 60 signs (filterable grid)
wuxingzodiac.me/zodiac/fire-horse          -- Individual sign page (60 total)
wuxingzodiac.me/zodiac/water-rat
wuxingzodiac.me/zodiac/wood-tiger          -- ... etc
wuxingzodiac.me/zodiac/animal/horse        -- Animal overview (all 5 element variants)
wuxingzodiac.me/zodiac/animal/rat
wuxingzodiac.me/zodiac/element/fire        -- Element overview (all 12 animal variants)
wuxingzodiac.me/zodiac/element/water
wuxingzodiac.me/compatibility/             -- Compatibility checker tool
wuxingzodiac.me/calculator/                -- "What's my sign?" birth year/date calculator
wuxingzodiac.me/blog/                      -- Blog for SEO content + trending topics
```

**Total pages: ~82** (60 signs + 12 animal overviews + 5 element overviews + directory + compatibility + calculator + blog + home)

---

## Content Per Sign Page (10 sections)

Each of the 60 sign pages includes:

| # | Section | Content | Monetization Hook |
|---|---------|---------|-------------------|
| 1 | **Hero** | Element-themed hero, animal art, Chinese name (e.g. 丙午), years born | - |
| 2 | **Personality** | Core traits, strengths, weaknesses, element influence on base animal | - |
| 3 | **Compatibility** | Best/worst matches with scores, link to full matrix | Premium: detailed report |
| 4 | **Career & Finance** | Ideal careers, financial strengths, money tips | Affiliate: career books |
| 5 | **Love & Relationships** | Love style, ideal partner traits, dating tips | Affiliate: relationship services |
| 6 | **Health & Wellness** | Body areas to watch, exercises, diet, mental health | Affiliate: wellness products |
| 7 | **Lucky Elements** | Numbers, colors, directions, gemstones, flowers | Affiliate: crystals, jewelry |
| 8 | **Famous People** | Notable people born under that sign with profession | - |
| 9 | **Cultural Significance** | Mythology, symbolism, modern interpretation | Affiliate: astrology books |
| 10 | **Horoscope** | Daily/monthly/yearly (Phase 2, placeholder initially) | Premium: subscription |

---

## 5 Element Themes

Each element gets its own complete visual identity:

| Element | Primary Color | Glow Color | Mood | CSS Prefix |
|---------|--------------|------------|------|------------|
| **Wood** | Green (#22c55e) | rgba(34, 197, 94, 0.3) | Growth, nurturing | `wood-*` |
| **Fire** | Orange (#f97316) | rgba(249, 115, 22, 0.3) | Passionate, intense | `fire-*` |
| **Earth** | Amber (#a16207) | rgba(161, 98, 7, 0.3) | Stable, grounding | `earth-*` |
| **Metal** | Silver (#94a3b8) | rgba(148, 163, 184, 0.3) | Strong, determined | `metal-*` |
| **Water** | Blue (#3b82f6) | rgba(59, 130, 246, 0.3) | Wise, fluid | `water-*` |

Applied via `useElementTheme` composable + CSS custom properties. The entire sign page (glass cards, glow effects, text highlights, particles) shifts to the element's palette.

**Homepage** uses all 5 elements in an interactive wheel/grid -- no single element dominates.

---

## Technical Architecture

### Stack
- Vue 3 + TypeScript (strict mode)
- Tailwind CSS 4 (`@theme {}` syntax)
- Vite + `@netlify/vite-plugin`
- Netlify hosting
- Neon PostgreSQL (for blog + future dynamic content)
- `vite-ssg` for pre-rendering (SEO)

### Project Structure
```
wuxingzodiac/
  src/
    pages/
      HomePage.vue                  -- Element wheel, "Find Your Sign" CTA
      ZodiacDirectoryPage.vue       -- Filterable grid of all 60 signs
      ZodiacSignPage.vue            -- /zodiac/:slug (dynamic, loads sign content)
      ZodiacAnimalPage.vue          -- /zodiac/animal/:animal
      ZodiacElementPage.vue         -- /zodiac/element/:element
      CompatibilityPage.vue         -- Compatibility checker tool
      CalculatorPage.vue            -- Birth year/date → sign calculator
      BlogPage.vue                  -- Blog listing
      BlogPostPage.vue              -- Single blog post
      NotFoundPage.vue
    components/
      layout/
        NavBar.vue                  -- Element-aware nav with zodiac dropdown
        FooterBar.vue               -- Sign directory links, element navigation
      ui/
        ElementGlassCard.vue        -- Glass card adapting to current element theme
        ElementText.vue             -- Gradient text adapting to element
        ElementButton.vue           -- CTA button in element colors
        ElementParticles.vue        -- Background particles in element colors
      zodiac/
        SignHero.vue                -- Hero with animal silhouette + element styling
        SignTraits.vue              -- Personality traits grid
        SignCompatibility.vue       -- Compatibility matrix/cards
        SignCareer.vue              -- Career guidance section
        SignLove.vue                -- Relationships section
        SignHealth.vue              -- Health & wellness section
        SignLucky.vue               -- Lucky numbers/colors/gems section
        SignFamous.vue              -- Famous people cards
        SignCulture.vue             -- Cultural significance section
        SignHoroscope.vue           -- Horoscope section (placeholder → Phase 2)
        SignNavTabs.vue             -- Section tab navigation
        SignCard.vue                -- Sign card for directory grid
        ElementWheel.vue            -- Interactive 5-element selector for homepage
        AnimalCarousel.vue          -- 12-animal horizontal scroller
        MonetizationSlot.vue        -- Ad/affiliate placeholder component
    composables/
      useElementTheme.ts            -- Element-specific colors, glows, borders
      useSignData.ts                -- Load sign content by slug (lazy)
      useSignSeo.ts                 -- Dynamic meta tags, JSON-LD, Open Graph
      useAnalytics.ts               -- GA4 event tracking
      useCompatibility.ts           -- Compatibility calculation logic
    lib/
      sign-content/
        index.ts                    -- Registry + lazy-loading helpers
        types.ts                    -- SignContent, SignProfile interfaces
        profiles.ts                 -- All 60 lightweight SignProfile objects
        fire-horse.ts               -- Full content for Fire Horse
        water-rat.ts                -- Full content for Water Rat
        ... (60 files total)
      zodiac-data.ts                -- Animals, elements, year mappings, compatibility formulas
      compatibility-matrix.ts       -- 60x60 compatibility scores
    styles/
      main.css                      -- Tailwind @theme with all 5 element palettes
    types/
      index.ts                      -- All shared interfaces
    router/
      index.ts                      -- All routes, lazy-loaded pages
  netlify/
    functions/
      blog-posts.ts                 -- Blog API
  public/
    sitemap.xml                     -- Generated at build time
    robots.txt
    og/                             -- OG images per sign (generated)
```

### Data Strategy
- **Sign content:** Static TypeScript modules, one per sign, lazy-loaded via dynamic `import()`
- **Profiles:** Lightweight array of all 60 profiles (slug, name, years, tagline) loaded eagerly for directory
- **Compatibility:** Pre-computed matrix in TypeScript, no API calls needed
- **Blog:** Neon PostgreSQL via Netlify Functions (same pattern as firehorse.info)
- **Horoscopes:** Future phase -- API-driven or AI-generated daily content

### Content Generation (AI-assisted)
1. Define strict TypeScript interfaces for all content sections
2. Use Claude API to generate content for each of the 60 signs based on:
   - Animal base traits (from existing zodiac-data.ts)
   - Element modifiers (how each element changes the animal's nature)
   - Traditional Chinese astrology references
   - Compatibility formulas
3. Output as TypeScript files matching the SignContent interface
4. Human review + polish, prioritizing: Dragon, Tiger, Horse, Rat (most popular)

### SEO Strategy
- **Pre-rendering:** `vite-ssg` generates static HTML at build time for all 82+ pages
- **Meta tags:** Dynamic per-page title, description, Open Graph, Twitter Cards
- **JSON-LD:** Article schema for each sign page, WebSite schema for home
- **Sitemap:** Auto-generated from route list at build time
- **Internal linking:** Each sign page links to:
  - Top 3 compatible signs
  - Top 3 challenging signs
  - Same animal, other elements (e.g., Fire Horse → Wood Horse, Water Horse...)
  - Same element, other animals (e.g., Fire Horse → Fire Rat, Fire Tiger...)
- **Cross-domain:** firehorse.info ↔ wuxingzodiac.me links (both directions)

---

## Monetization (Ads + Affiliates at Launch)

### Ad Placements (Non-intrusive)
- **In-content:** Between sections 3-4 and 7-8 on sign pages (2 ad slots)
- **Sidebar:** Desktop-only sticky ad alongside sign content
- **Directory page:** Sponsored sign highlight card
- **Start with:** Google AdSense ($2-5 CPM), upgrade to Mediavine at 25K pageviews/month

### Affiliate Integration
| Section | Affiliate Products | Program |
|---------|-------------------|---------|
| Lucky Elements | Crystals, gemstones, zodiac jewelry | Amazon Associates, Psychic Tree |
| Career | Astrology career books, planning guides | Amazon Associates |
| Culture | Chinese astrology books, feng shui items | Amazon Associates |
| Compatibility | Detailed compatibility readings | Astro-Charts (50% commission) |
| Sidebar | Psychic reading services | Keen ($100/sub), Kasamba ($125-150/sub) |

### MonetizationSlot Component
```vue
<!-- Renders differently based on type: 'ad' | 'affiliate' | 'premium' -->
<MonetizationSlot type="ad" position="mid-content" />
<MonetizationSlot type="affiliate" :products="luckyGemstones" />
```

---

## Implementation Phases

### Phase 0: New Project Bootstrap -- DONE
1. ~~Create local folder: `~/DEV/wuxingzodiac`~~
2. ~~`npm create vue@latest` -- Vue 3 + TypeScript + Router + Vitest~~
3. ~~Install deps: Tailwind CSS 4, @netlify/vite-plugin, @neondatabase/serverless~~
4. ~~`git init` + create GitHub repo (`wuxingzodiac`)~~
5. ~~Set up Netlify site linked to the new repo~~
6. ~~Domain: wuxingzodiac.me (already registered)~~
7. **This is a completely separate project from firehorse.info** -- own repo, own folder, own deployment

### Phase 1: Foundation -- DONE
1. ~~Define all TypeScript types (SignProfile, SignContent, etc.) in `types/index.ts`~~
2. ~~Create 5 element color palettes in main.css (@theme block)~~
3. ~~Build `useElementTheme` composable~~
4. ~~Build base UI components (ElementGlassCard)~~
5. ~~Set up router with all routes + slug validation guards~~

### Phase 2: Core Pages -- DONE
1. ~~Build HomePage with element wheel / "Find Your Sign" experience~~
2. ~~Build ZodiacDirectoryPage with filterable 60-sign grid~~
3. ~~Build CalculatorPage (birth year/date → sign lookup)~~
4. ~~Build ZodiacSignPage shell with tab navigation between sections~~
5. ~~Build ZodiacAnimalPage and ZodiacElementPage overview templates~~
6. ~~Build NavBar + FooterBar with zodiac navigation~~

### Phase 3: Sign Section Components -- DONE
1. ~~Build all 10 section components (SignHero → SignHoroscope)~~
2. ~~Build MonetizationSlot component~~
3. ~~Create complete Fire Horse content (adapted from firehorse.info)~~
4. ~~Wire up end-to-end: directory → sign page → all sections → cross-links~~
5. ~~Build CompatibilityPage tool with shareable pair URLs~~

### Phase 4: Content + Monetization -- DONE
1. ~~Generate all 60 sign content files (60 .ts files in sign-content/)~~
2. ~~Build and verify 60x60 compatibility matrix~~
3. ~~Create profiles.ts with all 60 lightweight profiles~~
4. ~~Build affiliate-config.ts with product configurations~~
5. ~~Build SignShop component + sign-shop.ts for per-sign product recommendations~~
6. ~~Build blog infrastructure (BlogPage, BlogPostPage, blog-posts.ts function)~~
7. ~~Build newsletter subscription (NewsletterForm, newsletter-subscribe.ts function)~~
8. ~~Add ShareButtons component for social sharing~~

### Phase 5: SEO + Analytics -- DONE
1. ~~Add vite-ssg for pre-rendering all pages~~
2. ~~Auto-generate sitemap.xml at build time (vite-ssg-sitemap)~~
3. ~~Implement dynamic meta tags + JSON-LD per page (useSignSeo, useCompatibilitySeo)~~
4. ~~Set up Google Analytics GA4 (G-5M7CY55LL8)~~
5. ~~Add useAnalytics composable for event tracking~~

### Phase 6: Remaining TODO
1. Integrate Google AdSense (ad slots exist, no AdSense code yet)
2. Set up cross-linking between firehorse.info ↔ wuxingzodiac.me
3. Submit sitemap to Google Search Console
4. Human review of sign content (prioritize Dragon, Tiger, Horse, Rat, Snake, Monkey)
5. Horoscope section implementation (currently placeholder/null)
6. OG image generation per sign

---

## firehorse.info Updates (Minimal)

The existing site only needs:
- Add a "Explore All 60 Signs" link/banner pointing to wuxingzodiac.me
- Add a card on the homepage promoting the full zodiac directory
- Update footer with link to wuxingzodiac.me

No structural changes to firehorse.info codebase.

---

## Verification

1. **Dev server:** `npm run dev` -- navigate all routes, verify 5 element themes
2. **Build:** `npm run build` -- type-checking passes, no errors
3. **Pre-render:** Verify static HTML generated for all 82+ pages
4. **Tests:** Vitest for sign data loading, slug parsing, compatibility calculations, element theming
5. **SEO audit:** Meta tags, JSON-LD, sitemap validation, Lighthouse score 90+ performance / 100 SEO
6. **Cross-links:** Every sign page links to 10+ other pages (compatible signs, same animal, same element)
7. **Mobile:** All pages responsive, tabs navigable, content readable
8. **Monetization:** Ad slots render, affiliate links valid, MonetizationSlot component working
9. **Cross-domain:** firehorse.info links to wuxingzodiac.me and back correctly
