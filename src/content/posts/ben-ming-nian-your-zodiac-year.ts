/**
 * Blog post: "Ben Ming Nian: Your Own Zodiac Year (2026 Horse, 2027 Goat)".
 *
 * Dates and birth-year tables are built from the calculator's own data
 * (lunarNewYearDates, getAnimalForYear and getElementForYear in src/lib/zodiac-data.ts).
 * The year relations (ben ming nian, clash, harm) and the "year of change and testing"
 * wording match the reading engine (src/lib/readings/server/context.ts) and the Fire Goat
 * post; which year a reading covers follows src/lib/readings/reading-year.ts.
 *
 * Customs are cultural facts from outside sources (checked 2026-11-11). Only customs that
 * at least two of them state are in the post:
 * - Travel China Guide, "Ben Ming Nian, Chinese Zodiac Year of Birth, Bad Luck Year"
 * - China Highlights, "Year of the Horse: Horoscope 2026, Personality"
 * - China Daily (from beijing-kids.com), "Why do people wear red underwear in the New Year?", 2 Jan 2024
 * - China Daily, "Seeing red" by Alywin Chew, 24 Feb 2018
 * Server code imports this file: relative imports only.
 */
import type { BlogPost, ZodiacAnimal } from '../../types'
import { getAnimalForYear, getElementForYear, getSignSlug, lunarNewYearDates, zodiacAnimals } from '../../lib/zodiac-data'

/** Outside sources for the customs section */
export const BEN_MING_NIAN_SOURCES = {
  travelChinaGuide: 'https://www.travelchinaguide.com/intro/social_customs/zodiac/ben-ming-nian.htm',
  chinaHighlights: 'https://www.chinahighlights.com/travelguide/chinese-zodiac/horse.htm',
  chinaDaily2024: 'https://language.chinadaily.com.cn/a/202401/02/WS6593d660a3105f21a507a2d0.html',
  chinaDaily2018: 'https://global.chinadaily.com.cn/a/201802/24/WS5a905677a3106e7dcc13db33.html',
} as const

const SOURCES = BEN_MING_NIAN_SOURCES

/** The two years this post covers */
export const HORSE_YEAR = 2026
export const GOAT_YEAR = 2027

/** Oldest birth year in the tables */
export const FIRST_BIRTH_YEAR = 1930

const MONTHS = ['January', 'February']

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)

/** "17 February 2026": the Lunar New Year that starts a Chinese year */
export function yearStartLabel(year: number): string {
  const [month, day] = lunarNewYearDates[year]!
  return `${day} ${MONTHS[month - 1]} ${year}`
}

/** "5 February 2027": the last day of a Chinese year (the day before the next Lunar New Year) */
export function yearEndLabel(year: number): string {
  const [month, day] = lunarNewYearDates[year + 1]!
  const lastDay = new Date(Date.UTC(year + 1, month - 1, day - 1))
  return `${lastDay.getUTCDate()} ${MONTHS[lastDay.getUTCMonth()]} ${lastDay.getUTCFullYear()}`
}

/** "Metal Horse" and its profile slug for a lunar year */
function signForYear(year: number): { name: string; slug: string } {
  const animal = getAnimalForYear(year)
  const element = getElementForYear(year)
  return { name: `${capitalize(element)} ${capitalize(animal)}`, slug: getSignSlug(animal, element) }
}

/** Birth years of an animal from FIRST_BIRTH_YEAR up to (not including) its current ben ming nian */
export function birthYearsBefore(animal: ZodiacAnimal, benMingYear: number): number[] {
  const years = zodiacAnimals.find(item => item.animal === animal)!.years
  return years.filter(year => year >= FIRST_BIRTH_YEAR && year < benMingYear)
}

/** "17 Feb 2026": short month names so the table fits a 360px phone without sideways scrolling */
const shortMonths = (label: string) => label.replace('January', 'Jan').replace('February', 'Feb')

function birthYearTable(animal: ZodiacAnimal, benMingYear: number): string {
  const rows = birthYearsBefore(animal, benMingYear).map(year => {
    const sign = signForYear(year)
    return `<tr><td><a href="/zodiac/${sign.slug}">${sign.name}</a></td><td>${shortMonths(yearStartLabel(year))}</td><td>${shortMonths(yearEndLabel(year))}</td></tr>`
  })
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Your sign</th><th>Born from</th><th>Born until</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

const horseYear = signForYear(HORSE_YEAR)
const goatYear = signForYear(GOAT_YEAR)

const content = `<h2>What Is Ben Ming Nian?</h2>
<p>Ben ming nian (本命年) is the year whose animal is your own birth animal. In English it is often called your "zodiac year of birth." There are twelve animals, so it comes back every 12 years: around the ages of 12, 24, 36, 48, 60, 72 and 84. <a href="${SOURCES.travelChinaGuide}">Travel China Guide</a> and <a href="${SOURCES.chinaDaily2024}">China Daily</a> both describe it this way.</p>
<p>In ${HORSE_YEAR} it is the Horse's turn. The ${horseYear.name} year began on ${yearStartLabel(HORSE_YEAR)} and runs until ${yearEndLabel(HORSE_YEAR)}. Then the ${goatYear.name} year begins on ${yearStartLabel(GOAT_YEAR)} and runs until ${yearEndLabel(GOAT_YEAR)}.</p>
<p>So Horse-year people are in their ben ming nian until ${yearEndLabel(HORSE_YEAR)}. Goat-year people are in theirs from ${yearStartLabel(GOAT_YEAR)}.</p>
<h2>Who Is in Their Ben Ming Nian?</h2>
<p>Your animal comes from your Chinese birth year, and that year starts at Lunar New Year, not on 1 January. That is why the tables below give dates, not just years. If you were born in January or February, check the dates carefully: a birthday before Lunar New Year belongs to the year before. Our post <a href="/blog/chinese-zodiac-january-february-birthday">Born in January or February?</a> explains why.</p>
<p>Each row also shows the element of that birth year. The animal is the same in every row, but the element changes, so each row is a different sign.</p>
<h3>Horse years: your ben ming nian runs until ${yearEndLabel(HORSE_YEAR)}</h3>
${birthYearTable('horse', HORSE_YEAR)}
<h3>Goat years: your ben ming nian runs from ${yearStartLabel(GOAT_YEAR)} to ${yearEndLabel(GOAT_YEAR)}</h3>
${birthYearTable('goat', GOAT_YEAR)}
<p>Babies born in the ${horseYear.name} year itself start life in a Horse year. Their first ben ming nian comes at age 12, in ${HORSE_YEAR + 12}. Babies born in the ${goatYear.name} year will have theirs in ${GOAT_YEAR + 12}.</p>
<h2>Why Tradition Calls It a Testing Year</h2>
<p>You might expect your own year to be your luckiest. Tradition says the opposite. In our guide to <a href="/blog/2027-year-of-the-fire-goat">the Fire Goat year</a>, we describe ben ming nian as a year of change and testing, one that rewards caution and deliberate choices.</p>
<p>The usual explanation is Tai Sui (太岁), often called the God of Age. Each year is said to be ruled by a Tai Sui. When the year's animal is your own, tradition says you are more likely to meet challenges that year. <a href="${SOURCES.travelChinaGuide}">Travel China Guide</a>, <a href="${SOURCES.chinaDaily2024}">China Daily</a> and <a href="${SOURCES.chinaHighlights}">China Highlights</a> all explain it this way. Travel China Guide calls it offending Tai Sui.</p>
<p>That does not mean the year has to go badly. Travel China Guide says people may meet "either exultation or misery" in their zodiac year. China Highlights says a zodiac year "doesn't mean everything will go wrong." Think of it as a year with more change in it, in both directions.</p>
<h3>What our personal reading does with it</h3>
<p>The <a href="/reading">personal reading</a> follows the same tradition. Its year section looks at how the year's animal meets your own animal. When the two are the same, it names the year as your ben ming nian, "traditionally a year of change and testing that rewards caution and deliberate choices," and the outlook is written with that in mind.</p>
<p>Which year a reading covers depends on the date you order. Orders until 31 December ${HORSE_YEAR} cover the rest of the ${horseYear.name} year, until ${yearEndLabel(HORSE_YEAR)}. Orders from 1 January to 31 December ${GOAT_YEAR} cover the ${goatYear.name} year, which starts on ${yearStartLabel(GOAT_YEAR)}. So a Horse who orders by 31 December ${HORSE_YEAR}, or a Goat who orders in ${GOAT_YEAR}, gets a reading about their own year.</p>
<h2>Customs People Follow</h2>
<p>A ben ming nian comes with a few well-known customs. Below are the ones that several well-known sources agree on. They are traditions, not advice, and nobody has to follow them.</p>
<ul>
<li><strong>Wearing red.</strong> Red is the traditional color of good luck, and it is said to keep evil spirits away. The best-known custom is red underwear. A red waist belt is part of the custom too.</li>
<li><strong>Red as a gift.</strong> The red items are meant to be bought for you by someone else, usually family or friends. Tradition says red that you buy for yourself works much less well. A China Daily writer in his own Dog year wrote that he was "not actually allowed to buy them": someone had to give them to him.</li>
<li><strong>Jade and other charms.</strong> Some people wear jade, crystal or gold jewelry. Tradition says these materials have a spiritual power that brings good luck and keeps evil spirits away.</li>
<li><strong>A temple visit.</strong> Some people go to a temple to worship Tai Sui, the God of Age.</li>
</ul>
<p>Sources: <a href="${SOURCES.travelChinaGuide}">Travel China Guide, Ben Ming Nian</a>; <a href="${SOURCES.chinaHighlights}">China Highlights, Year of the Horse</a>; <a href="${SOURCES.chinaDaily2024}">China Daily, Why do people wear red underwear in the New Year?</a>; <a href="${SOURCES.chinaDaily2018}">China Daily, Seeing red</a>.</p>
<h2>Friction Signs in ${HORSE_YEAR} and ${GOAT_YEAR}</h2>
<p>Your own animal is not the only one tradition watches. In each year, two other animals meet the year's animal with friction: one in a clash, one in a harm relation.</p>
<ul>
<li><strong>${HORSE_YEAR}, the Horse year:</strong> the Rat clashes with the Horse (子午冲), which points to disruption and forced change. The Ox and the Horse are a harm pair (丑午害), which points to quiet friction and misunderstandings.</li>
<li><strong>${GOAT_YEAR}, the Goat year:</strong> the Ox clashes with the Goat (丑未冲). The Rat and the Goat are a harm pair (子未害).</li>
</ul>
<p>So Rat and Ox people meet some friction in both years, just in a different form. Our guide to <a href="/blog/2027-year-of-the-fire-goat">2027: Year of the Fire Goat</a> covers all twelve animals and all five elements. For the Horse year, see <a href="/blog/2026-year-of-the-fire-horse">2026: Year of the Fire Horse</a>.</p>
<h2>A Calm Way to Use Your Year</h2>
<p>A ben ming nian is a good excuse to pause. Twelve years is a full turn of the animal cycle, so you can compare where you are now with where you were last time.</p>
<ul>
<li>Look back 12 years. What has changed since your last ben ming nian? What did you build, and what did you let go?</li>
<li>Pick one or two decisions you want to make slowly and on purpose this year. That fits the tradition's advice of caution and deliberate choices.</li>
<li>Read your sign's profile in the <a href="/zodiac">zodiac directory</a> and note which parts still fit you, and which no longer do.</li>
</ul>
<p>All of this is for fun and reflection, not a forecast. Nothing here is a promise, and it does not replace advice from a doctor, a financial adviser or a lawyer.</p>
<h2>Find Your Sign and Your Year</h2>
<p>Not sure if this is your year? The <a href="/calculator">Zodiac Calculator</a> shows your animal and element from your birth date, with the Lunar New Year cutoff applied.</p>
<p>If you want a reading about your year, the <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. It is for entertainment and self-reflection, and it is not a prediction or a guarantee.</p>`

export const BEN_MING_NIAN_POST: BlogPost = {
  id: 'code-ben-ming-nian-your-zodiac-year',
  slug: 'ben-ming-nian-your-zodiac-year',
  title: 'Ben Ming Nian: Your Own Zodiac Year (2026 Horse, 2027 Goat)',
  excerpt:
    'Ben ming nian is your own zodiac year, every 12 years. See who is in it in 2026 and 2027, why tradition calls it a testing year and the customs people follow.',
  authorName: 'Wu Xing Zodiac',
  tags: ['ben-ming-nian', 'fire-horse', 'fire-goat', '2026', '2027', 'chinese-zodiac', 'zodiac-guide'],
  readTime: 7,
  publishedAt: '2026-11-12T07:00:00.000Z',
  content,
}
