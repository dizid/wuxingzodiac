// ============================================
// STEP INTO YOUR ELEMENT — one Genie 4 session → raw frames + audio
// ============================================
// Genie 4 (Gemini API, paid tier) streams a live world: over WebSocket each
// `step.delta` carries ONE base64 JPEG frame (1280x720, 24 fps) or a chunk of
// raw 16-bit little-endian PCM audio (48 kHz stereo). There is no "make me a
// 20-second clip" call: we open a session, steer it (walk forward, then let
// the animal come close), and call complete() after the frames we need.
// complete() stops generation AND billing, so the clip length is the bill.
//
// Billing (docs, Nov 2026): 240 video output tokens per frame at $17.50 per
// 1M video tokens (audio included) = $0.0042 per frame, ~$0.10 per second.

import { GoogleGenAI } from '@google/genai'

export const GENIE_MODEL = 'genie-4'
export const GENIE_FPS = 24

/** Video output tokens Genie bills per frame (stereo audio included). */
const TOKENS_PER_FRAME = 240
/** USD per 1M video output tokens. */
const USD_PER_MILLION_VIDEO_TOKENS = 17.5

/** Dollars a session with this many frames costs (frames are the bill). */
export function genieCostUsd(frames: number): number {
  return Math.round(frames * TOKENS_PER_FRAME * USD_PER_MILLION_VIDEO_TOKENS) / 1_000_000
}

export interface GenieClip {
  /** JPEG frames in order (24 fps). */
  frames: Buffer[]
  /** Raw s16le PCM, interleaved; empty when the session sent no audio. */
  audio: Buffer
  audioSampleRate: number
  audioChannels: number
  /** Frames Genie generated, incl. any that arrived after complete() (all billed). */
  framesBilled: number
  costUsd: number
}

export interface GenieClipOptions {
  apiKey: string
  /** world_setup prompt (buildWorldPrompt). */
  worldPrompt: string
  /** Text input mid-way (buildCloseUpPrompt). */
  closeUpPrompt: string
  /** Clip length in seconds (frames kept = seconds × 24). */
  seconds: number
  /** Give up (and cancel the session) after this long. Default 3 minutes. */
  timeoutMs?: number
}

/** When (in frames) to steer the world during the clip. */
export function steeringPlan(seconds: number) {
  const total = Math.round(seconds * GENIE_FPS)
  return {
    total,
    // Stand still for a moment, then walk into the world
    walkStart: GENIE_FPS,
    // Ask the animal to come close a little past the middle (text lands in ~1-2 s)
    closeUp: Math.round(total * 0.45),
    // Stop walking so the animal can come to you instead of being walked past
    walkStop: Math.round(total * 0.7),
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Run one Genie 4 session and return the clip. Throws on any session error
 * or timeout (the session is cancelled first, so billing stops).
 */
export async function generateGenieClip(options: GenieClipOptions): Promise<GenieClip> {
  const plan = steeringPlan(options.seconds)
  const ai = new GoogleGenAI({ apiKey: options.apiKey, apiVersion: 'v1beta' })

  const interaction = await ai.interactions.create({ model: GENIE_MODEL, api_version: 'v1beta' })
  const session = await ai.interactions.connect(
    interaction.id,
    { transport: 'websocket', api_version: 'v1beta' },
    { timeout_ms: 30_000 },
  )

  const frames: Buffer[] = []
  const audioChunks: Buffer[] = []
  let audioSampleRate = 48_000
  let audioChannels = 2
  let framesBilled = 0
  let completing = false
  let timedOut = false

  // Hard stop: a stuck session must not keep billing
  const timer = setTimeout(() => {
    timedOut = true
    session.cancel().catch(() => {})
  }, options.timeoutMs ?? 180_000)

  // Docs: one-off text prompts land best when repeated 10x, 150 ms apart
  const sendCloseUp = async () => {
    for (let i = 0; i < 10 && !completing; i++) {
      await session.send({ event_type: 'input', content: [{ type: 'text', text: options.closeUpPrompt }] })
      await sleep(150)
    }
  }

  try {
    await session.send({ event_type: 'world_setup', world_prompt: { text: options.worldPrompt } })

    for await (const raw of session.receive()) {
      const event = raw as Record<string, unknown>
      const type = event.event_type

      if (type === 'error') {
        const detail = JSON.stringify(event.error ?? event).slice(0, 300)
        throw new Error(`Genie error: ${detail}`)
      }
      if (type === 'interaction.completed' || type === 'interaction.canceled') break
      if (type !== 'step.delta') continue

      const delta = event.delta as { type?: string; data?: string; sample_rate?: number; channels?: number } | undefined
      if (!delta?.data) continue

      if (delta.type === 'video') {
        framesBilled += 1
        if (completing) continue // already have our clip; frames after complete() are dropped
        frames.push(Buffer.from(delta.data, 'base64'))
        const n = frames.length

        if (n === plan.walkStart) {
          await session.send({ event_type: 'user_action', action: 'key_down', input: 'key_w' })
        } else if (n === plan.closeUp) {
          void sendCloseUp().catch(() => {})
        } else if (n === plan.walkStop) {
          await session.send({ event_type: 'user_action', action: 'key_up', input: 'key_w' })
        } else if (n >= plan.total) {
          completing = true
          await session.complete()
        }
      } else if (delta.type === 'audio') {
        if (completing) continue
        if (delta.sample_rate) audioSampleRate = delta.sample_rate
        if (delta.channels) audioChannels = delta.channels
        audioChunks.push(Buffer.from(delta.data, 'base64'))
      }
    }
  } catch (error) {
    if (!completing) await session.cancel().catch(() => {})
    throw error
  } finally {
    clearTimeout(timer)
  }

  if (timedOut) throw new Error(`Genie session timed out after ${frames.length} frames`)
  if (frames.length < plan.total) {
    throw new Error(`Genie session ended early: ${frames.length} of ${plan.total} frames`)
  }

  return {
    frames,
    audio: Buffer.concat(audioChunks),
    audioSampleRate,
    audioChannels,
    framesBilled,
    costUsd: genieCostUsd(framesBilled),
  }
}
