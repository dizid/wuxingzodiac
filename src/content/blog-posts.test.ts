import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost, mergeBlogPosts } from './blog-posts'
import { getSnapshotPost, getSnapshotPosts } from '@/lib/blog-snapshot'
import { getAnimalForYear, getElementForYear, lunarNewYearDates } from '@/lib/zodiac-data'

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/** Internal routes the posts may link to (src/router/index.ts) */
const KNOWN_ROUTE = /^\/(zodiac(\/(animal|element)\/[a-z]+|\/[a-z]+-[a-z]+)?|blog(\/[a-z0-9-]+)?|calculator|compatibility(\/[a-z-]+\/[a-z-]+)?|reading|about|privacy|terms)$/

describe('code blog posts', () => {
  it('have unique, URL-safe slugs and ids', () => {
    const slugs = CODE_BLOG_POSTS.map(post => post.slug)
    const ids = CODE_BLOG_POSTS.map(post => post.id)
    expect(new Set(slugs).size).toBe(slugs.length)
    expect(new Set(ids).size).toBe(ids.length)
    for (const slug of slugs) expect(slug).toMatch(SLUG_PATTERN)
  })

  it('have every field the blog pages show', () => {
    for (const post of CODE_BLOG_POSTS) {
      expect(post.title.length).toBeGreaterThan(10)
      expect(post.excerpt.length).toBeGreaterThan(50)
      expect(post.excerpt.length).toBeLessThanOrEqual(160) // meta description length
      expect(post.content).toMatch(/^<h2>/)
      expect(post.readTime).toBeGreaterThan(0)
      expect(Number.isNaN(new Date(post.publishedAt).getTime())).toBe(false)
    }
  })

  it('only link to pages that exist on the site', () => {
    for (const post of CODE_BLOG_POSTS) {
      const hrefs = [...post.content.matchAll(/href="([^"]+)"/g)].map(match => match[1])
      expect(hrefs.length).toBeGreaterThan(0)
      for (const href of hrefs) expect(href).toMatch(KNOWN_ROUTE)
    }
  })

  it('are found by slug, and unknown slugs are not', () => {
    for (const post of CODE_BLOG_POSTS) expect(getCodeBlogPost(post.slug)).toBe(post)
    expect(getCodeBlogPost('no-such-post-slug')).toBeNull()
  })

  it('are part of the blog snapshot, so they are prerendered and listed', () => {
    for (const post of CODE_BLOG_POSTS) {
      expect(getSnapshotPost(post.slug)).toEqual(post)
      expect(getSnapshotPosts().filter(listed => listed.slug === post.slug)).toHaveLength(1)
    }
  })
})

describe('2027 Fire Goat post', () => {
  const post = getCodeBlogPost('2027-year-of-the-fire-goat')!

  it('uses the Lunar New Year dates from the site data', () => {
    const MONTHS = ['January', 'February', 'March']
    const dayMonth = (year: number) => {
      const [month, day] = lunarNewYearDates[year]!
      return `${day} ${MONTHS[month - 1]}`
    }
    // 1967 and 2027 are Fire Goat years
    for (const year of [1967, 2027]) {
      expect(getAnimalForYear(year)).toBe('goat')
      expect(getElementForYear(year)).toBe('fire')
    }
    expect(post.content).toContain(`began in February 1967, on ${dayMonth(1967)}`)
    expect(post.content).toContain(`starts on ${dayMonth(2027)} 2027`)
    // The year ends the day before the 2028 Lunar New Year (26 January -> 25 January)
    expect(lunarNewYearDates[2028]).toEqual([1, 26])
    expect(post.content).toContain('runs until 25 January 2028')
    expect(post.excerpt).toContain(`${dayMonth(2027)} 2027 to 25 January 2028`)
    // The Fire Horse year (2026) ends the day before 6 February 2027
    expect(lunarNewYearDates[2027]).toEqual([2, 6])
  })

  it("states which zodiac year a reading ordered before or after 1 January covers", () => {
    expect(post.content).toContain('Orders from 1 January 2027 cover the Fire Goat year ahead')
    expect(post.content).toContain('Orders before then cover the rest of the Fire Horse year, until 5 February 2027')
  })
})

describe('mergeBlogPosts', () => {
  const post = (slug: string, publishedAt: string, source: string) => ({ slug, publishedAt, source })

  it('lists newest first across both sources', () => {
    const merged = mergeBlogPosts(
      [post('a', '2026-02-13T00:00:00.000Z', 'db'), post('b', '2026-02-17T00:00:00.000Z', 'db')],
      [post('c', '2026-11-10T18:00:00.000Z', 'code')],
    )
    expect(merged.map(item => item.slug)).toEqual(['c', 'b', 'a'])
  })

  it('keeps the code post when a database post has the same slug', () => {
    const merged = mergeBlogPosts(
      [post('same', '2026-02-13T00:00:00.000Z', 'db')],
      [post('same', '2026-11-10T18:00:00.000Z', 'code')],
    )
    expect(merged).toEqual([post('same', '2026-11-10T18:00:00.000Z', 'code')])
  })

  it('accepts database dates as Date objects', () => {
    const merged = mergeBlogPosts(
      [{ slug: 'db', publishedAt: new Date('2026-12-01T00:00:00.000Z') as unknown as string }],
      [{ slug: 'code', publishedAt: '2026-11-10T18:00:00.000Z' }],
    )
    expect(merged.map(item => item.slug)).toEqual(['db', 'code'])
  })
})
