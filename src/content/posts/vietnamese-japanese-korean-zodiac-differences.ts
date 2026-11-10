/**
 * Blog post: "The Zodiac in Vietnam, Japan and Korea: What Changes".
 *
 * Facts about the Chinese system come from the site's code and are pinned by
 * src/content/__tests__/regional-zodiacs-post.test.ts:
 *  - the 12 animals and their order: zodiacAnimals (src/lib/zodiac-data.ts)
 *  - the calculator's rule: getLunarYear (born before that year's Lunar New Year = the year before)
 *  - the worked examples: born 20 January 2026 and 1 February 1985, computed with getZodiacFromBirthdate
 * Regional facts come from at least two sources each, all fetched on 11 November 2026
 * (see REGIONAL_SOURCES below; the short quoted phrases are checked by the test).
 * Server code imports this file: relative imports only.
 */
import type { BlogPost, ZodiacAnimal } from '../../types'
import { getAnimalForYear, getZodiacFromBirthdate, lunarNewYearDates, zodiacAnimals } from '../../lib/zodiac-data'

/** Where each outside fact comes from: short exact quotes, each shown in the post and linked to its page */
export const REGIONAL_SOURCES = {
  vietnameseZodiac: {
    url: 'https://en.wikipedia.org/wiki/Vietnamese_zodiac',
    quote: 'replaces the ox with the water buffalo, and the rabbit with the cat',
  },
  cbcVietnam: {
    url: 'https://www.cbc.ca/lite/story/1.6720328',
    quote: 'the Vietnamese have the water buffalo and the cat instead',
  },
  tet: {
    url: 'https://en.wikipedia.org/wiki/T%E1%BA%BFt',
    quote: 'Tết is generally celebrated on the same day as Chinese New Year',
  },
  vietnameseCalendar: {
    url: 'https://en.wikipedia.org/wiki/Vietnamese_calendar',
    quote: 'the Vietnamese New Year would fall on 21 January 1985, whereas the Chinese New Year would fall on 20 February 1985',
  },
  nipponEto: {
    url: 'https://www.nippon.com/en/features/jg00110/',
    quote: 'the rat, ox, tiger, rabbit, dragon, snake, horse, sheep, monkey, rooster, dog, and boar',
  },
  chineseZodiacJapan: {
    url: 'https://en.wikipedia.org/wiki/Chinese_zodiac',
    quote: 'the Wild boar (inoshishi, i) instead of the Pig (buta)',
  },
  nipponCalendar: {
    url: 'https://www.nippon.com/en/articles/-/19554',
    quote: 'Japan adopted the solar (Gregorian) calendar in 1873',
  },
  japaneseNewYear: {
    url: 'https://en.wikipedia.org/wiki/Japanese_New_Year',
    quote: 'the official Japanese New Year has been celebrated according to the Gregorian calendar, on January 1',
  },
  leidenKorea: {
    url: 'https://leiden.wereldmuseum.nl/en/korean-zodiac',
    quote: 'does not fall on January 1, but on a different day each year in January or February',
  },
  koreanNewYear: {
    url: 'https://en.wikipedia.org/wiki/Korean_New_Year',
    quote: 'Koreans follow a zodiac that is identical to the Chinese zodiac',
  },
  seollal: {
    url: 'https://en.wikipedia.org/wiki/Korean_New_Year',
    quote: 'commemorating the first day of the Korean lunisolar calendar',
  },
  britishLibraryThai: {
    url: 'https://www.bl.uk/stories/blogs/posts/the-year-of-the-rooster-from-a-thai-perspective',
    quote: 'with the Chinese dragon replaced by a Buddhist nāga (serpent)',
  },
  britishLibraryThaiNewYear: {
    url: 'https://www.bl.uk/stories/blogs/posts/the-year-of-the-rooster-from-a-thai-perspective',
    quote: 'does not coincide with the Chinese New Year',
  },
} as const

/** Animals that have a different name in the Vietnamese zodiac (both sources above agree) */
export const VIETNAM_SWAPS: Partial<Record<ZodiacAnimal, string>> = { ox: 'Water Buffalo', rabbit: 'Cat' }

/** Animals that have a different name in the Japanese zodiac. The Goat is the Sheep in English sources on Japan and Korea. */
export const JAPAN_SWAPS: Partial<Record<ZodiacAnimal, string>> = { goat: 'Sheep', pig: 'Boar' }

const MONTHS = ['January', 'February', 'March']
const dayMonth = (year: number) => {
  const [month, day] = lunarNewYearDates[year]!
  return `${day} ${MONTHS[month - 1]}`
}
const signName = (year: number, month: number, day: number) => {
  const sign = getZodiacFromBirthdate(year, month, day)
  const element = sign.element[0]!.toUpperCase() + sign.element.slice(1)
  const animal = sign.animal[0]!.toUpperCase() + sign.animal.slice(1)
  return `${element} ${animal}`
}
const animalName = (animal: ZodiacAnimal) => zodiacAnimals.find(item => item.animal === animal)!.name

/** The January example: born on 20 January 2026, before Lunar New Year (17 February 2026) */
export const JANUARY_EXAMPLE = { year: 2026, month: 1, day: 20 }
/** The Vietnam example: born on 1 February 1985, after Vietnam's Tết but before the Chinese date */
export const VIETNAM_EXAMPLE = { year: 1985, month: 2, day: 1 }

const link = (source: { url: string }, text: string) => `<a href="${source.url}">${text}</a>`

/** The 12 animals in the site's order, with only the source-backed differences filled in */
function animalTable(): string {
  const rows = zodiacAnimals.map(
    ({ animal, name }) =>
      `<tr><td>${name}</td><td>${VIETNAM_SWAPS[animal] ?? 'Same'}</td><td>${JAPAN_SWAPS[animal] ?? 'Same'}</td></tr>`,
  )
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Animal here</th><th>Vietnam</th><th>Japan</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

const S = REGIONAL_SOURCES
const jan = JANUARY_EXAMPLE
const viet = VIETNAM_EXAMPLE
const firstYear = Math.min(...Object.keys(lunarNewYearDates).map(Number))
const lastYear = Math.max(...Object.keys(lunarNewYearDates).map(Number))

const content = `<h2>The Short Answer</h2>
<p>The 12-year animal cycle is shared across East Asia. Most animals are the same everywhere. A few change by country. The bigger difference is when the year starts.</p>
<ul>
<li><strong>Vietnam</strong> has the Cat where the Chinese zodiac has the Rabbit. It has the Water Buffalo where the Chinese zodiac has the Ox. Its New Year, Tết, is a lunar date.</li>
<li><strong>Japan</strong> has the Boar where the Chinese zodiac has the Pig. Its New Year is on 1 January.</li>
<li><strong>Korea</strong> uses the same animals as the Chinese zodiac. Its New Year, Seollal, is a lunar date.</li>
</ul>
<p>Below we go through each country. Every outside fact has a link to its source. This is a guide for fun and reflection, not a forecast.</p>
<h2>The 12 Animals Side by Side</h2>
<p>Here are the 12 animals in the order this site uses. Only differences that sources agree on are filled in. Everything else says "Same".</p>
${animalTable()}
<p>One note on names. Sources in English on Japan and Korea call the eighth animal the Sheep. This site calls it the Goat. It is the same place in the cycle. nippon.com (Japan) and the Wereldmuseum Leiden (Korea) both list the Sheep.</p>
<h2>Vietnam: The Cat and the Water Buffalo</h2>
<p>The Vietnamese zodiac comes from the Chinese one. Wikipedia says it ${link(S.vietnameseZodiac, `"${S.vietnameseZodiac.quote}"`)}. A CBC News report says the same: ${link(S.cbcVietnam, `"${S.cbcVietnam.quote}"`)}.</p>
<p>So if this site says you are a Rabbit, a Vietnamese family would say you are a Cat. If this site says Ox, they would say Water Buffalo. The element and the year are the same.</p>
<p>The new year is usually on the same day too. Wikipedia says ${link(S.tet, `"${S.tet.quote}"`)}. It also says the dates occasionally differ. One example is 1985. Another Wikipedia article says ${link(S.vietnameseCalendar, `"${S.vietnameseCalendar.quote}"`)}.</p>
<p>That matters for birthdays in between. This site's data puts Lunar New Year 1985 on ${dayMonth(1985)}. Someone born on 1 February 1985 is a ${signName(viet.year, viet.month, viet.day)} here. In Vietnam, Tết had already passed that year, so the same person would be counted in 1985. That is the ${signName(1985, 3, 1)} year here and the Wood Water Buffalo year there. These cases are rare. If you were born in Vietnam near the new year, ask your family which Tết date they used.</p>
<h2>Japan: The Boar and the Calendar Year</h2>
<p>In Japan the zodiac animals are called eto. nippon.com lists them as ${link(S.nipponEto, `"${S.nipponEto.quote}"`)}. Wikipedia agrees on the Boar: the Japanese zodiac includes ${link(S.chineseZodiacJapan, `"${S.chineseZodiacJapan.quote}"`)}.</p>
<p>The year start is different too. nippon.com notes that ${link(S.nipponCalendar, `"${S.nipponCalendar.quote}"`)}. Wikipedia says that since 1873 ${link(S.japaneseNewYear, `"${S.japaneseNewYear.quote}"`)}.</p>
<p>The animal of the coming year goes on New Year cards, and nippon.com lists each animal against a calendar year, for example 2027 as the Sheep year. That points to a simple calendar-year count in Japan. We did not find an official rule that spells out how a January birthday is counted, so treat this as the likely practice and not as a certainty.</p>
<p>The effect for a January birthday is clear. Take someone born on ${jan.day} January ${jan.year}. This site counts them as a ${signName(jan.year, jan.month, jan.day)}, because Lunar New Year ${jan.year} is on ${dayMonth(jan.year)}. A calendar-year count would call them a ${animalName(getAnimalForYear(jan.year))}, the animal of ${jan.year}. For more on that cutoff, read <a href="/blog/chinese-zodiac-january-february-birthday">Born in January or February? Find Your Real Sign</a>.</p>
<h2>Korea: Same Animals, Lunar New Year</h2>
<p>Korea is the simplest case. Wikipedia says ${link(S.koreanNewYear, `"${S.koreanNewYear.quote}"`)}. The <a href="https://leiden.wereldmuseum.nl/en/korean-zodiac">Wereldmuseum Leiden</a> lists the same twelve animals, from Rat to Pig.</p>
<p>Seollal, the Korean New Year, is a lunar date. Wikipedia describes it as ${link(S.seollal, `"${S.seollal.quote}"`)}. The Leiden museum says the traditional Chinese and Korean New Year ${link(S.leidenKorea, `"${S.leidenKorea.quote}"`)}. So the cutoff works like the one on this site. We did not find two sources that confirm the Seollal date matches China's every year, so check your own year if you were born close to it.</p>
<h2>Elsewhere: Thailand</h2>
<p>One more example has two sources. The British Library says the Thai zodiac follows the Chinese one ${link(S.britishLibraryThai, `"${S.britishLibraryThai.quote}"`)}. It also says the Thai New Year ${link(S.britishLibraryThaiNewYear, `"${S.britishLibraryThaiNewYear.quote}"`)}. <a href="https://en.wikipedia.org/wiki/Chinese_zodiac">Wikipedia</a> agrees on both points. We left out other countries because we could not confirm them with two good sources.</p>
<h2>Using This Site</h2>
<p>The <a href="/calculator">calculator</a> follows the Chinese system. It looks up the Lunar New Year date for your birth year. If you were born before that date, you get the animal of the year before. The dates in our data run from ${firstYear} to ${lastYear}.</p>
<p>That makes it a good fit for Chinese and Korean traditions. For a Vietnamese reader, swap the names: Rabbit means Cat and Ox means Water Buffalo. For a Japanese calendar-year count, your animal can differ for January and early February birthdays, as in the example above.</p>
<h2>Which One Is Yours?</h2>
<p>None of these is the one true version. They are neighboring traditions with a shared root. Pick the one your family uses. If you are curious, look at both animals and see which one feels closer to you.</p>
<p>If you want something made for you, the <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. It follows the Chinese system used on this site. It is for entertainment and self-reflection, not a prediction.</p>`

export const REGIONAL_ZODIACS_POST: BlogPost = {
  id: 'code-vietnamese-japanese-korean-zodiac-differences',
  slug: 'vietnamese-japanese-korean-zodiac-differences',
  title: 'The Zodiac in Vietnam, Japan and Korea: What Changes',
  excerpt:
    'Vietnam has a Cat and a Water Buffalo, Japan has a Boar, Korea matches China. See what changes, what stays the same and when each year starts.',
  authorName: 'Wu Xing Zodiac',
  tags: ['chinese-zodiac', 'zodiac-guide', 'lunar-new-year', 'vietnamese-zodiac', 'japanese-zodiac', 'korean-zodiac'],
  readTime: 6,
  publishedAt: '2026-11-14T09:00:00.000Z',
  content,
}
