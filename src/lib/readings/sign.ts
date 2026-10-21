// ============================================
// BIRTH DATE → SIGN (browser-safe)
// ============================================
// Wraps the existing calculator logic (lunar-new-year aware) and enriches
// it with the profile + archetype used across the site.
// NOTE: relative imports only — this file is also bundled into Netlify
// functions and run by tsx, neither of which resolve the `@/` alias.

import { getZodiacFromBirthdate, getSignSlug } from '../zodiac-data'
import { getProfileBySlug } from '../sign-content/profiles'
import { ARCHETYPES } from '../sign-content/archetypes'
import type { ZodiacAnimal, ZodiacElement } from '../../types'

export interface ReadingSign {
  slug: string            // 'fire-horse'
  element: ZodiacElement
  animal: ZodiacAnimal
  lunarYear: number       // zodiac year (may be birth year - 1 for Jan/Feb births)
  name: string            // 'Fire Horse'
  chineseName: string     // '丙午'
  archetype: string       // 'The Untamable Spirit'
}

/** Parse YYYY-MM-DD into numbers. Assumes the date was already validated. */
export function parseIsoDate(iso: string): { year: number; month: number; day: number } {
  const [year, month, day] = iso.split('-').map(Number)
  return { year: year!, month: month!, day: day! }
}

/** Compute the element + animal sign for an ISO birth date. */
export function getSignForBirthDate(iso: string): ReadingSign {
  const { year, month, day } = parseIsoDate(iso)
  const { animal, element, lunarYear } = getZodiacFromBirthdate(year, month, day)
  const slug = getSignSlug(animal, element)
  const profile = getProfileBySlug(slug)

  return {
    slug,
    element,
    animal,
    lunarYear,
    name: profile?.name ?? slug,
    chineseName: profile?.chineseName ?? '',
    archetype: ARCHETYPES[slug] ?? profile?.tagline ?? '',
  }
}

/** Human-readable ISO date, e.g. "12 June 1984" (fixed locale so PDFs are stable) */
export function formatIsoDate(iso: string): string {
  const { year, month, day } = parseIsoDate(iso)
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
