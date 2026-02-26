// SignShort — 30-40s vertical video for YouTube Shorts / TikTok / Reels.
// Designed for PHONE screens — all text must be large and readable.
// Loads optional per-sign overrides from data/overrides/{slug}.json.

import React from 'react'
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import { ElementBackground } from '../components/ElementBackground'
import { GlassCard } from '../components/GlassCard'
import { GradientText } from '../components/GradientText'
import { RadarChart } from '../components/RadarChart'
import { getTheme, type ZodiacElement } from '../data/theme'
import signsData from '../data/signs.json'
import visualDataJson from '../data/visual-data.json'
import defaults from '../data/overrides/_defaults.json'
// Per-sign overrides — add new imports here as you create override files
import fireHorseOverride from '../data/overrides/fire-horse.json'

// Map slug → override. Add entries here when adding new override files.
const overrideMap: Record<string, Record<string, unknown>> = {
  'fire-horse': fireHorseOverride as Record<string, unknown>,
}

function getOverrides(slug: string): Record<string, unknown> {
  return overrideMap[slug] ?? {}
}

// Type helpers
interface SignData {
  slug: string
  animal: string
  element: string
  name: string
  chineseName: string
  tagline: string
  years: number[]
  content: {
    archetype: { name: string; tagline: string }
    atAGlance: {
      element: string
      energy: string
      archetype: string
      coreStrength: string
      shadow: string
      bestMatch: string
      worstMatch: string
      luckyColor: string
    }
    personality: { body: string }
    matches: {
      best: { slug: string; name: string; reason: string }[]
      worst: { slug: string; name: string; reason: string }[]
    }
  } | null
}

interface VisualData {
  elementPercentages: Record<string, number>
  traitScores: {
    strategy: number
    compassion: number
    resilience: number
    ambition: number
    sociability: number
    creativity: number
  }
}

interface Props {
  slug: string
}

const FPS = 30

// Trait card config — maps override keys to sign data
const TRAIT_MAP: Record<string, (sign: SignData) => { label: string; value: string; emoji: string }> = {
  energy: (s) => ({
    label: 'Energy',
    value: s.content!.atAGlance.energy,
    emoji: s.content!.atAGlance.energy === 'Yang' ? '☀️' : '🌙',
  }),
  coreStrength: (s) => ({
    label: 'Core Strength',
    value: s.content!.atAGlance.coreStrength,
    emoji: '💪',
  }),
  shadow: (s) => ({
    label: 'Shadow',
    value: s.content!.atAGlance.shadow,
    emoji: '🌑',
  }),
  luckyColor: (s) => ({
    label: 'Lucky Color',
    value: s.content!.atAGlance.luckyColor,
    emoji: '🎨',
  }),
}

export const SignShort: React.FC<Props> = ({ slug }) => {
  const sign = (signsData as SignData[]).find(s => s.slug === slug)
  const visual = (visualDataJson as Record<string, VisualData>)[slug]
  const theme = getTheme(sign?.element ?? 'fire')
  const overrides = getOverrides(slug)

  if (!sign || !sign.content || !visual) {
    return (
      <AbsoluteFill style={{ backgroundColor: '#0a0a0a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: 48, fontFamily: 'Inter, system-ui, sans-serif' }}>Sign not found: {slug}</div>
      </AbsoluteFill>
    )
  }

  const content = sign.content

  // Resolve which trait cards to show (from overrides or defaults)
  const traitKeys = (overrides.traitCards ?? defaults.traitCards) as string[]
  const cards = traitKeys
    .filter(key => TRAIT_MAP[key])
    .map(key => TRAIT_MAP[key](sign))

  // Resolve which match to show
  const matchSide = (overrides.matchToShow ?? defaults.matchToShow) as string
  const match = matchSide === 'worst' ? content.matches.worst[0] : content.matches.best[0]

  const yearsStr = sign.years.slice(-3).join(', ')

  return (
    <AbsoluteFill>
      <ElementBackground element={sign.element as ZodiacElement} />

      {/* Scene 1: Chinese character (0-4s) */}
      <Sequence from={0} durationInFrames={FPS * 5}>
        <ChineseCharacterScene
          chineseName={sign.chineseName}
          element={sign.element as ZodiacElement}
        />
      </Sequence>

      {/* Scene 2: Sign name + tagline (4-9s) */}
      <Sequence from={FPS * 4} durationInFrames={FPS * 7}>
        <SignRevealScene
          name={sign.name}
          tagline={content.archetype.name}
          yearsStr={yearsStr}
          theme={theme}
        />
      </Sequence>

      {/* Scene 3: Trait cards — 2 only (9-17s) */}
      <Sequence from={FPS * 9} durationInFrames={FPS * 10}>
        <TraitCardsScene cards={cards} theme={theme} />
      </Sequence>

      {/* Scene 4: Radar chart (17-27s) */}
      <Sequence from={FPS * 17} durationInFrames={FPS * 12}>
        <RadarChartScene scores={visual.traitScores} theme={theme} />
      </Sequence>

      {/* Scene 5: Match reveal (27-35s) */}
      <Sequence from={FPS * 27} durationInFrames={FPS * 10}>
        <MatchRevealScene
          match={match}
          side={matchSide}
          theme={theme}
        />
      </Sequence>

      {/* Scene 6: CTA (35-40s) */}
      <Sequence from={FPS * 35} durationInFrames={FPS * 5}>
        <CTAScene theme={theme} />
      </Sequence>
    </AbsoluteFill>
  )
}

// ============================================
// SCENE COMPONENTS — all text sized for phones
// ============================================

function ChineseCharacterScene({ chineseName, element }: { chineseName: string; element: ZodiacElement }) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const scaleIn = spring({ frame, fps, config: { damping: 12, stiffness: 60 } })
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' })
  const theme = getTheme(element)

  return (
    <AbsoluteFill style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          fontSize: 320,
          fontWeight: 300,
          color: theme.primary,
          opacity,
          transform: `scale(${scaleIn})`,
          textShadow: `0 0 100px rgba(${theme.glowRgb}, 0.5)`,
          fontFamily: 'serif',
        }}
      >
        {chineseName}
      </div>
    </AbsoluteFill>
  )
}

function SignRevealScene({
  name,
  tagline,
  yearsStr,
  theme,
}: {
  name: string
  tagline: string
  yearsStr: string
  theme: ReturnType<typeof getTheme>
}) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const nameProgress = spring({ frame, fps, config: { damping: 14, stiffness: 100 } })
  const taglineOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const yearsOpacity = interpolate(frame, [50, 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 60px',
        gap: 32,
      }}
    >
      <GradientText
        primary={theme.primary}
        accent={theme.accent}
        fontSize={96}
        fontWeight={800}
        delay={0}
      >
        {name.toUpperCase()}
      </GradientText>

      <div
        style={{
          opacity: taglineOpacity,
          fontSize: 52,
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontStyle: 'italic',
          textAlign: 'center',
        }}
      >
        {tagline}
      </div>

      <div
        style={{
          opacity: yearsOpacity,
          fontSize: 42,
          fontWeight: 400,
          color: 'rgba(255, 255, 255, 0.45)',
          fontFamily: 'Inter, system-ui, sans-serif',
          textAlign: 'center',
        }}
      >
        Born in {yearsStr}
      </div>
    </AbsoluteFill>
  )
}

function TraitCardsScene({
  cards,
  theme,
}: {
  cards: { label: string; value: string; emoji: string }[]
  theme: ReturnType<typeof getTheme>
}) {
  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 56px',
        gap: 32,
      }}
    >
      {cards.map((card, i) => (
        <GlassCard
          key={card.label}
          delay={i * 15}
          glowRgb={theme.glowRgb}
          style={{ width: '100%' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span style={{ fontSize: 56 }}>{card.emoji}</span>
            <div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 600,
                  color: theme.accent,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: 3,
                  marginBottom: 8,
                }}
              >
                {card.label}
              </div>
              <div
                style={{
                  fontSize: 44,
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
              >
                {card.value}
              </div>
            </div>
          </div>
        </GlassCard>
      ))}
    </AbsoluteFill>
  )
}

function RadarChartScene({
  scores,
  theme,
}: {
  scores: VisualData['traitScores']
  theme: ReturnType<typeof getTheme>
}) {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: 'clamp' })

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        opacity,
      }}
    >
      <div
        style={{
          fontSize: 48,
          fontWeight: 600,
          color: theme.accent,
          fontFamily: 'Inter, system-ui, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: 4,
        }}
      >
        Trait Profile
      </div>
      <RadarChart
        scores={scores}
        delay={10}
        primaryColor={theme.primary}
        accentColor={theme.accent}
        glowRgb={theme.glowRgb}
        size={700}
      />
    </AbsoluteFill>
  )
}

function MatchRevealScene({
  match,
  side,
  theme,
}: {
  match: { name: string; reason: string }
  side: string
  theme: ReturnType<typeof getTheme>
}) {
  const isBest = side === 'best'
  const glowRgb = isBest ? '34, 197, 94' : '239, 68, 68'
  const labelColor = isBest ? '#86efac' : '#fca5a5'
  const nameColor = isBest ? '#22c55e' : '#ef4444'
  const emoji = isBest ? '💕' : '⚡'
  const label = isBest ? 'Best Match' : 'Challenging Match'

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 56px',
      }}
    >
      <GlassCard delay={0} glowRgb={glowRgb} style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: 64 }}>{emoji}</span>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: labelColor,
              fontFamily: 'Inter, system-ui, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: 4,
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: nameColor,
              fontFamily: 'Cinzel, Georgia, serif',
            }}
          >
            {match.name}
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.65)',
              fontFamily: 'Inter, system-ui, sans-serif',
              lineHeight: '1.4',
              maxWidth: 850,
            }}
          >
            {match.reason}
          </div>
        </div>
      </GlassCard>
    </AbsoluteFill>
  )
}

function CTAScene({ theme }: { theme: ReturnType<typeof getTheme> }) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const scale = spring({ frame, fps, config: { damping: 10, stiffness: 80 } })

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
      }}
    >
      <div
        style={{
          fontSize: 38,
          fontWeight: 500,
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: 'Inter, system-ui, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: 4,
          transform: `scale(${scale})`,
        }}
      >
        Full Reading
      </div>
      <GradientText
        primary={theme.primary}
        accent={theme.accent}
        fontSize={72}
        fontWeight={700}
        delay={5}
      >
        wuxingzodiac.me
      </GradientText>
    </AbsoluteFill>
  )
}
