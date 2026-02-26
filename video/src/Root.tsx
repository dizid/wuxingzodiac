// Remotion composition registry for wuxingzodiac video generation.

import React from 'react'
import { Composition } from 'remotion'
import { SignShort } from './compositions/SignShort'

const FPS = 30
const DURATION_SECONDS = 40

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* YouTube Shorts / TikTok / Reels — vertical 9:16 */}
      <Composition
        id="SignShort"
        component={SignShort}
        durationInFrames={FPS * DURATION_SECONDS}
        fps={FPS}
        width={1080}
        height={1920}
        defaultProps={{ slug: 'fire-horse' }}
      />

      {/* Square variant for Instagram posts */}
      <Composition
        id="SignShortSquare"
        component={SignShort}
        durationInFrames={FPS * DURATION_SECONDS}
        fps={FPS}
        width={1080}
        height={1080}
        defaultProps={{ slug: 'fire-horse' }}
      />
    </>
  )
}
