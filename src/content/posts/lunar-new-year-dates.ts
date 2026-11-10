/**
 * Blog post: "Born in January or February? Find Your Real Chinese Zodiac Sign".
 *
 * The date table is built from the same data the Zodiac Calculator uses
 * (lunarNewYearDates in src/lib/zodiac-data.ts, cross-checked on 2026-11-11 against the
 * independent `lunardate` library: 120 of 120 dates equal), so the post and the
 * calculator can never disagree. Server code imports this file: relative imports only.
 */
import type { BlogPost } from '../../types'
import {
  getAnimalForYear,
  getElementForYear,
  getSignSlug,
  lunarNewYearDates,
} from '../../lib/zodiac-data'

const MONTHS = ['January', 'February']

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

/** "Metal Horse" and its profile slug for a lunar year */
function signForYear(year: number): { name: string; slug: string } {
  const animal = getAnimalForYear(year)
  const element = getElementForYear(year)
  return { name: `${capitalize(element)} ${capitalize(animal)}`, slug: getSignSlug(animal, element) }
}

/** Every year in the data, oldest first */
export const TABLE_YEARS = Object.keys(lunarNewYearDates)
  .map(Number)
  .sort((a, b) => a - b)

/** "27 January" for a year's Lunar New Year */
export function lunarNewYearDay(year: number): string {
  const [month, day] = lunarNewYearDates[year]!
  return `${day} ${MONTHS[month - 1]}`
}

function dateTable(): string {
  const rows = TABLE_YEARS.map(year => {
    const sign = signForYear(year)
    return `<tr><td>${year}</td><td>${lunarNewYearDay(year)}</td><td><a href="/zodiac/${sign.slug}">${sign.name}</a></td></tr>`
  })
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Year</th><th>Lunar New Year</th><th>Sign from that date</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

const firstYear = TABLE_YEARS[0]!
const lastYear = TABLE_YEARS[TABLE_YEARS.length - 1]!
const signBeforeFirst = signForYear(firstYear - 1)

const content = `<h2>Why January and February Birthdays Are Tricky</h2>
<p>The Chinese zodiac year does not start on 1 January. It starts at Lunar New Year, and that date moves with the moon. Between ${firstYear} and ${lastYear} it falls anywhere from 21 January to 20 February.</p>
<p>So if you were born in January, or in February before Lunar New Year, your sign belongs to the year before. That goes for both parts of your sign: the animal and the element. Charts that list only years ("1990 = Horse") skip this step. They are right for most of the year, but not for you.</p>
<h2>Two Examples</h2>
<p>Lunar New Year 1990 fell on 27 January. Someone born on 20 January 1990 still belongs to the 1989 year, so their sign is the <a href="/zodiac/earth-snake">Earth Snake</a>. Someone born on 1 February 1990 is a <a href="/zodiac/metal-horse">Metal Horse</a>, the sign most charts give for 1990.</p>
<p>The same thing will happen in the coming months. Lunar New Year 2027 falls on 6 February. A baby born on 4 February 2027 is a <a href="/zodiac/fire-horse">Fire Horse</a>, like everyone born since 17 February 2026. A baby born on 6 February 2027 or later is a <a href="/zodiac/fire-goat">Fire Goat</a>. We cover that year in <a href="/blog/2027-year-of-the-fire-goat">2027: Year of the Fire Goat</a>.</p>
<h2>Born on Lunar New Year's Day</h2>
<p>If you were born on the day itself, you belong to the new year. Our calculator works the same way.</p>
<p>One detail for people born far from China: the Chinese calendar is set in China's time zone (UTC+8). If you were born within a day of the date somewhere else in the world, your local date and China's date can differ. The calculator goes by the date you enter.</p>
<h2>Why Some Sites Give a Different Answer</h2>
<p>There is a second tradition. In Four Pillars astrology (BaZi), many practitioners start the year at Lichun, the "start of spring". It is one of the 24 solar terms and falls on 3, 4 or 5 February. If you were born between Lichun and Lunar New Year, the two methods give you different signs.</p>
<p>Neither is a mistake. They answer the question in two different ways. On this site the year starts at Lunar New Year, for the animal and for the element.</p>
<h2>Lunar New Year Dates, ${firstYear} to ${lastYear}</h2>
<p>Find your birth year. Born on or after the date shown? Your sign is the one in that row. Born before it? Your sign is in the row above, because you belong to the year before. For a birthday before ${lunarNewYearDay(firstYear)} ${firstYear}, that is the <a href="/zodiac/${signBeforeFirst.slug}">${signBeforeFirst.name}</a>.</p>
${dateTable()}
<p>Dates from 2027 on are worked out in advance from the moon's phases, as calendars always are.</p>
<h2>Find Your Sign in Ten Seconds</h2>
<p>Rather not read a table? The <a href="/calculator">Zodiac Calculator</a> applies the cutoff for you. Enter your birth date and it shows your animal, your element and your full profile.</p>
<p>Once you know your sign, you can read its profile, look at <a href="/compatibility">compatibility</a> with any other sign, or learn how the elements work in <a href="/blog/five-elements-explained">The Five Elements Explained</a>.</p>`

export const LUNAR_NEW_YEAR_DATES_POST: BlogPost = {
  id: 'code-chinese-zodiac-january-february-birthday',
  slug: 'chinese-zodiac-january-february-birthday',
  title: 'Born in January or February? Find Your Real Chinese Zodiac Sign',
  excerpt:
    'The Chinese zodiac year starts at Lunar New Year, between 21 January and 20 February. Check the date for your birth year and find your real sign.',
  authorName: 'Wu Xing Zodiac',
  tags: ['lunar-new-year', 'birthday', 'chinese-zodiac', 'calculator', 'zodiac-guide'],
  readTime: 5,
  publishedAt: '2026-11-10T20:00:00.000Z',
  content,
}
