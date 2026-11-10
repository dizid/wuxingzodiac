// The Chinese New Year 2027 post (T-0317): dates, weekdays, the year's name and the reading
// sentences must match the site's data and code; every quote must be in the text and every
// outside link must go to a cited page.
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import { CITED_QUOTES, KEY_DATES, SOURCES, goatSlug, horseSlug, newYearRange } from '../posts/chinese-new-year-2027-date-animal-traditions'
import { getAnimalForYear, getElementForYear, lunarNewYearDates } from '@/lib/zodiac-data'
import { getProfileBySlug } from '@/lib/sign-content/profiles'
import { getReadingYear } from '@/lib/readings/reading-year'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'

const SLUG = 'chinese-new-year-2027-date-animal-traditions'
const post = getCodeBlogPost(SLUG)!
const OTHER_TAGS = new Set(CODE_BLOG_POSTS.filter(item => item.slug !== SLUG).flatMap(item => item.tags))
const CITED_HOSTS = new Set(['www.chinahighlights.com', 'www.travelchinaguide.com', 'news.ubc.ca', 'www.hko.gov.hk'])

describe('Chinese New Year 2027 post', () => {
  it('is registered once, last in the list, within the title and excerpt limits', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(CODE_BLOG_POSTS).toContain(post)
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    expect(post.publishedAt).toBe('2026-11-14T02:00:00.000Z')
  })

  it('uses only tags other posts already use, and no em or en dashes', () => {
    for (const tag of post.tags) expect(OTHER_TAGS, tag).toContain(tag)
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toMatch(/[–—]/)
    const allowed = new Set(['h2', 'h3', 'p', 'ul', 'li', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(allowed).toContain(tag)
    expect(post.content).toMatch(/^<h2>/)
  })

  it('states the dates and weekdays the calendar gives', () => {
    expect(lunarNewYearDates[2027]).toEqual([2, 6])
    expect(lunarNewYearDates[2028]).toEqual([1, 26])
    expect(KEY_DATES.newYear).toEqual({ label: '6 February 2027', weekday: 'Saturday' })
    expect(KEY_DATES.eve).toEqual({ label: '5 February 2027', weekday: 'Friday' })
    expect(KEY_DATES.lanternFestival).toEqual({ label: '20 February 2027', weekday: 'Saturday' })
    expect(KEY_DATES.goatYearEnd).toEqual({ label: '25 January 2028', weekday: 'Tuesday' })
    expect(KEY_DATES.horseYearStart.label).toBe('17 February 2026')
    // Independent check of the weekdays
    expect(new Date('2027-02-06T00:00:00Z').getUTCDay()).toBe(6)
    expect(new Date('2027-02-20T00:00:00Z').getUTCDay()).toBe(6)
    expect(new Date('2028-01-25T00:00:00Z').getUTCDay()).toBe(2)
    expect(post.content).toContain('<strong>Saturday 6 February 2027</strong>')
    expect(post.content).toContain('The Fire Horse year ends on 5 February 2027')
    expect(post.content).toContain('runs until 25 January 2028')
    expect(post.content).toContain('<tr><td>Lantern Festival</td><td>Sat 20 February 2027</td></tr>')
    expect(post.content).toContain('<tr><td>New Year\'s Eve</td><td>Fri 5 February 2027</td></tr>')
    expect(post.excerpt).toContain('Saturday 6 February 2027')
  })

  it('names the Fire Goat year and its characters from the profile', () => {
    expect(getElementForYear(2027)).toBe('fire')
    expect(getAnimalForYear(2027)).toBe('goat')
    expect(goatSlug).toBe('fire-goat')
    expect(horseSlug).toBe('fire-horse')
    const profile = getProfileBySlug('fire-goat')!
    expect(profile.chineseName).toBe('丁未')
    expect(post.content).toContain(`written ${profile.chineseName} in Chinese`)
    expect(post.content).toContain(`"${profile.tagline}"`)
    expect(post.content).toContain('Heavenly Stem 丁 (yin fire)')
  })

  it('computes the date range from the site data', () => {
    const range = newYearRange()
    expect(range).toEqual({ earliest: '21 January', latest: '20 February', firstYear: 1924, lastYear: 2043 })
    expect(post.content).toContain('between 21 January and 20 February, across the years 1924 to 2043')
  })

  it('says which year a reading covers, as getReadingYear does', () => {
    const jan1 = getReadingYear(new Date('2027-01-01T00:00:00Z'))
    expect(jan1.signName).toBe('Fire Goat')
    expect(jan1.startLabel).toBe('6 February 2027')
    expect(getReadingYear(new Date('2027-12-31T23:59:59Z')).signName).toBe('Fire Goat')
    expect(getReadingYear(new Date('2026-12-31T23:59:59Z')).signName).toBe('Fire Horse')
    expect(post.content).toContain('Orders from 1 January 2027 cover the Fire Goat year.')
    expect(post.content).toContain('Orders placed before 1 January 2027 cover the rest of the Fire Horse year.')
  })

  it('has the reading offer sentence with the page count and price', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
  })

  it('links the posts and tools the brief names', () => {
    for (const href of ['/blog/2027-year-of-the-fire-goat', '/blog/chinese-zodiac-trines-secret-friends-clashes', '/blog/chinese-zodiac-january-february-birthday', '/calculator', '/reading']) {
      expect(post.content).toContain(`href="${href}"`)
      expect(href === '/calculator' || href === '/reading' || getCodeBlogPost(href.replace('/blog/', ''))).toBeTruthy()
    }
  })

  it('contains every cited quote word for word, and links every cited page', () => {
    for (const { url, quote } of CITED_QUOTES) {
      expect(post.content, quote).toContain(quote)
      expect(post.content, url).toContain(`href="${url}"`)
      expect(CITED_HOSTS.has(new URL(url).host)).toBe(true)
    }
    for (const url of Object.values(SOURCES)) expect(post.content).toContain(`href="${url}"`)
  })

  it('links outside only to https pages on the cited hosts', () => {
    const outside = [...post.content.matchAll(/href="(https?:[^"]+)"/g)].map(match => match[1]!)
    expect(outside.length).toBeGreaterThan(0)
    for (const href of outside) {
      expect(href.startsWith('https://')).toBe(true)
      expect(CITED_HOSTS.has(new URL(href).host), href).toBe(true)
    }
  })
})
