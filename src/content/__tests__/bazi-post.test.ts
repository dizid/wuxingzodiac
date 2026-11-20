// The BaZi post (T-0636): every outside quote and link is pinned to a source list, the example
// table comes from the site's own Lunar New Year cutoff and sign data, the Lichun dates fall
// inside each example's gap, and the reading sentence matches the offer facts.
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import {
  BAZI_POST,
  BOUNDARY_EXAMPLES,
  LICHUN,
  QUOTES,
  SOURCES,
  signLabel,
  siteSign,
} from '../posts/bazi-four-pillars-explained'
import { getZodiacFromBirthdate, lunarNewYearDates } from '@/lib/zodiac-data'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'

const SLUG = 'bazi-four-pillars-explained'
const post = getCodeBlogPost(SLUG)!
const asDate = ([year, month, day]: [number, number, number]) => `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

describe('BaZi post', () => {
  it('is registered once, with limits and allowed tags only', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(post).toBe(BAZI_POST)
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    const allowedTags = new Set(['h2', 'p', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(allowedTags).toContain(tag)
  })

  it('has no em or en dashes anywhere', () => {
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toMatch(/[–—]/)
  })

  it('quotes every outside source exactly, and links only to listed sources', () => {
    for (const { source, quote } of QUOTES) {
      expect(post.content, quote).toContain(quote)
      expect(post.content).toContain(`href="${SOURCES[source]}"`)
    }
    const hrefs = [...post.content.matchAll(/href="(https:[^"]+)"/g)].map(match => match[1])
    for (const href of hrefs) expect(Object.values(SOURCES)).toContain(href)
  })

  it('has three column tables (fits a 360 px phone)', () => {
    for (const row of post.content.match(/<tr>.*?<\/tr>/g)!) expect(row.match(/<t[dh]>/g)).toHaveLength(3)
  })

  it('builds the example table from the site sign data', () => {
    expect(signLabel(2026)).toBe('Fire Horse')
    expect(signLabel(2027)).toBe('Fire Goat')
    expect(siteSign([2026, 2, 5])).toBe('Wood Snake')
    expect(siteSign([2027, 2, 5])).toBe('Fire Horse')
    expect(siteSign([2028, 1, 26])).toBe('Earth Monkey')
    for (const example of BOUNDARY_EXAMPLES) {
      // The whole range gets one sign on this site, and a different one at Lichun
      expect(siteSign(example.to)).toBe(siteSign(example.from))
      expect(siteSign(example.from)).not.toBe(signLabel(example.lichunYear))
      expect(post.content).toContain(
        `<tr><td>${example.label}</td><td>${siteSign(example.from)}</td><td>${signLabel(example.lichunYear)}</td></tr>`,
      )
    }
  })

  it('keeps every example range clear of both cutoffs in any time zone', () => {
    for (const example of BOUNDARY_EXAMPLES) {
      const [year] = example.from
      const lichun = LICHUN[year]!.date
      const [month, day] = lunarNewYearDates[year]!
      const newYear = asDate([year, month, day])
      if (newYear > lichun) {
        // Lichun first: the range starts after the Lichun date and ends before Lunar New Year
        expect(asDate(example.from) > lichun).toBe(true)
        expect(asDate(example.to) < newYear).toBe(true)
        expect(example.lichunYear).toBe(year)
      } else {
        // Lunar New Year first: the range ends at least a day before the Lichun date
        expect(asDate(example.from) >= newYear).toBe(true)
        expect(asDate(example.to) < asDate([year, 2, 3])).toBe(true)
        expect(example.lichunYear).toBe(year - 1)
      }
      expect(getZodiacFromBirthdate(...example.from).lunarYear).toBe(newYear > lichun ? year - 1 : year)
    }
  })

  it('states the 2027 Lichun time and Lunar New Year date from the data', () => {
    expect(LICHUN[2027]).toEqual({ date: '2027-02-04', time: '09:46' })
    expect(lunarNewYearDates[2027]).toEqual([2, 6])
    expect(lunarNewYearDates[2028]).toEqual([1, 26])
    expect(post.content).toContain('Lichun 2027 falls on 4 February 2027 at 09:46 Beijing time, two days before Lunar New Year on 6 February')
    expect(post.content).toContain('Lunar New Year comes first, on 26 January, and Lichun follows on 4 February')
  })

  it('says the site uses the birth year, not the birth time, as the reading page does', () => {
    const page = readFileSync('src/pages/ReadingPage.vue', 'utf8')
    expect(page).toContain("doesn't use your birth time")
    expect(post.content).toContain("doesn't use your birth time.")
    expect(post.content).toContain('are all based on your birth <strong>year</strong>')
  })

  it('describes the reading element balance as per sign, as the reading builds it', () => {
    const context = readFileSync('src/lib/readings/server/context.ts', 'utf8')
    expect(context).toContain('elementBalance: toElementBalance(getVisualData(sign.slug)?.elementPercentages')
    expect(post.content).toContain('The element balance in the reading belongs to your birth-year sign. It is not counted from eight characters.')
  })

  it('describes the personal reading with the page count and price of /reading', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
  })
})
