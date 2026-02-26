// Character-by-character text reveal animation.

import React from 'react'
import { useCurrentFrame } from 'remotion'

interface Props {
  text: string
  startFrame: number
  speed?: number // characters per frame
  color?: string
  fontSize?: number
  fontWeight?: number
  style?: React.CSSProperties
}

export const TypewriterText: React.FC<Props> = ({
  text,
  startFrame,
  speed = 1.5,
  color = 'rgba(255, 255, 255, 0.9)',
  fontSize = 28,
  fontWeight = 400,
  style,
}) => {
  const frame = useCurrentFrame()
  const elapsed = Math.max(0, frame - startFrame)
  const charsToShow = Math.min(Math.floor(elapsed * speed), text.length)

  const visible = text.slice(0, charsToShow)

  return (
    <div
      style={{
        color,
        fontSize,
        fontWeight,
        fontFamily: 'Inter, system-ui, sans-serif',
        lineHeight: 1.5,
        ...style,
      }}
    >
      {visible}
      {charsToShow < text.length && (
        <span
          style={{
            opacity: Math.sin(frame * 0.15) > 0 ? 1 : 0,
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          |
        </span>
      )}
    </div>
  )
}
