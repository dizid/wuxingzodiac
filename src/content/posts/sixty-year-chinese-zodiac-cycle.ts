/**
 * Blog post: "The 60-Year Chinese Zodiac Cycle: All 60 Signs and Years".
 *
 * The table is built from the 60 sign profiles (src/lib/sign-content/profiles.ts) in cycle
 * order, starting with the Wood Rat (甲子, 1924 and 1984), so the post can never disagree with
 * the sign pages or the calculator. It links all 60 sign pages. The tests pin the order,
 * the years and the worked examples (src/content/__tests__/sixty-cycle-post.test.ts).
 * Server code imports this file: relative imports only.
 */
import type { BlogPost, SignProfile } from '../../types'
import { signProfiles } from '../../lib/sign-content/profiles'
import { lunarNewYearDates } from '../../lib/zodiac-data'

/** First year of a cycle in the calculator's date range: the Wood Rat year 1924 */
export const CYCLE_START = 1924

/** Years the table shows: the calculator's Lunar New Year data, 1924 to 2043 (two full cycles) */
const dataYears = Object.keys(lunarNewYearDates).map(Number)
export const FIRST_TABLE_YEAR = Math.min(...dataYears)
export const LAST_TABLE_YEAR = Math.max(...dataYears)

/** Position of a lunar year in the 60-year cycle, 1 to 60 (1924 and 1984 are 1) */
export function cyclePosition(year: number): number {
  return ((((year - CYCLE_START) % 60) + 60) % 60) + 1
}

/** The 60 sign profiles in cycle order, Wood Rat first */
export const CYCLE: SignProfile[] = [...signProfiles].sort(
  (a, b) => cyclePosition(Math.min(...a.years)) - cyclePosition(Math.min(...b.years)),
)

/** A sign's years inside the table range, e.g. Wood Rat: [1924, 1984] */
export function tableYears(profile: SignProfile): number[] {
  return profile.years.filter(year => year >= FIRST_TABLE_YEAR && year <= LAST_TABLE_YEAR)
}

function profileForYear(year: number): SignProfile {
  return CYCLE[cyclePosition(year) - 1]!
}

function cycleTable(): string {
  const rows = CYCLE.map(
    (profile, index) =>
      `<tr><td>${index + 1}</td><td><a href="/zodiac/${profile.slug}">${profile.name}</a> ${profile.chineseName}</td><td>${tableYears(profile).join(', ')}</td></tr>`,
  )
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>#</th><th>Sign</th><th>Years</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

// Worked examples
const NOW_YEAR = 2026
const NEXT_YEAR = 2027
const nowSign = profileForYear(NOW_YEAR)
const nextSign = profileForYear(NEXT_YEAR)
const CURRENT_CYCLE_START = 1984
const NEXT_CYCLE_START = CURRENT_CYCLE_START + 60
const BIRTH_EXAMPLE = 1990
const birthSign = profileForYear(BIRTH_EXAMPLE)

const content = `<h2>The Short Answer</h2>
<p>The Chinese zodiac runs in a 60-year cycle. Each year has one of the five elements and one of the twelve animals, and every element meets every animal exactly once in those 60 years. That gives 60 signs. When the cycle ends, it starts again with the Wood Rat.</p>
<p>The current cycle began with the Wood Rat year in ${CURRENT_CYCLE_START}. ${NOW_YEAR} is year ${cyclePosition(NOW_YEAR)} of it, the <a href="/zodiac/${nowSign.slug}">${nowSign.name}</a>. ${NEXT_YEAR} is year ${cyclePosition(NEXT_YEAR)}, the <a href="/zodiac/${nextSign.slug}">${nextSign.name}</a>. The next cycle starts in ${NEXT_CYCLE_START}.</p>
<p>The full table of all 60 signs is below, with every year from ${FIRST_TABLE_YEAR} to ${LAST_TABLE_YEAR}. As with everything on this site, the meanings are traditional and offered for fun and reflection.</p>
<h2>Why 60 Years?</h2>
<p>A Chinese year has two labels. One is a Heavenly Stem, which carries the element. There are ten stems: a yang and a yin version of each of the five elements, so each element lasts two years in a row. The other label is an Earthly Branch, which is the animal. There are twelve.</p>
<p>Both labels move forward by one step every year. The stems come back to the start every 10 years, and the animals every 12 years. They only both come back to the start together after 60 years, because 60 is the smallest number that both 10 and 12 divide into.</p>
<p>You might expect 5 elements times 12 animals times yin and yang, which would be 120 signs. But the yang stems always land on the yang animals, and the yin stems on the yin animals. A ${nowSign.name} year is always yang fire, and a ${nextSign.name} year is always yin fire. So each element and animal pair has only one version, and there are 60 signs, not 120.</p>
<h2>All 60 Signs in Order</h2>
<p>The number is the sign's place in the cycle. The two Chinese characters are its stem and branch. Every sign comes back once every 60 years, so each one appears twice between ${FIRST_TABLE_YEAR} and ${LAST_TABLE_YEAR}. Tap a sign to open its full profile.</p>
${cycleTable()}
<p>The years are Chinese years. Each one starts at Lunar New Year, in late January or February, not on 1 January. If you were born in January or early February, check <a href="/blog/chinese-zodiac-january-february-birthday">the Lunar New Year date for your birth year</a> first, or let the <a href="/calculator">Zodiac Calculator</a> do it.</p>
<h2>How to Read the Table</h2>
<p>Find your birth year in the last column. The sign on that row is yours. For example, someone born in ${BIRTH_EXAMPLE}, after Lunar New Year, is a <a href="/zodiac/${birthSign.slug}">${birthSign.name}</a> (${birthSign.chineseName}), number ${cyclePosition(BIRTH_EXAMPLE)} in the cycle. The same sign came before in ${BIRTH_EXAMPLE - 60} and comes again in ${BIRTH_EXAMPLE + 60}.</p>
<p>A few patterns are easy to spot once you look:</p>
<ul>
<li><strong>Animals repeat every 12 rows.</strong> Rows 1, 13, 25, 37 and 49 are all Rats, each with a different element.</li>
<li><strong>Elements come in pairs.</strong> Each element covers two years in a row, first yang, then yin, and then the next element takes over.</li>
<li><strong>Your exact sign returns at 60.</strong> Your animal comes back every 12 years, but your full sign, element and animal together, only comes back in the year you turn 60.</li>
</ul>
<h2>The Fire Horse and the Fire Goat</h2>
<p>Two rows matter right now. Row ${cyclePosition(NOW_YEAR)} is the ${nowSign.name}, ${nowSign.chineseName}, which last came in ${NOW_YEAR - 60} and is back in ${NOW_YEAR}. Row ${cyclePosition(NEXT_YEAR)} is the ${nextSign.name}, ${nextSign.chineseName}, last seen in ${NEXT_YEAR - 60} and back in ${NEXT_YEAR}. For what tradition says about each, read <a href="/blog/2026-year-of-the-fire-horse">2026: Year of the Fire Horse</a> and <a href="/blog/2027-year-of-the-fire-goat">2027: Year of the Fire Goat</a>.</p>
<p>How your own animal gets along with the year's animal follows a separate set of rules: trines, secret friends and clashes. Those are in <a href="/blog/chinese-zodiac-trines-secret-friends-clashes">our guide to the twelve animals</a>, and the element side is in <a href="/blog/five-elements-explained">The Five Elements Explained</a>.</p>
<h2>Find Your Sign</h2>
<p>The <a href="/calculator">Zodiac Calculator</a> finds your place in the cycle from your birth date, with the Lunar New Year cutoff applied. You can also browse all 60 signs by element or animal in the <a href="/zodiac">zodiac directory</a>.</p>
<p>Want your sign written up for you? The <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. It is for entertainment and self-reflection, not a prediction.</p>`

export const SIXTY_CYCLE_POST: BlogPost = {
  id: 'code-sixty-year-chinese-zodiac-cycle',
  slug: 'sixty-year-chinese-zodiac-cycle',
  title: 'The 60-Year Chinese Zodiac Cycle: All 60 Signs and Years',
  excerpt:
    'Why the Chinese zodiac repeats every 60 years, and a table of all 60 signs in order with their Chinese names and every year from 1924 to 2043.',
  authorName: 'Wu Xing Zodiac',
  tags: ['chinese-zodiac', 'sixty-year-cycle', 'five-elements', 'zodiac-guide', 'wu-xing'],
  readTime: 5,
  publishedAt: '2026-11-13T02:00:00.000Z',
  content,
}
