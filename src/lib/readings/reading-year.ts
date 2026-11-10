// ============================================
// THE ZODIAC YEAR A READING COVERS (browser-safe)
// ============================================
// The reading's year section ("Your 2026 Fire Horse year") follows the
// calendar year of the order date (Chief/Marc, Nov 10 2026, option 2):
// - 1 January to the day before Lunar New Year: the coming zodiac year
//   (bought in January 2027 → the Fire Goat year, from 6 February 2027),
//   so a January buyer gets a full year ahead instead of a few weeks.
// - Lunar New Year to 31 December: the zodiac year in progress.
// Used by the reading prompt, PDF and email (server) and by the copy on
// /reading and the reading buttons (client), so they always agree.
// NOTE: relative imports only — this file is also bundled into Netlify
// functions and run by tsx, neither of which resolve the `@/` alias.

import { getAnimalForYear, getElementForYear, lunarNewYearDates, zodiacAnimals } from '../zodiac-data'
import { ELEMENT_LABELS } from '../wuxing-cycles'
import { formatIsoDate } from './sign'
import type { ZodiacAnimal, ZodiacElement } from '../../types'

export interface ReadingYear {
  year: number              // 2027
  element: ZodiacElement    // 'fire'
  animal: ZodiacAnimal      // 'goat'
  signName: string          // 'Fire Goat'
  animalName: string        // 'Goat'
  startIso: string          // '2027-02-06' (Lunar New Year)
  startLabel: string        // '6 February 2027'
  endsLabel: string         // '25 January 2028' (the day before the next Lunar New Year)
  period: string            // '6 February 2027 – 25 January 2028'
  /** Whether the zodiac year has begun on the given date (false in January before Lunar New Year) */
  started: boolean
}

function toIso(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

/** ISO date of Lunar New Year in a calendar year (table in zodiac-data.ts, 1924–2043). */
function lunarNewYearIso(year: number): string {
  const date = lunarNewYearDates[year]
  if (!date) throw new Error(`No Lunar New Year date for ${year} in zodiac-data.ts`)
  return toIso(year, date[0], date[1])
}

/** The day before an ISO date, as ISO (UTC, so no time-zone shifts). */
function dayBefore(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(Date.UTC(year!, month! - 1, day! - 1)).toISOString().slice(0, 10)
}

/** The zodiac year a reading generated (or ordered) on `now` covers. Dates are UTC, like the reading's own date. */
export function getReadingYear(now: Date = new Date()): ReadingYear {
  const today = now.toISOString().slice(0, 10)
  const year = now.getUTCFullYear()
  const element = getElementForYear(year)
  const animal = getAnimalForYear(year)
  const animalName = zodiacAnimals.find((a) => a.animal === animal)?.name ?? animal

  const startIso = lunarNewYearIso(year)
  const startLabel = formatIsoDate(startIso)
  const endsLabel = formatIsoDate(dayBefore(lunarNewYearIso(year + 1)))

  return {
    year,
    element,
    animal,
    signName: `${ELEMENT_LABELS[element]} ${animalName}`,
    animalName,
    startIso,
    startLabel,
    endsLabel,
    period: `${startLabel} – ${endsLabel}`,
    started: today >= startIso,
  }
}
