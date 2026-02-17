/**
 * Generate OG images (1200x630) for all 60 zodiac signs + home page.
 * Uses sharp to convert SVG templates to PNG.
 *
 * Run: npx tsx scripts/generate-og-images.ts
 */

import sharp from 'sharp'
import { mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// -- Data (mirrors profiles.ts without importing from src) --

const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'] as const
const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'] as const

const ELEMENT_COLORS: Record<string, { primary: string; dark: string; light: string }> = {
  wood:  { primary: '#22c55e', dark: '#14532d', light: '#86efac' },
  fire:  { primary: '#f97316', dark: '#7c2d12', light: '#fdba74' },
  earth: { primary: '#d97706', dark: '#78350f', light: '#fcd34d' },
  metal: { primary: '#94a3b8', dark: '#0f172a', light: '#e2e8f0' },
  water: { primary: '#3b82f6', dark: '#1e3a8a', light: '#93c5fd' },
}

const YANG_STEMS: Record<string, string> = {
  wood: '甲', fire: '丙', earth: '戊', metal: '庚', water: '壬',
}

const EARTHLY_BRANCHES: Record<string, string> = {
  rat: '子', ox: '丑', tiger: '寅', rabbit: '卯',
  dragon: '辰', snake: '巳', horse: '午', goat: '未',
  monkey: '申', rooster: '酉', dog: '戌', pig: '亥',
}

const ANIMAL_EMOJI: Record<string, string> = {
  rat: '🐀', ox: '🐂', tiger: '🐅', rabbit: '🐇',
  dragon: '🐉', snake: '🐍', horse: '🐎', goat: '🐐',
  monkey: '🐒', rooster: '🐓', dog: '🐕', pig: '🐖',
}

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

// -- SVG template for sign OG images --

function signSvg(element: string, animal: string): string {
  const colors = ELEMENT_COLORS[element]
  const name = `${cap(element)} ${cap(animal)}`
  const chinese = YANG_STEMS[element] + EARTHLY_BRANCHES[animal]
  const emoji = ANIMAL_EMOJI[animal]

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="50%" stop-color="${colors.dark}"/>
      <stop offset="100%" stop-color="#0a0a0a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${colors.primary}" stop-opacity="0"/>
      <stop offset="50%" stop-color="${colors.primary}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${colors.primary}" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Decorative accent line -->
  <rect x="100" y="520" width="1000" height="2" fill="url(#accent)"/>

  <!-- Glow circle behind emoji -->
  <circle cx="600" cy="200" r="120" fill="${colors.primary}" opacity="0.08"/>
  <circle cx="600" cy="200" r="80" fill="${colors.primary}" opacity="0.05"/>

  <!-- Chinese characters -->
  <text x="600" y="180" text-anchor="middle" font-family="serif" font-size="100" fill="${colors.light}" opacity="0.15">${chinese}</text>

  <!-- Animal emoji -->
  <text x="600" y="230" text-anchor="middle" font-size="80">${emoji}</text>

  <!-- Sign name -->
  <text x="600" y="340" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" fill="#f5f5f5" letter-spacing="2">${name}</text>

  <!-- Element badge -->
  <rect x="490" y="370" width="220" height="40" rx="20" fill="${colors.primary}" opacity="0.2"/>
  <text x="600" y="398" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="18" font-weight="500" fill="${colors.light}" letter-spacing="3">${element.toUpperCase()} ELEMENT</text>

  <!-- Chinese Zodiac subtitle -->
  <text x="600" y="460" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" fill="#94a3b8" letter-spacing="1">Chinese Zodiac Profile</text>

  <!-- Site branding -->
  <text x="600" y="570" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="20" fill="#64748b" letter-spacing="4">WUXINGZODIAC.ME</text>

  <!-- Top accent bar -->
  <rect x="0" y="0" width="1200" height="4" fill="${colors.primary}" opacity="0.8"/>
</svg>`
}

// -- SVG template for home OG image --

function homeSvg(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a0a"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
    <linearGradient id="bar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="25%" stop-color="#f97316"/>
      <stop offset="50%" stop-color="#d97706"/>
      <stop offset="75%" stop-color="#94a3b8"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Five element dots -->
  <circle cx="360" cy="180" r="24" fill="#22c55e" opacity="0.7"/>
  <circle cx="480" cy="180" r="24" fill="#f97316" opacity="0.7"/>
  <circle cx="600" cy="180" r="24" fill="#d97706" opacity="0.7"/>
  <circle cx="720" cy="180" r="24" fill="#94a3b8" opacity="0.7"/>
  <circle cx="840" cy="180" r="24" fill="#3b82f6" opacity="0.7"/>

  <!-- Chinese: 五行 -->
  <text x="600" y="160" text-anchor="middle" font-family="serif" font-size="60" fill="#e5e5e5" opacity="0.1">五行十二生肖</text>

  <!-- Main title -->
  <text x="600" y="310" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="#f5f5f5" letter-spacing="2">Wu Xing Zodiac</text>

  <!-- Subtitle -->
  <text x="600" y="380" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="28" fill="#94a3b8" letter-spacing="1">All 60 Chinese Zodiac Signs — 5 Elements × 12 Animals</text>

  <!-- Tagline -->
  <text x="600" y="440" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="22" fill="#64748b">Compatibility • Personality • Career • Love • Lucky Traits</text>

  <!-- Five element gradient bar -->
  <rect x="100" y="500" width="1000" height="4" rx="2" fill="url(#bar)"/>

  <!-- Site URL -->
  <text x="600" y="570" text-anchor="middle" font-family="Inter, Helvetica, Arial, sans-serif" font-size="20" fill="#64748b" letter-spacing="4">WUXINGZODIAC.ME</text>

  <!-- Top gradient bar -->
  <rect x="0" y="0" width="1200" height="4" fill="url(#bar)"/>
</svg>`
}

// -- Main --

async function main() {
  const outDir = join(process.cwd(), 'public', 'og')
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

  let count = 0

  // Generate home OG image
  await sharp(Buffer.from(homeSvg()))
    .png()
    .toFile(join(outDir, 'home.png'))
  count++
  console.log(`[${count}/61] home.png`)

  // Generate all 60 sign OG images
  for (const element of ELEMENTS) {
    for (const animal of ANIMALS) {
      const slug = `${element}-${animal}`
      await sharp(Buffer.from(signSvg(element, animal)))
        .png()
        .toFile(join(outDir, `${slug}.png`))
      count++
      console.log(`[${count}/61] ${slug}.png`)
    }
  }

  console.log(`\nDone! Generated ${count} OG images in public/og/`)
}

main().catch(console.error)
