/**
 * Blog post: "Having a Baby in 2027? Fire Horse or Fire Goat by Date".
 *
 * Dates come from the calculator's Lunar New Year table (src/lib/zodiac-data.ts), the family
 * relations from the trines post's branch rules (tested against the reading engine there),
 * and the sign traits from the site's own Fire Horse / Fire Goat profiles
 * (src/lib/sign-content/fire-horse.ts and fire-goat.ts). The profile values are written here,
 * not imported, so the blog bundle stays small; the tests pin them to the profile files
 * (src/content/__tests__/baby-2027-post.test.ts).
 * Server code imports this file: relative imports only.
 */
import type { BlogPost, ZodiacAnimal } from '../../types'
import { getAnimalForYear, getElementForYear, getSignSlug, lunarNewYearDates, zodiacAnimals } from '../../lib/zodiac-data'
import { partners } from './chinese-zodiac-trines-secret-friends-clashes'

const MONTHS = ['Jan', 'Feb']
const LONG_MONTHS = ['January', 'February']

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1)
const animalName = (animal: ZodiacAnimal) => zodiacAnimals.find(item => item.animal === animal)!.name

/** "6 February 2027": Lunar New Year of a year */
export function startLabel(year: number, short = false): string {
  const [month, day] = lunarNewYearDates[year]!
  return `${day} ${(short ? MONTHS : LONG_MONTHS)[month - 1]} ${year}`
}

/** "25 January 2028": the last day of a Chinese year */
export function endLabel(year: number, short = false): string {
  const [month, day] = lunarNewYearDates[year + 1]!
  const last = new Date(Date.UTC(year + 1, month - 1, day - 1))
  return `${last.getUTCDate()} ${(short ? MONTHS : LONG_MONTHS)[last.getUTCMonth()]} ${last.getUTCFullYear()}`
}

function sign(year: number): { name: string; slug: string; animal: ZodiacAnimal } {
  const animal = getAnimalForYear(year)
  const element = getElementForYear(year)
  return { name: `${capitalize(element)} ${capitalize(animal)}`, slug: getSignSlug(animal, element), animal }
}

/** The three Chinese years a baby due in late 2026 to 2028 can fall in */
export const TABLE_YEARS = [2026, 2027, 2028]

function dateTable(): string {
  const rows = TABLE_YEARS.map(year => {
    const { name, slug } = sign(year)
    return `<tr><td><a href="/zodiac/${slug}">${name}</a></td><td>${startLabel(year, true)}</td><td>${endLabel(year, true)}</td></tr>`
  })
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Sign</th><th>Born from</th><th>Born until</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

/** The "At a glance" values of the two profiles, as on /zodiac/fire-horse and /zodiac/fire-goat */
export const PROFILE_FACTS = {
  'fire-horse': {
    archetype: 'The Untamable Spirit',
    energy: 'Yang',
    coreStrength: 'Fearless authenticity',
    shadow: 'Explosive volatility',
    bestMatch: 'earth-goat',
    bestMatchName: 'Earth Goat',
  },
  'fire-goat': {
    archetype: 'The Passionate Creator',
    energy: 'Yin',
    coreStrength: 'Expressive warmth',
    shadow: 'Emotional combustion',
    bestMatch: 'wood-rabbit',
    bestMatchName: 'Wood Rabbit',
  },
} as const

function glance(slug: keyof typeof PROFILE_FACTS): string {
  const facts = PROFILE_FACTS[slug]
  return `<ul>
<li><strong>Archetype:</strong> ${facts.archetype}</li>
<li><strong>Energy:</strong> ${facts.energy} fire</li>
<li><strong>Core strength:</strong> ${facts.coreStrength}</li>
<li><strong>Shadow side:</strong> ${facts.shadow}</li>
<li><strong>Best match on the profile:</strong> <a href="/zodiac/${facts.bestMatch}">${facts.bestMatchName}</a></li>
</ul>`
}

/** "the Rabbit and the Pig" */
const theList = (animals: ZodiacAnimal[]) => animals.map(animal => `the ${animalName(animal)}`).join(' and ')

function familyLine(animal: ZodiacAnimal): string {
  return `<li><strong>A ${animalName(animal)} baby:</strong> ${theList(partners(animal, 'trine'))} are trine allies, ${theList(partners(animal, 'secret-friend'))} is the secret friend, ${theList(partners(animal, 'clash'))} is the clash and ${theList(partners(animal, 'harm'))} is the harm pair.</li>`
}

const horse = sign(2026)
const goat = sign(2027)
const monkey = sign(2028)

const content = `<h2>The Short Answer</h2>
<p>A baby born in 2027 is not automatically a Goat. The Chinese year changes at Lunar New Year, and in 2027 that is on ${startLabel(2027)}.</p>
<ul>
<li>Born up to ${endLabel(2026)}: a <a href="/zodiac/${horse.slug}">${horse.name}</a>, like every baby born since ${startLabel(2026)}.</li>
<li>Born from ${startLabel(2027)} to ${endLabel(2027)}: a <a href="/zodiac/${goat.slug}">${goat.name}</a>.</li>
<li>Born from ${startLabel(2028)}: an <a href="/zodiac/${monkey.slug}">${monkey.name}</a>.</li>
</ul>
<p>Below are the exact dates, what our profiles say about each sign, and how a Horse or Goat child fits with the rest of the family's signs. It is all tradition, for fun and reflection.</p>
<h2>The Dates</h2>
<p>These are the same dates our <a href="/calculator">Zodiac Calculator</a> uses:</p>
${dateTable()}
<p>Notice that the ${goat.name} year ends early: the next Lunar New Year is on ${startLabel(2028)}. A baby born in the last days of January 2028 is already an ${monkey.name}.</p>
<h2>Due in Late January or Early February 2027?</h2>
<p>A due date is an estimate, and babies keep their own schedule. If your due date is within a few weeks of ${startLabel(2027)}, your baby could be either a ${horse.name} or a ${goat.name}. You will only know on the day.</p>
<p>The rule is simple: the date of birth decides. Born on ${endLabel(2026)} is a ${horse.name}. Born on ${startLabel(2027)} is a ${goat.name}. If you want to know why some websites give a different answer for January and February birthdays, our post on <a href="/blog/chinese-zodiac-january-february-birthday">January and February birthdays</a> explains it, with Lunar New Year dates back to 1924.</p>
<h2>The Fire Horse at a Glance</h2>
<p>Here is how our <a href="/zodiac/${horse.slug}">${horse.name} profile</a> sums up the sign:</p>
${glance('fire-horse')}
<p>Our profiles are written for grown-ups, so read them as a sketch of traits, not a plan for raising a child. For what the Fire Horse year means in tradition, see <a href="/blog/2026-year-of-the-fire-horse">2026: Year of the Fire Horse</a>.</p>
<h2>The Fire Goat at a Glance</h2>
<p>And here is our <a href="/zodiac/${goat.slug}">${goat.name} profile</a> in short:</p>
${glance('fire-goat')}
<p>The two signs share the same element, fire, but not the same side. The Fire Horse is yang fire: outward and quick. The Fire Goat is yin fire: warm and inward. For the year itself, read <a href="/blog/2027-year-of-the-fire-goat">2027: Year of the Fire Goat</a>.</p>
<h2>How the Baby Fits the Family's Signs</h2>
<p>Tradition reads how animals get along through trines, secret friends, clashes and harms. Find each parent's or sibling's animal in these lines:</p>
<ul>
${familyLine('horse')}
${familyLine('goat')}
</ul>
<p>One fun detail: the Horse and the Goat are each other's secret friend. So a Horse parent with a Goat baby, or a Goat parent with a Horse baby, is a traditional good pair. Our guide to <a href="/blog/chinese-zodiac-trines-secret-friends-clashes">trines, secret friends and clashes</a> explains all twelve animals. To see two full signs side by side, with elements, try the <a href="/compatibility">compatibility tool</a>.</p>
<h2>Should You Plan Around It?</h2>
<p>No. Some families enjoy the tradition, and some care about it a lot, but a sign is not a reason to plan a pregnancy or a birth date. A clash with a parent's animal is a traditional idea about personalities, not a warning. Every child is their own person.</p>
<h2>Find Everyone's Sign</h2>
<p>Use the <a href="/calculator">Zodiac Calculator</a> for each family member's birth date, then compare any two in the <a href="/compatibility">compatibility tool</a>.</p>
<p>For a grown-up in the family who wants their own sign written up, the <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. It is for entertainment and self-reflection, not a prediction.</p>`

export const BABY_2027_POST: BlogPost = {
  id: 'code-baby-born-2027-fire-horse-or-fire-goat',
  slug: 'baby-born-2027-fire-horse-or-fire-goat',
  title: 'Having a Baby in 2027? Fire Horse or Fire Goat by Date',
  excerpt:
    'A baby born in 2027 is a Fire Horse until 5 February and a Fire Goat from 6 February. See the exact dates, both signs and how they fit the family.',
  authorName: 'Wu Xing Zodiac',
  tags: ['fire-goat', 'fire-horse', '2027', 'baby', 'chinese-zodiac', 'zodiac-guide'],
  readTime: 5,
  publishedAt: '2026-11-13T05:00:00.000Z',
  content,
}
