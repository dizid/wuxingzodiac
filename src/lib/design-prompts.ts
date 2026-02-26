import type { ZodiacElement, ZodiacAnimal } from '@/types'

// ============================================
// T-SHIRT DESIGN PROMPT LIBRARY
// ============================================
// Ready-to-paste prompts for Google ImageFX (Imagen 3).
// Style: "Five Elements Collection" (五行集) — modern ink wash meets zodiac identity.
//
// WORKFLOW:
// 1. Go to https://aitestkitchen.withgoogle.com/tools/image-fx
// 2. Paste the full prompt from buildPrompt(element, animal)
// 3. Generate 4+ variations, pick the best composition
// 4. Post-process:
//    a. Upscale to 4K via Upscayl (free desktop app) or bigjpg.com
//    b. Remove background via remove.bg (if needed)
//    c. Place centered on #0a0a0a canvas, 4500×5400px (Printful tee print area, 300 DPI)
//    d. Export as PNG
// 5. Save to artwork/{element}-{animal}.png (gitignored)

// ── Element palettes ────────────────────────

interface ElementStyle {
  palette: string
  mood: string
  texture: string
}

const ELEMENT_STYLES: Record<ZodiacElement, ElementStyle> = {
  wood: {
    palette: 'Forest green (#22c55e) and jade green glow. Ink washes in dark emerald, moss, and bamboo green tones.',
    mood: 'Growth, renewal, spring energy. Bamboo leaf motifs in background ink splatter.',
    texture: 'Organic brush strokes suggesting bark grain and leaf veins. Lush, living energy.',
  },
  fire: {
    palette: 'Burnt orange (#f97316) and molten gold glow. Ink washes in crimson, vermillion, and amber.',
    mood: 'Intense, dynamic, passionate. Ember particles and heat shimmer at edges.',
    texture: 'Sharp, energetic strokes. Flame-like flourishes in the ink splatter. Explosive energy.',
  },
  earth: {
    palette: 'Ochre (#d97706) and warm amber glow. Ink washes in sienna, terracotta, and raw umber.',
    mood: 'Grounded, solid, enduring. Mountain silhouette suggestion in background.',
    texture: 'Dense, layered strokes suggesting sediment and stone. Cracked earth patterns.',
  },
  metal: {
    palette: 'Cool silver (#94a3b8) and platinum white glow. Ink washes in slate grey, steel blue, and charcoal.',
    mood: 'Precise, sharp, refined. Metallic sheen highlights. Geometric precision within organic chaos.',
    texture: 'Clean, decisive strokes. Chrome-like highlights where light catches edges.',
  },
  water: {
    palette: 'Deep indigo (#3b82f6) and cerulean glow. Ink washes in navy, teal, and midnight blue.',
    mood: 'Flowing, deep, mysterious. Ripple effects and wave patterns in background.',
    texture: 'Fluid, continuous strokes. Watercolor bleed effects at edges. Ink dispersing in water.',
  },
}

// ── Animal directions ────────────────────────

interface AnimalStyle {
  pose: string
  personality: string
  details: string
}

const ANIMAL_STYLES: Record<ZodiacAnimal, AnimalStyle> = {
  rat: {
    pose: 'Alert, sitting upright on hind legs, whiskers angled forward, tail curling elegantly.',
    personality: 'Clever, resourceful, sharp-eyed. Intelligence radiates from bright eyes.',
    details: 'Small but commanding presence. Delicate paws held purposefully. Prominent ears catching sound.',
  },
  ox: {
    pose: 'Standing strong, head slightly lowered showing powerful shoulders and massive horns.',
    personality: 'Powerful, dependable, unwavering. Mountain-like quiet strength.',
    details: 'Massive curved horns catching element glow. Thick muscular neck. Sturdy hooves planted firm.',
  },
  tiger: {
    pose: 'Mid-prowl, one paw extended forward, body low and coiled with explosive potential energy.',
    personality: 'Fierce, confident, magnetic. Predatory grace and hypnotic intensity.',
    details: 'Bold stripe patterns rendered in flowing ink. Piercing amber eyes. Powerful jaw slightly open.',
  },
  rabbit: {
    pose: 'Seated gracefully, ears tall and attentive, one paw slightly raised in gentle gesture.',
    personality: 'Elegant, diplomatic, quietly strong. Refined sophistication.',
    details: 'Long elegant ears rendered in soft brush strokes. Gentle knowing eye. Soft fur texture.',
  },
  dragon: {
    pose: 'Coiled in ascending spiral, head turned toward viewer, one claw reaching forward through mist.',
    personality: 'Majestic, mythical, commanding. Imperial presence that fills the frame.',
    details: 'Detailed scales layered in ink wash. Flowing whiskers and mane. Cloud and mist swirling around body.',
  },
  snake: {
    pose: 'Elegant S-curve, head raised with subtle forked tongue, body creating a flowing calligraphic line.',
    personality: 'Mysterious, wise, hypnotic. Seductive danger with ancient knowledge.',
    details: 'Diamond scale patterns in ink. Intense focused eyes. Smooth sinuous form.',
  },
  horse: {
    pose: 'Rearing or galloping, mane and tail flowing dynamically, muscles taut with raw energy.',
    personality: 'Free, powerful, untamed. Speed and wild spirit unleashed.',
    details: 'Flowing mane that becomes ink splatter at tips. Muscular form mid-motion. Hooves striking air.',
  },
  goat: {
    pose: 'Standing on rocky elevation, head turned with serene expression, curved horns silhouetted.',
    personality: 'Artistic, gentle, dreamy. Quiet beauty and mountain wisdom.',
    details: 'Curved elegant horns. Soft woolly texture in layered brush work. Calm, kind eyes.',
  },
  monkey: {
    pose: 'Perched in dynamic crouch, one hand reaching out, tail balancing, bright mischievous expression.',
    personality: 'Clever, playful, quick-witted. Joyful chaos and brilliant adaptability.',
    details: 'Expressive face with intelligent eyes. Long agile tail curling. Nimble fingers.',
  },
  rooster: {
    pose: 'Standing tall with chest out, magnificent tail feathers in full display, head raised proudly.',
    personality: 'Bold, meticulous, commanding. Demands attention with natural authority.',
    details: 'Elaborate tail feathers flowing in dramatic ink strokes. Sharp beak. Ornate feathered comb.',
  },
  dog: {
    pose: 'Alert standing pose, ears perked, loyal steady gaze, strong noble bearing.',
    personality: 'Faithful, honest, brave. Protective loyalty and unwavering devotion.',
    details: 'Deep expressive eyes showing devotion. Strong athletic build. Alert upright ears.',
  },
  pig: {
    pose: 'Content and relaxed, gentle smile, rounded form radiating warmth and abundance.',
    personality: 'Generous, honest, warm-hearted. Joy and prosperity embodied.',
    details: 'Rounded cheerful form with confident posture. Gentle happy expression. Soft floppy ears.',
  },
}

// ── Prompt builder ───────────────────────────

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Build a complete Google ImageFX prompt for a zodiac sign.
 * Paste the output directly into ImageFX for t-shirt artwork generation.
 */
export function buildPrompt(element: ZodiacElement, animal: ZodiacAnimal): string {
  const el = ELEMENT_STYLES[element]
  const an = ANIMAL_STYLES[animal]

  return `Chinese zodiac ${capitalize(animal)} in modern ink wash (sumi-e) art style.

ANIMAL: ${an.pose} ${an.personality}
DETAILS: ${an.details}

COLOR PALETTE: ${el.palette}
MOOD: ${el.mood}
TEXTURE: ${el.texture}

STYLE: Bold black ink brush strokes on solid black background (#0a0a0a). Dramatic element-colored glow emanating from the animal. Ink splatter and calligraphic flourishes around the subject. High contrast. No text, no words, no letters. No borders or frames. No ground surface — animal floats in void. Centered composition with generous negative space around edges. Single subject only.

This is ${capitalize(element)} ${capitalize(animal)} from the Chinese Wu Xing (五行) zodiac system — wearable art for the Five Elements Collection.`
}

/**
 * Generate all 60 prompts as a printable list.
 * Useful for batch generation sessions.
 */
export function getAllPrompts(): { slug: string; element: ZodiacElement; animal: ZodiacAnimal; prompt: string }[] {
  const elements: ZodiacElement[] = ['wood', 'fire', 'earth', 'metal', 'water']
  const animals: ZodiacAnimal[] = [
    'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
    'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
  ]

  const prompts: { slug: string; element: ZodiacElement; animal: ZodiacAnimal; prompt: string }[] = []

  for (const element of elements) {
    for (const animal of animals) {
      prompts.push({
        slug: `${element}-${animal}`,
        element,
        animal,
        prompt: buildPrompt(element, animal),
      })
    }
  }

  return prompts
}

/**
 * MVP prompts — the 5 most visually striking signs to generate first.
 */
export function getMvpPrompts(): { slug: string; element: ZodiacElement; animal: ZodiacAnimal; prompt: string }[] {
  const mvpSigns: [ZodiacElement, ZodiacAnimal][] = [
    ['wood', 'tiger'],
    ['fire', 'dragon'],
    ['earth', 'ox'],
    ['metal', 'horse'],
    ['water', 'snake'],
  ]

  return mvpSigns.map(([element, animal]) => ({
    slug: `${element}-${animal}`,
    element,
    animal,
    prompt: buildPrompt(element, animal),
  }))
}
