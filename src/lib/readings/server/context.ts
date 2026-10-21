// ============================================
// READING CONTEXT
// ============================================
// Gathers every fact the prompt and template need for a reading:
// computed sign, the site's sign content, element strength scores,
// and how the current Fire Horse year interacts with the person's sign.
// Deterministic facts are computed here so the model never has to guess them.

import type { ReadingInput } from '../types'
import { getSignForBirthDate, formatIsoDate, type ReadingSign } from '../sign'
import { loadSignContentServer } from './sign-content-registry'
import { getVisualData } from '../../sign-visual-data'
import { GENERATES, DESTROYS, ELEMENT_LABELS } from '../../wuxing-cycles'
import type { ElementPercentages, SignContentV2, ZodiacAnimal, ZodiacElement } from '../../../types'

/**
 * Element strength on a 0–100 scale — the same numbers as the site's pentagon
 * chart (src/lib/sign-visual-data.ts). Scores are independent, not shares of
 * a whole, so they don't add up to 100.
 */
export interface ElementStrength {
  element: ZodiacElement
  label: string
  strength: number
}

export interface PersonContext {
  name: string
  birthDate: string        // ISO
  birthDateLabel: string   // '12 June 1984'
  sign: ReadingSign
  content: SignContentV2
  /** Element strengths, strongest first */
  elementBalance: ElementStrength[]
}

export interface YearInfluence {
  year: number
  signName: string          // 'Fire Horse'
  element: ZodiacElement
  animal: ZodiacAnimal
  period: string            // '17 February 2026 – 5 February 2027'
  endsLabel: string         // '5 February 2027'
  /** Wu Xing relation between the year's element and the person's element (second person: shown in the PDF) */
  elementRelation: string
  /** Traditional animal relation between the year's animal and the person's animal (second person: shown in the PDF) */
  animalRelation: string
}

export interface ReadingContext {
  input: ReadingInput
  people: PersonContext[]
  /** Generation date as ISO (YYYY-MM-DD) — anchors "remaining months" advice */
  generatedOn: string
  generatedOnLabel: string
  year: YearInfluence
}

// The current zodiac year covered by the "2026 outlook" section
const CURRENT_YEAR: Omit<YearInfluence, 'elementRelation' | 'animalRelation'> = {
  year: 2026,
  signName: 'Fire Horse',
  element: 'fire',
  animal: 'horse',
  period: '17 February 2026 – 5 February 2027',
  endsLabel: '5 February 2027',
}

// Traditional Horse-year animal relationships (三合 trine, 六合 harmony, 冲 clash, 害 harm).
// Written to the reader ("your"): the template prints these as-is.
const HORSE_YEAR_ANIMAL_RELATIONS: Partial<Record<ZodiacAnimal, string>> = {
  horse: 'Ben Ming Nian (本命年) — this is your own zodiac year, traditionally a year of change and testing that rewards caution and deliberate choices',
  rat: 'Clash (子午冲) — your Rat sits opposite the Horse; expect disruption, movement and forced change',
  goat: 'Six Harmony (午未合) — your Goat is the Horse\'s secret friend; support arrives through relationships',
  tiger: 'Trine ally (寅午戌) — your Tiger shares the Horse\'s fire trine; momentum and confidence come easily',
  dog: 'Trine ally (寅午戌) — your Dog shares the Horse\'s fire trine; loyal partnerships pay off',
  ox: 'Harm (丑午害) — your Ox and the Horse quietly undermine each other; watch for misunderstandings and hidden friction',
}

function describeElementRelation(yearElement: ZodiacElement, personElement: ZodiacElement): string {
  const year = ELEMENT_LABELS[yearElement]
  const person = ELEMENT_LABELS[personElement]

  if (yearElement === personElement) {
    return `Same element — the year's ${year} amplifies your own ${person}: strengths and excesses both get louder`
  }
  if (GENERATES[yearElement] === personElement) {
    return `The year's ${year} generates your ${person} — a nourishing, supportive year`
  }
  if (GENERATES[personElement] === yearElement) {
    return `Your ${person} feeds the year's ${year} — an output year: creative and visible, but draining if you overextend`
  }
  if (DESTROYS[yearElement] === personElement) {
    return `The year's ${year} controls your ${person} — a pressure year that forges discipline but demands rest and boundaries`
  }
  return `Your ${person} controls the year's ${year} — a year of effort that converts into reward when you stay in charge of your energy`
}

function describeAnimalRelation(personAnimal: ZodiacAnimal): string {
  return (
    HORSE_YEAR_ANIMAL_RELATIONS[personAnimal] ??
    'Neutral — your animal has no traditional clash or alliance with the Horse; the element relationship sets the tone'
  )
}

function toElementBalance(percentages: ElementPercentages | undefined, fallback: ZodiacElement): ElementStrength[] {
  // Every sign has visual data; the fallback only guards against a missing entry
  const scores = percentages ?? { wood: 20, fire: 20, earth: 20, metal: 20, water: 20, [fallback]: 80 }
  return (Object.keys(scores) as ZodiacElement[])
    .map((element) => ({ element, label: ELEMENT_LABELS[element], strength: scores[element] }))
    .sort((a, b) => b.strength - a.strength)
}

async function buildPerson(name: string, birthDate: string): Promise<PersonContext> {
  const sign = getSignForBirthDate(birthDate)
  const content = await loadSignContentServer(sign.slug)
  return {
    name,
    birthDate,
    birthDateLabel: formatIsoDate(birthDate),
    sign,
    content,
    elementBalance: toElementBalance(getVisualData(sign.slug)?.elementPercentages, sign.element),
  }
}

/** Build the full context for a validated reading input. */
export async function buildReadingContext(input: ReadingInput, now: Date = new Date()): Promise<ReadingContext> {
  const people = await Promise.all(
    input.names.map((name, index) => buildPerson(name, input.birthDates[index]!)),
  )
  const primary = people[0]!
  const generatedOn = now.toISOString().slice(0, 10)

  return {
    input,
    people,
    generatedOn,
    generatedOnLabel: formatIsoDate(generatedOn),
    year: {
      ...CURRENT_YEAR,
      elementRelation: describeElementRelation(CURRENT_YEAR.element, primary.sign.element),
      animalRelation: describeAnimalRelation(primary.sign.animal),
    },
  }
}
