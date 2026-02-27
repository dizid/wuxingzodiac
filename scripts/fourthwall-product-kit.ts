/**
 * Fourthwall Product Setup Kit
 * Outputs copy-paste ready product info for the Fourthwall dashboard.
 * Prompts formatted for Midjourney with --sref style reference for brand consistency.
 *
 * Run: npx tsx scripts/fourthwall-product-kit.ts
 * Run: npx tsx scripts/fourthwall-product-kit.ts --sref https://cdn.midjourney.com/your-hero-image.png
 */

// -- Parse --sref argument --
const srefArg = process.argv.find((a) => a.startsWith('--sref'))
const srefUrl = srefArg
  ? process.argv[process.argv.indexOf(srefArg) + 1] || ''
  : ''

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

// Midjourney params
const MJ_PARAMS = '--ar 3:4 --s 750 --q 2 --v 6.1'

function buildMidjourneyPrompt(element: string, animal: string, isHero: boolean): string {
  const animalPrompt = ANIMAL_PROMPTS[animal]
  const colorPrompt = ELEMENT_COLORS[element]

  const base = `Chinese zodiac ${cap(animal)}, modern ink wash sumi-e art style. ${animalPrompt}. ${colorPrompt}. Bold black ink brush strokes on solid black background, dramatic element-colored glow emanating from animal, ink splatter and calligraphic flourishes, high contrast, no text, no words, no letters, no borders, no ground surface, animal floats in void, centered composition, generous negative space, single subject. Wu Xing Five Elements Collection wearable art`

  // Hero design: no --sref (this IS the style reference)
  // All others: add --sref if URL provided
  if (isHero) {
    return `/imagine ${base} ${MJ_PARAMS}`
  }

  if (srefUrl) {
    return `/imagine ${base} ${MJ_PARAMS} --sref ${srefUrl}`
  }

  return `/imagine ${base} ${MJ_PARAMS} --sref <PASTE_HERO_IMAGE_URL>`
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

MIDJOURNEY WORKFLOW:
  1. Sign up at midjourney.com ($10/mo Basic plan)
  2. Generate the FIRE DRAGON first (Product 1 below) — this is your HERO design
  3. Pick the best result, upscale it (U1-U4 button)
  4. Copy the upscaled image URL from Midjourney
  5. Re-run this script with the URL:
     npx tsx scripts/fourthwall-product-kit.ts --sref https://cdn.midjourney.com/your-image.png
  6. All subsequent prompts will use --sref to match the hero's style

${srefUrl ? `STYLE REFERENCE: ${srefUrl}` : 'STYLE REFERENCE: Not set yet (generate Fire Dragon hero first)'}

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
  const midjourneyPrompt = buildMidjourneyPrompt(element, animal, isHero)

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

🎨 MIDJOURNEY PROMPT (paste into Midjourney /imagine):
${midjourneyPrompt}
${isHero ? `
⭐ THIS IS THE HERO DESIGN — Generate this FIRST!
   1. Paste the prompt above into Midjourney
   2. Pick your favorite from the 4 results
   3. Click U1-U4 to upscale it
   4. Right-click the upscaled image → Copy image URL
   5. Re-run this script with: --sref <that URL>
   6. All other designs will match this style` : ''}
📐 POST-PROCESS:
  1. In Midjourney: click U1-U4 to upscale the best result
  2. Download the upscaled image
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
