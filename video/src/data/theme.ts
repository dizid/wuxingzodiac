// Element color palettes for Remotion video compositions.
// Derived from useElementTheme.ts + main.css in the main app.

export type ZodiacElement = 'wood' | 'fire' | 'earth' | 'metal' | 'water'

export interface ElementTheme {
  name: string
  chinese: string
  emoji: string
  primary: string
  accent: string
  glowRgb: string
  palette: Record<string, string>
}

export const ELEMENT_THEMES: Record<ZodiacElement, ElementTheme> = {
  wood: {
    name: 'Wood',
    chinese: '木',
    emoji: '🌳',
    primary: '#22c55e',
    accent: '#86efac',
    glowRgb: '34, 197, 94',
    palette: {
      '50': '#f0fdf4', '100': '#dcfce7', '200': '#bbf7d0', '300': '#86efac',
      '400': '#4ade80', '500': '#22c55e', '600': '#16a34a', '700': '#15803d',
      '800': '#166534', '900': '#14532d', '950': '#052e16',
    },
  },
  fire: {
    name: 'Fire',
    chinese: '火',
    emoji: '🔥',
    primary: '#f97316',
    accent: '#fbbf24',
    glowRgb: '249, 115, 22',
    palette: {
      '50': '#fff7ed', '100': '#ffedd5', '200': '#fed7aa', '300': '#fdba74',
      '400': '#fb923c', '500': '#f97316', '600': '#ea580c', '700': '#c2410c',
      '800': '#9a3412', '900': '#7c2d12', '950': '#431407',
    },
  },
  earth: {
    name: 'Earth',
    chinese: '土',
    emoji: '🌍',
    primary: '#d97706',
    accent: '#fbbf24',
    glowRgb: '217, 119, 6',
    palette: {
      '50': '#fffbeb', '100': '#fef3c7', '200': '#fde68a', '300': '#fcd34d',
      '400': '#fbbf24', '500': '#f59e0b', '600': '#d97706', '700': '#b45309',
      '800': '#92400e', '900': '#78350f', '950': '#451a03',
    },
  },
  metal: {
    name: 'Metal',
    chinese: '金',
    emoji: '🪙',
    primary: '#94a3b8',
    accent: '#e2e8f0',
    glowRgb: '148, 163, 184',
    palette: {
      '50': '#f8fafc', '100': '#f1f5f9', '200': '#e2e8f0', '300': '#cbd5e1',
      '400': '#94a3b8', '500': '#64748b', '600': '#475569', '700': '#334155',
      '800': '#1e293b', '900': '#0f172a', '950': '#020617',
    },
  },
  water: {
    name: 'Water',
    chinese: '水',
    emoji: '🌊',
    primary: '#3b82f6',
    accent: '#93c5fd',
    glowRgb: '59, 130, 246',
    palette: {
      '50': '#eff6ff', '100': '#dbeafe', '200': '#bfdbfe', '300': '#93c5fd',
      '400': '#60a5fa', '500': '#3b82f6', '600': '#2563eb', '700': '#1d4ed8',
      '800': '#1e40af', '900': '#1e3a8a', '950': '#172554',
    },
  },
}

// Get theme by element string
export function getTheme(element: string): ElementTheme {
  return ELEMENT_THEMES[element as ZodiacElement] ?? ELEMENT_THEMES.fire
}
