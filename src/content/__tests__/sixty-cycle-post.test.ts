// The 60-year cycle post (T-0309): the table order, years and worked examples must match the
// calculator (src/lib/zodiac-data.ts) and the 60 sign profiles.
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import {
  CYCLE,
  FIRST_TABLE_YEAR,
  LAST_TABLE_YEAR,
  cyclePosition,
  tableYears,
} from '../posts/sixty-year-chinese-zodiac-cycle'
import { getAnimalForYear, getElementForYear, getSignSlug } from '@/lib/zodiac-data'
import { signProfiles } from '@/lib/sign-content/profiles'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'

const SLUG = 'sixty-year-chinese-zodiac-cycle'
const post = getCodeBlogPost(SLUG)!

/** The table rows as [position, slug, name, chinese, years] */
const rows = [
  ...post.content.matchAll(/<tr><td>(\d+)<\/td><td><a href="\/zodiac\/([a-z]+-[a-z]+)">([A-Za-z]+ [A-Za-z]+)<\/a> (\S{2})<\/td><td>([\d, ]+)<\/td><\/tr>/gu),
].map(([, position, slug, name, chinese, years]) => ({
  position: Number(position),
  slug: slug!,
  name: name!,
  chinese: chinese!,
  years: years!.split(', ').map(Number),
}))

describe('60-year cycle post', () => {
  it('is registered once, with a title up to 60 and an excerpt up to 160 characters, and no em dashes', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toMatch(/[—–]/)
    const allowedTags = new Set(['h2', 'h3', 'p', 'ul', 'li', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(allowedTags).toContain(tag)
  })

  it('lists all 60 signs once, in cycle order, starting with the Wood Rat', () => {
    expect(rows).toHaveLength(60)
    expect(rows.map(row => row.position)).toEqual(Array.from({ length: 60 }, (_, index) => index + 1))
    expect(new Set(rows.map(row => row.slug)).size).toBe(60)
    expect(rows[0]!.slug).toBe('wood-rat')
    expect(rows[0]!.chinese).toBe('甲子')
    expect(CYCLE).toHaveLength(60)
    expect(signProfiles).toHaveLength(60)
  })

  it('agrees with the calculator for every year from 1924 to 2043', () => {
    expect([FIRST_TABLE_YEAR, LAST_TABLE_YEAR]).toEqual([1924, 2043])
    const seen: number[] = []
    for (const row of rows) {
      const profile = signProfiles.find(item => item.slug === row.slug)!
      expect(row.name).toBe(profile.name)
      expect(row.chinese).toBe(profile.chineseName)
      expect(row.years).toEqual(tableYears(profile))
      expect(row.years).toHaveLength(2)
      for (const year of row.years) {
        expect(getSignSlug(getAnimalForYear(year), getElementForYear(year)), String(year)).toBe(row.slug)
        expect(cyclePosition(year)).toBe(row.position)
        seen.push(year)
      }
      expect(row.years[1]! - row.years[0]!).toBe(60)
    }
    expect(seen.sort((a, b) => a - b)).toEqual(Array.from({ length: 120 }, (_, index) => 1924 + index))
  })

  it('pairs every element with every animal exactly once, yang stems with yang animals', () => {
    const pairs = new Set(rows.map(row => row.slug))
    for (const element of ['wood', 'fire', 'earth', 'metal', 'water']) {
      for (const animal of ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']) {
        expect(pairs.has(`${element}-${animal}`)).toBe(true)
      }
    }
    // Odd positions are yang years (even calendar years), even positions yin years
    for (const row of rows) expect(row.years[0]! % 2 === 0).toBe(row.position % 2 === 1)
    // Rats on rows 1, 13, 25, 37 and 49
    expect(rows.filter(row => row.slug.endsWith('-rat')).map(row => row.position)).toEqual([1, 13, 25, 37, 49])
    expect(post.content).toContain('Rows 1, 13, 25, 37 and 49 are all Rats')
  })

  it('gets its worked examples right', () => {
    expect(cyclePosition(1984)).toBe(1)
    expect(cyclePosition(2044)).toBe(1)
    expect(cyclePosition(2026)).toBe(43)
    expect(cyclePosition(2027)).toBe(44)
    expect(rows[42]!.slug).toBe('fire-horse')
    expect(rows[43]!.slug).toBe('fire-goat')
    expect(post.content).toContain('The current cycle began with the Wood Rat year in 1984. 2026 is year 43 of it, the <a href="/zodiac/fire-horse">Fire Horse</a>. 2027 is year 44, the <a href="/zodiac/fire-goat">Fire Goat</a>. The next cycle starts in 2044.')
    expect(rows[6]!.slug).toBe('metal-horse')
    expect(post.content).toContain('someone born in 1990, after Lunar New Year, is a <a href="/zodiac/metal-horse">Metal Horse</a> (庚午), number 7 in the cycle. The same sign came before in 1930 and comes again in 2050.')
    expect(post.content).toContain('Row 43 is the Fire Horse, 丙午, which last came in 1966 and is back in 2026. Row 44 is the Fire Goat, 丁未, last seen in 1967 and back in 2027.')
  })

  it('describes the personal reading with the page count and price of /reading', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
  })
})
