// The zodiac year a reading covers (T-0224, option 2: from 1 January the coming year).
// The 2026 checks pin today's readings to exactly what they were before the switch.
import { describe, it, expect } from 'vitest'
import { getReadingYear } from '../reading-year'
import { buildReadingContext, describeAnimalRelation } from '../server/context'
import { buildPersonalSchema, buildPersonalUserMessage } from '../server/prompts/personal'
import type { ReadingInput } from '../types'
import type { ZodiacAnimal } from '../../../types'

const ANIMALS: ZodiacAnimal[] = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']

// Fire Horse wording from before the switch (src/lib/readings/server/context.ts, Nov 2026)
const HORSE_NEUTRAL = 'Neutral — your animal has no traditional clash or alliance with the Horse; the element relationship sets the tone'
const OLD_HORSE_RELATIONS: Partial<Record<ZodiacAnimal, string>> = {
  horse: 'Ben Ming Nian (本命年) — this is your own zodiac year, traditionally a year of change and testing that rewards caution and deliberate choices',
  rat: 'Clash (子午冲) — your Rat sits opposite the Horse; expect disruption, movement and forced change',
  goat: 'Six Harmony (午未合) — your Goat is the Horse\'s secret friend; support arrives through relationships',
  tiger: 'Trine ally (寅午戌) — your Tiger shares the Horse\'s fire trine; momentum and confidence come easily',
  dog: 'Trine ally (寅午戌) — your Dog shares the Horse\'s fire trine; loyal partnerships pay off',
  ox: 'Harm (丑午害) — your Ox and the Horse quietly undermine each other; watch for misunderstandings and hidden friction',
}

// A Metal Horse (14 May 1990), the sample reading's test person
const INPUT: ReadingInput = {
  type: 'personal',
  names: ['Anna'],
  birthDates: ['1990-05-14'],
  email: 'anna@example.com',
  isGift: false,
}

describe('getReadingYear', () => {
  it('covers the 2026 Fire Horse year in November 2026, as before the switch', () => {
    expect(getReadingYear(new Date('2026-11-10T12:00:00Z'))).toEqual({
      year: 2026,
      element: 'fire',
      animal: 'horse',
      signName: 'Fire Horse',
      animalName: 'Horse',
      startIso: '2026-02-17',
      startLabel: '17 February 2026',
      endsLabel: '5 February 2027',
      period: '17 February 2026 – 5 February 2027',
      started: true,
    })
  })

  it('stays on the Fire Horse year until the end of 31 December 2026 (UTC)', () => {
    expect(getReadingYear(new Date('2026-12-31T23:59:59Z')).signName).toBe('Fire Horse')
  })

  it('switches to the coming Fire Goat year on 1 January 2027, before it starts', () => {
    const year = getReadingYear(new Date('2027-01-01T00:00:00Z'))
    expect(year).toMatchObject({
      year: 2027,
      signName: 'Fire Goat',
      animalName: 'Goat',
      startLabel: '6 February 2027',
      endsLabel: '25 January 2028',
      period: '6 February 2027 – 25 January 2028',
      started: false,
    })
  })

  it('marks the Fire Goat year as started from Lunar New Year, 6 February 2027', () => {
    expect(getReadingYear(new Date('2027-02-05T23:00:00Z')).started).toBe(false)
    expect(getReadingYear(new Date('2027-02-06T00:00:00Z')).started).toBe(true)
  })

  it('moves on to the Earth Monkey year on 1 January 2028', () => {
    expect(getReadingYear(new Date('2028-01-01T00:00:00Z'))).toMatchObject({
      year: 2028,
      signName: 'Earth Monkey',
      startLabel: '26 January 2028',
      endsLabel: '12 February 2029',
      started: false,
    })
  })

  it('has Lunar New Year dates for every year up to 2042', () => {
    for (let year = 2026; year <= 2042; year++) {
      expect(() => getReadingYear(new Date(Date.UTC(year, 5, 1)))).not.toThrow()
    }
  })
})

describe('describeAnimalRelation', () => {
  it('keeps the Horse-year wording word for word', () => {
    for (const animal of ANIMALS) {
      expect(describeAnimalRelation('horse', animal)).toBe(OLD_HORSE_RELATIONS[animal] ?? HORSE_NEUTRAL)
    }
  })

  it('gives the traditional Goat-year relations', () => {
    expect(describeAnimalRelation('goat', 'goat')).toMatch(/^Ben Ming Nian \(本命年\)/)
    expect(describeAnimalRelation('goat', 'ox')).toBe('Clash (丑未冲) — your Ox sits opposite the Goat; expect disruption, movement and forced change')
    expect(describeAnimalRelation('goat', 'horse')).toBe('Six Harmony (午未合) — your Horse is the Goat\'s secret friend; support arrives through relationships')
    expect(describeAnimalRelation('goat', 'rabbit')).toBe('Trine ally (亥卯未) — your Rabbit shares the Goat\'s wood trine; momentum and confidence come easily')
    expect(describeAnimalRelation('goat', 'pig')).toMatch(/^Trine ally \(亥卯未\) — your Pig/)
    expect(describeAnimalRelation('goat', 'rat')).toBe('Harm (子未害) — your Rat and the Goat quietly undermine each other; watch for misunderstandings and hidden friction')
    for (const animal of ['tiger', 'dragon', 'snake', 'monkey', 'rooster', 'dog'] as ZodiacAnimal[]) {
      expect(describeAnimalRelation('goat', animal)).toMatch(/^Neutral — .* with the Goat;/)
    }
  })

  it('gives every animal exactly one relation with each year animal', () => {
    for (const year of ANIMALS) {
      const kinds = ANIMALS.map((animal) => describeAnimalRelation(year, animal).split(' ')[0])
      expect(kinds.filter((k) => k === 'Ben').length).toBe(1)
      expect(kinds.filter((k) => k === 'Clash').length).toBe(1)
      expect(kinds.filter((k) => k === 'Six').length).toBe(1)
      expect(kinds.filter((k) => k === 'Trine').length).toBe(2)
      expect(kinds.filter((k) => k === 'Harm').length).toBe(1)
    }
  })
})

describe('reading prompt and schema', () => {
  it('2026: the year block and outlook schema are exactly as before the switch', async () => {
    const ctx = await buildReadingContext(INPUT, new Date('2026-11-10T12:00:00Z'))
    const message = buildPersonalUserMessage(ctx)
    expect(message).toContain(`<year_2026>
The Fire Horse year (2026) runs 17 February 2026 – 5 February 2027.
Element relationship: ${ctx.year.elementRelation}
Animal relationship: ${OLD_HORSE_RELATIONS.horse}
This reading is generated on 10 November 2026. Frame the outlook for the months that remain in the Horse year from that date.
</year_2026>`)
    // Anna is a Metal Horse, so 2026 is her own animal's year
    expect(ctx.people[0]!.sign.slug).toBe('metal-horse')

    const outlook = (buildPersonalSchema(ctx.year).properties as Record<string, { properties: Record<string, { description: string }> }>).outlook2026!.properties
    expect(outlook.summary!.description).toBe('One-sentence takeaway for their Fire Horse year that uses their first name, max 30 words')
    expect(outlook.focus!.description).toBe('Paragraph, max 70 words: what to focus on in the months that remain of the Horse year, relative to the generation date')
  })

  it('January 2027: frames the whole Fire Goat year ahead', async () => {
    const ctx = await buildReadingContext(INPUT, new Date('2027-01-15T09:00:00Z'))
    const message = buildPersonalUserMessage(ctx)
    expect(message).toContain('<year_2027>\nThe Fire Goat year (2027) runs 6 February 2027 – 25 January 2028.')
    expect(message).toContain('This reading is generated on 15 January 2027, before this year begins. Frame the outlook for the whole Goat year ahead, from its start on 6 February 2027.')
    expect(message).not.toMatch(/Horse year/)

    const outlook = (buildPersonalSchema(ctx.year).properties as Record<string, { properties: Record<string, { description: string }> }>).outlook2026!.properties
    expect(outlook.summary!.description).toContain('their Fire Goat year')
    expect(outlook.focus!.description).toContain('the Goat year ahead, which starts on 6 February 2027')
  })

  it('March 2027: frames the months that remain of the Goat year', async () => {
    const ctx = await buildReadingContext(INPUT, new Date('2027-03-01T09:00:00Z'))
    expect(buildPersonalUserMessage(ctx)).toContain('Frame the outlook for the months that remain in the Goat year from that date.')
  })
})
