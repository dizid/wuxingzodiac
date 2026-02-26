/**
 * Generate AI voiceover narrations for zodiac sign video Shorts.
 * Uses ElevenLabs TTS API to create MP3 files per sign.
 *
 * Run:
 *   npx tsx scripts/generate-voiceovers.ts                # All 60 signs
 *   npx tsx scripts/generate-voiceovers.ts fire-horse      # Single sign
 *   npx tsx scripts/generate-voiceovers.ts --dry-run       # Print scripts only
 *
 * Requires: ELEVENLABS_API_KEY env var
 * Output: video/audio/{slug}.mp3
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dirname, '..')
const AUDIO_DIR = join(ROOT, 'video', 'audio')
const SIGNS_JSON = join(ROOT, 'video', 'src', 'data', 'signs.json')
const OVERRIDES_DIR = join(ROOT, 'video', 'src', 'data', 'overrides')

// ElevenLabs config
const API_KEY = process.env.ELEVENLABS_API_KEY
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID ?? 'pNInz6obpgDQGcFmaJgB' // Default: Adam (deep, clear)
const MODEL_ID = 'eleven_multilingual_v2'

interface SignData {
  slug: string
  name: string
  element: string
  animal: string
  years: number[]
  content: {
    archetype: { name: string }
    atAGlance: {
      energy: string
      coreStrength: string
      shadow: string
      bestMatch: string
      worstMatch: string
    }
    personality: { body: string }
    matches: {
      best: { name: string; reason: string }[]
      worst: { name: string; reason: string }[]
    }
  } | null
}

/**
 * Load per-sign override JSON if it exists.
 * Returns the override object or null.
 */
function loadOverride(slug: string): Record<string, unknown> | null {
  const overridePath = join(OVERRIDES_DIR, `${slug}.json`)
  if (existsSync(overridePath)) {
    return JSON.parse(readFileSync(overridePath, 'utf-8'))
  }
  return null
}

/**
 * Compose a 30-45 second narration script from sign data.
 * If a per-sign override has a custom voiceover.script, use that instead.
 * Aim for ~100-130 words (speaking rate ~3 words/sec for natural pace).
 */
function composeScript(sign: SignData): string {
  // Check for custom script in per-sign override
  const override = loadOverride(sign.slug)
  if (override) {
    const voiceover = override.voiceover as Record<string, unknown> | undefined
    if (voiceover?.script && typeof voiceover.script === 'string') {
      return voiceover.script
    }
  }

  // Auto-generate script from sign data
  if (!sign.content) return `The ${sign.name}. A unique combination in the Chinese zodiac.`

  const c = sign.content
  const yearsStr = sign.years.slice(-3).join(', ')

  // Extract first 2 sentences from personality for the core description
  const sentences = c.personality.body.split(/(?<=[.!?])\s+/)
  const personalityExcerpt = sentences.slice(0, 2).join(' ')

  // Build the script
  const lines = [
    // Hook (3s)
    `Born in ${yearsStr}? You're a ${sign.name}.`,

    // Archetype (2s)
    `${c.archetype.name}.`,

    // Core personality (8-10s)
    personalityExcerpt,

    // Traits (5s)
    `Your core strength: ${c.atAGlance.coreStrength}. But watch out for your shadow side: ${c.atAGlance.shadow}.`,

    // Compatibility (5s)
    `Your best match? ${c.matches.best[0].name}. ${c.matches.best[0].reason}.`,

    // Challenge tease (3s)
    `Your toughest match: ${c.matches.worst[0].name}.`,

    // CTA (3s)
    `Get your full reading at wuxing zodiac dot me.`,
  ]

  return lines.join('\n\n')
}

async function generateAudio(text: string, outputPath: string): Promise<void> {
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': API_KEY!,
      },
      body: JSON.stringify({
        text,
        model_id: MODEL_ID,
        voice_settings: {
          stability: 0.6,
          similarity_boost: 0.75,
          style: 0.3,
          use_speaker_boost: true,
        },
      }),
    }
  )

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`ElevenLabs API error (${response.status}): ${err}`)
  }

  const buffer = Buffer.from(await response.arrayBuffer())
  writeFileSync(outputPath, buffer)
}

async function main() {
  // Parse args
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const singleSlug = args.find(a => !a.startsWith('--'))

  if (!dryRun && !API_KEY) {
    console.error('Error: ELEVENLABS_API_KEY env var is required.')
    console.error('Set it: export ELEVENLABS_API_KEY=your_key_here')
    console.error('Or use --dry-run to preview scripts without generating audio.')
    process.exit(1)
  }

  // Load sign data
  if (!existsSync(SIGNS_JSON)) {
    console.error(`Error: ${SIGNS_JSON} not found.`)
    console.error('Run: npm run video:export')
    process.exit(1)
  }

  const signs: SignData[] = JSON.parse(readFileSync(SIGNS_JSON, 'utf-8'))

  // Filter to single slug if specified
  const toProcess = singleSlug
    ? signs.filter(s => s.slug === singleSlug)
    : signs.filter(s => s.content !== null)

  if (toProcess.length === 0) {
    console.error(`No signs found${singleSlug ? ` matching "${singleSlug}"` : ''}.`)
    process.exit(1)
  }

  // Ensure output dir
  if (!dryRun && !existsSync(AUDIO_DIR)) {
    mkdirSync(AUDIO_DIR, { recursive: true })
  }

  console.log(`${dryRun ? '[DRY RUN] ' : ''}Processing ${toProcess.length} sign(s)...\n`)

  for (let i = 0; i < toProcess.length; i++) {
    const sign = toProcess[i]
    const script = composeScript(sign)
    const wordCount = script.split(/\s+/).length
    const outputPath = join(AUDIO_DIR, `${sign.slug}.mp3`)

    // Check if this sign uses a custom override script
    const override = loadOverride(sign.slug)
    const hasCustomScript = !!(override?.voiceover as Record<string, unknown> | undefined)?.script
    const scriptSource = hasCustomScript ? '(custom override)' : '(auto-generated)'

    console.log(`[${i + 1}/${toProcess.length}] ${sign.name} (${wordCount} words) ${scriptSource}`)

    if (dryRun) {
      console.log('---')
      console.log(script)
      console.log('---\n')
      continue
    }

    // Skip if already generated
    if (existsSync(outputPath)) {
      console.log('  → Already exists, skipping')
      continue
    }

    try {
      await generateAudio(script, outputPath)
      console.log(`  → ${outputPath}`)

      // Rate limit: ElevenLabs free tier allows ~3 req/s
      if (i < toProcess.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500))
      }
    } catch (err) {
      console.error(`  ✗ Failed: ${err}`)
    }
  }

  console.log('\nDone!')
}

main().catch(err => {
  console.error('Voiceover generation failed:', err)
  process.exit(1)
})
