# Zodiac Merch Shop — Master Plan

## Status: Planning Phase
**Branch:** `claude/zodiac-merch-shop-automation-fV9eM`
**Last updated:** 2026-02-25

---

## What's Built (Phase 0 — Done)

Core Shopify infrastructure is committed and working:
- Shopify Storefront API proxy (`netlify/functions/shopify-storefront.ts`)
- `useShopify` composable with cart management, localStorage persistence
- `/shop` page with filterable product grid (`src/pages/ShopPage.vue`)
- Sign-specific shop pages (`/shop/:slug`)
- `MerchProductCard`, `MerchGrid`, `MerchCartDrawer` components
- `SignShop` component integrated into zodiac sign pages
- GA4 analytics tracking for merch events
- Tag-based product filtering (`fire-horse`, `element:fire`, `animal:horse`, `type:t-shirt`)

**Needs to go live:** Shopify credentials (`SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_ACCESS_TOKEN`) as Netlify env vars.

---

## Brand Identity

### Concept: "Five Elements Collection" (五行集)

Modern ink wash (水墨) meets zodiac identity. Each piece feels like wearable art — contemporary Chinese art gallery aesthetic, not tourist gift shop.

**Target audience:** Zodiac enthusiasts aged 25-40 who want identity-affirming merch that reflects cultural depth.

### Visual System (5 Element Palettes)

Maps to existing CSS element theming:

| Element | Palette | Mood |
|---------|---------|------|
| **Wood** | Forest greens + black ink + rice paper cream | Spring growth, lush |
| **Fire** | Crimson red + gold leaf + charcoal black | Fierce, dynamic |
| **Earth** | Ochre + burnt sienna + warm grey | Grounded, solid |
| **Metal** | Silver + pearl white + cool slate | Precise, crystalline |
| **Water** | Indigo + deep teal + midnight blue | Fluid, reflective |

Each element gets its own color world. Each animal within that element gets a unique ink wash illustration in that palette. **60 unique artworks, visually cohesive** because every Fire sign shares red/gold/black, every Water sign shares indigo/teal, etc.

---

## AI Art Direction (Midjourney)

### Base Prompt Template
```
Chinese ink wash painting (水墨画) of a [animal], [element] energy,
[element-specific palette], sumi-e brushwork, single subject centered,
minimal background, rice paper texture, contemporary art style,
high contrast, clean composition for t-shirt print --ar 1:1 --s 750 --v 6.1
```

### Per-Element Modifiers
- **Wood:** `lush bamboo accents, jade green splashes, spring energy, new growth`
- **Fire:** `gold leaf accents, vermillion red splashes, dynamic flames, fierce energy`
- **Earth:** `terracotta tones, mountain motifs, grounded stance, ochre splashes`
- **Metal:** `silver ink, crystalline accents, autumn wind, precise strokes`
- **Water:** `deep indigo flows, wave motifs, reflective pools, fluid brushwork`

### Per-Animal Character Direction
- **Rat** → cunning, alert posture, whiskers rendered with single brushstrokes
- **Ox** → powerful, stoic stance, broad shoulders, deliberate strokes
- **Tiger** → prowling, intense eyes, bold strokes
- **Rabbit** → graceful, soft curves, delicate brushwork
- **Dragon** → coiling upward, clouds and mist, most elaborate of all 12
- **Snake** → sinuous, elegant, minimal strokes, mysterious
- **Horse** → galloping, mane flowing, dynamic movement
- **Goat** → serene, mountain setting, gentle curves
- **Monkey** → playful, dynamic pose, clever expression
- **Rooster** → proud stance, detailed tail feathers, confident
- **Dog** → loyal posture, warm expression, grounded
- **Pig** → content, round forms, welcoming energy

### Post-Processing Pipeline
1. Generate in Midjourney → pick best composition (generate 20+ per sign, keep 2-3)
2. Upscale to 4K+ (Midjourney `--upscale` or Topaz Gigapixel)
3. Remove background / clean edges (remove.bg or Photoshop)
4. Add typography overlay in Canva/Illustrator:
   - Sign name in English (clean sans-serif — Noto Sans or Inter)
   - Chinese characters (楷体/KaiTi calligraphy font)
   - Subtle element symbol watermark
5. Create print-ready files (300 DPI, transparent PNG for POD)

### Typography Rules
- Sign name: Clean, modern typeface (NOT "Asian" fonts — that looks tacky)
- Chinese characters: Actual KaiTi (楷体) calligraphy — the authentic touch
- Placement: Below artwork, small, understated
- Optional: Just the art, no text (most fashionable option)

---

## Product Line

### Tier 1: Core Identity (Launch)
| Product | Print Strategy | Price |
|---------|---------------|-------|
| **Classic Tee** | Ink wash animal, front center | $29-35 |
| **Element Hoodie** | Subtle element symbol front, bold back | $49-59 |
| **Enamel Pin** | Zodiac animal silhouette | $12-15 |
| **Ceramic Mug** | Ink wash wrap-around | $18-22 |

### Tier 2: Expansion (After Validation)
| Product | Print Strategy | Price |
|---------|---------------|-------|
| **Art Print** | Museum-quality giclée | $25-45 |
| **Tote Bag** | Canvas, ink wash design | $22-28 |
| **Phone Case** | Element gradient + animal | $20-28 |
| **Matching Set** | Tee + mug + pin bundle | $55-65 |

### T-Shirt Specs
- **Blanks:** Bella+Canvas 3001 or Next Level 3600 (soft ringspun, modern fit). NOT Gildan.
- **Print placement option A:** Small element symbol left chest (2-3") + full artwork back (12-14")
- **Print placement option B:** Centered front, slightly below neckline (art tee look)
- **Shirt colors:** Black, off-white/cream, element-matched (forest green / burgundy / sand / silver grey / navy)
- Max 3 shirt colors per sign

---

## Tech Implementation Phases

### Phase 1: Personalization Engine
- [ ] `useUserSign` composable — remembers user's sign across sessions (localStorage)
- [ ] Personalized shop CTAs throughout the site ("Shop Your Sign: Fire Horse")
- [ ] "Your Sign" badge + priority sorting in product grid
- [ ] Smart recommendations in SignShop component
- [ ] After calculator result → immediate merch CTA
- [ ] Compatibility page cross-sell ("Gift idea for your Water Rat partner")

### Phase 2: Product Experience Upgrade
- [ ] Image gallery with thumbnails + zoom on hover
- [ ] Visual variant swatches (color circles for colors, pill buttons for sizes)
- [ ] Product detail modal with rich `descriptionHtml` rendering
- [ ] "Only X left" stock urgency indicators
- [ ] Size guide component (popup/accordion per product type)
- [ ] Cart badge in navbar (item count, opens drawer on click)

### Phase 3: Bundle & Cross-Sell System
- [ ] "Complete Your Collection" component on sign pages
- [ ] Compatibility-based gift recommendations
- [ ] Cart upsell suggestions ("Add matching mug for $12")
- [ ] Bundle pricing logic
- [ ] "Best sellers for your sign" section

### Phase 4: SEO & Social
- [ ] Product JSON-LD schema (Product type structured data)
- [ ] Open Graph images per product
- [ ] Dedicated product pages at `/shop/product/:handle`
- [ ] Breadcrumb schema markup
- [ ] Sitemap entries for all shop pages
- [ ] Meta descriptions per product

### Phase 5: Trust & Conversion
- [ ] Shipping info banner ("Free shipping on $50+", "Ships worldwide 5-7 days")
- [ ] Return policy link in cart drawer
- [ ] Secure checkout badge
- [ ] Email discount popup ("10% off first order" → newsletter capture)
- [ ] Seasonal/limited edition badges on products

### Phase 6: Advanced Cart
- [ ] Discount code field in cart (Shopify Storefront API supports this)
- [ ] Shipping estimate before checkout
- [ ] Save for later / wishlist (localStorage)
- [ ] Recently viewed products

---

## 60-Sign Production Timeline

### Week 1-2: Develop the Style
- Pick ONE sign (Fire Horse — flagship)
- Generate 50+ Midjourney variations
- Narrow to 3-5 finalists
- Order test print from Printful
- Iterate until print quality + aesthetic locked

### Week 3-4: Template the Process
- Lock Midjourney prompt formula
- Create Canva/Figma template for typography overlay
- Create print-ready file specs per product type
- Build spreadsheet: sign slug → artwork file → Shopify product → tags

### Week 5-8: Batch Production
- Generate all 12 animals × 5 elements = 60 artworks
- Batch by element (all Fire animals first, then Wood, etc.)
- Post-process each: upscale → clean → add typography → export

### Week 9-10: Shopify Upload & Launch
- Bulk upload via Shopify CSV or Printful integration
- Apply tags per tagging system (already built in code)
- Set up collections per element and per animal
- Test full flow: browse → cart → checkout → fulfillment

---

## Shopify Setup Checklist (Manual Steps)

- [ ] Create Shopify store (if not done)
- [ ] Connect POD service (Printful or Printify)
- [ ] Apps → Develop apps → Create Storefront API token
- [ ] Tag products: `fire-horse`, `element:fire`, `animal:horse`, `type:t-shirt`
- [ ] Set Netlify env vars: `SHOPIFY_STORE_DOMAIN`, `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- [ ] Create collections per element and per animal
- [ ] Set up shipping zones and rates
- [ ] Configure payment processing

---

## Competitive Moat

1. **60 unique artworks** in cohesive ink wash style (nobody else has this)
2. **Element-themed everything** — site, merch, packaging all match
3. **Deep personalization** — site knows your sign, curates accordingly
4. **Cultural authenticity** — real 五行 (Wuxing) philosophy, not horoscope-lite
5. **Year of the Horse 2026** — launching at perfect time for Horse merch

---

## Priority Order

| Priority | Phase | Impact | Effort |
|----------|-------|--------|--------|
| **Now** | Phase 1 (Personalization) | High | Medium |
| **Next** | Phase 2 (Product UX) | High | Medium |
| **Then** | Phase 4 (SEO) | High | Low |
| **Then** | Phase 3 (Bundles) | Medium | Medium |
| **Later** | Phase 5 (Trust) | Medium | Medium |
| **Later** | Phase 6 (Advanced cart) | Medium | High |
