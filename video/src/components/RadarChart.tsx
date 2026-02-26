// Animated 6-axis radar chart for trait scores.
// Draws from center outward with spring animation.

import React from 'react'
import { spring, useCurrentFrame, useVideoConfig } from 'remotion'

interface TraitScores {
  strategy: number
  compassion: number
  resilience: number
  ambition: number
  sociability: number
  creativity: number
}

interface Props {
  scores: TraitScores
  delay?: number
  primaryColor: string
  accentColor: string
  glowRgb: string
  size?: number
}

const LABELS = ['Strategy', 'Compassion', 'Resilience', 'Ambition', 'Sociability', 'Creativity']
const KEYS: (keyof TraitScores)[] = ['strategy', 'compassion', 'resilience', 'ambition', 'sociability', 'creativity']

export const RadarChart: React.FC<Props> = ({
  scores,
  delay = 0,
  primaryColor,
  accentColor,
  glowRgb,
  size = 400,
}) => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 60 },
  })

  const center = size / 2
  const radius = size * 0.34

  // Get point position on the hexagon for a given axis index and value
  function getPoint(index: number, value: number): [number, number] {
    const angle = (Math.PI * 2 * index) / 6 - Math.PI / 2
    const r = (value / 100) * radius * progress
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)]
  }

  // Data polygon points
  const dataPoints = KEYS.map((key, i) => getPoint(i, scores[key]))
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ') + ' Z'

  // Grid rings at 25%, 50%, 75%, 100%
  const gridRings = [25, 50, 75, 100].map(pct => {
    const points = Array.from({ length: 6 }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
      const r = (pct / 100) * radius
      return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`
    })
    return points.join(' ')
  })

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Grid lines */}
      {gridRings.map((points, i) => (
        <polygon
          key={i}
          points={points}
          fill="none"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth={1}
        />
      ))}

      {/* Axis lines */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
        const x2 = center + radius * Math.cos(angle)
        const y2 = center + radius * Math.sin(angle)
        return (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={x2}
            y2={y2}
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth={1}
          />
        )
      })}

      {/* Data polygon glow */}
      <path
        d={dataPath}
        fill={`rgba(${glowRgb}, 0.15)`}
        stroke={primaryColor}
        strokeWidth={3}
        filter="url(#glow)"
      />

      {/* SVG glow filter */}
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle
          key={i}
          cx={p[0]}
          cy={p[1]}
          r={6}
          fill={accentColor}
          stroke={primaryColor}
          strokeWidth={2.5}
        />
      ))}

      {/* Labels */}
      {KEYS.map((key, i) => {
        const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2
        const labelR = radius + 52
        const x = center + labelR * Math.cos(angle)
        const y = center + labelR * Math.sin(angle)
        const score = Math.round(scores[key] * progress)

        return (
          <g key={i}>
            <text
              x={x}
              y={y - 12}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(255, 255, 255, 0.7)"
              fontSize={28}
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight={500}
            >
              {LABELS[i]}
            </text>
            <text
              x={x}
              y={y + 18}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={accentColor}
              fontSize={34}
              fontFamily="Inter, system-ui, sans-serif"
              fontWeight={700}
            >
              {score}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
