/**
 * Fourthwall Product Setup Kit
 * Outputs copy-paste ready product info for the Fourthwall dashboard.
 * Prompts formatted for Midjourney with --sref style reference for brand consistency.
 *
 * Run: npx tsx scripts/fourthwall-product-kit.ts
 * Run: npx tsx scripts/fourthwall-product-kit.ts --sref 7031655206          (Style Creator code)
 * Run: npx tsx scripts/fourthwall-product-kit.ts --sref https://cdn.mid...  (image URL fallback)
 */

// -- Brand style code (from Midjourney Style Creator) --
const BRAND_STYLE_CODE = '6401195053'

// -- Parse --sref argument (overrides default if provided) --
const srefArg = process.argv.find((a) => a.startsWith('--sref'))
const srefValue = srefArg
  ? process.argv[process.argv.indexOf(srefArg) + 1] || BRAND_STYLE_CODE
  : BRAND_STYLE_CODE

// -- MVP signs (must match design-prompts.ts getMvpPrompts) --

const MVP_SIGNS: { element: string; animal: string }[] = [
  { element: 'fire', animal: 'dragon' },   // Hero design — generate FIRST, no --sref
  { element: 'wood', animal: 'tiger' },
  { element: 'earth', animal: 'ox' },
  { element: 'metal', animal: 'horse' },
  { element: 'water', animal: 'snake' },
]

// -- Taglines (from profiles.ts) --

const TAGLINES: Record<string, string> = {
  'wood-tiger':   'The Compassionate Adventurer',
  'fire-dragon':  'The Celestial Blaze',
  'earth-ox':     'The Immovable Mountain',
  'metal-horse':  'The Armored Charger',
  'water-snake':  'The Enigmatic Depths',
}

// -- Element descriptions (from shop-products.ts) --

const ELEMENT_DESCRIPTIONS: Record<string, string> = {
  wood:  'Embrace the living energy of the Wood element — growth, flexibility, and creative force.',
  fire:  'Channel the blazing spirit of the Fire element — passion, courage, and dynamic power.',
  earth: 'Ground yourself in the Earth element — stability, nurturing strength, and enduring wisdom.',
  metal: 'Refine your spirit with the Metal element — precision, resilience, and decisive clarity.',
  water: 'Flow with the Water element — deep intuition, adaptability, and quiet power.',
}

// -- Element color keywords for Midjourney (concise for prompt) --

const ELEMENT_COLORS: Record<string, string> = {
  wood:  'forest green and jade green glow, dark emerald ink washes, bamboo green tones, growth energy, bamboo leaf motifs',
  fire:  'burnt orange and molten gold glow, crimson and vermillion ink washes, amber tones, ember particles, heat shimmer',
  earth: 'ochre and warm amber glow, sienna and terracotta ink washes, raw umber tones, mountain silhouette, cracked earth',
  metal: 'cool silver and platinum white glow, slate grey and steel blue ink washes, charcoal tones, metallic sheen, geometric precision',
  water: 'deep indigo and cerulean glow, navy and teal ink washes, midnight blue tones, ripple effects, flowing water patterns',
}

// -- Animal descriptions for Midjourney (concise for prompt) --

const ANIMAL_PROMPTS: Record<string, string> = {
  tiger:  'Tiger mid-prowl, one paw extended, body low and coiled. Fierce, confident, magnetic. Bold stripe patterns in flowing ink, piercing amber eyes, powerful jaw slightly open',
  dragon: 'Dragon coiled in ascending spiral, head toward viewer, one claw reaching through mist. Majestic, mythical, commanding. Detailed scales in ink wash, flowing whiskers and mane, cloud and mist swirling',
  ox:     'Ox standing strong, head slightly lowered, powerful shoulders and massive horns. Dependable, unwavering, mountain-like strength. Massive curved horns catching element glow, thick muscular neck',
  horse:  'Horse rearing, mane and tail flowing dynamically, muscles taut with raw energy. Free, powerful, untamed. Flowing mane becoming ink splatter at tips, muscular form mid-motion',
  snake:  'Snake in elegant S-curve, head raised with subtle forked tongue, body as flowing calligraphic line. Mysterious, wise, hypnotic. Diamond scale patterns in ink, intense focused eyes',
}

// -- Helpers --

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function buildMidjourneyPrompt(element: string, animal: string): string {
  const animalPrompt = ANIMAL_PROMPTS[animal]
  const colorPrompt = ELEMENT_COLORS[element]

  const base = `Chinese zodiac ${cap(animal)}, modern ink wash sumi-e art style. ${animalPrompt}. ${colorPrompt}. Bold black ink brush strokes on solid black background, dramatic element-colored glow emanating from animal, ink splatter and calligraphic flourishes, high contrast, no text, no words, no letters, no characters, no kanji, no Chinese characters, no writing, no borders, no ground surface, animal floats in void, centered composition, generous negative space, single subject. Wu Xing Five Elements Collection wearable art`

  // V7 web UI: no --ar/--s/--q/--v params (handled by UI sliders)
  // --sref accepts either a Style Creator code (number) or an image URL
  if (srefValue) {
    return `${base} --sref ${srefValue}`
  }

  return `${base} --sref <YOUR_STYLE_CODE_OR_IMAGE_URL>`
}

// -- Main output --

const SEP = '═'.repeat(60)

console.log(`
${'█'.repeat(60)}
  FOURTHWALL PRODUCT SETUP KIT — Wu Xing Zodiac
  Store: https://wuxing-shop.fourthwall.com
  Image generator: Midjourney (midjourney.com)
  Products: 5 MVP Element Tees
${'█'.repeat(60)}

MIDJOURNEY V7 WEB UI SETTINGS (set BEFORE generating):
  Go to midjourney.com/imagine and configure:
  • Image Size:     Portrait → drag to 3:4
  • Aesthetics:     Stylization ~750 (drag right ~75%)
  • Weirdness:      0 (leave at default)
  • Variety:        Low (drag left)
  • Model:          Standard, Version 7
  • Speed:          Fast

BRAND STYLE: --sref ${srefValue}
  (Override with: npx tsx scripts/fourthwall-product-kit.ts --sref <other-code>)

PRODUCT SETTINGS (same for all 5):
  Base tee:         Bella+Canvas 3001 (or similar premium unisex)
  Shirt color:      Black
  Print method:     DTG (direct-to-garment)
  Price:            $29.99
  Collection:       Five Elements Collection
`)

MVP_SIGNS.forEach(({ element, animal }, i) => {
  const slug = `${element}-${animal}`
  const name = `${cap(element)} ${cap(animal)}`
  const tagline = TAGLINES[slug]
  const description = ELEMENT_DESCRIPTIONS[element]
  const tags = `zodiac, wu xing, five elements, ${element}, ${animal}, chinese zodiac, five elements collection`
  const isHero = i === 0
  const midjourneyPrompt = buildMidjourneyPrompt(element, animal)

  console.log(`
${SEP}
${isHero ? '⭐ HERO — ' : ''}PRODUCT ${i + 1} of ${MVP_SIGNS.length}: ${name.toUpperCase()} ELEMENT TEE
${SEP}

📋 TITLE (paste into Fourthwall Product Name):
${name} Element Tee

💰 PRICE:
$29.99

📝 DESCRIPTION (paste into Fourthwall Product Description):
${name} — ${tagline}

Modern ink wash art capturing the essence of the ${name} from the Chinese Wu Xing zodiac. Part of the Five Elements Collection.

${description}

• Premium soft cotton tee
• DTG printed artwork
• Unisex fit
• Find your sign: wuxingzodiac.me/calculator

🏷️  TAGS (paste into Tags field):
${tags}

🎨 MIDJOURNEY PROMPT (paste into midjourney.com/imagine text box):
${midjourneyPrompt}
${isHero ? `
⭐ HERO DESIGN — This is the flagship design for the collection.` : ''}
📐 POST-PROCESS:
  1. In Midjourney: click "Upscale" on the best result
  2. Download the upscaled image (right-click → Save)
  3. Center on #0a0a0a canvas, 4500×5400px (300 DPI)
  4. Export as PNG → upload to Fourthwall product
`)
})

console.log(`
${SEP}
AFTER ALL 5 PRODUCTS ARE PUBLISHED:
${SEP}

1. Create a Storefront Token:
   Fourthwall Dashboard → Developer Settings → Create Token

2. Add to .env:
   FOURTHWALL_STOREFRONT_TOKEN=your_token_here

3. Run URL sync:
   npx tsx scripts/sync-fourthwall-urls.ts

This auto-updates src/lib/shop-products.ts with live product URLs.
`)
