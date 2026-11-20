// One sign → finished MP4 (Genie 4 session + encode). Used by the background
// function and the local sample script, so both make exactly the same video.

import { getProfileBySlug } from '../../sign-content/profiles'
import { buildWorldPrompt, buildCloseUpPrompt } from '../worlds'
import { ELEMENT_VIDEO_SECONDS } from '../offer'
import { generateGenieClip, GENIE_FPS } from './genie'
import { encodeMp4 } from './encode'
import { ffmpegPath, watermarkPath } from './media'

export interface MadeVideo {
  mp4: Buffer
  /** Middle frame (JPEG), e.g. for a poster image */
  poster: Buffer
  costUsd: number
  framesBilled: number
}

export async function makeElementVideo(
  signSlug: string,
  apiKey: string,
  seconds: number = ELEMENT_VIDEO_SECONDS,
): Promise<MadeVideo> {
  const profile = getProfileBySlug(signSlug)
  if (!profile) throw new Error(`Unknown sign: ${signSlug}`)

  const clip = await generateGenieClip({
    apiKey,
    worldPrompt: buildWorldPrompt(profile.element, profile.animal),
    closeUpPrompt: buildCloseUpPrompt(profile.element, profile.animal),
    seconds,
  })

  const mp4 = await encodeMp4({
    frames: clip.frames,
    fps: GENIE_FPS,
    audio: clip.audio,
    audioSampleRate: clip.audioSampleRate,
    audioChannels: clip.audioChannels,
    ffmpegPath: await ffmpegPath(),
    watermarkPath: await watermarkPath(),
  })

  return {
    mp4,
    poster: clip.frames[Math.floor(clip.frames.length / 2)]!,
    costUsd: clip.costUsd,
    framesBilled: clip.framesBilled,
  }
}
