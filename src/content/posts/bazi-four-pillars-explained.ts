/**
 * Blog post: "BaZi Explained: The Four Pillars Beyond Your Year Sign" (T-0636).
 *
 * What BaZi is (four pillars, eight characters, the Day Master, months by solar terms) is quoted
 * from Wikipedia pages fetched and checked word for word on 2026-11-20; every quote is listed in
 * QUOTES and pinned by src/content/__tests__/bazi-post.test.ts. The Lichun times come from
 * Wikipedia's "Dates and Times of Lichun (at UTC+08)" table (LICHUN below).
 * The example table is computed from the site data: the Lunar New Year sign comes from
 * getZodiacFromBirthdate (src/lib/zodiac-data.ts), the Chinese characters from signProfiles.
 * What the site and the reading use (birth year only, element balance per sign, never birth
 * time) comes from src/pages/ReadingPage.vue and src/lib/readings/server/context.ts.
 * Server code imports this file: relative imports only.
 */
import type { BlogPost } from '../../types'
import { getZodiacFromBirthdate } from '../../lib/zodiac-data'
import { signProfiles } from '../../lib/sign-content/profiles'

/** The outside pages this post cites. The tests pin every link and quote against this list. */
export const SOURCES = {
  pillars: 'https://en.wikipedia.org/wiki/Four_Pillars_of_Destiny',
  lichun: 'https://en.wikipedia.org/wiki/Lichun',
  zodiac: 'https://en.wikipedia.org/wiki/Chinese_zodiac',
} as const

/** Exact phrases quoted in the post, with the page each one comes from */
export const QUOTES: { source: keyof typeof SOURCES; quote: string }[] = [
  { source: 'pillars', quote: 'one Heavenly Stem and one Earthly Branch' },
  { source: 'pillars', quote: 'hence the alternative name BaZi' },
  { source: 'pillars', quote: 'used in China to count years, months, days, and hours since antiquity' },
  { source: 'pillars', quote: 'as it represents the person themselves' },
  { source: 'pillars', quote: 'The month is determined by the solar terms' },
  { source: 'pillars', quote: 'twelve double-hours' },
  { source: 'pillars', quote: 'assessing the overall balance of the Five Phases' },
  { source: 'pillars', quote: 'classified such practices as superstition' },
  { source: 'lichun', quote: 'It begins when the Sun reaches the celestial longitude of 315°' },
  { source: 'zodiac', quote: 'Chinese New Year or the start of spring' },
]

/** Lichun (start of spring) moments in Beijing time, from Wikipedia's Lichun table */
export const LICHUN: Record<number, { date: string; time: string }> = {
  2026: { date: '2026-02-04', time: '04:02' },
  2027: { date: '2027-02-04', time: '09:46' },
  2028: { date: '2028-02-04', time: '15:31' },
}

/** One example birthday range: the sign on this site and the year pillar if the year starts at Lichun */
export interface BoundaryExample {
  label: string
  /** First and last birthday of the range as [year, month, day] */
  from: [number, number, number]
  to: [number, number, number]
  /** Gregorian year whose sign the Lichun year pillar gives */
  lichunYear: number
}

export const BOUNDARY_EXAMPLES: BoundaryExample[] = [
  { label: '5 to 16 Feb 2026', from: [2026, 2, 5], to: [2026, 2, 16], lichunYear: 2026 },
  { label: '5 Feb 2027', from: [2027, 2, 5], to: [2027, 2, 5], lichunYear: 2027 },
  { label: '26 Jan to 2 Feb 2028', from: [2028, 1, 26], to: [2028, 2, 2], lichunYear: 2027 },
]

const link = (source: keyof typeof SOURCES, text: string) => `<a href="${SOURCES[source]}" rel="noopener">${text}</a>`

/** "Fire Horse" for the sign of a lunar year (short, so the table fits a phone) */
export function signLabel(lunarYear: number): string {
  return signProfiles.find(item => item.years.includes(lunarYear))!.name
}

/** "Fire Horse" for the sign this site gives a birthday (Lunar New Year cutoff) */
export function siteSign([year, month, day]: [number, number, number]): string {
  return signLabel(getZodiacFromBirthdate(year, month, day).lunarYear)
}

function boundaryTable(): string {
  const rows = BOUNDARY_EXAMPLES.map(
    example => `<tr><td>${example.label}</td><td>${siteSign(example.from)}</td><td>${signLabel(example.lichunYear)}</td></tr>`,
  )
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Born</th><th>This site</th><th>BaZi year</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

const content = `<h2>The Short Answer</h2>
<p>BaZi is the Chinese system also known as the ${link('pillars', 'Four Pillars of Destiny')}. It builds a chart from four moments: your birth year, month, day and hour. Each moment is a pillar. Each pillar is a pair of characters: "one Heavenly Stem and one Earthly Branch," as Wikipedia puts it. Four pillars of two characters make eight characters, "hence the alternative name BaZi," which means eight characters.</p>
<p>Your Chinese zodiac sign, the one this site is built on, is only one of those four pillars: the year. That is why a BaZi reading can look very different for two people born in the same year.</p>
<p>This is a tradition, and we offer it for fun and reflection. It is not a forecast.</p>
<h2>The Four Pillars at a Glance</h2>
<div class="table-scroll"><table>
<thead><tr><th>Pillar</th><th>Chinese</th><th>Comes from</th></tr></thead>
<tbody>
<tr><td>Year</td><td>年柱</td><td>Your birth year</td></tr>
<tr><td>Month</td><td>月柱</td><td>Your birth month, counted by the sun</td></tr>
<tr><td>Day</td><td>日柱</td><td>Your birth day</td></tr>
<tr><td>Hour</td><td>時柱</td><td>Your birth hour, in two-hour blocks</td></tr>
</tbody>
</table></div>
<p>All four use the same 60 pairs of the 10 Heavenly Stems and the 12 Earthly Branches. Wikipedia notes that this cycle has been "used in China to count years, months, days, and hours since antiquity." Our post on the <a href="/blog/sixty-year-chinese-zodiac-cycle">60-year cycle</a> lists every year pair. The months, days and hours run through the same 60 pairs at their own pace.</p>
<h2>Where Your Zodiac Sign Fits</h2>
<p>Take 2026, a Fire Horse year. Its year pillar is 丙午. The stem 丙 is yang fire, and the branch 午 is the Horse. Put them together and you get the Fire Horse. In a year pair, the stem gives your sign its element and the branch gives its animal. Every sign on this site works the same way, from the <a href="/zodiac">60 sign profiles</a> to the <a href="/calculator">Zodiac Calculator</a>.</p>
<p>So when you know your sign, you already know one pillar of your BaZi chart, two of the eight characters. The other six come from your month, day and hour of birth.</p>
<h2>The Day Master: Why the Day Matters Most</h2>
<p>Here is a key difference. In BaZi the most important character is not your year. It is the stem of your day pillar, called the Day Master. Wikipedia explains that it matters most "as it represents the person themselves." A practitioner reads the rest of the chart in relation to it.</p>
<p>The day pillar comes from a count of days that has run through the 60 pairs for centuries. You cannot work it out from your sign. You need a calendar table or a BaZi calculator for your exact birth date. That is also why your year sign and your Day Master can carry different elements. A Fire Horse can have a water Day Master, for example.</p>
<h2>Months and Years Follow the Sun</h2>
<p>BaZi months are not the months on your wall calendar, and not lunar months either. "The month is determined by the solar terms," Wikipedia says. The solar terms are 24 points in the sun's yearly path. Hours use the "twelve double-hours," which we list in our post on <a href="/blog/chinese-zodiac-birth-hour-animal">your hour animal</a>.</p>
<p>The year can follow the sun too. For the start of a zodiac year, ${link('zodiac', 'Wikipedia')} says there are two schools: "Chinese New Year or the start of spring." The start of spring is Lichun, the first solar term. ${link('lichun', 'Wikipedia')} says: "It begins when the Sun reaches the celestial longitude of 315°." That happens on 3, 4 or 5 February. Many BaZi practitioners start the year pillar at Lichun.</p>
<p>This site uses Lunar New Year. For most birthdays the two methods agree. Between the two dates they do not. Here are three examples, using our Lunar New Year data and Wikipedia's Lichun times. The last column is the year pillar when the year starts at Lichun:</p>
${boundaryTable()}
<p>Lichun 2027 falls on 4 February 2027 at 09:46 Beijing time, two days before Lunar New Year on 6 February. A baby born on 5 February 2027 is a Fire Horse on this site, but many BaZi charts will give a Fire Goat year pillar. In 2028 it works the other way round: Lunar New Year comes first, on 26 January, and Lichun follows on 4 February.</p>
<p>Lichun is a moment, not a whole day, and Wikipedia lists it in Beijing time (UTC+8). In the Americas it can still be the day before. If you were born on the Lichun date itself, the exact time and your time zone decide which side you fall on. Our post on <a href="/blog/lunar-new-year-dates">Lunar New Year dates</a> has every cutoff, and <a href="/blog/chinese-zodiac-january-february-birthday">this one explains January and February birthdays</a>.</p>
<h2>Where the Five Elements Come In</h2>
<p>Each stem and branch belongs to one of the five elements, Wood, Fire, Earth, Metal and Water, and is either yin or yang. With eight characters, most charts hold several elements, some more than others. Part of a BaZi reading is "assessing the overall balance of the Five Phases," in Wikipedia's words. The five phases are the five elements. Our guide to <a href="/blog/five-elements-explained">the five elements</a> explains how they feed and control each other.</p>
<p>A fair word of caution. BaZi is a tradition with a long history, not a science. ${link('pillars', 'Wikipedia')} notes that in mainland China the People's Republic of China discouraged it and "classified such practices as superstition." Read any chart, ours included, as a prompt for reflection.</p>
<h2>What This Site Uses</h2>
<p>We want to be clear here. The WuXing calculator, the 60 sign profiles and the personal reading are all based on your birth <strong>year</strong>, the year pillar. Your birth day and month matter only for the Lunar New Year cutoff, if you were born in January or February. The element balance in the reading belongs to your birth-year sign. It is not counted from eight characters. And the reading never uses your birth time. Our reading page says so too: it "isn't a full birth chart and doesn't use your birth time."</p>
<p>If you want a full BaZi chart, you will need your exact birth date, time and place, and a practitioner or a BaZi calculator you trust. We do not recommend any one of them.</p>
<h2>Next Steps</h2>
<p>Start with your year pillar. The <a href="/calculator">Zodiac Calculator</a> gives your animal and element from your birth date. Then open your sign profile for the full picture.</p>
<p>If you want it written for you, the <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. As noted above, it reads your year pillar, not a full BaZi chart.</p>`

export const BAZI_POST: BlogPost = {
  id: 'code-bazi-four-pillars-explained',
  slug: 'bazi-four-pillars-explained',
  title: 'BaZi Explained: The Four Pillars Beyond Your Year Sign',
  excerpt:
    'BaZi reads eight characters from your birth year, month, day and hour. See how the four pillars work, what the Day Master is, and where your sign fits.',
  authorName: 'Wu Xing Zodiac',
  tags: ['bazi', 'four-pillars', 'chinese-zodiac', 'wu-xing', 'zodiac-guide'],
  readTime: 6,
  publishedAt: '2026-11-20T02:00:00.000Z',
  content,
}
