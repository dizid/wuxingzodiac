// ============================================
// STEP INTO YOUR ELEMENT — JPEG frames + PCM audio → MP4 (H.264 + AAC)
// ============================================
// Uses the ffmpeg binary from `ffmpeg-static` (shipped with the background
// function, see netlify.toml). That build has no text filter, so the
// "wuxingzodiac.me" mark is a small PNG overlaid in the corner.
// Output plays inline on iPhone/Android (yuv420p, faststart) and stays
// well under 6 MB for 20 s, so one function response can serve it.

import { spawn } from 'node:child_process'
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

export interface EncodeInput {
  frames: Buffer[]
  fps: number
  audio: Buffer
  audioSampleRate: number
  audioChannels: number
  ffmpegPath: string
  /** PNG overlaid bottom-right; skipped when not given. */
  watermarkPath?: string
}

/** ffmpeg arguments (exported for tests). Input 0 = frames on stdin. */
export function buildFfmpegArgs(opts: {
  fps: number
  seconds: number
  audioFile: string | null
  audioSampleRate: number
  audioChannels: number
  watermarkPath?: string
  outFile: string
}): string[] {
  const args = ['-hide_banner', '-loglevel', 'error', '-y']
  args.push('-f', 'image2pipe', '-c:v', 'mjpeg', '-framerate', String(opts.fps), '-i', 'pipe:0')

  let nextInput = 1
  let audioIndex: number | null = null
  if (opts.audioFile) {
    args.push('-f', 's16le', '-ar', String(opts.audioSampleRate), '-ac', String(opts.audioChannels), '-i', opts.audioFile)
    audioIndex = nextInput++
  }
  let markIndex: number | null = null
  if (opts.watermarkPath) {
    args.push('-i', opts.watermarkPath)
    markIndex = nextInput++
  }

  const videoFilter =
    markIndex !== null
      ? `[0:v][${markIndex}:v]overlay=W-w-28:H-h-24,format=yuv420p[v]`
      : '[0:v]format=yuv420p[v]'
  args.push('-filter_complex', videoFilter, '-map', '[v]')
  if (audioIndex !== null) {
    // Pad audio with silence if it ends before the last frame; -t trims both to the clip
    args.push('-map', `${audioIndex}:a`, '-af', 'apad', '-c:a', 'aac', '-b:a', '128k')
  }
  args.push(
    '-c:v', 'libx264', '-preset', 'veryfast', '-crf', '24', '-maxrate', '2M', '-bufsize', '4M',
    '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    '-t', opts.seconds.toFixed(3),
    opts.outFile,
  )
  return args
}

/** Encode the clip; resolves with the MP4 bytes. */
export async function encodeMp4(input: EncodeInput): Promise<Buffer> {
  if (input.frames.length === 0) throw new Error('encodeMp4: no frames')
  const dir = await mkdtemp(join(tmpdir(), 'element-video-'))
  try {
    const outFile = join(dir, 'clip.mp4')
    let audioFile: string | null = null
    if (input.audio.length > 0) {
      audioFile = join(dir, 'audio.pcm')
      await writeFile(audioFile, input.audio)
    }

    const args = buildFfmpegArgs({
      fps: input.fps,
      seconds: input.frames.length / input.fps,
      audioFile,
      audioSampleRate: input.audioSampleRate,
      audioChannels: input.audioChannels,
      watermarkPath: input.watermarkPath,
      outFile,
    })

    await new Promise<void>((resolve, reject) => {
      const child = spawn(input.ffmpegPath, args, { stdio: ['pipe', 'ignore', 'pipe'] })
      let stderr = ''
      child.stderr.on('data', (chunk: Buffer) => {
        stderr = (stderr + chunk.toString()).slice(-2000)
      })
      child.on('error', reject)
      child.on('close', (code) => {
        if (code === 0) resolve()
        else reject(new Error(`ffmpeg exited ${code}: ${stderr.trim().slice(-400)}`))
      })
      // Ignore EPIPE: if ffmpeg dies early, 'close' reports the real error
      child.stdin.on('error', () => {})

      // Feed frames with backpressure
      const writeFrames = async () => {
        for (const frame of input.frames) {
          if (!child.stdin.write(frame)) {
            await new Promise((r) => child.stdin.once('drain', r))
          }
        }
        child.stdin.end()
      }
      writeFrames().catch(reject)
    })

    return await readFile(outFile)
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
}
