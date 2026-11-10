import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost, mergeBlogPosts } from './blog-posts'
import { getSnapshotPost, getSnapshotPosts } from '@/lib/blog-snapshot'
import { getAnimalForYear, getElementForYear, getLunarYear, getZodiacFromBirthdate, lunarNewYearDates } from '@/lib/zodiac-data'

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/** Internal routes the posts may link to (src/router/index.ts) */
const KNOWN_ROUTE = /^\/(zodiac(\/(animal|element)\/[a-z]+|\/[a-z]+-[a-z]+)?|blog(\/[a-z0-9-]+)?|calculator|compatibility(\/[a-z-]+\/[a-z-]+)?|reading|about|privacy|terms)$/

/** Outside https hosts the code posts may cite (each post links its sources; merged from the post branches) */
const CITED_SOURCE_HOSTS = [
  'www.chinahighlights.com',
  'www.travelchinaguide.com',
  'news.ubc.ca',
  'www.hko.gov.hk',
  'language.chinadaily.com.cn',
  'global.chinadaily.com.cn',
  'my.weather.gov.hk',
  'sites.duke.edu',
  'en.wikipedia.org',
  'thaat.tobulab.com',
  'globerove.com',
  'birthcharthoroscopes.com',
  'easternfate.com',
  'onlineexhibits.library.yale.edu',
  'en.chinaculture.org',
  'dlp.lib.miamioh.edu',
  'www.hawaiipublicradio.org',
]

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

  it('only link to pages that exist on the site, or to a cited source over https', () => {
    for (const post of CODE_BLOG_POSTS) {
      const hrefs = [...post.content.matchAll(/href="([^"]+)"/g)].map(match => match[1]!)
      expect(hrefs.filter(href => href.startsWith('/')).length).toBeGreaterThan(0)
      for (const href of hrefs) {
        if (href.startsWith('/')) {
          expect(href).toMatch(KNOWN_ROUTE)
        } else {
          const url = new URL(href)
          expect(url.protocol).toBe('https:')
          expect(CITED_SOURCE_HOSTS).toContain(url.hostname)
        }
      }
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

describe('January/February birthday post', () => {
  const post = getCodeBlogPost('chinese-zodiac-january-february-birthday')!
  const rows = [...post.content.matchAll(/<tr><td>(\d{4})<\/td><td>(\d+) (January|February)<\/td><td><a href="\/zodiac\/([a-z]+-[a-z]+)">([A-Za-z]+ [A-Za-z]+)<\/a><\/td><\/tr>/g)]

  it('has one table row per year in the site data, oldest first', () => {
    const years = Object.keys(lunarNewYearDates).map(Number).sort((a, b) => a - b)
    expect(rows.map(row => Number(row[1]))).toEqual(years)
  })

  it('agrees with the calculator for every year: the date starts the sign shown, the day before is the year before', () => {
    const MONTH = { January: 1, February: 2 } as const
    for (const [, yearText, dayText, monthName, slug, name] of rows) {
      const year = Number(yearText)
      const month = MONTH[monthName as keyof typeof MONTH]
      const day = Number(dayText)
      const onTheDay = getZodiacFromBirthdate(year, month, day)
      expect(`${onTheDay.element}-${onTheDay.animal}`).toBe(slug)
      expect(name!.toLowerCase().replace(' ', '-')).toBe(slug)
      expect(onTheDay.lunarYear).toBe(year)
      const dayBefore = new Date(Date.UTC(year, month - 1, day - 1))
      expect(getLunarYear(year, dayBefore.getUTCMonth() + 1, dayBefore.getUTCDate())).toBe(year - 1)
    }
  })

  it('states the real range of Lunar New Year dates', () => {
    const dates = Object.values(lunarNewYearDates).map(([month, day]) => month * 100 + day)
    expect(Math.min(...dates)).toBe(121) // 21 January
    expect(Math.max(...dates)).toBe(220) // 20 February
    expect(post.content).toContain('falls anywhere from 21 January to 20 February')
    expect(post.excerpt).toContain('between 21 January and 20 February')
  })

  it('gets its worked examples right', () => {
    const sign = (y: number, m: number, d: number) => {
      const result = getZodiacFromBirthdate(y, m, d)
      return `${result.element}-${result.animal}`
    }
    expect(lunarNewYearDates[1990]).toEqual([1, 27])
    expect(sign(1990, 1, 20)).toBe('earth-snake')
    expect(sign(1990, 2, 1)).toBe('metal-horse')
    expect(lunarNewYearDates[2026]).toEqual([2, 17])
    expect(sign(2027, 2, 4)).toBe('fire-horse')
    expect(sign(2027, 2, 6)).toBe('fire-goat')
    expect(post.content).toContain('born on 20 January 1990 still belongs to the 1989 year, so their sign is the <a href="/zodiac/earth-snake">Earth Snake</a>')
    expect(post.content).toContain('born on 4 February 2027 is a <a href="/zodiac/fire-horse">Fire Horse</a>, like everyone born since 17 February 2026')
    // The sign before the table's first year
    expect(post.content).toContain('before 5 February 1924, that is the <a href="/zodiac/water-pig">Water Pig</a>')
    expect(sign(1924, 2, 4)).toBe('water-pig')
  })
})
