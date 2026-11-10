/**
 * Blog post: "Chinese Zodiac vs Western Zodiac: Key Differences" (T-0324).
 *
 * Facts about the Chinese system come from the site's own data and are computed here:
 * the 12 animals, 5 elements and 60 combinations (src/lib/zodiac-data.ts), the earliest and
 * latest Lunar New Year in the table, how the calculator decides the year (getLunarYear),
 * and the 12-year and 60-year repeats. Facts about the Western zodiac, the solar terms and
 * the zodiac year start come from the pages linked in the post, and the quoted phrases are
 * pinned by src/content/__tests__/chinese-vs-western-post.test.ts (the test checks they are
 * in the post; the quotes were checked against the live pages on 2026-11-11).
 * Server code imports this file: relative imports only.
 */
import type { BlogPost } from '../../types'
import {
  getAllSignSlugs,
  getAnimalForYear,
  getElementForYear,
  lunarNewYearDates,
  zodiacAnimals,
  zodiacElements,
} from '../../lib/zodiac-data'

const MONTHS = ['January', 'February', 'March']

/** Number of animals, elements and animal + element combinations in the site's data */
export const ANIMAL_COUNT = zodiacAnimals.length
export const ELEMENT_COUNT = zodiacElements.length
export const COMBINATION_COUNT = getAllSignSlugs().length

/** The earliest and latest Lunar New Year in the site's table, and the years the table covers */
export function lunarNewYearRange(): { earliest: string; latest: string; firstYear: number; lastYear: number } {
  const years = Object.keys(lunarNewYearDates).map(Number).sort((a, b) => a - b)
  const sortKey = (year: number) => lunarNewYearDates[year]![0] * 100 + lunarNewYearDates[year]![1]
  const label = (year: number) => `${lunarNewYearDates[year]![1]} ${MONTHS[lunarNewYearDates[year]![0] - 1]}`
  const earliestYear = years.reduce((best, year) => (sortKey(year) < sortKey(best) ? year : best))
  const latestYear = years.reduce((best, year) => (sortKey(year) > sortKey(best) ? year : best))
  return { earliest: label(earliestYear), latest: label(latestYear), firstYear: years[0]!, lastYear: years[years.length - 1]! }
}

/** The next year after 2026 with the same animal and element as 2026 (the Fire Horse) */
export function nextFireHorseYear(): number {
  let year = 2027
  while (getAnimalForYear(year) !== 'horse' || getElementForYear(year) !== 'fire') year += 1
  return year
}

const range = lunarNewYearRange()
const nextFireHorse = nextFireHorseYear()

const content = `<h2>The Short Answer</h2>
<p>The two zodiacs ask different questions. The Western zodiac asks when in the solar year you were born. The Chinese zodiac asks which year of the Chinese calendar you were born in.</p>
<p>In the Western system your sign comes from your birth date. There are 12 signs, and each one lasts about a month. In the Chinese system your animal comes from your birth year. There are ${ANIMAL_COUNT} animals, and each one lasts a year. This site adds the five elements, and each animal year carries one of them. That gives ${COMBINATION_COUNT} animal and element combinations.</p>
<p>Most people have one of each. You do not have to choose. They are two separate ways of dividing time. This post is for fun and reflection, not for predictions.</p>
<h2>What Decides Your Western Sign</h2>
<p>The Western zodiac follows the Sun. Wikipedia describes the zodiac as <a href="https://en.wikipedia.org/wiki/Zodiac" rel="noopener">"divided along the ecliptic into 12 equal parts"</a>, called signs. The ecliptic is the path the Sun seems to take across the sky in a year. The Hong Kong Observatory explains it the same way: <a href="https://www.hko.gov.hk/en/gts/time/24solarterms.htm" rel="noopener">the Sun moves along the ecliptic, which is measured in 360 degrees</a>. Twelve equal parts of 360 degrees make 30 degrees each, which is about one month of the Sun's travel.</p>
<p>The count starts in spring. Wikipedia says <a href="https://en.wikipedia.org/wiki/Zodiac" rel="noopener">"The beginning of Aries is defined as the moment of vernal equinox"</a>. Because the Gregorian calendar and the Sun do not line up perfectly, the dates move a little. The same page says they <a href="https://en.wikipedia.org/wiki/Zodiac" rel="noopener">"vary slightly from year to year"</a>. The Observatory puts it this way: the start or end of a sign falls <a href="https://www.hko.gov.hk/en/gts/time/24solarterms.htm" rel="noopener">"within about one day on a major solar term"</a>. So if you were born near the edge of a sign, check the exact date for your birth year.</p>
<h2>What Decides Your Chinese Sign</h2>
<p>The Chinese zodiac follows the Chinese calendar. Your animal is the animal of your birth year, and your element is the element of that year too. The year does not start on 1 January. It starts at Lunar New Year.</p>
<p>That date moves. In the table this site uses, from ${range.firstYear} to ${range.lastYear}, Lunar New Year falls anywhere from ${range.earliest} to ${range.latest}. If you were born in January or early February, you may belong to the previous animal. Our guide to <a href="/blog/chinese-zodiac-january-february-birthday">January and February birthdays</a> has every date.</p>
<h2>When Does the Zodiac Year Start?</h2>
<p>There is one more wrinkle. Wikipedia notes that <a href="https://en.wikipedia.org/wiki/Chinese_zodiac" rel="noopener">"there are two schools of thought in Chinese astrology: Chinese New Year or the start of spring"</a>. The start of spring is a solar term called Lichun. Wikipedia says it <a href="https://en.wikipedia.org/wiki/Lichun" rel="noopener">"usually begins around February 4"</a>.</p>
<p>The Hong Kong Observatory, which compiles the official calendar for Hong Kong, <a href="https://www.hko.gov.hk/en/education/astronomy-and-time/time-service/00506-what-year-is-it-today.html" rel="noopener">"has long been using the first day of the first Chinese calendar month"</a> to mark the change of the year name. It gives 2018 as an example. Spring Commences, its name for Lichun, fell on 4 February. Lunar New Year fell on 16 February. The Observatory adds that people who follow fortune telling tend to use Spring Commences instead.</p>
<p>This site uses Lunar New Year. The calculator compares your birth date with the Lunar New Year date of your birth year. If your birthday is earlier, you get the sign of the year before. It does not use Lichun. So someone born on 10 February 2018 gets the ${signNameForYear(2017)} from the calculator, not the ${signNameForYear(2018)}. Another source may give you a different answer for dates between the two.</p>
<h2>Four Elements or Five</h2>
<p>Western astrology also uses elements. Wikipedia says <a href="https://en.wikipedia.org/wiki/Western_astrology" rel="noopener">the twelve signs are "divided into four elements fire, earth, air and water"</a>. A Yale University Library exhibit explains how: <a href="https://onlineexhibits.library.yale.edu/s/medicalastrology/page/the-medical-astrologer-s-toolkit" rel="noopener">"Dividing the 360-degree ecliptic into four sets of thirds"</a>. That gives three signs per element, spaced 120 degrees apart.</p>
<p>The Chinese system uses ${ELEMENT_COUNT} elements, also called the five phases: ${zodiacElements.map(item => item.name.toLowerCase()).join(', ')}. In our data each element covers two years in a row. Then the next element takes over. The five are linked in cycles of feeding and controlling, which we explain in <a href="/blog/five-elements-explained">The Five Elements Explained</a>.</p>
<p>Both systems use the word element. They are different ideas, so a Western fire sign and a Chinese fire year are not the same thing.</p>
<h2>Side by Side</h2>
<div class="table-scroll"><table>
<thead><tr><th>Topic</th><th>Western</th><th>Chinese</th></tr></thead>
<tbody>
<tr><td>Based on</td><td>Birth date</td><td>Birth year</td></tr>
<tr><td>Signs</td><td>12 signs</td><td>${ANIMAL_COUNT} animals</td></tr>
<tr><td>Elements</td><td>4</td><td>${ELEMENT_COUNT}</td></tr>
<tr><td>Combinations</td><td>12</td><td>${COMBINATION_COUNT}</td></tr>
<tr><td>Starts at</td><td>March equinox</td><td>Lunar New Year</td></tr>
<tr><td>Repeats</td><td>Every year</td><td>Every 12 years</td></tr>
</tbody>
</table></div>
<h2>How Often Each One Comes Around</h2>
<p>A Western sign comes back every year, because the Sun goes around the ecliptic once a year. A Chinese animal comes back every ${ANIMAL_COUNT} years. The Horse years are 2014, 2026 and 2038, for example.</p>
<p>The animal and element together take longer. After ${ANIMAL_COUNT} years the animal returns, but the element has moved on. The full pair repeats only every ${ANIMAL_COUNT * ELEMENT_COUNT} years. The Fire Horse of 2026 returns in ${nextFireHorse}. The next year, 2027, is a Fire Goat year, which you can read about in <a href="/blog/2027-year-of-the-fire-goat">our Fire Goat guide</a>.</p>
<h2>Compatibility in Each System</h2>
<p>Western astrology compares signs. One way is by element. As the Yale exhibit describes, signs of the same element sit 120 degrees apart on the ecliptic. This site does not cover Western compatibility.</p>
<p>The traditional Chinese method compares animals. Each animal has two trine allies, one secret friend, one clash and one harm. The other six animals are neutral. Our guides to <a href="/blog/chinese-zodiac-compatibility-guide">Chinese zodiac compatibility</a> and to <a href="/blog/chinese-zodiac-trines-secret-friends-clashes">trines, secret friends and clashes</a> cover all ${ANIMAL_COUNT}. You can also try the <a href="/compatibility">compatibility tool</a>. It is tradition, meant for fun and reflection.</p>
<h2>Find Both Signs</h2>
<p>You probably know your Western sign already. For the Chinese one, use the <a href="/calculator">Zodiac Calculator</a>. Enter your birth date and it shows your animal and your element. It applies the Lunar New Year cutoff for you.</p>
<p>We do not write Western horoscopes. This site is only about the Chinese zodiac and the five elements. If you want to go deeper on your own sign, the <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. It is written for reflection and entertainment, not as a forecast.</p>`

/** "Fire Rooster" for a lunar year, from the site's data */
function signNameForYear(year: number): string {
  const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
  return `${capitalize(getElementForYear(year))} ${capitalize(getAnimalForYear(year))}`
}

export const CHINESE_VS_WESTERN_POST: BlogPost = {
  id: 'code-chinese-zodiac-vs-western-zodiac-differences',
  slug: 'chinese-zodiac-vs-western-zodiac-differences',
  title: 'Chinese Zodiac vs Western Zodiac: Key Differences',
  excerpt:
    'Western signs follow your birth date and the Sun. Chinese animals follow your birth year and Lunar New Year. See how the two zodiacs differ and find your sign.',
  authorName: 'Wu Xing Zodiac',
  tags: ['chinese-zodiac', 'western-zodiac', 'wu-xing', 'calculator', 'zodiac-guide'],
  readTime: 6,
  publishedAt: '2026-11-13T09:00:00.000Z',
  content,
}
