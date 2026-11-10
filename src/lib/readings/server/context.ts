// ============================================
// READING CONTEXT
// ============================================
// Gathers every fact the prompt and template need for a reading:
// computed sign, the site's sign content, element strength scores,
// and how the zodiac year the reading covers (see ../reading-year.ts)
// interacts with the person's sign.
// Deterministic facts are computed here so the model never has to guess them.

import type { ReadingInput } from '../types'
import { getSignForBirthDate, formatIsoDate, type ReadingSign } from '../sign'
import { getReadingYear, type ReadingYear } from '../reading-year'
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

/** The zodiac year the reading covers ('Fire Horse', 17 February 2026 – 5 February 2027), plus how it meets the person's sign */
export interface YearInfluence extends ReadingYear {
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

// Traditional animal relationships with the year's animal (三合 trine, 六合 harmony, 冲 clash, 害 harm).
// Written to the reader ("your"): the template prints these as-is.
// The Horse year keeps its original wording, so 2026 readings stay exactly as before.
const HORSE_YEAR_ANIMAL_RELATIONS: Partial<Record<ZodiacAnimal, string>> = {
  horse: 'Ben Ming Nian (本命年) — this is your own zodiac year, traditionally a year of change and testing that rewards caution and deliberate choices',
  rat: 'Clash (子午冲) — your Rat sits opposite the Horse; expect disruption, movement and forced change',
  goat: 'Six Harmony (午未合) — your Goat is the Horse\'s secret friend; support arrives through relationships',
  tiger: 'Trine ally (寅午戌) — your Tiger shares the Horse\'s fire trine; momentum and confidence come easily',
  dog: 'Trine ally (寅午戌) — your Dog shares the Horse\'s fire trine; loyal partnerships pay off',
  ox: 'Harm (丑午害) — your Ox and the Horse quietly undermine each other; watch for misunderstandings and hidden friction',
}

// The 12 earthly branches in their traditional order (rat 子 … pig 亥); pairs are written in this order (子午冲).
const BRANCHES: { animal: ZodiacAnimal; name: string; char: string }[] = [
  { animal: 'rat', name: 'Rat', char: '子' },
  { animal: 'ox', name: 'Ox', char: '丑' },
  { animal: 'tiger', name: 'Tiger', char: '寅' },
  { animal: 'rabbit', name: 'Rabbit', char: '卯' },
  { animal: 'dragon', name: 'Dragon', char: '辰' },
  { animal: 'snake', name: 'Snake', char: '巳' },
  { animal: 'horse', name: 'Horse', char: '午' },
  { animal: 'goat', name: 'Goat', char: '未' },
  { animal: 'monkey', name: 'Monkey', char: '申' },
  { animal: 'rooster', name: 'Rooster', char: '酉' },
  { animal: 'dog', name: 'Dog', char: '戌' },
  { animal: 'pig', name: 'Pig', char: '亥' },
]

// The four trines (三合), each named after its element, in their traditional character order
const TRINES: { animals: ZodiacAnimal[]; chars: string; element: string }[] = [
  { animals: ['monkey', 'rat', 'dragon'], chars: '申子辰', element: 'water' },
  { animals: ['pig', 'rabbit', 'goat'], chars: '亥卯未', element: 'wood' },
  { animals: ['tiger', 'horse', 'dog'], chars: '寅午戌', element: 'fire' },
  { animals: ['snake', 'rooster', 'ox'], chars: '巳酉丑', element: 'metal' },
]

// The six pairs for harmony (六合) and harm (害); a clash (冲) is the branch six places away
const SIX_HARMONY_PAIRS: [ZodiacAnimal, ZodiacAnimal][] = [
  ['rat', 'ox'], ['tiger', 'pig'], ['rabbit', 'dog'], ['dragon', 'rooster'], ['snake', 'monkey'], ['horse', 'goat'],
]
const HARM_PAIRS: [ZodiacAnimal, ZodiacAnimal][] = [
  ['rat', 'goat'], ['ox', 'horse'], ['tiger', 'snake'], ['rabbit', 'dragon'], ['monkey', 'pig'], ['rooster', 'dog'],
]

function branchIndex(animal: ZodiacAnimal): number {
  return BRANCHES.findIndex((b) => b.animal === animal)
}

/** The two branch characters in traditional order, e.g. rat + horse → '子午' */
function pairChars(a: ZodiacAnimal, b: ZodiacAnimal): string {
  const [first, second] = [branchIndex(a), branchIndex(b)].sort((x, y) => x - y)
  return BRANCHES[first!]!.char + BRANCHES[second!]!.char
}

function isPair(pairs: [ZodiacAnimal, ZodiacAnimal][], a: ZodiacAnimal, b: ZodiacAnimal): boolean {
  return pairs.some(([x, y]) => (x === a && y === b) || (x === b && y === a))
}

/** Same relation types and wording as the Horse year, for any year animal. */
function describeAnimalRelationGeneric(yearAnimal: ZodiacAnimal, personAnimal: ZodiacAnimal): string {
  const year = BRANCHES[branchIndex(yearAnimal)]!.name
  const person = BRANCHES[branchIndex(personAnimal)]!.name

  if (yearAnimal === personAnimal) {
    return 'Ben Ming Nian (本命年) — this is your own zodiac year, traditionally a year of change and testing that rewards caution and deliberate choices'
  }
  if ((branchIndex(yearAnimal) + 6) % 12 === branchIndex(personAnimal)) {
    return `Clash (${pairChars(yearAnimal, personAnimal)}冲) — your ${person} sits opposite the ${year}; expect disruption, movement and forced change`
  }
  if (isPair(SIX_HARMONY_PAIRS, yearAnimal, personAnimal)) {
    return `Six Harmony (${pairChars(yearAnimal, personAnimal)}合) — your ${person} is the ${year}'s secret friend; support arrives through relationships`
  }
  const trine = TRINES.find((t) => t.animals.includes(yearAnimal) && t.animals.includes(personAnimal))
  if (trine) {
    return `Trine ally (${trine.chars}) — your ${person} shares the ${year}'s ${trine.element} trine; momentum and confidence come easily`
  }
  if (isPair(HARM_PAIRS, yearAnimal, personAnimal)) {
    return `Harm (${pairChars(yearAnimal, personAnimal)}害) — your ${person} and the ${year} quietly undermine each other; watch for misunderstandings and hidden friction`
  }
  return `Neutral — your animal has no traditional clash or alliance with the ${year}; the element relationship sets the tone`
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

export function describeAnimalRelation(yearAnimal: ZodiacAnimal, personAnimal: ZodiacAnimal): string {
  if (yearAnimal === 'horse') {
    return (
      HORSE_YEAR_ANIMAL_RELATIONS[personAnimal] ??
      'Neutral — your animal has no traditional clash or alliance with the Horse; the element relationship sets the tone'
    )
  }
  return describeAnimalRelationGeneric(yearAnimal, personAnimal)
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
  const readingYear = getReadingYear(now)

  return {
    input,
    people,
    generatedOn,
    generatedOnLabel: formatIsoDate(generatedOn),
    year: {
      ...readingYear,
      elementRelation: describeElementRelation(readingYear.element, primary.sign.element),
      animalRelation: describeAnimalRelation(readingYear.animal, primary.sign.animal),
    },
  }
}
