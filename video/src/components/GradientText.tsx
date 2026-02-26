// Element-colored gradient text with fade-in animation.

import React from 'react'
import { interpolate, useCurrentFrame, spring, useVideoConfig } from 'remotion'

interface Props {
  children: React.ReactNode
  primary: string
  accent: string
  delay?: number
  fontSize?: number
  fontWeight?: number
  style?: React.CSSProperties
}

export const GradientText: React.FC<Props> = ({
  children,
  primary,
  accent,
  delay = 0,
  fontSize = 64,
  fontWeight = 700,
  style,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 100 },
  })

  const opacity = interpolate(progress, [0, 1], [0, 1])
  const translateY = interpolate(progress, [0, 1], [20, 0])

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        fontSize,
        fontWeight,
        fontFamily: 'Cinzel, Georgia, serif',
        background: `linear-gradient(135deg, ${primary}, ${accent})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1.2,
        textAlign: 'center',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
