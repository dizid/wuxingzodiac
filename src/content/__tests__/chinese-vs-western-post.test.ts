// The Chinese zodiac vs Western zodiac post (T-0324): every fact about the site's own system
// is computed from the site's data and calculator code, and every outside fact is pinned to
// the exact quoted phrase from the page it links (quotes verified against the pages on
// 2026-11-11). Lives in __tests__ (tsconfig.vitest) like the other post tests.
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import { lunarNewYearRange, nextFireHorseYear } from '../posts/chinese-zodiac-vs-western-zodiac-differences'
import { relationBetween, BRANCH_ORDER } from '../posts/chinese-zodiac-trines-secret-friends-clashes'
import {
  getAllSignSlugs,
  getAnimalForYear,
  getElementForYear,
  getZodiacFromBirthdate,
  lunarNewYearDates,
  zodiacAnimals,
  zodiacElements,
} from '@/lib/zodiac-data'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'

const SLUG = 'chinese-zodiac-vs-western-zodiac-differences'
const post = getCodeBlogPost(SLUG)!
const text = post.content.replace(/<[^>]+>/g, '')

/** Tags other posts use, plus western-zodiac for this one */
const ALLOWED_TAGS = new Set(['chinese-zodiac', 'western-zodiac', 'wu-xing', 'calculator', 'zodiac-guide'])
const ALLOWED_HTML = new Set(['h2', 'p', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
const ALLOWED_HOSTS = new Set(['en.wikipedia.org', 'www.hko.gov.hk', 'onlineexhibits.library.yale.edu'])

describe('Chinese vs Western zodiac post', () => {
  it('is registered last and once, with a title up to 60 and an excerpt up to 160 characters', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(CODE_BLOG_POSTS.map(item => item.slug).indexOf(SLUG)).toBeGreaterThan(CODE_BLOG_POSTS.map(item => item.slug).indexOf('chinese-zodiac-trines-secret-friends-clashes'))
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    expect(post.publishedAt).toBe('2026-11-13T09:00:00.000Z')
  })

  it('uses only allowed tags, allowed HTML and no em or en dashes', () => {
    for (const tag of post.tags) expect(ALLOWED_TAGS).toContain(tag)
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toMatch(/[—–]/)
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(ALLOWED_HTML).toContain(tag)
  })

  it('has a length of 900 to 1,300 words', () => {
    const words = text.split(/\s+/).filter(Boolean).length
    expect(words).toBeGreaterThanOrEqual(900)
    expect(words).toBeLessThanOrEqual(1300)
  })

  it('counts the animals, elements and 60 combinations from the site data', () => {
    expect(zodiacAnimals).toHaveLength(12)
    expect(zodiacElements).toHaveLength(5)
    expect(getAllSignSlugs()).toHaveLength(60)
    expect(new Set(getAllSignSlugs()).size).toBe(60)
    expect(post.content).toContain('There are 12 animals, and each one lasts a year.')
    expect(post.content).toContain('That gives 60 animal and element combinations.')
    expect(post.content).toContain('<tr><td>Signs</td><td>12 signs</td><td>12 animals</td></tr>')
    expect(post.content).toContain('<tr><td>Elements</td><td>4</td><td>5</td></tr>')
    expect(post.content).toContain('<tr><td>Combinations</td><td>12</td><td>60</td></tr>')
    expect(post.content).toContain('wood, fire, earth, metal, water')
  })

  it('states the real earliest and latest Lunar New Year in the data', () => {
    const range = lunarNewYearRange()
    const keys = Object.values(lunarNewYearDates).map(([month, day]) => month * 100 + day)
    expect(Math.min(...keys)).toBe(121)
    expect(Math.max(...keys)).toBe(220)
    expect(range).toEqual({ earliest: '21 January', latest: '20 February', firstYear: 1924, lastYear: 2043 })
    expect(post.content).toContain('from 1924 to 2043, Lunar New Year falls anywhere from 21 January to 20 February')
  })

  it('describes the calculator as the code behaves: Lunar New Year cutoff, not Lichun', () => {
    // 2018 is the Hong Kong Observatory example: Lichun on 4 February, Lunar New Year on 16 February
    expect(lunarNewYearDates[2018]).toEqual([2, 16])
    // Between the two dates the calculator still gives the year before
    for (const day of [4, 10, 15]) expect(getZodiacFromBirthdate(2018, 2, day).lunarYear).toBe(2017)
    expect(getZodiacFromBirthdate(2018, 2, 16).lunarYear).toBe(2018)
    expect(getZodiacFromBirthdate(2018, 2, 10)).toMatchObject({ animal: 'rooster', element: 'fire' })
    expect(getZodiacFromBirthdate(2018, 2, 16)).toMatchObject({ animal: 'dog', element: 'earth' })
    expect(post.content).toContain('someone born on 10 February 2018 gets the Fire Rooster from the calculator, not the Earth Dog')
    expect(post.content).toContain('If your birthday is earlier, you get the sign of the year before. It does not use Lichun.')
  })

  it('gives each element two years in a row, the animal every 12 years and the pair every 60', () => {
    // Each element covers two years in a row: even year and the next share it, the next pair differs
    for (let year = 1924; year <= 2040; year += 2) {
      expect(getElementForYear(year + 1)).toBe(getElementForYear(year))
      expect(getElementForYear(year + 2)).not.toBe(getElementForYear(year))
    }
    expect(post.content).toContain('each element covers two years in a row')
    for (let year = 1924; year <= 1984; year += 1) {
      expect(getAnimalForYear(year + 12)).toBe(getAnimalForYear(year))
      expect(getElementForYear(year + 12)).not.toBe(getElementForYear(year))
      expect(getAnimalForYear(year + 60)).toBe(getAnimalForYear(year))
      expect(getElementForYear(year + 60)).toBe(getElementForYear(year))
    }
    expect([2014, 2026, 2038].map(getAnimalForYear)).toEqual(['horse', 'horse', 'horse'])
    expect(post.content).toContain('The Horse years are 2014, 2026 and 2038')
    expect(nextFireHorseYear()).toBe(2086)
    expect(post.content).toContain('The Fire Horse of 2026 returns in 2086')
    expect(post.content).toContain('The full pair repeats only every 60 years')
    expect(getAnimalForYear(2027)).toBe('goat')
    expect(getElementForYear(2027)).toBe('fire')
  })

  it('says each animal has two trine allies, a secret friend, a clash, a harm and six neutral animals', () => {
    for (const { animal } of BRANCH_ORDER) {
      const count = (relation: string) => BRANCH_ORDER.filter(other => relationBetween(animal, other.animal) === relation).length
      expect([count('trine'), count('secret-friend'), count('clash'), count('harm'), count('neutral')]).toEqual([2, 1, 1, 1, 6])
    }
    expect(post.content).toContain('Each animal has two trine allies, one secret friend, one clash and one harm. The other six animals are neutral.')
  })

  it('quotes the outside sources word for word (verified against the live pages on 2026-11-11)', () => {
    const quotes = [
      // https://en.wikipedia.org/wiki/Zodiac
      '"divided along the ecliptic into 12 equal parts"',
      '"The beginning of Aries is defined as the moment of vernal equinox"',
      '"vary slightly from year to year"',
      // https://www.hko.gov.hk/en/gts/time/24solarterms.htm
      '"within about one day on a major solar term"',
      // https://en.wikipedia.org/wiki/Chinese_zodiac
      '"there are two schools of thought in Chinese astrology: Chinese New Year or the start of spring"',
      // https://en.wikipedia.org/wiki/Lichun
      '"usually begins around February 4"',
      // https://www.hko.gov.hk/en/education/astronomy-and-time/time-service/00506-what-year-is-it-today.html
      '"has long been using the first day of the first Chinese calendar month"',
      // https://en.wikipedia.org/wiki/Western_astrology
      '"divided into four elements fire, earth, air and water"',
      // https://onlineexhibits.library.yale.edu/s/medicalastrology/page/the-medical-astrologer-s-toolkit
      '"Dividing the 360-degree ecliptic into four sets of thirds"',
    ]
    for (const quote of quotes) expect(post.content, quote).toContain(quote)
    // The HKO 2018 example
    expect(post.content).toContain('fell on 4 February')
    expect(post.content).toContain('Lunar New Year fell on 16 February')
  })

  it('links only to the cited https hosts and to pages that are live', () => {
    const hrefs = [...post.content.matchAll(/href="([^"]+)"/g)].map(match => match[1]!)
    for (const href of hrefs.filter(item => item.startsWith('https://'))) expect(ALLOWED_HOSTS).toContain(new URL(href).hostname)
    const internal = hrefs.filter(item => item.startsWith('/'))
    for (const live of [
      '/blog/five-elements-explained',
      '/blog/chinese-zodiac-january-february-birthday',
      '/blog/chinese-zodiac-compatibility-guide',
      '/blog/chinese-zodiac-trines-secret-friends-clashes',
      '/blog/2027-year-of-the-fire-goat',
      '/calculator',
      '/compatibility',
      '/reading',
    ]) expect(internal).toContain(live)
  })

  it('describes the personal reading with the page count and price of /reading', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
    expect(post.content).toContain('We do not write Western horoscopes.')
  })
})
