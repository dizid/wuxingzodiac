/**
 * Blog post: "Your Chinese Zodiac Hour Animal: The 12 Double Hours".
 *
 * The table is built here from the branch order of the trines post (BRANCH_ORDER, Rat to Pig,
 * which the tests pin to the year order in src/lib/zodiac-data.ts). Rat starts at 23:00 and each
 * next animal starts two hours later, wrapping at 24:00. The cultural facts (double hours, the
 * 23:00 Rat start, the four pillars, "secret animal", the sun as the basis) are linked and quoted
 * from outside sources (reputable ones only, no astrology sites); the tests pin each quote and each link. What the site does and does not
 * use (birth year only, never birth time) comes from src/pages/ReadingPage.vue.
 * Server code imports this file: relative imports only.
 */
import type { BlogPost } from '../../types'
import { zodiacAnimals } from '../../lib/zodiac-data'
import { BRANCH_ORDER } from './chinese-zodiac-trines-secret-friends-clashes'

/** One double hour: the animal, its branch character and the clock hours it covers */
export interface DoubleHour {
  animal: string
  char: string
  /** Start hour, 0 to 23 */
  start: number
  /** End hour, 0 to 23 (the Rat hour ends at 1, the Pig hour at 23) */
  end: number
  /** "23:00 to 01:00" */
  label: string
}

const clock = (hour: number) => `${String(hour).padStart(2, '0')}:00`

/** The 12 double hours in order, Rat first. Rat starts at 23:00, each next hour is 2 hours later. */
export const DOUBLE_HOURS: DoubleHour[] = BRANCH_ORDER.map(({ animal, char }, position) => {
  const start = (23 + 2 * position) % 24
  const end = (start + 2) % 24
  const name = zodiacAnimals.find(item => item.animal === animal)!.name
  return { animal: name, char, start, end, label: `${clock(start)} to ${clock(end)}` }
})

/** The outside pages this post cites. The tests pin every link and quote against this list. */
export const SOURCES = {
  hko: 'https://my.weather.gov.hk/en/gts/time/stemsandbranches.htm',
  duke: 'https://sites.duke.edu/destinyofrebirth/chinese-zodiac-time/',
  wikipediaTime: 'https://en.wikipedia.org/wiki/Traditional_Chinese_timekeeping',
  wikipediaZodiac: 'https://en.wikipedia.org/wiki/Chinese_zodiac',
  wikipediaPillars: 'https://en.wikipedia.org/wiki/Four_Pillars_of_Destiny',
} as const

/** Exact phrases quoted in the post, with the page each one comes from */
export const QUOTES: { source: keyof typeof SOURCES; quote: string }[] = [
  { source: 'hko', quote: '23 hour to 01 hour' },
  { source: 'duke', quote: 'a two-hour period' },
  { source: 'duke', quote: 'starts from 11 PM and ends at 1 AM' },
  { source: 'wikipediaTime', quote: 'traditionally occurred from 23:00 to 01:00' },
  { source: 'wikipediaTime', quote: 'derived from the position of the sun' },
  { source: 'wikipediaPillars', quote: 'the year, month, day, and hour of the birth date' },
  { source: 'wikipediaZodiac', quote: 'secret animals' },
]

const link = (source: keyof typeof SOURCES, text: string) => `<a href="${SOURCES[source]}" rel="noopener">${text}</a>`

function hoursTable(): string {
  const rows = DOUBLE_HOURS.map(hour => `<tr><td>${hour.animal}</td><td>${hour.char}</td><td>${hour.label}</td></tr>`)
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Animal</th><th>Branch</th><th>Hours</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

const content = `<h2>The Short Answer</h2>
<p>Traditional Chinese timekeeping splits the day into 12 double hours, called <strong>shichen</strong>. Each one is "a two-hour period," as ${link('duke', 'Duke University')} puts it. Each one is named after an animal, in the same order as the years. The first is the Rat hour. It "starts from 11 PM and ends at 1 AM" on the same ${link('duke', 'Duke page')}.</p>
<p>So you have a year animal and an hour animal. Here are all 12 hours on the modern 24 hour clock:</p>
${hoursTable()}
<p>The Hong Kong Observatory publishes the same table. It lists the Zi hour, the Rat hour, as "23 hour to 01 hour" in its ${link('hko', 'table of the 12 shichen and the present time system')}. The characters are the Earthly Branches, the same ones used for the year animals.</p>
<p>This is a tradition, and we offer it for fun and reflection. It is not a forecast.</p>
<h2>How the Hours Line Up with the Years</h2>
<p>The animals always come in one order: ${DOUBLE_HOURS.map(hour => hour.animal).join(', ')}. The years use that order. So do the hours. If you have read our post on <a href="/blog/chinese-zodiac-trines-secret-friends-clashes">trines, secret friends and clashes</a>, this is the same clock face with the Rat at the top.</p>
<p>Notice the Rat. Its hour does not start at midnight. It is centered on midnight. ${link('wikipediaTime', 'Wikipedia')} says the first double hour "traditionally occurred from 23:00 to 01:00." If you were born at 23:30, your hour animal is the Rat, even though the clock says it is still the day before.</p>
<h2>What Is the Hour Animal?</h2>
<p>In BaZi, also called the ${link('wikipediaPillars', 'Four Pillars of Destiny')}, a birth chart draws on "the year, month, day, and hour of the birth date," in Wikipedia's words. Each of the four is a pillar. Your year animal comes from the year pillar. Your hour animal comes from the hour pillar.</p>
<p>Some popular guides give the hour animal a nickname. The ${link('wikipediaZodiac', 'Wikipedia article on the Chinese zodiac')} lists the hour animals as "secret animals."</p>
<p>Names for these layers are not the same everywhere, so we use plain words. Year animal. Hour animal. We will not tell you what your hour animal says about you. Different guides say different things, and we cannot check them.</p>
<h2>How to Find Your Hour Animal</h2>
<p>The steps are short. First, find your birth time. Your birth certificate is the usual place to look in many countries. Hospital or family records can also help. Second, find that time in the table above. Third, read the animal in the first column.</p>
<h2>Close to a Boundary? Check Both Hours</h2>
<p>Here is the catch. The old hours come from the sun, not from a clock. ${link('wikipediaTime', 'Wikipedia')} says the traditional system is "derived from the position of the sun." Your birth time, on the other hand, was written down in clock time. Clock time follows a time zone, and in many places daylight saving time moves the clock one hour ahead in summer. So the clock and the sun do not always agree.</p>
<p>Most of the time this does not matter. Near the edge of a double hour it can. Our advice is simple: if you were born within about 30 minutes of a boundary, or during daylight saving time, read both neighboring animals and see which one feels closer.</p>
<h2>What This Site Uses</h2>
<p>We want to be clear here. The WuXing calculator, the 60 sign profiles and the personal reading are all based on your birth <strong>year</strong>. Your birth day and month matter only for the Lunar New Year cutoff, if you were born in January or February. They never use your birth time. Our reading page says so too: it "isn't a full birth chart and doesn't use your birth time."</p>
<p>That means your hour animal is a layer we do not calculate. You can use the table above to find it yourself, then read it next to your sign.</p>
<p>Not sure of your year animal? The <a href="/calculator">Zodiac Calculator</a> finds it from your birth date. Born in January or February? Read <a href="/blog/chinese-zodiac-january-february-birthday">why the Lunar New Year can change your sign</a>. You can also browse all 60 signs in the <a href="/zodiac">zodiac directory</a>.</p>
<h2>Next Steps</h2>
<p>Use the hour animal as a thing to think about, for fun and reflection. It is not a prediction about your life.</p>
<p>Start with the <a href="/calculator">Zodiac Calculator</a> to get your year animal and element. Then open your sign profile for the full picture. If you want it written for you, the <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. As noted above, it does not use your birth time.</p>`

export const BIRTH_HOUR_POST: BlogPost = {
  id: 'code-chinese-zodiac-birth-hour-animal',
  slug: 'chinese-zodiac-birth-hour-animal',
  title: 'Your Chinese Zodiac Hour Animal: The 12 Double Hours',
  excerpt:
    'The Chinese day has 12 double hours, one per zodiac animal, and the Rat hour starts at 23:00. See the full table and what to do near a boundary.',
  authorName: 'Wu Xing Zodiac',
  tags: ['chinese-zodiac', 'birth-hour', 'shichen', 'zodiac-guide', 'wu-xing'],
  readTime: 5,
  publishedAt: '2026-11-12T09:00:00.000Z',
  content,
}
