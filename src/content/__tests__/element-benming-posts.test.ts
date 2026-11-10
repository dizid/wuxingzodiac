// The element-by-last-digit and ben ming nian posts (T-0301): their tables and facts must
// match the calculator data, the 60 sign profiles and the reading engine.
// Lives in __tests__ (tsconfig.vitest) because it imports the reading's server code.
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import { LAST_DIGITS, stemForYear, yinYangForYear } from '../posts/chinese-element-by-birth-year-last-digit'
import { BEN_MING_NIAN_SOURCES, FIRST_BIRTH_YEAR, GOAT_YEAR, HORSE_YEAR, birthYearsBefore } from '../posts/ben-ming-nian-your-zodiac-year'
import {
  getAnimalForYear,
  getElementForYear,
  getZodiacFromBirthdate,
  lunarNewYearDates,
  zodiacAnimals,
  zodiacElements,
} from '@/lib/zodiac-data'
import { loadSignContent, signProfiles } from '@/lib/sign-content'
import { describeAnimalRelation } from '@/lib/readings/server/context'
import { getReadingYear } from '@/lib/readings/reading-year'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'
import type { ZodiacAnimal } from '@/types'

const ELEMENT_SLUG = 'chinese-element-by-birth-year-last-digit'
const BEN_MING_SLUG = 'ben-ming-nian-your-zodiac-year'
const elementPost = getCodeBlogPost(ELEMENT_SLUG)!
const benMingPost = getCodeBlogPost(BEN_MING_SLUG)!

const SHORT_MONTH_NUMBER: Record<string, number> = { Jan: 1, Feb: 2 }
const YANG_STEMS = '甲丙戊庚壬'
const ANIMALS: ZodiacAnimal[] = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig']

/** The calculator's sign slug for a birth date */
function signSlug(year: number, month: number, day: number): string {
  const result = getZodiacFromBirthdate(year, month, day)
  return `${result.element}-${result.animal}`
}

/** A UTC date shifted by some days, as [year, month, day] */
function shiftDays(year: number, month: number, day: number, days: number): [number, number, number] {
  const date = new Date(Date.UTC(year, month - 1, day + days))
  return [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()]
}

describe('both new posts', () => {
  it('are registered once each, with the agreed dates, a title up to 60 and an excerpt up to 160 characters', () => {
    expect(CODE_BLOG_POSTS.filter(post => post.slug === ELEMENT_SLUG)).toHaveLength(1)
    expect(CODE_BLOG_POSTS.filter(post => post.slug === BEN_MING_SLUG)).toHaveLength(1)
    expect(elementPost.publishedAt).toBe('2026-11-12T01:00:00.000Z')
    expect(benMingPost.publishedAt).toBe('2026-11-12T07:00:00.000Z')
    for (const post of [elementPost, benMingPost]) {
      expect(post.title.length).toBeLessThanOrEqual(60)
      expect(post.excerpt.length).toBeLessThanOrEqual(160)
    }
  })

  it('have slugs that no database post uses', () => {
    const databaseSlugs = [
      'five-elements-explained',
      '2026-year-of-the-fire-horse',
      'zodiac-compatibility-by-element',
      'best-zodiac-matches-2026-fire-horse',
      'chinese-zodiac-compatibility-guide',
    ]
    for (const slug of [ELEMENT_SLUG, BEN_MING_SLUG]) expect(databaseSlugs).not.toContain(slug)
    const slugs = CODE_BLOG_POSTS.map(post => post.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('use no em dashes and only the plain tags the other posts use', () => {
    const allowedTags = new Set(['h2', 'h3', 'p', 'ul', 'li', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
    for (const post of [elementPost, benMingPost]) {
      expect(`${post.title} ${post.excerpt} ${post.content}`).not.toContain('—')
      const tags = [...post.content.matchAll(/<\/?([a-z0-9]+)/g)].map(match => match[1]!)
      for (const tag of tags) expect(allowedTags).toContain(tag)
    }
  })

  it('describe the personal reading with the page count and price of /reading', () => {
    const offer = `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`
    for (const post of [elementPost, benMingPost]) expect(post.content).toContain(offer)
  })
})

describe('element by last digit post', () => {
  const rows = [
    ...elementPost.content.matchAll(
      /<tr><td>(\d)<\/td><td><a href="\/zodiac\/element\/([a-z]+)">([A-Za-z]+)<\/a><\/td><td>(.)<\/td><td>(Yang|Yin)<\/td><\/tr>/gu,
    ),
  ].map(([, digit, element, name, chinese, yinYang]) => ({ digit: Number(digit), element, name, chinese, yinYang }))

  it('has one table row per last digit, 0 to 9', () => {
    expect(rows.map(row => row.digit)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(LAST_DIGITS).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('gives the calculator element, name and Chinese character for every year with that digit', () => {
    for (const row of rows) {
      const info = zodiacElements.find(item => item.element === row.element)!
      expect(info.name).toBe(row.name)
      expect(info.chinese).toBe(row.chinese)
      for (let year = 1900 + row.digit; year <= 2100; year += 10) {
        expect(getElementForYear(year)).toBe(row.element)
        expect(yinYangForYear(year)).toBe(row.yinYang)
      }
      // The rule as stated in the post: even digits yang, odd digits yin
      expect(row.yinYang).toBe(row.digit % 2 === 0 ? 'Yang' : 'Yin')
    }
  })

  it("matches the yin/yang energy and element on all 60 sign pages", async () => {
    expect(signProfiles).toHaveLength(60)
    const byDigit = new Map(rows.map(row => [row.digit, row]))
    for (const profile of signProfiles) {
      const { atAGlance } = await loadSignContent(profile.slug)
      expect(['Yin', 'Yang']).toContain(atAGlance.energy)
      expect(profile.years.length).toBeGreaterThan(0)
      for (const year of profile.years) {
        const row = byDigit.get(year % 10)!
        expect(row.yinYang, `${profile.slug} (${year})`).toBe(atAGlance.energy)
        expect(row.element, `${profile.slug} (${year})`).toBe(profile.element)
      }
    }
  })

  it('pairs every last digit with one Heavenly Stem, yang stems on even digits', () => {
    for (const digit of LAST_DIGITS) {
      const stems = new Set(
        signProfiles.flatMap(profile => profile.years.filter(year => year % 10 === digit).map(() => profile.chineseName.charAt(0))),
      )
      expect(stems.size).toBe(1)
      const [stem] = [...stems]
      expect(YANG_STEMS.includes(stem!)).toBe(digit % 2 === 0)
    }
    expect(stemForYear(2026)).toBe('丙')
    expect(stemForYear(2027)).toBe('丁')
    expect(elementPost.content).toContain('2026 carries the stem 丙, which is yang fire. 2027 carries 丁, which is yin fire.')
  })

  it('keeps every animal on one side: yang animals in even years, yin animals in odd years', async () => {
    for (const { animal, years } of zodiacAnimals) {
      expect(new Set(years.map(year => year % 2)).size).toBe(1)
      const evenYears = years[0]! % 2 === 0
      expect(['rat', 'tiger', 'horse'].includes(animal) ? evenYears : true).toBe(true)
      expect(['ox', 'rabbit', 'goat'].includes(animal) ? !evenYears : true).toBe(true)
    }
    expect((await loadSignContent('fire-horse')).atAGlance.energy).toBe('Yang')
    expect((await loadSignContent('fire-goat')).atAGlance.energy).toBe('Yin')
    expect(elementPost.content).toContain('a Fire Horse is always yang fire, and a Fire Goat is always yin fire.')
  })

  it('gets its worked examples right', () => {
    // Short answer: 1986
    expect(getElementForYear(1986)).toBe('fire')
    expect(elementPost.content).toContain('A year ending in 6, like 1986, is a Fire year. Because 6 is even, it is yang fire.')

    // Born 20 January 2000, before Lunar New Year 2000 (5 February): still the 1999 year
    expect(lunarNewYearDates[2000]).toEqual([2, 5])
    expect(getZodiacFromBirthdate(2000, 1, 20)).toEqual({ animal: 'rabbit', element: 'earth', lunarYear: 1999 })
    expect(`${getElementForYear(2000)}-${getAnimalForYear(2000)}`).toBe('metal-dragon')
    expect(elementPost.content).toContain(
      'Someone born on 20 January 2000 sees a year ending in 0, which points to yang metal. But Lunar New Year 2000 fell on 5 February. So their Chinese year is still 1999, which ends in 9. Their element is yin earth, and their full sign is the <a href="/zodiac/earth-rabbit">Earth Rabbit</a>, not the <a href="/zodiac/metal-dragon">Metal Dragon</a>.',
    )

    // Full sign: 1984 after Lunar New Year (2 February) is the Wood Rat
    expect(lunarNewYearDates[1984]).toEqual([2, 2])
    expect(signSlug(1984, 2, 2)).toBe('wood-rat')
    const woodRat = signProfiles.find(profile => profile.slug === 'wood-rat')!
    expect(woodRat.chineseName).toBe('甲子')
    expect(woodRat.years).toEqual([1924, 1984, 2044])
    expect(elementPost.content).toContain(
      'Together that makes the <a href="/zodiac/wood-rat">Wood Rat</a>, written 甲子 in Chinese. On this site it is called The Resourceful Pioneer.',
    )
    expect(elementPost.content).toContain('comes back every 60 years: 1924, 1984, 2044.')

    // The Lunar New Year range in the data
    const dates = Object.values(lunarNewYearDates).map(([month, day]) => month * 100 + day)
    expect(Math.min(...dates)).toBe(121)
    expect(Math.max(...dates)).toBe(220)
    expect(elementPost.content).toContain('Between 1924 and 2043 it falls anywhere from 21 January to 20 February.')
  })

  it('lists the right digits for each element', () => {
    for (const { element, name, chinese } of zodiacElements) {
      const digits = LAST_DIGITS.filter(digit => getElementForYear(digit) === element)
      expect(digits).toHaveLength(2)
      expect(elementPost.content).toContain(
        `<a href="/zodiac/element/${element}">${name} (${chinese})</a>, years ending in ${digits.join(' or ')}:`,
      )
    }
  })
})

describe('ben ming nian post', () => {
  // Table cells use short month names (Jan, Feb) so the table fits a phone
  const DATE = '(\\d{1,2}) (Jan|Feb) (\\d{4})'
  const ROW = new RegExp(`<tr><td><a href="/zodiac/([a-z]+-[a-z]+)">([A-Za-z]+ [A-Za-z]+)</a></td><td>${DATE}</td><td>${DATE}</td></tr>`, 'g')
  const rows = [...benMingPost.content.matchAll(ROW)].map(match => ({
    slug: match[1]!,
    name: match[2]!,
    from: [Number(match[5]), SHORT_MONTH_NUMBER[match[4]!]!, Number(match[3])] as const,
    until: [Number(match[8]), SHORT_MONTH_NUMBER[match[7]!]!, Number(match[6])] as const,
  }))

  it('lists every Horse and Goat birth year from 1930 up to the current ben ming nian', () => {
    const horseYears = [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014]
    const goatYears = [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015]
    expect(FIRST_BIRTH_YEAR).toBe(1930)
    expect(birthYearsBefore('horse', HORSE_YEAR)).toEqual(horseYears)
    expect(birthYearsBefore('goat', GOAT_YEAR)).toEqual(goatYears)
    expect(rows).toHaveLength(16)
    expect(rows.filter(row => row.slug.endsWith('-horse')).map(row => row.from[0])).toEqual(horseYears)
    expect(rows.filter(row => row.slug.endsWith('-goat')).map(row => row.from[0])).toEqual(goatYears)
  })

  it('agrees with the calculator: each row runs from one Lunar New Year to the day before the next', () => {
    for (const { from, until, slug, name } of rows) {
      const [year, month, day] = from
      expect(name.toLowerCase().replace(' ', '-')).toBe(slug)
      expect(lunarNewYearDates[year]).toEqual([month, day])
      expect(signSlug(year, month, day)).toBe(slug)
      expect(getZodiacFromBirthdate(...shiftDays(year, month, day, -1)).lunarYear).toBe(year - 1)
      expect(until[0]).toBe(year + 1)
      expect(signSlug(...until)).toBe(slug)
      expect(getZodiacFromBirthdate(...until).lunarYear).toBe(year)
      const nextDay = shiftDays(...until, 1)
      expect(lunarNewYearDates[year + 1]).toEqual([nextDay[1], nextDay[2]])
    }
  })

  it('gives the right dates for the 2026 Horse and 2027 Goat years', () => {
    expect([HORSE_YEAR, GOAT_YEAR]).toEqual([2026, 2027])
    expect(lunarNewYearDates[2026]).toEqual([2, 17])
    expect(lunarNewYearDates[2027]).toEqual([2, 6])
    expect(lunarNewYearDates[2028]).toEqual([1, 26])
    expect(signSlug(2026, 2, 17)).toBe('fire-horse')
    expect(signSlug(2027, 2, 5)).toBe('fire-horse')
    expect(signSlug(2027, 2, 6)).toBe('fire-goat')
    expect(signSlug(2028, 1, 25)).toBe('fire-goat')
    expect(benMingPost.content).toContain(
      'The Fire Horse year began on 17 February 2026 and runs until 5 February 2027. Then the Fire Goat year begins on 6 February 2027 and runs until 25 January 2028.',
    )
    expect(benMingPost.content).toContain('Horse-year people are in their ben ming nian until 5 February 2027. Goat-year people are in theirs from 6 February 2027.')
    // Babies born in the year itself: first return 12 years later
    expect(getAnimalForYear(2038)).toBe('horse')
    expect(getAnimalForYear(2039)).toBe('goat')
    expect(benMingPost.content).toContain('Their first ben ming nian comes at age 12, in 2038. Babies born in the Fire Goat year will have theirs in 2039.')
  })

  it('matches the reading engine and the Fire Goat post on ben ming nian, clash and harm', () => {
    const benMing = 'traditionally a year of change and testing that rewards caution and deliberate choices'
    expect(describeAnimalRelation('horse', 'horse')).toContain(benMing)
    expect(describeAnimalRelation('goat', 'goat')).toContain(benMing)
    expect(benMingPost.content).toContain(`"${benMing},"`)
    expect(getCodeBlogPost('2027-year-of-the-fire-goat')!.content).toContain(
      'Tradition sees it as a year of change and testing. It rewards caution and deliberate choices.',
    )
    expect(benMingPost.content).toContain('a year of change and testing, one that rewards caution and deliberate choices.')

    expect(describeAnimalRelation('horse', 'rat')).toMatch(/^Clash \(子午冲\)/)
    expect(describeAnimalRelation('horse', 'ox')).toMatch(/^Harm \(丑午害\)/)
    expect(describeAnimalRelation('goat', 'ox')).toMatch(/^Clash \(丑未冲\)/)
    expect(describeAnimalRelation('goat', 'rat')).toMatch(/^Harm \(子未害\)/)
    expect(benMingPost.content).toContain('the Rat clashes with the Horse (子午冲)')
    expect(benMingPost.content).toContain('The Ox and the Horse are a harm pair (丑午害)')
    expect(benMingPost.content).toContain('the Ox clashes with the Goat (丑未冲)')
    expect(benMingPost.content).toContain('The Rat and the Goat are a harm pair (子未害)')
    // "two other animals meet the year's animal with friction: one in a clash, one in a harm relation"
    for (const yearAnimal of ['horse', 'goat'] as ZodiacAnimal[]) {
      const kinds = ANIMALS.map(animal => describeAnimalRelation(yearAnimal, animal).split(' ')[0])
      expect(kinds.filter(kind => kind === 'Clash')).toHaveLength(1)
      expect(kinds.filter(kind => kind === 'Harm')).toHaveLength(1)
    }
  })

  it('states which zodiac year a reading covers, as the reading engine does', () => {
    const year = (iso: string) => {
      const covered = getReadingYear(new Date(iso))
      return `${covered.year} ${covered.animal}`
    }
    expect(year('2026-11-12T12:00:00Z')).toBe('2026 horse')
    expect(year('2026-12-31T23:59:59Z')).toBe('2026 horse')
    expect(year('2027-01-01T00:00:00Z')).toBe('2027 goat')
    expect(year('2027-12-31T23:59:59Z')).toBe('2027 goat')
    expect(benMingPost.content).toContain(
      'Orders until 31 December 2026 cover the rest of the Fire Horse year, until 5 February 2027. Orders from 1 January to 31 December 2027 cover the Fire Goat year, which starts on 6 February 2027.',
    )
  })

  it('links every outside source it cites, over https', () => {
    const sources = Object.values(BEN_MING_NIAN_SOURCES)
    expect(sources.length).toBeGreaterThanOrEqual(2)
    for (const url of sources) {
      expect(url.startsWith('https://')).toBe(true)
      expect(benMingPost.content).toContain(`href="${url}"`)
    }
  })
})
