/**
 * Generate a sample personalized reading PDF locally to check quality.
 *
 * Run:
 *   npx tsx scripts/generate-sample-reading.ts --name "Marc" --date 1984-06-12
 *   npx tsx scripts/generate-sample-reading.ts --name "Sam" --date 1990-02-20 --gift --recipient "Sam" --message "Happy birthday!"
 *
 * Re-render a saved reading without calling Claude again (for template tweaks):
 *   npx tsx scripts/generate-sample-reading.ts --name "Marc" --date 1984-06-12 --from-json scripts/sample-readings/<file>.json
 *
 * Also email it exactly as customers receive it (needs RESEND_API_KEY):
 *   ... --send-to you@example.com
 *
 * Requires ANTHROPIC_API_KEY (read from the environment or .env) unless --from-json is used,
 * and Playwright's Chromium (`npx playwright install chromium`).
 * Writes <out>/<name>-<sign>.json / .html / .pdf (default out: scripts/sample-readings, gitignored).
 */

import { parseArgs } from 'node:util'
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { validateReadingInput, type ReadingType } from '../src/lib/readings/types'
import { getSignForBirthDate } from '../src/lib/readings/sign'
import { generateReadingContent, renderReading } from '../src/lib/readings/server/engine'
import { sendReadingEmail } from '../src/lib/readings/server/email'

const DEFAULT_OUT_DIR = join(import.meta.dirname, 'sample-readings')

function slugify(value: string): string {
  return value.toLowerCase().normalize('NFKD').replace(/[^\w]+/g, '-').replace(/^-|-$/g, '') || 'reading'
}

async function main() {
  const { values } = parseArgs({
    options: {
      name: { type: 'string' },
      date: { type: 'string' },
      type: { type: 'string', default: 'personal' },
      email: { type: 'string', default: 'sample@wuxingzodiac.me' },
      gift: { type: 'boolean', default: false },
      recipient: { type: 'string' },
      message: { type: 'string' },
      out: { type: 'string', default: DEFAULT_OUT_DIR },
      'from-json': { type: 'string' },
      'send-to': { type: 'string' },
    },
  })

  if (!values.name || !values.date) {
    console.error('Usage: npx tsx scripts/generate-sample-reading.ts --name "Marc" --date 1984-06-12 [--gift --recipient "Sam" --message "..."] [--from-json file.json]')
    process.exit(1)
  }

  const validation = validateReadingInput({
    readingType: values.type as ReadingType,
    names: [values.name],
    birthDates: [values.date],
    email: values.email,
    isGift: values.gift,
    recipientName: values.recipient,
    giftMessage: values.message,
  })
  if (!validation.ok) {
    console.error(`Invalid input: ${validation.error}`)
    process.exit(1)
  }
  const input = validation.input

  const sign = getSignForBirthDate(input.birthDates[0]!)
  const outDir = resolve(values.out)
  mkdirSync(outDir, { recursive: true })
  const baseName = `${slugify(input.names[0]!)}-${sign.slug}`
  console.log(`Reading for ${input.names[0]} — ${sign.name} (${sign.chineseName}), "${sign.archetype}"`)

  // 1. Text: reuse a saved JSON, or generate with Claude and save it immediately
  if (existsSync('.env')) process.loadEnvFile('.env')

  let content: unknown
  if (values['from-json']) {
    content = JSON.parse(readFileSync(resolve(values['from-json']), 'utf-8'))
    console.log(`Using saved content: ${values['from-json']}`)
  } else {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY is not set (add it to .env or export it)')
      process.exit(1)
    }
    console.log('Generating text with Claude (usually 1–2 minutes)...')
    const started = Date.now()
    content = await generateReadingContent(input)
    const jsonPath = join(outDir, `${baseName}.json`)
    writeFileSync(jsonPath, JSON.stringify(content, null, 2))
    console.log(`  Text ready in ${Math.round((Date.now() - started) / 1000)}s → ${jsonPath}`)
  }

  // 2. Render HTML → PDF
  console.log('Rendering PDF...')
  const reading = await renderReading(input, content)
  const htmlPath = join(outDir, `${baseName}.html`)
  const pdfPath = join(outDir, `${baseName}.pdf`)
  writeFileSync(htmlPath, reading.html)
  writeFileSync(pdfPath, reading.pdf)
  console.log(`  HTML → ${htmlPath}`)
  console.log(`  PDF  → ${pdfPath} (${Math.round(reading.pdf.length / 1024)} KB)`)

  // 3. Optionally email it, exactly as the background function does
  if (values['send-to']) {
    await sendReadingEmail(values['send-to'], reading.context, reading.pdf)
    console.log(`  Emailed → ${values['send-to']}`)
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
