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

### Phase 2: Fourthwall Shop Integration — DONE
Replaced Shopify Storefront API (~1,970 lines) with lightweight static catalog linking to Fourthwall.
- [x] `src/lib/shop-products.ts` — Static catalog: 60 products (1 tee per sign) from `signProfiles`
- [x] `ShopProductCard.vue` — Simple card: image, title, price, "Shop Now" / "Coming Soon"
- [x] `MerchGrid.vue` — Updated for `ShopProduct` type
- [x] `ShopPage.vue` — Rewritten: fully static, SSR-safe, element filter tabs
- [x] `SignMerchCTA.vue` — Sign page merch CTA with product preview + "Browse all" link
- [x] `TrustBar.vue` — Updated copy (Secure Payment, Worldwide Shipping)
- [x] NavBar: removed cart icon (Fourthwall handles cart), kept Shop link
- [x] ZodiacSignPage: `SignMerchCTA` replaces old `MerchSignSection`
- [x] Deleted 9 Shopify files, cleaned up e2e tests
- [x] `design-prompts.ts` kept — 60 ready-to-paste ImageFX prompts
- [x] Build + type-check passes cleanly

### Phase 3: Fourthwall Store Setup — TODO (manual)
- [ ] Create Fourthwall account at fourthwall.com
- [ ] Set store name: "Wu Xing Zodiac" or "Five Elements Collection"
- [ ] Configure branding (dark theme, upload logo)

### Phase 4: Merch Art Production — PROMPTS READY
- [x] Design prompt library: `src/lib/design-prompts.ts`
- [x] Video prompts: `prompts/video-prompts.md`
- [x] MVP prompts: Wood Tiger, Fire Dragon, Earth Ox, Metal Horse, Water Snake
- [ ] Fire Horse style development (Google ImageFX, 50+ variations → 3-5 finalists)
- [ ] Lock prompt formula + typography template
- [ ] MVP: 5 Element Tees (1 per element) → upload to Fourthwall
- [ ] Add Fourthwall product URLs to `src/lib/shop-products.ts` (flips "Coming Soon" → "Shop Now")
- [ ] Fire Horse Launch Collection (premium tee, art print, mug)
- [ ] Batch remaining 55 sign artworks
- [ ] Full catalog: expand `MVP_TYPES` in `shop-products.ts` to add hoodie/mug/poster/tote

### Phase 5: SEO & Social — TODO
- [ ] Shop page JSON-LD Product schema
- [ ] OG image for `/shop`
- [ ] Add `/shop` to SSG routes (vite-ssg-sitemap)
- [ ] Breadcrumb schema

### Phase 6: Cross-Sell & Email — TODO
- [ ] Cross-sell: post-purchase merch recommendations, compatibility pair merch
- [ ] Email sequences: Blueprint buyers, newsletter sign-segmented

### Infrastructure — NOT STARTED (manual)
- [ ] Run DB migration: `scripts/migrations/001-report-orders.sql`
- [ ] Create Stripe product + $9.99 price → `STRIPE_PRICE_ID`
- [ ] Register Stripe webhook for `checkout.session.completed`
- [ ] Set env vars: `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`, `SITE_URL`, `GA4_API_SECRET`
- [ ] Build Blueprint PDF generation pipeline (60 PDFs via Claude API + PDF lib)
- [ ] Upload PDFs to Netlify Blobs

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
