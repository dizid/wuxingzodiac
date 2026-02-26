// Animated dark background with element-colored radial glow and floating particles.

import React from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion'
import { getTheme, type ZodiacElement } from '../data/theme'

interface Props {
  element: ZodiacElement
}

export const ElementBackground: React.FC<Props> = ({ element }) => {
  const frame = useCurrentFrame()
  const theme = getTheme(element)

  // Slow pulsing glow
  const glowOpacity = interpolate(
    Math.sin(frame * 0.03),
    [-1, 1],
    [0.15, 0.35]
  )

  // Gentle drift for the glow center
  const glowX = 50 + Math.sin(frame * 0.01) * 5
  const glowY = 45 + Math.cos(frame * 0.015) * 5

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#0a0a0a',
        overflow: 'hidden',
      }}
    >
      {/* Primary radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at ${glowX}% ${glowY}%, rgba(${theme.glowRgb}, ${glowOpacity}) 0%, transparent 70%)`,
        }}
      />

      {/* Secondary accent glow (top corner) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 80% 15%, rgba(${theme.glowRgb}, ${glowOpacity * 0.4}) 0%, transparent 40%)`,
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <Particle key={i} index={i} frame={frame} theme={theme} />
      ))}

      {/* Subtle noise texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
    </AbsoluteFill>
  )
}

// Individual floating particle
function Particle({
  index,
  frame,
  theme,
}: {
  index: number
  frame: number
  theme: { primary: string; glowRgb: string }
}) {
  // Each particle has unique offset, speed, and size
  const seed = index * 137.5
  const speed = 0.3 + (index % 5) * 0.15
  const size = 3 + (index % 4) * 2
  const startX = (seed * 3.7) % 100
  const startY = ((seed * 2.3) % 100)

  // Float upward and drift horizontally
  const y = (startY - frame * speed * 0.5) % 120
  const x = startX + Math.sin(frame * 0.02 + seed) * 8
  const opacity = interpolate(
    Math.sin(frame * 0.04 + seed),
    [-1, 1],
    [0.1, 0.5]
  )

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y < 0 ? y + 120 : y}%`,
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: theme.primary,
        boxShadow: `0 0 ${size * 2}px rgba(${theme.glowRgb}, 0.6)`,
        opacity,
      }}
    />
  )
}
