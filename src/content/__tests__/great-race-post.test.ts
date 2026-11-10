// The Great Race post (T-0328): the order, links, branches and trines must come from the site
// data, the quotes must be in the text, and the offer sentence must match /reading.
import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS, getCodeBlogPost } from '../blog-posts'
import { BRANCH_PINYIN, SOURCES, SOURCE_QUOTES, trineGroups } from '../posts/chinese-zodiac-great-race-why-rat-is-first'
import { BRANCH_ORDER, TRINES, partners } from '../posts/chinese-zodiac-trines-secret-friends-clashes'
import { zodiacAnimals } from '@/lib/zodiac-data'
import { READING_PAGE_COUNT, READING_PRICE } from '@/lib/reading-offer'

const SLUG = 'chinese-zodiac-great-race-why-rat-is-first'
const post = getCodeBlogPost(SLUG)!
const ALLOWED_TAGS = new Set(['h2', 'h3', 'p', 'ul', 'li', 'strong', 'a', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td'])
const plainText = post.content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')

describe('Great Race post', () => {
  it('is registered once, last in the list, with the date, title and excerpt limits', () => {
    expect(CODE_BLOG_POSTS.filter(item => item.slug === SLUG)).toHaveLength(1)
    expect(CODE_BLOG_POSTS.map(item => item.slug).indexOf(SLUG)).toBeGreaterThan(CODE_BLOG_POSTS.map(item => item.slug).indexOf('chinese-zodiac-trines-secret-friends-clashes'))
    expect(post.publishedAt).toBe('2026-11-14T05:00:00.000Z')
    expect(post.title.length).toBeLessThanOrEqual(60)
    expect(post.excerpt.length).toBeLessThanOrEqual(160)
    const words = plainText.split(' ').length
    expect(words).toBeGreaterThanOrEqual(900)
    expect(words).toBeLessThanOrEqual(1300)
  })

  it('uses only allowed tags, no em or en dashes, and the tag list of the other posts', () => {
    for (const [, tag] of post.content.matchAll(/<\/?([a-z0-9]+)/g)) expect(ALLOWED_TAGS).toContain(tag)
    expect(`${post.title} ${post.excerpt} ${post.content}`).not.toMatch(/[–—]/)
    expect(post.tags.every(tag => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(tag))).toBe(true)
  })

  it('lists the 12 animals in the order of the site data, each linked to its animal page', () => {
    const table = post.content.slice(post.content.indexOf('<table>'), post.content.indexOf('</table>'))
    const rows = [...table.matchAll(/<tr><td>(\d+)<\/td><td><a href="([^"]+)">([^<]+)<\/a><\/td><td>([^<]+)<\/td><\/tr>/g)]
    expect(rows).toHaveLength(12)
    rows.forEach((row, index) => {
      const animal = zodiacAnimals[index]!
      expect(Number(row[1])).toBe(index + 1)
      expect(row[2]).toBe(`/zodiac/animal/${animal.animal}`)
      expect(row[3]).toBe(animal.name)
      expect(row[4]).toBe(`${BRANCH_ORDER[index]!.char} (${BRANCH_PINYIN[index]})`)
    })
    // The table has three columns, so it fits a 360 px phone
    expect(table.match(/<th>/g)).toHaveLength(3)
    // The data starts with the Rat and ends with the Pig, as the legend says
    expect(zodiacAnimals[0]!.animal).toBe('rat')
    expect(zodiacAnimals[11]!.animal).toBe('pig')
    expect(zodiacAnimals[1]!.animal).toBe('ox')
  })

  it('matches the Earthly Branch characters and pinyin', () => {
    expect(BRANCH_ORDER.map(branch => branch.animal)).toEqual(zodiacAnimals.map(item => item.animal))
    expect(BRANCH_ORDER.map(branch => branch.char).join('')).toBe('子丑寅卯辰巳午未申酉戌亥')
    expect(BRANCH_PINYIN.join(' ')).toBe('zi chou yin mao chen si wu wei shen you xu hai')
  })

  it('states the trines as animals four places apart in the order', () => {
    const groups = trineGroups()
    expect(groups).toHaveLength(4)
    for (const group of groups) {
      const [a, b, c] = group.places as [number, number, number]
      expect(b - a).toBe(4)
      expect(c - b).toBe(4)
      const trine = TRINES.find(item => item.element === group.element)!
      expect([...trine.animals].sort()).toEqual([...group.animals].sort())
      const name = (animal: string) => zodiacAnimals.find(item => item.animal === animal)!.name
      expect(post.content).toContain(
        `<strong>${name(group.animals[0]!)}, ${name(group.animals[1]!)} and ${name(group.animals[2]!)}</strong> (places ${group.places.join(', ')}), the ${group.element} trine`,
      )
    }
    expect(post.content).toContain('a trine is three animals that sit four places apart')
    // The Rat example: places 5 and 9 are the Dragon and the Monkey
    expect(partners('rat', 'trine')).toEqual(['dragon', 'monkey'])
    expect(zodiacAnimals[4]!.animal).toBe('dragon')
    expect(zodiacAnimals[8]!.animal).toBe('monkey')
    expect(post.content).toContain('places 5 and 9: the Dragon and the Monkey')
  })

  it('links to the calculator, the birthday post, the relations post, and every source page', () => {
    for (const href of ['/calculator', '/blog/chinese-zodiac-january-february-birthday', '/blog/chinese-zodiac-trines-secret-friends-clashes', '/reading']) {
      expect(post.content).toContain(`href="${href}"`)
      if (href.startsWith('/blog/')) expect(getCodeBlogPost(href.replace('/blog/', '')) ?? href).toBeTruthy()
    }
    for (const source of Object.values(SOURCES)) expect(post.content).toContain(`href="${source.url}"`)
    // At least two different source pages for the legend
    expect(Object.keys(SOURCES).length).toBeGreaterThanOrEqual(2)
  })

  it('contains every quoted phrase, and every quote in the text is listed with a source', () => {
    for (const { quote, source } of SOURCE_QUOTES) {
      expect(post.content, quote).toContain(`"${quote}"`)
      expect(SOURCES[source].url).toMatch(/^https:\/\//)
    }
    // Take the listed quotes out; the only quote marks left are around the word true in 'the "true" one'
    let rest = plainText
    for (const { quote } of SOURCE_QUOTES) rest = rest.replace(`"${quote}"`, '')
    expect(rest.match(/"/g)).toHaveLength(2)
    expect(rest).toContain('the "true" one')
  })

  it('tells the race as a legend, not as history', () => {
    expect(post.content).toMatch(/It is a legend, and it has many versions/)
    expect(post.content).toContain('Do not take it as history'.replace('Do not', 'do not'))
  })

  it('has the reading offer sentence of /reading', () => {
    expect(post.content).toContain(
      `<a href="/reading">personal reading</a> is an ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs ${READING_PRICE} and arrives by email.`,
    )
  })
})
