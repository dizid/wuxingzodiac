// Locating the ffmpeg binary and the watermark file at runtime.
//
// ffmpeg comes from `ffmpeg-static` (netlify.toml ships the package unbundled
// with the background function). If the deployed copy lost its executable bit,
// it is copied to /tmp once and made executable there.

import { access, chmod, copyFile, writeFile, constants } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import ffmpegStatic from 'ffmpeg-static'
import { WATERMARK_PNG_BASE64 } from './watermark-png'

let ffmpegReady: Promise<string> | null = null
let watermarkReady: Promise<string> | null = null

async function isExecutable(path: string): Promise<boolean> {
  try {
    await access(path, constants.X_OK)
    return true
  } catch {
    return false
  }
}

async function locateFfmpeg(): Promise<string> {
  const bundled = ffmpegStatic as unknown as string | null
  if (!bundled) throw new Error('ffmpeg-static has no binary for this platform')
  if (await isExecutable(bundled)) return bundled
  const copy = join(tmpdir(), 'ffmpeg-element-video')
  if (!(await isExecutable(copy))) {
    await copyFile(bundled, copy)
    await chmod(copy, 0o755)
  }
  return copy
}

/** Absolute path of a runnable ffmpeg (cached per function instance). */
export function ffmpegPath(): Promise<string> {
  ffmpegReady ??= locateFfmpeg().catch((error) => {
    ffmpegReady = null
    throw error
  })
  return ffmpegReady
}

/** The watermark PNG written to /tmp (cached per function instance). */
export function watermarkPath(): Promise<string> {
  watermarkReady ??= (async () => {
    const file = join(tmpdir(), 'element-video-watermark.png')
    await writeFile(file, Buffer.from(WATERMARK_PNG_BASE64, 'base64'))
    return file
  })().catch((error) => {
    watermarkReady = null
    throw error
  })
  return watermarkReady
}
