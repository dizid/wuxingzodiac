// The baby-2027 post (T-0311): dates must match the calculator, the "at a glance" values must
// match the Fire Horse / Fire Goat profiles, and the family relations the reading engine.
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import { PROFILE_FACTS } from '../posts/baby-born-2027-fire-horse-or-fire-goat'
import { getZodiacFromBirthdate } from '@/lib/zodiac-data'
import { loadSignContent } from '@/lib/sign-content'
import { describeAnimalRelation } from '@/lib/readings/server/context'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'

const SLUG = 'baby-born-2027-fire-horse-or-fire-goat'
const post = getCodeBlogPost(SLUG)!
const slugFor = (year: number, month: number, day: number) => {
  const result = getZodiacFromBirthdate(year, month, day)
  return `${result.element}-${result.animal}`
}

describe('baby 2027 post', () => {
  it('is registered once, with a title up to 60 and an excerpt up to 160 characters, and no em dashes', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toMatch(/[—–]/)
    const allowedTags = new Set(['h2', 'h3', 'p', 'ul', 'li', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(allowedTags).toContain(tag)
  })

  it('gives the calculator dates for the Fire Horse, Fire Goat and Earth Monkey years', () => {
    expect(slugFor(2026, 2, 17)).toBe('fire-horse')
    expect(slugFor(2027, 2, 5)).toBe('fire-horse')
    expect(slugFor(2027, 2, 6)).toBe('fire-goat')
    expect(slugFor(2028, 1, 25)).toBe('fire-goat')
    expect(slugFor(2028, 1, 26)).toBe('earth-monkey')
    expect(slugFor(2029, 2, 12)).toBe('earth-monkey')
    expect(slugFor(2029, 2, 13)).toBe('earth-rooster')
    expect(post.content).toContain('<tr><td><a href="/zodiac/fire-horse">Fire Horse</a></td><td>17 Feb 2026</td><td>5 Feb 2027</td></tr>')
    expect(post.content).toContain('<tr><td><a href="/zodiac/fire-goat">Fire Goat</a></td><td>6 Feb 2027</td><td>25 Jan 2028</td></tr>')
    expect(post.content).toContain('<tr><td><a href="/zodiac/earth-monkey">Earth Monkey</a></td><td>26 Jan 2028</td><td>12 Feb 2029</td></tr>')
    expect(post.content).toContain('Born up to 5 February 2027: a <a href="/zodiac/fire-horse">Fire Horse</a>, like every baby born since 17 February 2026.')
    expect(post.content).toContain('Born from 6 February 2027 to 25 January 2028: a <a href="/zodiac/fire-goat">Fire Goat</a>.')
    expect(post.content).toContain('Born from 26 January 2028: an <a href="/zodiac/earth-monkey">Earth Monkey</a>.')
    expect(post.excerpt).toContain('Fire Horse until 5 February and a Fire Goat from 6 February')
  })

  it('quotes the "at a glance" values of both profiles', async () => {
    for (const slug of ['fire-horse', 'fire-goat'] as const) {
      const { atAGlance } = await loadSignContent(slug)
      const facts = PROFILE_FACTS[slug]
      expect(atAGlance.archetype).toBe(facts.archetype)
      expect(atAGlance.energy).toBe(facts.energy)
      expect(atAGlance.coreStrength).toBe(facts.coreStrength)
      expect(atAGlance.shadow).toBe(facts.shadow)
      expect(atAGlance.bestMatch).toBe(facts.bestMatch)
      expect(post.content).toContain(`<li><strong>Core strength:</strong> ${facts.coreStrength}</li>`)
      expect(post.content).toContain(`<a href="/zodiac/${facts.bestMatch}">${facts.bestMatchName}</a>`)
    }
  })

  it('names the family relations as the reading engine does', () => {
    expect(post.content).toContain(
      '<strong>A Horse baby:</strong> the Tiger and the Dog are trine allies, the Goat is the secret friend, the Rat is the clash and the Ox is the harm pair.',
    )
    expect(post.content).toContain(
      '<strong>A Goat baby:</strong> the Rabbit and the Pig are trine allies, the Horse is the secret friend, the Ox is the clash and the Rat is the harm pair.',
    )
    expect(describeAnimalRelation('horse', 'goat')).toMatch(/^Six Harmony/)
    expect(describeAnimalRelation('goat', 'horse')).toMatch(/^Six Harmony/)
    expect(describeAnimalRelation('goat', 'ox')).toMatch(/^Clash/)
    expect(describeAnimalRelation('goat', 'rat')).toMatch(/^Harm/)
    expect(describeAnimalRelation('horse', 'rat')).toMatch(/^Clash/)
    expect(describeAnimalRelation('horse', 'ox')).toMatch(/^Harm/)
  })

  it('describes the personal reading with the page count and price of /reading', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
  })
})
