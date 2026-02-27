# Dev Notes

## Third-Party IDs

- **Google Analytics:** G-5M7CY55LL8
- **Amazon Associates:** wuxing20-20
https://buttondown.com/glaswerk/archive/welcome-to-wu-xing-zodiac-your-60-sign-journey/


Stripe keys: stored in Netlify env vars (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_ID)

## GA4 Snippet (for index.html)

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5M7CY55LL8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5M7CY55LL8');
</script>
```


c@marc-HP:~/DEV/wuxingzodiac$ npx tsx scripts/fourthwall-product-kit.ts


MIDJOURNEY WORKFLOW:
  1. ok Sign up at midjourney.com ($10/mo Basic plan)
  2. Generate the FIRE DRAGON first (Product 1 below) — this is your HERO design
  3. Pick the best result, upscale it (U1-U4 button)
  4. Copy the upscaled image URL from Midjourney
  5. Re-run this script with the URL:
     npx tsx scripts/fourthwall-product-kit.ts --sref https://cdn.midjourney.com/your-image.png
  6. All subsequent prompts will use --sref to match the hero's style

STYLE REFERENCE: Not set yet (generate Fire Dragon hero first)

PRODUCT SETTINGS (same for all 5):
  Base tee:         Bella+Canvas 3001 (or similar premium unisex)
  Shirt color:      Black
  Print method:     DTG (direct-to-garment)
  Price:            $29.99
  Collection:       Five Elements Collection


════════════════════════════════════════════════════════════
⭐ HERO — PRODUCT 1 of 5: FIRE DRAGON ELEMENT TEE
════════════════════════════════════════════════════════════

📋 TITLE (paste into Fourthwall Product Name):
Fire Dragon Element Tee

💰 PRICE:
$29.99

📝 DESCRIPTION (paste into Fourthwall Product Description):
Fire Dragon — The Celestial Blaze

Modern ink wash art capturing the essence of the Fire Dragon from the Chinese Wu Xing zodiac. Part of the Five Elements Collection.

Channel the blazing spirit of the Fire element — passion, courage, and dynamic power.

• Premium soft cotton tee
• DTG printed artwork
• Unisex fit
• Find your sign: wuxingzodiac.me/calculator

🏷️  TAGS (paste into Tags field):
zodiac, wu xing, five elements, fire, dragon, chinese zodiac, five elements collection

🎨 MIDJOURNEY PROMPT (paste into Midjourney /imagine):
/imagine Chinese zodiac Dragon, modern ink wash sumi-e art style. Dragon coiled in ascending spiral, head toward viewer, one claw reaching through mist. Majestic, mythical, commanding. Detailed scales in ink wash, flowing whiskers and mane, cloud and mist swirling. burnt orange and molten gold glow, crimson and vermillion ink washes, amber tones, ember particles, heat shimmer. Bold black ink brush strokes on solid black background, dramatic element-colored glow emanating from animal, ink splatter and calligraphic flourishes, high contrast, no text, no words, no letters, no borders, no ground surface, animal floats in void, centered composition, generous negative space, single subject. Wu Xing Five Elements Collection wearable art --ar 3:4 --s 750 --q 2 --v 6.1

⭐ THIS IS THE HERO DESIGN — Generate this FIRST!
   1. Paste the prompt above into Midjourney
   2. Pick your favorite from the 4 results
   3. Click U1-U4 to upscale it
   4. Right-click the upscaled image → Copy image URL
   5. Re-run this script with: --sref <that URL>
   6. All other designs will match this style
📐 POST-PROCESS:
  1. In Midjourney: click U1-U4 to upscale the best result
  2. Download the upscaled image
  3. Center on #0a0a0a canvas, 4500×5400px (300 DPI)
  4. Export as PNG → upload to Fourthwall product


════════════════════════════════════════════════════════════
PRODUCT 2 of 5: WOOD TIGER ELEMENT TEE
════════════════════════════════════════════════════════════

📋 TITLE (paste into Fourthwall Product Name):
Wood Tiger Element Tee

💰 PRICE:
$29.99

📝 DESCRIPTION (paste into Fourthwall Product Description):
Wood Tiger — The Compassionate Adventurer

Modern ink wash art capturing the essence of the Wood Tiger from the Chinese Wu Xing zodiac. Part of the Five Elements Collection.

Embrace the living energy of the Wood element — growth, flexibility, and creative force.

• Premium soft cotton tee
• DTG printed artwork
• Unisex fit
• Find your sign: wuxingzodiac.me/calculator

🏷️  TAGS (paste into Tags field):
zodiac, wu xing, five elements, wood, tiger, chinese zodiac, five elements collection

🎨 MIDJOURNEY PROMPT (paste into Midjourney /imagine):
/imagine Chinese zodiac Tiger, modern ink wash sumi-e art style. Tiger mid-prowl, one paw extended, body low and coiled. Fierce, confident, magnetic. Bold stripe patterns in flowing ink, piercing amber eyes, powerful jaw slightly open. forest green and jade green glow, dark emerald ink washes, bamboo green tones, growth energy, bamboo leaf motifs. Bold black ink brush strokes on solid black background, dramatic element-colored glow emanating from animal, ink splatter and calligraphic flourishes, high contrast, no text, no words, no letters, no borders, no ground surface, animal floats in void, centered composition, generous negative space, single subject. Wu Xing Five Elements Collection wearable art --ar 3:4 --s 750 --q 2 --v 6.1 --sref <PASTE_HERO_IMAGE_URL>

📐 POST-PROCESS:
  1. In Midjourney: click U1-U4 to upscale the best result
  2. Download the upscaled image
  3. Center on #0a0a0a canvas, 4500×5400px (300 DPI)
  4. Export as PNG → upload to Fourthwall product


════════════════════════════════════════════════════════════
PRODUCT 3 of 5: EARTH OX ELEMENT TEE
════════════════════════════════════════════════════════════

📋 TITLE (paste into Fourthwall Product Name):
Earth Ox Element Tee

💰 PRICE:
$29.99

📝 DESCRIPTION (paste into Fourthwall Product Description):
Earth Ox — The Immovable Mountain

Modern ink wash art capturing the essence of the Earth Ox from the Chinese Wu Xing zodiac. Part of the Five Elements Collection.

Ground yourself in the Earth element — stability, nurturing strength, and enduring wisdom.

• Premium soft cotton tee
• DTG printed artwork
• Unisex fit
• Find your sign: wuxingzodiac.me/calculator

🏷️  TAGS (paste into Tags field):
zodiac, wu xing, five elements, earth, ox, chinese zodiac, five elements collection

🎨 MIDJOURNEY PROMPT (paste into Midjourney /imagine):
/imagine Chinese zodiac Ox, modern ink wash sumi-e art style. Ox standing strong, head slightly lowered, powerful shoulders and massive horns. Dependable, unwavering, mountain-like strength. Massive curved horns catching element glow, thick muscular neck. ochre and warm amber glow, sienna and terracotta ink washes, raw umber tones, mountain silhouette, cracked earth. Bold black ink brush strokes on solid black background, dramatic element-colored glow emanating from animal, ink splatter and calligraphic flourishes, high contrast, no text, no words, no letters, no borders, no ground surface, animal floats in void, centered composition, generous negative space, single subject. Wu Xing Five Elements Collection wearable art --ar 3:4 --s 750 --q 2 --v 6.1 --sref <PASTE_HERO_IMAGE_URL>

📐 POST-PROCESS:
  1. In Midjourney: click U1-U4 to upscale the best result
  2. Download the upscaled image
  3. Center on #0a0a0a canvas, 4500×5400px (300 DPI)
  4. Export as PNG → upload to Fourthwall product


════════════════════════════════════════════════════════════
PRODUCT 4 of 5: METAL HORSE ELEMENT TEE
════════════════════════════════════════════════════════════

📋 TITLE (paste into Fourthwall Product Name):
Metal Horse Element Tee

💰 PRICE:
$29.99

📝 DESCRIPTION (paste into Fourthwall Product Description):
Metal Horse — The Armored Charger

Modern ink wash art capturing the essence of the Metal Horse from the Chinese Wu Xing zodiac. Part of the Five Elements Collection.

Refine your spirit with the Metal element — precision, resilience, and decisive clarity.

• Premium soft cotton tee
• DTG printed artwork
• Unisex fit
• Find your sign: wuxingzodiac.me/calculator

🏷️  TAGS (paste into Tags field):
zodiac, wu xing, five elements, metal, horse, chinese zodiac, five elements collection

🎨 MIDJOURNEY PROMPT (paste into Midjourney /imagine):
/imagine Chinese zodiac Horse, modern ink wash sumi-e art style. Horse rearing, mane and tail flowing dynamically, muscles taut with raw energy. Free, powerful, untamed. Flowing mane becoming ink splatter at tips, muscular form mid-motion. cool silver and platinum white glow, slate grey and steel blue ink washes, charcoal tones, metallic sheen, geometric precision. Bold black ink brush strokes on solid black background, dramatic element-colored glow emanating from animal, ink splatter and calligraphic flourishes, high contrast, no text, no words, no letters, no borders, no ground surface, animal floats in void, centered composition, generous negative space, single subject. Wu Xing Five Elements Collection wearable art --ar 3:4 --s 750 --q 2 --v 6.1 --sref <PASTE_HERO_IMAGE_URL>

📐 POST-PROCESS:
  1. In Midjourney: click U1-U4 to upscale the best result
  2. Download the upscaled image
  3. Center on #0a0a0a canvas, 4500×5400px (300 DPI)
  4. Export as PNG → upload to Fourthwall product


════════════════════════════════════════════════════════════
PRODUCT 5 of 5: WATER SNAKE ELEMENT TEE
════════════════════════════════════════════════════════════

📋 TITLE (paste into Fourthwall Product Name):
Water Snake Element Tee

💰 PRICE:
$29.99

📝 DESCRIPTION (paste into Fourthwall Product Description):
Water Snake — The Enigmatic Depths

Modern ink wash art capturing the essence of the Water Snake from the Chinese Wu Xing zodiac. Part of the Five Elements Collection.

Flow with the Water element — deep intuition, adaptability, and quiet power.

• Premium soft cotton tee
• DTG printed artwork
• Unisex fit
• Find your sign: wuxingzodiac.me/calculator

🏷️  TAGS (paste into Tags field):
zodiac, wu xing, five elements, water, snake, chinese zodiac, five elements collection

🎨 MIDJOURNEY PROMPT (paste into Midjourney /imagine):
/imagine Chinese zodiac Snake, modern ink wash sumi-e art style. Snake in elegant S-curve, head raised with subtle forked tongue, body as flowing calligraphic line. Mysterious, wise, hypnotic. Diamond scale patterns in ink, intense focused eyes. deep indigo and cerulean glow, navy and teal ink washes, midnight blue tones, ripple effects, flowing water patterns. Bold black ink brush strokes on solid black background, dramatic element-colored glow emanating from animal, ink splatter and calligraphic flourishes, high contrast, no text, no words, no letters, no borders, no ground surface, animal floats in void, centered composition, generous negative space, single subject. Wu Xing Five Elements Collection wearable art --ar 3:4 --s 750 --q 2 --v 6.1 --sref <PASTE_HERO_IMAGE_URL>

📐 POST-PROCESS:
  1. In Midjourney: click U1-U4 to upscale the best result
  2. Download the upscaled image
  3. Center on #0a0a0a canvas, 4500×5400px (300 DPI)
  4. Export as PNG → upload to Fourthwall product


════════════════════════════════════════════════════════════
AFTER ALL 5 PRODUCTS ARE PUBLISHED:
════════════════════════════════════════════════════════════

1. Create a Storefront Token:
   Fourthwall Dashboard → Developer Settings → Create Token

2. Add to .env:
   FOURTHWALL_STOREFRONT_TOKEN=your_token_here

3. Run URL sync:
   npx tsx scripts/sync-fourthwall-urls.ts

This auto-updates src/lib/shop-products.ts with live product URLs.