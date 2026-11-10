/**
 * Blog post: "Chinese New Year 2027: Date, Animal and Traditions" (T-0317).
 *
 * Every date, weekday and character comes from the site's own data, never typed by hand:
 * - Lunar New Year dates: lunarNewYearDates in src/lib/zodiac-data.ts (weekdays via Date.UTC)
 * - The year's name 丁未: chineseName of the fire-goat profile (src/lib/sign-content/profiles.ts)
 * - Which year a reading covers: getReadingYear (src/lib/readings/reading-year.ts)
 * src/content/__tests__/cny-2027-post.test.ts pins the text to all of these.
 *
 * Holiday traditions are not site data. Each one is stated by at least two outside pages
 * that were opened on 2026-11-11 and checked against their raw text. The quoted phrases are
 * listed in CITED_QUOTES so the tests can check that every quote is present. Where the
 * pages disagreed (how long the festival lasts, on which day the red envelopes are given,
 * the exact hour of the firecrackers) the post says nothing.
 * Server code imports this file: relative imports only.
 */
import type { BlogPost } from '../../types'
import { getAnimalForYear, getElementForYear, lunarNewYearDates, zodiacAnimals } from '../../lib/zodiac-data'
import { getReadingYear } from '../../lib/readings/reading-year'
import { getProfileBySlug } from '../../lib/sign-content/profiles'

const MONTHS = ['January', 'February', 'March']
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/** A calendar day as UTC milliseconds, so weekday and day arithmetic have no time-zone shifts */
const utcDay = (year: number, month: number, day: number) => Date.UTC(year, month - 1, day)

export interface DayFacts {
  /** "6 February 2027" */
  label: string
  /** "Saturday" */
  weekday: string
}

/** Label and weekday of a UTC day */
export function describeDay(utcMillis: number): DayFacts {
  const date = new Date(utcMillis)
  return {
    label: `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`,
    weekday: WEEKDAYS[date.getUTCDay()]!,
  }
}

const ONE_DAY = 86_400_000

/** Lunar New Year of a calendar year, as a UTC day, from the site's table */
export function lunarNewYear(year: number): number {
  const entry = lunarNewYearDates[year]
  if (!entry) throw new Error(`No Lunar New Year date for ${year} in zodiac-data.ts`)
  return utcDay(year, entry[0], entry[1])
}

const TARGET_YEAR = 2027
const newYearDay = lunarNewYear(TARGET_YEAR)

/** All dates the post states, computed from the data */
export const KEY_DATES = {
  newYear: describeDay(newYearDay),
  /** The day before Lunar New Year */
  eve: describeDay(newYearDay - ONE_DAY),
  /** The 15th day of the first lunar month: day 1 is New Year's Day, so 14 days later */
  lanternFestival: describeDay(newYearDay + 14 * ONE_DAY),
  /** The Fire Horse year began on the 2026 Lunar New Year */
  horseYearStart: describeDay(lunarNewYear(TARGET_YEAR - 1)),
  /** The Fire Goat year ends the day before the 2028 Lunar New Year */
  goatYearEnd: describeDay(lunarNewYear(TARGET_YEAR + 1) - ONE_DAY),
}

/** Earliest and latest Lunar New Year in the site's data (1924-2043), as "21 January" and "20 February" */
export function newYearRange(): { earliest: string; latest: string; firstYear: number; lastYear: number } {
  const years = Object.keys(lunarNewYearDates).map(Number)
  const dayOfYear = (year: number) => lunarNewYear(year) - utcDay(year, 1, 1)
  const sorted = [...years].sort((a, b) => dayOfYear(a) - dayOfYear(b))
  const label = (year: number) => describeDay(lunarNewYear(year)).label.replace(/ \d{4}$/, '')
  return {
    earliest: label(sorted[0]!),
    latest: label(sorted[sorted.length - 1]!),
    firstYear: Math.min(...years),
    lastYear: Math.max(...years),
  }
}

const goatAnimal = getAnimalForYear(TARGET_YEAR)
const goatElement = getElementForYear(TARGET_YEAR)
const goatSlug = `${goatElement}-${goatAnimal}`
const goatName = zodiacAnimals.find(item => item.animal === goatAnimal)!.name
const goatProfile = getProfileBySlug(goatSlug)!
const horseSlug = `${getElementForYear(TARGET_YEAR - 1)}-${getAnimalForYear(TARGET_YEAR - 1)}`
const horseName = zodiacAnimals.find(item => item.animal === getAnimalForYear(TARGET_YEAR - 1))!.name
const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
const yearSign = `${capitalize(goatElement)} ${goatName}`
const horseSign = `${capitalize(getElementForYear(TARGET_YEAR - 1))} ${horseName}`

/** What a reading ordered on 1 January 2027 covers, from the reading engine's own rule */
const readingYear = getReadingYear(new Date(Date.UTC(TARGET_YEAR, 0, 1)))

/** Outside pages opened on 2026-11-11. Every quote below was checked against the raw page text. */
export const SOURCES = {
  chinaHighlightsNewYear: 'https://www.chinahighlights.com/travelguide/festivals/lunar-new-year.htm',
  chinaHighlightsFacts: 'https://www.chinahighlights.com/travelguide/festivals/new-year-facts.htm',
  travelChinaGuideNewYear: 'https://www.travelchinaguide.com/essential/holidays/new-year/',
  travelChinaGuideCustoms: 'https://www.travelchinaguide.com/essential/holidays/new-year/customs.htm',
  travelChinaGuideLantern: 'https://www.travelchinaguide.com/essential/holidays/lantern.htm',
  ubc: 'https://news.ubc.ca/2023/01/why-does-the-date-of-lunar-new-year-change/',
  hko: 'https://www.hko.gov.hk/en/education/astronomy-and-time/time-service/00506-what-year-is-it-today.html',
} as const

/** Every quoted phrase, with the page it comes from. The tests check each one is in the post. */
export const CITED_QUOTES: { url: string; quote: string }[] = [
  { url: SOURCES.chinaHighlightsFacts, quote: 'enjoy a reunion dinner with their families on New Year\'s Eve' },
  { url: SOURCES.travelChinaGuideNewYear, quote: 'traditional festivities' },
  { url: SOURCES.chinaHighlightsNewYear, quote: 'clean their houses and the areas surrounding them before the start of the new year' },
  { url: SOURCES.travelChinaGuideCustoms, quote: 'a long-observed Chinese New Year tradition' },
  { url: SOURCES.chinaHighlightsNewYear, quote: 'Spring Festival couplets' },
  { url: SOURCES.chinaHighlightsNewYear, quote: 'All of them are red' },
  { url: SOURCES.travelChinaGuideCustoms, quote: 'with the red paper' },
  { url: SOURCES.travelChinaGuideNewYear, quote: 'driving away the old things' },
  { url: SOURCES.chinaHighlightsFacts, quote: 'many of China\'s big cities have banned' },
  { url: SOURCES.travelChinaGuideCustoms, quote: 'many places ban firecrackers except in designated areas' },
  { url: SOURCES.travelChinaGuideNewYear, quote: 'paste the Spring Festival couplets' },
  { url: SOURCES.chinaHighlightsFacts, quote: 'a way to send good wishes and luck (as well as money)' },
  { url: SOURCES.travelChinaGuideNewYear, quote: 'red envelopes from the older generations' },
  { url: SOURCES.chinaHighlightsFacts, quote: 'scare away demons and evil ghosts' },
  { url: SOURCES.travelChinaGuideNewYear, quote: 'chase off bad spirits' },
  { url: SOURCES.travelChinaGuideNewYear, quote: '1st day of 1st lunar month - Chinese New Year' },
  { url: SOURCES.travelChinaGuideLantern, quote: 'the 15th day of the first lunar month' },
  { url: SOURCES.chinaHighlightsFacts, quote: 'the 15th day of the first lunar month' },
  { url: SOURCES.travelChinaGuideNewYear, quote: 'guess lantern riddles' },
  { url: SOURCES.chinaHighlightsFacts, quote: 'light lanterns' },
  { url: SOURCES.ubc, quote: 'second new moon after the winter solstice' },
  { url: SOURCES.hko, quote: 'the day of the second new moon' },
]

const januaryFirst = describeDay(utcDay(TARGET_YEAR, 1, 1)).label
const range = newYearRange()
const { newYear, eve, lanternFestival, horseYearStart, goatYearEnd } = KEY_DATES

const content = `<h2>The Short Answer</h2>
<p>Chinese New Year 2027 falls on <strong>${newYear.weekday} ${newYear.label}</strong>. It is also called Lunar New Year or the Spring Festival. It starts the ${yearSign} year, written ${goatProfile.chineseName} in Chinese. The ${goatName} follows the ${horseName}. The ${horseSign} year ends on ${eve.label}, and the ${yearSign} year runs until ${goatYearEnd.label}, the day before the next Lunar New Year.</p>
<p>The festival season is not one day. Here are the dates to know.</p>
<h2>Key Dates for 2027</h2>
<div class="table-scroll"><table>
<thead><tr><th>Day</th><th>Date</th></tr></thead>
<tbody>
<tr><td>New Year's Eve</td><td>${eve.weekday.slice(0, 3)} ${eve.label}</td></tr>
<tr><td>New Year's Day</td><td>${newYear.weekday.slice(0, 3)} ${newYear.label}</td></tr>
<tr><td>Lantern Festival</td><td>${lanternFestival.weekday.slice(0, 3)} ${lanternFestival.label}</td></tr>
<tr><td>Year of the ${goatName} ends</td><td>${goatYearEnd.weekday.slice(0, 3)} ${goatYearEnd.label}</td></tr>
</tbody>
</table></div>
<p>The Chinese zodiac year changes at Lunar New Year, not on 1 January. Someone born on ${eve.label} belongs to the ${horseSign} year. Someone born on ${newYear.label} belongs to the ${yearSign} year.</p>
<h2>From New Year's Eve to the Lantern Festival</h2>
<p>The celebrations are traditionally counted from New Year's Eve, ${eve.label}, to the Lantern Festival on ${lanternFestival.label}. Why that date? <a href="${SOURCES.travelChinaGuideNewYear}">Travel China Guide</a> lists New Year's Day as the "1st day of 1st lunar month - Chinese New Year". Both <a href="${SOURCES.travelChinaGuideLantern}">Travel China Guide</a> and <a href="${SOURCES.chinaHighlightsFacts}">China Highlights</a> put the Lantern Festival on "the 15th day of the first lunar month". Counting 14 days on from ${newYear.label} gives ${lanternFestival.label}.</p>
<p>Customs differ by region and by family. Treat what follows as common traditions, not rules. We only list customs that at least two of the pages we read describe.</p>
<h3>The reunion dinner</h3>
<p>Families gather for a big meal on New Year's Eve. <a href="${SOURCES.chinaHighlightsFacts}">China Highlights</a> says people travel long distances to "enjoy a reunion dinner with their families on New Year's Eve". <a href="${SOURCES.travelChinaGuideNewYear}">Travel China Guide</a> lists the family reunion dinner among the "traditional festivities".</p>
<h3>Cleaning the house</h3>
<p>The cleaning comes before the new year, not on New Year's Day. <a href="${SOURCES.chinaHighlightsNewYear}">China Highlights</a> says it is traditional for families to "clean their houses and the areas surrounding them before the start of the new year". <a href="${SOURCES.travelChinaGuideCustoms}">Travel China Guide</a> calls cleaning the house "a long-observed Chinese New Year tradition". The same site adds that cleaning the dust means "driving away the old things".</p>
<h3>Red decorations</h3>
<p>Red is the color of the season. Doors and windows are decorated with "Spring Festival couplets", according to <a href="${SOURCES.chinaHighlightsNewYear}">China Highlights</a>, which says "All of them are red". <a href="${SOURCES.travelChinaGuideNewYear}">Travel China Guide</a> describes people who "paste the Spring Festival couplets" as part of the preparations. Its <a href="${SOURCES.travelChinaGuideCustoms}">customs page</a> says modern couplets replaced peach wood "with the red paper".</p>
<h3>Red envelopes</h3>
<p>Red envelopes hold gift money. <a href="${SOURCES.chinaHighlightsFacts}">China Highlights</a> calls giving them "a way to send good wishes and luck (as well as money)". On the first day, <a href="${SOURCES.travelChinaGuideNewYear}">Travel China Guide</a> says, younger people can get "red envelopes from the older generations". The two pages place the gift at different moments, so we leave the timing open.</p>
<h3>Firecrackers</h3>
<p>Both sources explain the noise the same way. <a href="${SOURCES.chinaHighlightsFacts}">China Highlights</a> says many people believe the flash and bang "scare away demons and evil ghosts". <a href="${SOURCES.travelChinaGuideNewYear}">Travel China Guide</a> writes of setting them off "to chase off bad spirits". Both also note limits. China Highlights says "many of China's big cities have banned" them, and Travel China Guide says "many places ban firecrackers except in designated areas". Check the local rules where you live.</p>
<h3>Lantern Festival</h3>
<p>The season closes with the Lantern Festival on ${lanternFestival.label}. <a href="${SOURCES.chinaHighlightsFacts}">China Highlights</a> says families go out and "light lanterns". <a href="${SOURCES.travelChinaGuideNewYear}">Travel China Guide</a> says people enjoy lanterns in different shapes and "guess lantern riddles". Both describe it as the end of the New Year festivities.</p>
<h2>Why the Date Moves Every Year</h2>
<p>Lunar New Year has no fixed place on the Gregorian calendar. In the site's data it falls between ${range.earliest} and ${range.latest}, across the years ${range.firstYear} to ${range.lastYear}. That is why 2026 had a later date, ${horseYearStart.label}, while 2027 comes on ${newYear.label}.</p>
<p>The reason is the moon. A <a href="${SOURCES.ubc}">University of British Columbia article</a> explains that the new year is defined by "the second new moon after the winter solstice". The <a href="${SOURCES.hko}">Hong Kong Observatory</a> gives the same rule: it describes "the day of the second new moon" after the winter solstice as Lunar New Year's Day. Because the moon's cycle does not line up with the calendar year, the date shifts.</p>
<p>The same rule is why a birthday in January or February can belong to the previous animal. Our guide <a href="/blog/chinese-zodiac-january-february-birthday">Born in January or February? Find your real sign</a> has the date for every year from ${range.firstYear} to ${range.lastYear}.</p>
<h2>What the ${yearSign} Year Means</h2>
<p>${goatProfile.chineseName} pairs the Heavenly Stem 丁 (yin fire) with the Earthly Branch 未, the ${goatName}. On this site the ${yearSign} is called "${goatProfile.tagline}". Yin fire does not explode outward. It glows and smolders.</p>
<p>For people born under the ${goatName}, 2027 is their own zodiac year, the Ben Ming Nian. Tradition sees it as a year of change and testing. That applies to ${goatName} people, not to everyone. For all twelve animals and all five elements, read <a href="/blog/2027-year-of-the-fire-goat">2027: Year of the Fire Goat</a>. To see which animals are the ${goatName}'s allies and which clash with it, read <a href="/blog/chinese-zodiac-trines-secret-friends-clashes">Trines, Secret Friends and Clashes</a>.</p>
<h2>Born Around the New Year?</h2>
<p>If a baby or a birthday falls between late January and early February 2027, check the date before you pick the animal. A birth up to ${eve.label} is a ${horseSign}. A birth on ${newYear.label} or later is a ${yearSign}. The <a href="/calculator">Zodiac Calculator</a> applies the cutoff for you. Enter the birth date and it shows the animal and the element.</p>
<h2>Make It Personal</h2>
<p>Everything here is for fun and reflection. It is a way to enjoy a very old holiday, not a forecast. Start with the calculator to find your sign. If you want more, the <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email.</p>
<p>Orders from ${januaryFirst} cover the ${readingYear.signName} year. Orders placed before ${januaryFirst} cover the rest of the ${horseSign} year.</p>`

export const CNY_2027_POST: BlogPost = {
  id: 'code-chinese-new-year-2027-date-animal-traditions',
  slug: 'chinese-new-year-2027-date-animal-traditions',
  title: 'Chinese New Year 2027: Date, Animal and Traditions',
  excerpt: `Chinese New Year 2027 is ${newYear.weekday} ${newYear.label} and starts the ${yearSign} year. See the key dates, the traditions and why the date moves.`,
  authorName: 'Wu Xing Zodiac',
  tags: ['lunar-new-year', '2027', 'fire-goat', 'chinese-zodiac', 'year-ahead', 'zodiac-guide'],
  readTime: 6,
  publishedAt: '2026-11-14T02:00:00.000Z',
  content,
}

// horseSlug is exported for the tests, which check both year signs against the profiles
export { goatSlug, horseSlug }
