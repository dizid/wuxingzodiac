// The trines / secret friends / clashes post (T-0305): every relation it states must match the
// reading engine (all 144 animal pairs), and its score ranges and Fire Horse examples must
// match the compatibility tool. Lives in __tests__ (tsconfig.vitest) because it imports the
// reading's server code.
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import {
  BRANCH_ORDER,
  CHEMISTRY_RANGES,
  FIRE_HORSE_EXAMPLES,
  TRINES,
  pairsOf,
  partners,
  relationBetween,
  type Relation,
} from '../posts/chinese-zodiac-trines-secret-friends-clashes'
import { describeAnimalRelation } from '@/lib/readings/server/context'
import { getChemistryScore, getEnhancedCompatibility } from '@/lib/compatibility-matrix'
import { zodiacAnimals } from '@/lib/zodiac-data'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'
import type { ZodiacAnimal } from '@/types'

const SLUG = 'chinese-zodiac-trines-secret-friends-clashes'
const post = getCodeBlogPost(SLUG)!
const ANIMALS = BRANCH_ORDER.map(branch => branch.animal)

/** The reading engine's relation word for a pair ("Clash", "Six", "Trine", "Harm", "Neutral", "Ben") */
const ENGINE_WORD: Record<Relation, string> = {
  same: 'Ben',
  clash: 'Clash',
  'secret-friend': 'Six',
  trine: 'Trine',
  harm: 'Harm',
  neutral: 'Neutral',
}

describe('trines, secret friends and clashes post', () => {
  it('is registered once, with a title up to 60 and an excerpt up to 160 characters, and no em dashes', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toContain('—')
    const allowedTags = new Set(['h2', 'h3', 'p', 'ul', 'li', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(allowedTags).toContain(tag)
  })

  it('uses the branch order of the calculator data', () => {
    expect(ANIMALS).toEqual(zodiacAnimals.map(item => item.animal))
  })

  it('agrees with the reading engine on all 144 animal pairs, for every year animal', () => {
    for (const yearAnimal of ANIMALS) {
      for (const personAnimal of ANIMALS) {
        const engine = describeAnimalRelation(yearAnimal, personAnimal)
        expect(engine.split(' ')[0], `${yearAnimal} year, ${personAnimal}`).toBe(ENGINE_WORD[relationBetween(yearAnimal, personAnimal)])
      }
    }
  })

  it('writes the same branch characters as the reading engine', () => {
    for (const relation of ['clash', 'secret-friend', 'harm'] as const) {
      const pairs = pairsOf(relation)
      expect(pairs).toHaveLength(6)
      const suffix = { clash: '冲', 'secret-friend': '合', harm: '害' }[relation]
      for (const [a, b] of pairs) {
        // The engine writes the pair in branch order, e.g. 子午冲, whichever animal is the year
        const chars = describeAnimalRelation(a, b).match(/\(([^)]+)\)/)![1]!
        expect(chars.endsWith(suffix)).toBe(true)
        expect(post.content).toContain(`(${chars})`)
      }
    }
    for (const trine of TRINES) {
      for (const a of trine.animals) {
        for (const b of trine.animals) {
          if (a !== b) expect(describeAnimalRelation(a, b)).toContain(`(${trine.chars})`)
        }
      }
      expect(post.content).toContain(`<td>${trine.chars}</td>`)
    }
  })

  it('gives every animal two trine allies, one secret friend, one clash, one harm and six neutral animals', () => {
    for (const animal of ANIMALS) {
      expect(partners(animal, 'trine')).toHaveLength(2)
      expect(partners(animal, 'secret-friend')).toHaveLength(1)
      expect(partners(animal, 'clash')).toHaveLength(1)
      expect(partners(animal, 'harm')).toHaveLength(1)
      expect(partners(animal, 'neutral')).toHaveLength(6)
    }
    expect(post.content).toContain('The other six animals are neutral.')
  })

  it('states the Chemistry score ranges of the compatibility tool', () => {
    for (const range of CHEMISTRY_RANGES) {
      const scores: number[] = []
      for (const a of ANIMALS) {
        for (const b of ANIMALS) {
          if (relationBetween(a, b) === range.relation) scores.push(getChemistryScore(a, b))
        }
      }
      expect(Math.min(...scores), range.label).toBe(range.min)
      expect(Math.max(...scores), range.label).toBe(range.max)
      expect(post.content).toContain(`<tr><td>${range.label}</td><td>${range.min} to ${range.max}</td></tr>`)
    }
  })

  it('gets the Fire Horse examples and the score weights right', () => {
    for (const example of FIRE_HORSE_EXAMPLES) {
      const [element, animal] = example.slug.split('-') as [string, ZodiacAnimal]
      const result = getEnhancedCompatibility('horse', 'fire', animal, element as never)
      expect(relationBetween('horse', animal)).toBe(example.relation)
      expect(result.score, example.slug).toBe(example.overall)
      expect(result.matchLabel, example.slug).toBe(example.label)
      expect(result.score).toBe(Math.round(result.chemistry * 0.5 + result.support * 0.3 + (100 - result.friction) * 0.2))
      // Canonical pair URL (alphabetical order, see src/router/index.ts)
      expect('fire-horse' < example.slug).toBe(true)
      expect(post.content).toContain(`<a href="/compatibility/fire-horse/${example.slug}">`)
    }
    expect(post.content).toContain('The overall score weighs Chemistry at half, Support at 30 percent and low Friction at 20 percent.')
  })

  it('quotes the reading engine word for word', () => {
    const quotes = [
      ['tiger', 'horse', 'momentum and confidence come easily'],
      ['horse', 'goat', 'support arrives through relationships'],
      ['rat', 'horse', 'disruption, movement and forced change'],
      ['goat', 'rat', 'quietly undermine each other'],
      ['goat', 'rat', 'watch for misunderstandings and hidden friction'],
    ] as const
    for (const [year, person, quote] of quotes) {
      expect(describeAnimalRelation(year, person)).toContain(quote)
      expect(post.content).toContain(quote)
    }
  })

  it('names the 2026 and 2027 year relations as the reading engine does', () => {
    expect(post.content).toContain(
      '2026, the Horse year:</strong> the Tiger and Dog are trine allies, the Goat is the secret friend, the Rat clashes and the Ox meets harm.',
    )
    expect(post.content).toContain(
      '2027, the Goat year:</strong> the Rabbit and Pig are trine allies, the Horse is the secret friend, the Ox clashes and the Rat meets harm.',
    )
    expect(describeAnimalRelation('horse', 'tiger')).toMatch(/^Trine/)
    expect(describeAnimalRelation('horse', 'dog')).toMatch(/^Trine/)
    expect(describeAnimalRelation('goat', 'rabbit')).toMatch(/^Trine/)
    expect(describeAnimalRelation('goat', 'pig')).toMatch(/^Trine/)
    expect(describeAnimalRelation('goat', 'horse')).toMatch(/^Six Harmony/)
  })

  it('describes the personal reading with the page count and price of /reading', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
  })
})
