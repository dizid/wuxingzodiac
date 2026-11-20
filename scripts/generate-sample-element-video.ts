// Make one "Step into your element" video locally (real Genie 4 call, real cost),
// through the same code the background function runs (makeElementVideo).
//
//   GEMINI_API_KEY=... npx tsx scripts/generate-sample-element-video.ts --sign fire-horse [--seconds 20] --yes
//
// Writes scripts/sample-videos/<sign>.mp4 (gitignored) plus <sign>-poster.jpg (the
// middle frame). Costs ~$0.10 per second of video; --yes is required so a stray
// run can't spend money.

import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { getProfileBySlug } from '../src/lib/sign-content/profiles'
import { genieCostUsd, GENIE_FPS } from '../src/lib/element-video/server/genie'
import { makeElementVideo } from '../src/lib/element-video/server/make-video'

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 ? process.argv[i + 1] : undefined
}

const slug = arg('sign') ?? 'fire-horse'
const seconds = Number(arg('seconds') ?? 20)
if (!getProfileBySlug(slug)) throw new Error(`Unknown sign: ${slug}`)
if (!Number.isFinite(seconds) || seconds < 2 || seconds > 30) throw new Error('--seconds must be 2-30')

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) throw new Error('GEMINI_API_KEY is not set')

if (!process.argv.includes('--yes')) {
  console.log(`This calls Genie 4 for ${seconds}s (~$${genieCostUsd(seconds * GENIE_FPS).toFixed(2)}). Add --yes to run.`)
  process.exit(1)
}

const started = Date.now()
const video = await makeElementVideo(slug, apiKey, seconds)
console.log(
  `${slug}: ${(video.mp4.length / 1024 / 1024).toFixed(2)} MB, ${video.framesBilled} frames billed ` +
    `(~$${video.costUsd.toFixed(3)}), ${((Date.now() - started) / 1000).toFixed(1)} s`,
)

const outDir = 'scripts/sample-videos'
mkdirSync(outDir, { recursive: true })
writeFileSync(join(outDir, `${slug}.mp4`), video.mp4)
writeFileSync(join(outDir, `${slug}-poster.jpg`), video.poster)
console.log(`Wrote ${outDir}/${slug}.mp4 and ${slug}-poster.jpg`)
