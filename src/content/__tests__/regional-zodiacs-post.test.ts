// The regional zodiacs post (T-0330): the animal list, the calculator rule and the worked examples
// are computed from the site's data; every outside quote and link must be in the post.
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import {
  JANUARY_EXAMPLE,
  JAPAN_SWAPS,
  REGIONAL_SOURCES,
  VIETNAM_EXAMPLE,
  VIETNAM_SWAPS,
} from '../posts/vietnamese-japanese-korean-zodiac-differences'
import {
  getAnimalForYear,
  getElementForYear,
  getLunarYear,
  getZodiacFromBirthdate,
  lunarNewYearDates,
  zodiacAnimals,
} from '@/lib/zodiac-data'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'

const SLUG = 'vietnamese-japanese-korean-zodiac-differences'
const post = getCodeBlogPost(SLUG)!
const plainText = (html: string) => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')

describe('regional zodiacs post', () => {
  it('is registered once, last in the list, with the planned date, title and excerpt limits', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(CODE_BLOG_POSTS.map(item => item.slug).indexOf(SLUG)).toBeGreaterThan(CODE_BLOG_POSTS.map(item => item.slug).indexOf('chinese-zodiac-trines-secret-friends-clashes'))
    expect(post.publishedAt).toBe('2026-11-14T09:00:00.000Z')
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    expect(post.readTime).toBeGreaterThan(0)
  })

  it('uses plain punctuation (no em or en dashes) and only simple HTML tags', () => {
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toMatch(/[–—]/)
    const allowedTags = new Set(['h2', 'h3', 'p', 'ul', 'li', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(allowedTags).toContain(tag)
    for (const tag of post.tags) expect(tag).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  })

  it('has a table with the 12 animals in the calculator order and only the source-backed swaps', () => {
    const rows = [...post.content.matchAll(/<tr><td>([A-Za-z ]+)<\/td><td>([A-Za-z ]+)<\/td><td>([A-Za-z ]+)<\/td><\/tr>/g)]
    expect(rows.map(row => row[1])).toEqual(zodiacAnimals.map(item => item.name))
    expect(rows).toHaveLength(12)
    expect(Object.keys(VIETNAM_SWAPS).sort()).toEqual(['ox', 'rabbit'])
    expect(Object.keys(JAPAN_SWAPS).sort()).toEqual(['goat', 'pig'])
    for (const [index, row] of rows.entries()) {
      const animal = zodiacAnimals[index]!.animal
      expect(row[2]).toBe(VIETNAM_SWAPS[animal] ?? 'Same')
      expect(row[3]).toBe(JAPAN_SWAPS[animal] ?? 'Same')
    }
    expect(VIETNAM_SWAPS.rabbit).toBe('Cat')
    expect(VIETNAM_SWAPS.ox).toBe('Water Buffalo')
    expect(JAPAN_SWAPS.pig).toBe('Boar')
  })

  it('follows the calculator rule: born before Lunar New Year belongs to the year before', () => {
    const years = Object.keys(lunarNewYearDates).map(Number)
    expect(Math.min(...years)).toBe(1924)
    expect(Math.max(...years)).toBe(2043)
    expect(post.content).toContain('The dates in our data run from 1924 to 2043.')
    expect(lunarNewYearDates[2026]).toEqual([2, 17])
    expect(getLunarYear(2026, 1, 20)).toBe(2025)
  })

  it('gets the January example right: Wood Snake here, the Horse by a calendar-year count', () => {
    const { year, month, day } = JANUARY_EXAMPLE
    expect([year, month, day]).toEqual([2026, 1, 20])
    const sign = getZodiacFromBirthdate(year, month, day)
    expect(`${sign.element} ${sign.animal}`).toBe('wood snake')
    expect(getAnimalForYear(year)).toBe('horse')
    expect(post.content).toContain('Take someone born on 20 January 2026. This site counts them as a Wood Snake, because Lunar New Year 2026 is on 17 February.')
    expect(post.content).toContain('A calendar-year count would call them a Horse, the animal of 2026.')
  })

  it('gets the Vietnam 1985 example right', () => {
    const { year, month, day } = VIETNAM_EXAMPLE
    expect(lunarNewYearDates[1985]).toEqual([2, 20])
    const here = getZodiacFromBirthdate(year, month, day)
    expect(`${here.element} ${here.animal}`).toBe('wood rat')
    // 1985 itself is a Wood Ox year, which Vietnam calls the Water Buffalo
    expect(getAnimalForYear(1985)).toBe('ox')
    expect(getElementForYear(1985)).toBe('wood')
    expect(post.content).toContain('puts Lunar New Year 1985 on 20 February')
    expect(post.content).toContain('Someone born on 1 February 1985 is a Wood Rat here.')
    expect(post.content).toContain('That is the Wood Ox year here and the Wood Water Buffalo year there.')
  })

  it('shows every outside quote and links to its page, on an allowed host', () => {
    for (const [name, source] of Object.entries(REGIONAL_SOURCES)) {
      expect(plainText(post.content), name).toContain(source.quote)
      expect(post.content, name).toContain(`<a href="${source.url}">`)
      expect(new URL(source.url).protocol).toBe('https:')
    }
    for (const [, href] of post.content.matchAll(/href="(https:[^"]+)"/g)) {
      expect(['en.wikipedia.org', 'www.nippon.com', 'leiden.wereldmuseum.nl', 'www.cbc.ca', 'www.bl.uk']).toContain(new URL(href!).hostname)
    }
  })

  it('links the January and February birthday post and the calculator', () => {
    expect(post.content).toContain('<a href="/blog/chinese-zodiac-january-february-birthday">')
    expect(post.content).toContain('<a href="/calculator">')
  })

  it('has between 900 and 1,300 words', () => {
    const words = plainText(post.content).trim().split(' ').length
    expect(words).toBeGreaterThanOrEqual(900)
    expect(words).toBeLessThanOrEqual(1300)
  })

  it('describes the personal reading with the page count and price of /reading', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
  })
})
