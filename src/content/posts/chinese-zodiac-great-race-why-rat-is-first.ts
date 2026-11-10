/**
 * Blog post: "The Great Race: Why the Rat Comes First in the Zodiac".
 *
 * The order of the animals, their links and the trines are computed here from the site data
 * (zodiacAnimals in src/lib/zodiac-data.ts and the branch list of the relations post), and
 * pinned by src/content/__tests__/great-race-post.test.ts.
 *
 * The legend and the history come from outside sources, read on 2026-11-11. Every quoted
 * phrase is listed in SOURCE_QUOTES with its page and is checked by the tests to appear in
 * the post. The race is told as a legend with versions, never as history.
 * Server code imports this file: relative imports only.
 */
import type { BlogPost } from '../../types'
import { zodiacAnimals } from '../../lib/zodiac-data'
import { BRANCH_ORDER, TRINES } from './chinese-zodiac-trines-secret-friends-clashes'

/** Pinyin of the 12 Earthly Branches in order (China Culture, "Chinese Zodiac": zi, chou, yin, mao ...) */
export const BRANCH_PINYIN = ['zi', 'chou', 'yin', 'mao', 'chen', 'si', 'wu', 'wei', 'shen', 'you', 'xu', 'hai']

/** The pages the post cites. Hosts must be in CITED_SOURCE_HOSTS in src/content/blog-posts.test.ts */
export const SOURCES = {
  wikipedia: { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Chinese_zodiac' },
  travelChinaGuide: { name: 'Travel China Guide', url: 'https://www.travelchinaguide.com/intro/social_customs/zodiac/story.htm' },
  chinaCulture: { name: 'China Culture', url: 'https://en.chinaculture.org/created/2005-10/21/content_74782_2.htm' },
  miami: { name: "Miami University's Children's Picture Book Database", url: 'https://dlp.lib.miamioh.edu/picturebook/items/show/7418' },
  hawaiiPublicRadio: { name: 'Hawaii Public Radio', url: 'https://www.hawaiipublicradio.org/asia-minute/2023-01-17/asia-minute-welcoming-vietnams-year-of-the-cat' },
} as const

/**
 * Every phrase the post quotes, with the page it was copied from (checked word for word
 * against the fetched page text on 2026-11-11). The tests check each one is in the post.
 */
export const SOURCE_QUOTES: { quote: string; source: keyof typeof SOURCES }[] = [
  { quote: 'the years on the calendar would be named for each animal in the order they reached him', source: 'wikipedia' },
  { quote: 'the twelve that arrived first would be selected', source: 'travelChinaGuide' },
  { quote: 'hopping onto Ox\'s back', source: 'chinaCulture' },
  { quote: 'the rat had already slid in front', source: 'travelChinaGuide' },
  { quote: 'the Rat pushed the Cat into the water', source: 'wikipedia' },
  { quote: 'rat completely forgot it', source: 'travelChinaGuide' },
  { quote: 'Rat was supposed to sign up for Cat, but forgot', source: 'chinaCulture' },
  { quote: 'Jade King invites all of the animals in the land to his palace', source: 'miami' },
  { quote: 'the Yellow Emperor who intended to select twelve guards', source: 'travelChinaGuide' },
  { quote: 'swimming race', source: 'travelChinaGuide' },
  { quote: 'cats had not yet been introduced to China from India', source: 'wikipedia' },
  { quote: 'Across Vietnam, people are getting ready to celebrate the Year of the Cat', source: 'hawaiiPublicRadio' },
  { quote: 'include the Cat instead of the Rabbit as a zodiac animal', source: 'wikipedia' },
  { quote: 'vividly represent the Twelve Earthly Branches', source: 'travelChinaGuide' },
  { quote: 'with each of the twelve animals directly assigned to one of the twelve Earthly Branches', source: 'wikipedia' },
  { quote: 'merely apocryphal', source: 'chinaCulture' },
  { quote: 'will never be known', source: 'chinaCulture' },
]

const animalByPlace = zodiacAnimals.map((item, place) => ({ ...item, place: place + 1 }))
const animalName = (animal: string) => zodiacAnimals.find(item => item.animal === animal)!.name

const cite = (key: keyof typeof SOURCES) => `<a href="${SOURCES[key].url}">${SOURCES[key].name}</a>`

/** A quoted phrase, taken from SOURCE_QUOTES so the post and the list cannot drift apart */
function q(phrase: string): string {
  if (!SOURCE_QUOTES.some(item => item.quote === phrase)) throw new Error(`Quote not listed in SOURCE_QUOTES: ${phrase}`)
  return `"${phrase}"`
}

/** The order table: place, animal (linked to its page) and Earthly Branch. Three columns for phones. */
export function orderTable(): string {
  const rows = animalByPlace.map(({ animal, name, place }) => {
    const branch = BRANCH_ORDER[place - 1]!
    return `<tr><td>${place}</td><td><a href="/zodiac/animal/${animal}">${name}</a></td><td>${branch.char} (${BRANCH_PINYIN[place - 1]})</td></tr>`
  })
  return [
    '<div class="table-scroll"><table>',
    '<thead><tr><th>Place</th><th>Animal</th><th>Earthly Branch</th></tr></thead>',
    `<tbody>\n${rows.join('\n')}\n</tbody>`,
    '</table></div>',
  ].join('\n')
}

/** The four trines as animals four places apart in the order (place 1, 5, 9 and so on), in the order of the data */
export function trineGroups(): { element: string; animals: string[]; places: number[] }[] {
  return TRINES.map(trine => {
    const places = trine.animals
      .map(animal => zodiacAnimals.findIndex(item => item.animal === animal) + 1)
      .sort((a, b) => a - b)
    return { element: trine.element, animals: places.map(place => zodiacAnimals[place - 1]!.animal), places }
  }).sort((a, b) => a.places[0]! - b.places[0]!)
}

function trineList(): string {
  const items = trineGroups().map(group => {
    const [first, second, third] = group.animals.map(animalName)
    return `<li><strong>${first}, ${second} and ${third}</strong> (places ${group.places.join(', ')}), the ${group.element} trine</li>`
  })
  return `<ul>\n${items.join('\n')}\n</ul>`
}

const content = `<h2>The Short Answer</h2>
<p>The Rat comes first because of a story. In the best-known version, the Jade Emperor called the animals to a race. The animals' order of arrival would set the order of the years. The Rat won by riding on the Ox and jumping ahead at the end.</p>
<p>It is a legend, and it has many versions. It is not a record of events. We tell it here as folklore, then show the real order of the twelve animals, then look at what the history says. This post is for fun and reflection.</p>
<h2>The Twelve Animals in Order</h2>
<p>This is the order the site uses for every sign, from the Rat in first place to the Pig in twelfth. Each animal links to its page. The last column shows the Earthly Branch that goes with it, which we explain below.</p>
${orderTable()}
<p>The order never changes. A Rat year comes around every 12 years, and the Ox always follows it. Not sure which animal is yours? Use the <a href="/calculator">Zodiac Calculator</a>.</p>
<h2>The Legend of the Great Race</h2>
<p>${cite('travelChinaGuide')} calls this the most widespread zodiac legend. The Jade Emperor ordered a contest, and ${q('the twelve that arrived first would be selected')}. ${cite('wikipedia')} puts the prize this way: ${q('the years on the calendar would be named for each animal in the order they reached him')}. Here are the parts that the sources share.</p>
<h3>The Rat rides the Ox</h3>
<p>${cite('chinaCulture')} says the Ox, as the largest of the twelve, should have been first. The Rat, the cleverest, cut to the front by ${q('hopping onto Ox\'s back')}. ${cite('travelChinaGuide')} gives the ending: the Ox thought it would be first, but ${q('the rat had already slid in front')}. The Ox came second.</p>
<h3>The Cat is left out</h3>
<p>The Cat is the animal that is missing from the list. The stories give two reasons.</p>
<ul>
<li>In one version the Cat and the Rat cross the river on the Ox together. Wikipedia says that ${q('the Rat pushed the Cat into the water')}.</li>
<li>In another version, the Cat asks the Rat to sign it up or wake it. ${cite('chinaCulture')} says ${q('Rat was supposed to sign up for Cat, but forgot')}. Travel China Guide says the ${q('rat completely forgot it')}.</li>
</ul>
<p>Either way, the Cat missed the finish. The legend says that is why cats and rats do not get along.</p>
<h3>The rest of the order</h3>
<p>The Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster and Dog follow the Ox, and the Pig comes last. That order is the one in the table above. Some tellings add a small story for each animal. They differ too much from one book to the next to retell here.</p>
<h3>Other versions</h3>
<p>The details change from place to place. ${cite('travelChinaGuide')} notes that some say it was ${q('the Yellow Emperor who intended to select twelve guards')}, and that others say the animals had a ${q('swimming race')}. ${cite('miami')} lists a picture book in which the ${q('Jade King invites all of the animals in the land to his palace')}. Only twelve arrive, so he honors each with a year of the calendar. No single version is the "true" one.</p>
<h2>Why There Is No Cat</h2>
<p>In the legend, the Cat missed the race, as above. Some sources also give a plain reason. Wikipedia says that most historians agree the Cat is not included, as ${q('cats had not yet been introduced to China from India')}. Travel China Guide makes the same point, that there were no cats in China very long ago.</p>
<p>The Cat does appear in a nearby zodiac. In Vietnam, the Cat takes the Rabbit's place. A report by ${cite('hawaiiPublicRadio')} opens: ${q('Across Vietnam, people are getting ready to celebrate the Year of the Cat')}. Wikipedia says Vietnamese people ${q('include the Cat instead of the Rabbit as a zodiac animal')}. We compare the Vietnamese, Japanese and Korean versions in <a href="/blog/vietnamese-japanese-korean-zodiac-differences">The Zodiac in Vietnam, Japan and Korea</a>.</p>
<h2>Story Versus History</h2>
<p>Here is where the legend and the record part ways. The twelve animals are tied to the twelve Earthly Branches, a set of 12 signs used with the ten Heavenly Stems to count years in 60-year cycles. Wikipedia says the zodiac works ${q('with each of the twelve animals directly assigned to one of the twelve Earthly Branches')}. Travel China Guide says the animals were picked to ${q('vividly represent the Twelve Earthly Branches')}.</p>
<p>So the animals are labels for a counting system. The race is a folk way to explain why the labels came in this order. ${cite('chinaCulture')} calls the story ${q('merely apocryphal')} and says that how the order was really set ${q('will never be known')}. Travel China Guide and China Culture also point to a likely older root in the worship of animals, long before any race story.</p>
<p>That is no reason to dislike the legend. It is a good story, and it has lasted. Just do not take it as history.</p>
<h2>How the Order Shapes the Trines</h2>
<p>The order has a second use. In Chinese astrology, a trine is three animals that sit four places apart. Count four places from your animal, and then four more, and you reach your two trine allies. The four trines are:</p>
${trineList()}
<p>The Rat is in place 1, so its allies are the animals in places 5 and 9: the Dragon and the Monkey. Our post on <a href="/blog/chinese-zodiac-trines-secret-friends-clashes">trines, secret friends and clashes</a> shows all the relations for every animal.</p>
<h2>Where Does Your Animal Fall?</h2>
<p>If you were born in January or February, your animal may not be the one you think. The Chinese year starts at Lunar New Year, not on 1 January. Read <a href="/blog/chinese-zodiac-january-february-birthday">Born in January or February? Find your real sign</a> to check your date, or use the <a href="/calculator">calculator</a>.</p>
<h2>For Fun and Reflection</h2>
<p>Whether the Rat won by cleverness or by a ride on the Ox, the story gives each animal a place and a character. Use it for fun, as a way to think about yourself. It does not tell your future.</p>
<p>Want to see how your sign and its element read together? The <a href="/reading">personal reading</a> is an 8-page personalized PDF based on your birth-year sign and the five elements, written to you by name. It costs $9.90 and arrives by email. It is for entertainment and self-reflection, not a prediction.</p>`

export const GREAT_RACE_POST: BlogPost = {
  id: 'code-chinese-zodiac-great-race-why-rat-is-first',
  slug: 'chinese-zodiac-great-race-why-rat-is-first',
  title: 'The Great Race: Why the Rat Comes First in the Zodiac',
  excerpt:
    'The Great Race legend explains why the Rat comes first and the Cat is missing. See the order of all 12 animals, the story versions and what history says.',
  authorName: 'Wu Xing Zodiac',
  tags: ['chinese-zodiac', 'zodiac-guide', 'rat', 'great-race', 'zodiac-legend'],
  readTime: 6,
  publishedAt: '2026-11-14T05:00:00.000Z',
  content,
}
