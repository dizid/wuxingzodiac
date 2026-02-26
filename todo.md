# TODO

## In Progress: Merch & Revenue Maximization

Full plan: `.claude/plans/mighty-giggling-penguin.md`

### Phase 0: Fix Existing Revenue — DONE
- [x] Mount BlueprintCTA on ZodiacSignPage, ResultPage, CalculatorPage
- [x] Add MonetizationSlots for `love` and `health` sections
- [x] Fix download-report.ts (added `?action=check` JSON mode, changed expiry 7→30 days)
- [x] Fix ReportDownloadPage.vue (two-step check-then-download flow)
- [x] GA4 purchase event via Measurement Protocol in stripe-webhook.ts

### Phase 1: Personalization Engine — DONE
- [x] `useUserSign` composable (localStorage, SSR-safe, shared singleton)
- [x] Auto-save sign from Calculator (`setUserSign(slug)`)
- [x] Personalized welcome block on HomePage
- [x] "My Sign" link in NavBar (when sign known)
- [x] Newsletter sign-segmentation (form + backend Buttondown tags)

### Phase 2: Shopify + Printful Integration — DONE (code only)
- [x] `src/types/merch.ts` — TypeScript interfaces
- [x] `src/lib/shopify.ts` — Storefront API GraphQL client
- [x] `src/composables/useShopify.ts` — cart, products, checkout
- [x] 6 merch components: MerchProductCard, MerchGrid, MerchCartDrawer, MerchProductModal, MerchSignSection, TrustBar
- [x] ShopPage.vue at `/shop` with element filters + personalized section
- [x] NavBar: Shop link + cart icon badge (desktop + mobile)
- [x] ZodiacSignPage: MerchSignSection + MerchCartDrawer integrated
- [x] Type check passes cleanly

### Phase 2.5: Demo Mode & Design Prompts — DONE
- [x] `src/lib/demo-products.ts` — 25 mock products (5 elements × 5 types) using OG images
- [x] `useShopify.ts` demo fallback — loads mock products when Shopify not configured
- [x] `ShopPage.vue` — removed "Coming Soon" gate, shows full UI with "Preview Mode" badge
- [x] `MerchSignSection.vue` — removed `configured` guard, works in demo mode
- [x] `MerchCartDrawer.vue` — "Preview Only" checkout button, error display
- [x] `src/lib/design-prompts.ts` — 60 ready-to-paste ImageFX prompts with `buildPrompt(element, animal)`
- [x] Type check passes cleanly

### Phase 3: Conversion & Product Experience — TODO
- [ ] Image gallery zoom in product modal
- [ ] Visual variant swatches (color circles, size pills)
- [ ] "Only X left" urgency indicator (Shopify inventory)
- [ ] Size guide popup per product type
- [ ] Quick-add to cart from sign pages
- [ ] Merch analytics events (view, add-to-cart, checkout)

### Phase 4: Cross-Sell, Bundles & Email — TODO
- [ ] Element Bundle ($39.99): Tee + Mug + Pin
- [ ] Zodiac Identity Kit ($54.99): Tee + Hoodie + Blueprint PDF
- [ ] Compatibility Gift Set ($29.99): Two mugs for a pair
- [ ] Cross-sell: post-purchase merch, compatibility "His & Hers", cart drawer upsell
- [ ] Email sequences: Blueprint buyers, newsletter sign-segmented

### Phase 5: SEO & Social — TODO
- [ ] Shop page JSON-LD Product schema
- [ ] OG image for `/shop`
- [ ] Add `/shop` to SSG routes
- [ ] Product schema.org markup
- [ ] Breadcrumb schema

### Infrastructure — NOT STARTED (manual)
- [ ] Create Shopify store + connect Printful
- [ ] Enable Storefront API → get `VITE_SHOPIFY_STORE_DOMAIN`, `VITE_SHOPIFY_STOREFRONT_TOKEN`
- [ ] Run DB migration: `scripts/migrations/001-report-orders.sql`
- [ ] Create Stripe product + $9.99 price → `STRIPE_PRICE_ID`
- [ ] Register Stripe webhook for `checkout.session.completed`
- [ ] Set env vars: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`, `SITE_URL`, `GA4_API_SECRET`
- [ ] Build Blueprint PDF generation pipeline (60 PDFs via Claude API + PDF lib)
- [ ] Upload PDFs to Netlify Blobs

### Merch Art Production — PROMPTS READY
- [x] Design prompt library created (`src/lib/design-prompts.ts`)
- [x] MVP prompts: Wood Tiger, Fire Dragon, Earth Ox, Metal Horse, Water Snake
- [ ] Fire Horse style development (Google ImageFX, 50+ variations → 3-5 finalists)
- [ ] Lock prompt formula + Figma typography template
- [ ] MVP: 5 Element Tees + 5 Element Mugs (10 products) → Shopify upload
- [ ] Fire Horse Launch Collection (premium tee, art print, mug)
- [ ] Batch remaining 55 sign artworks
- [ ] Full catalog upload (60 tees + 60 mugs + hoodies + pins)

### Remaining Phase 0 Items
- [ ] Upgrade Amazon affiliate links from search URLs to specific ASINs

---

## Completed

### Email Security DNS Records (2026-02-26)

Added SPF + DMARC to all 15 Netlify-managed domains. No domain had proper anti-spoofing protection before.

| Category | Domains | SPF | DMARC |
|----------|---------|-----|-------|
| Pure websites (7) | wuxingzodiac.me, readmymind.me, belastingdienstwoordenboek.lol, statpilot.mom, google4games.com, happyroam.travel, launchpilot.marketing | `v=spf1 -all` | `p=reject` |
| Clerk-only (2) | hirefire.dev, firehorse.info | `v=spf1 -all` | `p=reject` |
| Resend/SES senders (4) | parodyhumor.lol, sizzle.love, tunecraft.music, unplugged.cv | `v=spf1 -all` | `p=reject` (upgraded from `p=none`) |
| ImprovMX email (2) | dizid.com, tnxz.nl | `include:spf.improvmx.com` (+sendgrid for dizid) `~all` | `p=quarantine` |

**Bugs fixed:**
- unplugged.cv had DMARC on root domain instead of `_dmarc.unplugged.cv` — deleted and recreated correctly

**Follow-up:** Once dizid.com and tnxz.nl email confirmed working with `p=quarantine`, upgrade to `p=reject`.
