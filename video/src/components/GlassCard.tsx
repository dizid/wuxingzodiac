// Glass morphism card matching the website's aesthetic.
// Fades in with a slide animation.

import React from 'react'
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion'

interface Props {
  children: React.ReactNode
  delay?: number // frames before animation starts
  glowRgb: string
  style?: React.CSSProperties
}

export const GlassCard: React.FC<Props> = ({
  children,
  delay = 0,
  glowRgb,
  style,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 80 },
  })

  const opacity = interpolate(progress, [0, 1], [0, 1])
  const translateY = interpolate(progress, [0, 1], [30, 0])
  const scale = interpolate(progress, [0, 1], [0.95, 1])

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(16px)',
        border: `1px solid rgba(${glowRgb}, 0.2)`,
        borderRadius: 20,
        padding: '32px 36px',
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
