/**
 * Blog post: "What Is My Chinese Element? Use Your Birth Year's Last Digit".
 *
 * The digit table, the worked examples and the stem characters are built from the
 * calculator's own data (src/lib/zodiac-data.ts and the 60 sign profiles in
 * src/lib/sign-content/profiles.ts), so the post can never disagree with the calculator.
 * Yin/yang rule: even years are yang, odd years yin. The tests check it against the
 * `energy` field of all 60 sign pages (src/content/__tests__/element-benming-posts.test.ts).
 * Element wording comes from the five-elements post and the element pages.
 * Server code imports this file: relative imports only.
 */
import type { BlogPost, ZodiacElement } from '../../types'
import {
  getAnimalForYear,
  getElementForYear,
  getSignSlug,
  getZodiacFromBirthdate,
  lunarNewYearDates,
  zodiacElements,
} from '../../lib/zodiac-data'
import { getProfileBySlug, signProfiles } from '../../lib/sign-content/profiles'

export type YinYang = 'Yang' | 'Yin'

/** Even years are yang, odd years yin (all 60 sign profiles agree, see the tests) */
export function yinYangForYear(year: number): YinYang {
  return year % 2 === 0 ? 'Yang' : 'Yin'
}

/** The ten last digits, in table order */
export const LAST_DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const MONTHS = ['January', 'February']

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

/** Name and Chinese character of an element, from the site's element list */
function elementInfo(element: ZodiacElement) {
  return zodiacElements.find(item => item.element === element)!
}

/** "yang fire" for a year */
function yinYangElement(year: number): string {
  return `${yinYangForYear(year).toLowerCase()} ${getElementForYear(year)}`
}

/** "Earth Rabbit" and its profile slug for a lunar year */
function signForYear(year: number): { name: string; slug: string } {
  const animal = getAnimalForYear(year)
  const element = getElementForYear(year)
  return { name: `${capitalize(element)} ${capitalize(animal)}`, slug: getSignSlug(animal, element) }
}

/** "5 February" for a year's Lunar New Year */
function lunarNewYearDay(year: number): string {
  const [month, day] = lunarNewYearDates[year]!
  return `${day} ${MONTHS[month - 1]}`
}

/** The Heavenly Stem character of a year, from the sign profile of that year (e.g. 2026 -> 丙) */
export function stemForYear(year: number): string {
  const profile = signProfiles.find(item => item.years.includes(year))!
  return profile.chineseName.charAt(0)
}

/** The two last digits that give an element, e.g. wood -> "4 or 5" */
function digitsForElement(element: ZodiacElement): string {
  return LAST_DIGITS.filter(digit => getElementForYear(digit) === element).join(' or ')
}

function digitTable(): string {
  const rows = LAST_DIGITS.map(digit => {
    const element = elementInfo(getElementForYear(digit))
    return `<tr><td>${digit}</td><td><a href="/zodiac/element/${element.element}">${element.name}</a></td><td>${element.chinese}</td><td>${yinYangForYear(digit)}</td></tr>`
  })
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Last digit of the year</th><th>Element</th><th>Chinese</th><th>Yin or yang</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

// Wording from /blog/five-elements-explained and the element pages (/zodiac/element/<element>)
const ELEMENT_LINES: Record<ZodiacElement, string> = {
  wood: 'growth, creativity and generosity. Wood signs are planners who think long-term. Season: spring.',
  fire: 'passion, transformation and charisma. Fire signs inspire others and rarely do anything halfway. Season: summer.',
  earth: 'stability, nourishment and practical sense. Earth signs are the reliable anchors who bring people together. Season: late summer.',
  metal: 'precision, discipline and determination. Metal signs have sharp minds and high standards. Season: autumn.',
  water: 'wisdom, adaptability and intuition. Water signs are deep thinkers who read situations well. Season: winter.',
}

function elementList(): string {
  const items = zodiacElements.map(({ element, name, chinese }) =>
    `<li><strong><a href="/zodiac/element/${element}">${name} (${chinese})</a>, years ending in ${digitsForElement(element)}:</strong> ${ELEMENT_LINES[element]}</li>`,
  )
  return `<ul>\n${items.join('\n')}\n</ul>`
}

// Lunar New Year range, earliest and latest date in the data (21 January to 20 February)
const lunarNewYearDays = Object.values(lunarNewYearDates).map(([month, day]) => ({ month, day, key: month * 100 + day }))
const earliest = lunarNewYearDays.reduce((a, b) => (b.key < a.key ? b : a))
const latest = lunarNewYearDays.reduce((a, b) => (b.key > a.key ? b : a))
const dayMonth = ({ month, day }: { month: number; day: number }) => `${day} ${MONTHS[month - 1]}`
const dataYears = Object.keys(lunarNewYearDates).map(Number)
const firstDataYear = Math.min(...dataYears)
const lastDataYear = Math.max(...dataYears)

// Short answer example: a year ending in 6
const SHORT_EXAMPLE_YEAR = 1986

// January example: born 20 January 2000, before Lunar New Year 2000 (5 February)
const JANUARY_EXAMPLE = { year: 2000, month: 1, day: 20 }
const januaryResult = getZodiacFromBirthdate(JANUARY_EXAMPLE.year, JANUARY_EXAMPLE.month, JANUARY_EXAMPLE.day)
const januarySign = signForYear(januaryResult.lunarYear)
const calendarYearSign = signForYear(JANUARY_EXAMPLE.year)

// Full sign example: 1984, the Wood Rat that starts the 60-year cycle
const FULL_SIGN_YEAR = 1984
const fullSign = signForYear(FULL_SIGN_YEAR)
const fullSignProfile = getProfileBySlug(fullSign.slug)!

// The stems of the Fire Horse (2026) and Fire Goat (2027) years
const HORSE_YEAR = 2026
const GOAT_YEAR = 2027
const horseSign = signForYear(HORSE_YEAR).name
const goatSign = signForYear(GOAT_YEAR).name

const content = `<h2>The Short Answer</h2>
<p>Look at the last digit of your birth year. In Chinese astrology it tells you your element, and whether that element is yin or yang. A year ending in ${SHORT_EXAMPLE_YEAR % 10}, like ${SHORT_EXAMPLE_YEAR}, is a ${capitalize(getElementForYear(SHORT_EXAMPLE_YEAR))} year. Because ${SHORT_EXAMPLE_YEAR % 10} is even, it is ${yinYangElement(SHORT_EXAMPLE_YEAR)}.</p>
<p>There is one catch. The year that counts is the Chinese year, and it starts at Lunar New Year, not on 1 January. If you were born in January or early February, read the section on that below before you trust the table.</p>
<h2>The Last-Digit Table</h2>
<p>Even digits are yang. Odd digits are yin. Each element gets two digits in a row: first its yang year, then its yin year.</p>
${digitTable()}
<p>Our <a href="/calculator">Zodiac Calculator</a> uses the same digits to find your element. Every one of the 60 sign profiles on this site also lists its energy as yin or yang, and all 60 match this table.</p>
<h2>Why the Last Digit Works</h2>
<p>A Chinese year has two labels. The first is one of ten Heavenly Stems. The second is one of twelve Earthly Branches, which are the twelve animals.</p>
<p>The ten stems come in five pairs, one pair per element: a yang stem, then a yin stem. They run Wood, Fire, Earth, Metal and Water, the same order as the generative cycle in <a href="/blog/five-elements-explained">The Five Elements Explained</a>, and then start again. So the stems repeat every 10 years, just like the last digit of a year. That is why one digit is enough. For example, ${HORSE_YEAR} carries the stem ${stemForYear(HORSE_YEAR)}, which is ${yinYangElement(HORSE_YEAR)}. ${GOAT_YEAR} carries ${stemForYear(GOAT_YEAR)}, which is ${yinYangElement(GOAT_YEAR)}.</p>
<p>The animals repeat every 12 years. Put a 10-year cycle and a 12-year cycle together, and the same element and animal only meet again after 60 years. That is where the 60 signs come from.</p>
<p>Yin and yang line up too. Yang animals, like the Rat, the Tiger and the Horse, always fall in even years, so they only ever get the yang side of an element. Yin animals, like the Ox, the Rabbit and the Goat, always fall in odd years. So each sign always has the same side: a ${horseSign} is always ${yinYangElement(HORSE_YEAR)}, and a ${goatSign} is always ${yinYangElement(GOAT_YEAR)}.</p>
<h2>The One Catch: January and February Birthdays</h2>
<p>Lunar New Year moves with the moon. Between ${firstDataYear} and ${lastDataYear} it falls anywhere from ${dayMonth(earliest)} to ${dayMonth(latest)}. If you were born before it, you belong to the previous Chinese year. That changes your element and its yin or yang side, not just your animal.</p>
<p>Here is an example. Someone born on ${JANUARY_EXAMPLE.day} ${MONTHS[JANUARY_EXAMPLE.month - 1]} ${JANUARY_EXAMPLE.year} sees a year ending in ${JANUARY_EXAMPLE.year % 10}, which points to ${yinYangElement(JANUARY_EXAMPLE.year)}. But Lunar New Year ${JANUARY_EXAMPLE.year} fell on ${lunarNewYearDay(JANUARY_EXAMPLE.year)}. So their Chinese year is still ${januaryResult.lunarYear}, which ends in ${januaryResult.lunarYear % 10}. Their element is ${yinYangElement(januaryResult.lunarYear)}, and their full sign is the <a href="/zodiac/${januarySign.slug}">${januarySign.name}</a>, not the <a href="/zodiac/${calendarYearSign.slug}">${calendarYearSign.name}</a>.</p>
<p>Our post <a href="/blog/chinese-zodiac-january-february-birthday">Born in January or February? Find Your Real Chinese Zodiac Sign</a> lists the Lunar New Year date for every year from ${firstDataYear} to ${lastDataYear}. Or let the <a href="/calculator">calculator</a> apply the cutoff for you.</p>
<h2>The Five Elements in Brief</h2>
<p>Here is what each element stands for in Wu Xing, with the digits that bring it. These are traditional associations, offered for fun and reflection. For the full picture, read <a href="/blog/five-elements-explained">The Five Elements Explained</a>.</p>
${elementList()}
<h2>Element Plus Animal: Your Full Sign</h2>
<p>Your element is only half of your sign. The other half is your animal, which follows the 12-year cycle.</p>
<p>Take someone born in ${FULL_SIGN_YEAR}, after Lunar New Year on ${lunarNewYearDay(FULL_SIGN_YEAR)}. The year ends in ${FULL_SIGN_YEAR % 10}, so the element is ${yinYangElement(FULL_SIGN_YEAR)}. ${FULL_SIGN_YEAR} is a ${capitalize(getAnimalForYear(FULL_SIGN_YEAR))} year. Together that makes the <a href="/zodiac/${fullSign.slug}">${fullSign.name}</a>, written ${fullSignProfile.chineseName} in Chinese. On this site it is called ${fullSignProfile.tagline}.</p>
<p>The ${fullSign.name} is the first pair of the 60-year cycle, so it comes back every 60 years: ${fullSignProfile.years.join(', ')}. Every other sign returns on the same 60-year rhythm.</p>
<p>Each of the 60 signs has its own profile. Browse them all in the <a href="/zodiac">zodiac directory</a>, or see how two signs get along with the <a href="/compatibility">compatibility tool</a>.</p>
<h2>Find Your Element in Seconds</h2>
<p>The table gives the answer for most people. The <a href="/calculator">Zodiac Calculator</a> gives it for everyone. Enter your birth date and it shows your element, your animal and your full profile, with the Lunar New Year cutoff applied.</p>
<p>Want more than a profile? The <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. It is for entertainment and self-reflection, not a prediction.</p>`

export const ELEMENT_BY_LAST_DIGIT_POST: BlogPost = {
  id: 'code-chinese-element-by-birth-year-last-digit',
  slug: 'chinese-element-by-birth-year-last-digit',
  title: "What Is My Chinese Element? Use Your Birth Year's Last Digit",
  excerpt:
    'The last digit of your birth year gives your Chinese element and whether it is yin or yang. See the table, the Lunar New Year catch and a worked example.',
  authorName: 'Wu Xing Zodiac',
  tags: ['five-elements', 'birth-year', 'yin-yang', 'chinese-zodiac', 'wu-xing', 'zodiac-guide'],
  readTime: 6,
  publishedAt: '2026-11-12T01:00:00.000Z',
  content,
}
