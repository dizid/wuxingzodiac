// The birth-hour post (T-0306): the table is built from the year-animal order, covers 24 hours
// once, and every outside quote and link is pinned to a source list. The reading sentence must
// match the offer facts and the post must say what the reading page says about birth time.
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import { BIRTH_HOUR_POST, DOUBLE_HOURS, QUOTES, SOURCES } from '../posts/chinese-zodiac-birth-hour-animal'
import { BRANCH_ORDER } from '../posts/chinese-zodiac-trines-secret-friends-clashes'
import { zodiacAnimals } from '@/lib/zodiac-data'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'

const SLUG = 'chinese-zodiac-birth-hour-animal'
const post = getCodeBlogPost(SLUG)!

describe('birth hour post', () => {
  it('is registered once, after the relations post, with limits and allowed tags only', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(post).toBe(BIRTH_HOUR_POST)
    expect(CODE_BLOG_POSTS.map(item => item.slug).slice(-2)).toEqual(['chinese-zodiac-trines-secret-friends-clashes', SLUG])
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    expect(post.publishedAt).toBe('2026-11-12T09:00:00.000Z')
    const allowedTags = new Set(['h2', 'h3', 'p', 'ul', 'li', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(allowedTags).toContain(tag)
  })

  it('has no em or en dashes anywhere', () => {
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toMatch(/[–—]/)
  })

  it('has 12 table rows in year order with the branch characters', () => {
    expect(DOUBLE_HOURS).toHaveLength(12)
    expect(BRANCH_ORDER.map(branch => branch.animal)).toEqual(zodiacAnimals.map(item => item.animal))
    expect(DOUBLE_HOURS.map(hour => hour.animal)).toEqual(zodiacAnimals.map(item => item.name))
    expect(DOUBLE_HOURS.map(hour => hour.char)).toEqual(BRANCH_ORDER.map(branch => branch.char))
    for (const hour of DOUBLE_HOURS) {
      expect(post.content).toContain(`<tr><td>${hour.animal}</td><td>${hour.char}</td><td>${hour.label}</td></tr>`)
    }
    expect(DOUBLE_HOURS[0]!.label).toBe('23:00 to 01:00')
    expect(DOUBLE_HOURS[11]!.label).toBe('21:00 to 23:00')
  })

  it('covers all 24 hours exactly once, each hour starting where the last ended', () => {
    const covered: number[] = []
    for (const hour of DOUBLE_HOURS) {
      covered.push(hour.start, (hour.start + 1) % 24)
      expect((hour.start + 2) % 24).toBe(hour.end)
    }
    expect([...covered].sort((a, b) => a - b)).toEqual(Array.from({ length: 24 }, (_, hour) => hour))
    DOUBLE_HOURS.forEach((hour, position) => expect(hour.end).toBe(DOUBLE_HOURS[(position + 1) % 12]!.start))
  })

  it('has a three column table (fits a 360 px phone)', () => {
    for (const row of post.content.match(/<tr>.*?<\/tr>/g)!) expect(row.match(/<t[dh]>/g)).toHaveLength(3)
  })

  it('quotes every outside source exactly, inside a link to that source', () => {
    for (const { source, quote } of QUOTES) {
      expect(post.content, quote).toContain(quote)
      expect(post.content).toContain(`href="${SOURCES[source]}"`)
    }
    // Every https link is one of the listed sources
    const hrefs = [...post.content.matchAll(/href="(https:[^"]+)"/g)].map(match => match[1])
    for (const href of hrefs) expect(Object.values(SOURCES)).toContain(href)
  })

  it('says the site uses the birth year, not the birth time, as the reading page does', () => {
    const page = readFileSync('src/pages/ReadingPage.vue', 'utf8')
    expect(page).toContain("doesn't use your birth time")
    expect(post.content).toContain("doesn't use your birth time.")
    expect(post.content).toContain('are all based on your birth <strong>year</strong>')
  })

  it('describes the personal reading with the page count and price of /reading', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
  })
})
