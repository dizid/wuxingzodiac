/**
 * Blog post: "Chinese Zodiac Trines, Secret Friends and Clashes".
 *
 * The four relations (三合 trine, 六合 six harmony / secret friend, 冲 clash, 害 harm) are
 * computed in src/lib/branch-relations.ts from the order of the 12 Earthly Branches. The tests check every one of
 * the 144 animal pairs against the reading engine (describeAnimalRelation in
 * src/lib/readings/server/context.ts) and the Chemistry score ranges and worked examples
 * against the compatibility tool (src/lib/compatibility-matrix.ts), so the post can never
 * disagree with the site (src/content/__tests__/relations-post.test.ts).
 * Server code imports this file: relative imports only (compatibility-matrix.ts uses the
 * `@/` alias, so its numbers are written here and pinned by the tests instead of imported).
 */
import type { BlogPost, ZodiacAnimal } from '../../types'
import { zodiacAnimals } from '../../lib/zodiac-data'

import { BRANCH_ORDER, TRINES, relationBetween, partners, pairChars, pairsOf } from '../../lib/branch-relations'
import type { Relation } from '../../lib/branch-relations'

// Re-exported so the post's tests and older imports keep working
export { BRANCH_ORDER, TRINES, relationBetween, partners, pairChars, pairsOf }
export type { Relation }

const animalName = (animal: ZodiacAnimal) => zodiacAnimals.find(item => item.animal === animal)!.name
const andList = (animals: ZodiacAnimal[]) => animals.map(animalName).join(' and ')

/** The three latest birth years of an animal up to 2026, e.g. Rat: "1996, 2008 or 2020" */
function recentYears(animal: ZodiacAnimal): string {
  const years = zodiacAnimals
    .find(item => item.animal === animal)!
    .years.filter(year => year <= 2026)
    .slice(-3)
  return `${years.slice(0, -1).join(', ')} or ${years[years.length - 1]}`
}

const CHAR_SUFFIX: Record<'secret-friend' | 'clash' | 'harm', string> = { 'secret-friend': '合', clash: '冲', harm: '害' }

function pairList(relation: 'secret-friend' | 'clash' | 'harm'): string {
  const items = pairsOf(relation).map(
    ([a, b]) => `<li><strong>${animalName(a)} and ${animalName(b)}</strong> (${pairChars(a, b)}${CHAR_SUFFIX[relation]})</li>`,
  )
  return `<ul>\n${items.join('\n')}\n</ul>`
}

function trineTable(): string {
  const rows = TRINES.map(
    trine => {
      const [first, second, third] = trine.animals.map(animalName)
      return `<tr><td>${trine.element} trine</td><td>${trine.chars}</td><td>${first}, ${second} and ${third}</td></tr>`
    },
  )
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Trine</th><th>Branches</th><th>Animals</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

function alliesTable(): string {
  const rows = BRANCH_ORDER.map(
    ({ animal }) => `<tr><td>${animalName(animal)}</td><td>${andList(partners(animal, 'trine'))}</td><td>${andList(partners(animal, 'secret-friend'))}</td></tr>`,
  )
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Animal</th><th>Trine allies</th><th>Secret friend</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

function frictionTable(): string {
  const rows = BRANCH_ORDER.map(
    ({ animal }) => `<tr><td>${animalName(animal)}</td><td>${andList(partners(animal, 'clash'))}</td><td>${andList(partners(animal, 'harm'))}</td></tr>`,
  )
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Animal</th><th>Clash</th><th>Harm</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

/**
 * Chemistry score ranges per relation on /compatibility (getChemistryScore = the base score
 * of the animal pair). Pinned by the tests against all 144 pairs.
 */
export const CHEMISTRY_RANGES: { label: string; relation: Relation; min: number; max: number }[] = [
  { label: 'Trine allies', relation: 'trine', min: 85, max: 92 },
  { label: 'Secret friends', relation: 'secret-friend', min: 78, max: 82 },
  { label: 'Same animal', relation: 'same', min: 68, max: 72 },
  { label: 'Neutral pairs', relation: 'neutral', min: 45, max: 62 },
  { label: 'Harm pairs', relation: 'harm', min: 38, max: 42 },
  { label: 'Clash pairs', relation: 'clash', min: 28, max: 32 },
]

function chemistryTable(): string {
  const rows = CHEMISTRY_RANGES.map(range => `<tr><td>${range.label}</td><td>${range.min} to ${range.max}</td></tr>`)
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Animal relation</th><th>Chemistry score</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

/** Four Fire Horse pairs on /compatibility (getEnhancedCompatibility), pinned by the tests */
export const FIRE_HORSE_EXAMPLES: {
  slug: string
  name: string
  relation: Relation
  elements: string
  overall: number
  label: string
}[] = [
  { slug: 'wood-tiger', name: 'Wood Tiger', relation: 'trine', elements: 'wood feeds fire', overall: 82, label: 'Soulmate Energy' },
  { slug: 'metal-dog', name: 'Metal Dog', relation: 'trine', elements: 'fire controls metal', overall: 55, label: 'Explosive Chemistry' },
  { slug: 'wood-rat', name: 'Wood Rat', relation: 'clash', elements: 'wood feeds fire', overall: 53, label: 'Intriguing Mix' },
  { slug: 'water-rat', name: 'Water Rat', relation: 'clash', elements: 'water controls fire', overall: 30, label: 'Toxic but Addictive' },
]

const RELATION_WORD: Record<Relation, string> = {
  same: 'same animal',
  trine: 'trine allies',
  'secret-friend': 'secret friends',
  clash: 'a clash',
  harm: 'a harm pair',
  neutral: 'neutral',
}

function exampleList(): string {
  const items = FIRE_HORSE_EXAMPLES.map(
    example =>
      `<li><a href="/compatibility/fire-horse/${example.slug}">Fire Horse and ${example.name}</a>: ${RELATION_WORD[example.relation]}, ${example.elements}. Overall ${example.overall}, "${example.label}".</li>`,
  )
  return `<ul>\n${items.join('\n')}\n</ul>`
}

/** Year relations as the reading engine names them, for the 2026 Horse and 2027 Goat years */
function yearLine(year: number, yearAnimal: ZodiacAnimal): string {
  const allies = andList(partners(yearAnimal, 'trine'))
  const friend = andList(partners(yearAnimal, 'secret-friend'))
  const clash = andList(partners(yearAnimal, 'clash'))
  const harm = andList(partners(yearAnimal, 'harm'))
  return `<li><strong>${year}, the ${animalName(yearAnimal)} year:</strong> the ${allies} are trine allies, the ${friend} is the secret friend, the ${clash} clashes and the ${harm} meets harm. For ${animalName(yearAnimal)} people it is their own zodiac year.</li>`
}

const content = `<h2>The Short Answer</h2>
<p>Chinese astrology links the twelve animals in four ways. Every animal has two <strong>trine allies</strong>, one <strong>secret friend</strong>, one animal it <strong>clashes</strong> with and one it meets in a <strong>harm</strong> relation. The other six animals are neutral. These are traditional ideas, offered here for fun and reflection.</p>
<p>The two tables in the middle of this post give the answer for your animal. The rest explains where the pairs come from and how our <a href="/compatibility">compatibility tool</a> uses them.</p>
<h2>The Twelve Animals as a Clock</h2>
<p>The animals are also called the twelve Earthly Branches. They always come in the same order: ${BRANCH_ORDER.map(({ animal, char }) => `${animalName(animal)} ${char}`).join(', ')}. Picture them on a clock face, with the Rat at twelve o'clock and the Pig at eleven.</p>
<p>Most of the relations below are simply distances on that clock. That is why they never change: the Rat and the Horse clashed a thousand years ago, and they clash today.</p>
<h2>Trines: Your Two Best Allies (三合)</h2>
<p>A trine is three animals that sit four places apart on the clock. They form a triangle. There are four trines, and each is named after an element:</p>
${trineTable()}
<p>Tradition sees trine animals as natural allies who share a way of moving through life. In our reading, a trine year is described as one where "momentum and confidence come easily."</p>
<p>One thing confuses people: the trine's element is not your birth element. A Wood Rat or a Fire Rat is still in the Water trine, because the trine depends only on the animal. Your birth element is a separate layer that also comes from your birth year, as our <a href="/blog/five-elements-explained">five elements guide</a> explains.</p>
<h2>Secret Friends: The Six Harmony Pairs (六合)</h2>
<p>Each animal also has exactly one secret friend. Where a trine is a group of three, this is a quiet pair of two. The six pairs are:</p>
${pairList('secret-friend')}
<p>The idea is support that works behind the scenes. Our reading puts it this way for a secret-friend year: "support arrives through relationships."</p>
<h2>Clashes: The Animal Opposite You (冲)</h2>
<p>A clash is the animal six places away, straight across the clock. These are the six clash pairs:</p>
${pairList('clash')}
<p>Opposites can attract, but tradition reads a clash as two rhythms that pull against each other. In a clash year, our reading speaks of "disruption, movement and forced change." That is not the same as bad luck. It means things move, whether you planned it or not.</p>
<h2>Harms: Quiet Friction (害)</h2>
<p>A harm pair is softer than a clash, and easier to miss. The six harm pairs are:</p>
${pairList('harm')}
<p>Our reading describes a harm relation as two animals that "quietly undermine each other," and suggests to "watch for misunderstandings and hidden friction." Think small irritations rather than open conflict. Saying things plainly helps.</p>
<h2>Every Animal at a Glance</h2>
<p>Find your animal in the first column. If you are not sure of your animal, the <a href="/calculator">Zodiac Calculator</a> finds it from your birth date, including the Lunar New Year cutoff for January and February birthdays.</p>
<h3>Your allies</h3>
${alliesTable()}
<h3>Your friction</h3>
${frictionTable()}
<p>For example, someone born in ${recentYears('rat')}, after Lunar New Year, is a Rat. Their allies are the ${andList(partners('rat', 'trine'))}, their secret friend is the ${andList(partners('rat', 'secret-friend'))}, they clash with the ${andList(partners('rat', 'clash'))} and meet harm with the ${andList(partners('rat', 'harm'))}.</p>
<h2>How Our Compatibility Tool Uses This</h2>
<p>On the <a href="/compatibility">compatibility page</a>, you pick two of the 60 signs. The overall score is built from three parts. The first, <strong>Chemistry</strong>, comes from the two animals alone, and it follows the relations above:</p>
${chemistryTable()}
<p>The other two scores come from your elements. <strong>Support</strong> is high when one element feeds the other in the Wu Xing cycle. <strong>Friction</strong> is high when one element controls the other. The overall score weighs Chemistry at half, Support at 30 percent and low Friction at 20 percent.</p>
<p>So the animals are not the whole story. Here are four Fire Horse pairs, two with trine allies and two with a clash:</p>
${exampleList()}
<p>A trine with clashing elements scores about the same as a clash with friendly elements. That is the point of Wu Xing: the element layer can soften a hard animal pair or complicate an easy one. Our post on <a href="/blog/zodiac-compatibility-by-element">compatibility by element</a> goes deeper into that layer.</p>
<h2>What It Means for 2026 and 2027</h2>
<p>The same rules are used for years. Each year has an animal, and tradition reads how your animal meets it. The year section of our personal reading works this way:</p>
<ul>
${yearLine(2026, 'horse')}
${yearLine(2027, 'goat')}
</ul>
<p>For what each year means for every animal and element, see <a href="/blog/2026-year-of-the-fire-horse">2026: Year of the Fire Horse</a> and <a href="/blog/2027-year-of-the-fire-goat">2027: Year of the Fire Goat</a>.</p>
<h2>Check Your Own Pair</h2>
<p>Pick your sign and someone else's on the <a href="/compatibility">compatibility page</a> to see the scores and what they mean for you two. All of this is tradition, for fun and reflection, not a forecast about any relationship.</p>
<p>Want to see how the year meets your own sign? The <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. It is for entertainment and self-reflection, not a prediction.</p>`

export const RELATIONS_POST: BlogPost = {
  id: 'code-chinese-zodiac-trines-secret-friends-clashes',
  slug: 'chinese-zodiac-trines-secret-friends-clashes',
  title: 'Chinese Zodiac Trines, Secret Friends and Clashes',
  excerpt:
    'Every Chinese zodiac animal has two trine allies, one secret friend, one clash and one harm. See all 12 animals and how elements change the match.',
  authorName: 'Wu Xing Zodiac',
  tags: ['compatibility', 'chinese-zodiac', 'trines', 'secret-friends', 'zodiac-guide', 'wu-xing'],
  readTime: 6,
  publishedAt: '2026-11-10T21:00:00.000Z',
  content,
}
