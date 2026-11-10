/**
 * Blog posts kept in the code instead of the blog_posts table (Neon).
 *
 * Publishing a post this way needs no database change: the blog API
 * (netlify/functions/blog-posts.ts) merges these with the published database posts,
 * and the build-time snapshot (src/lib/blog-snapshot.ts) does the same, so a code post
 * is prerendered, in the sitemap and listed on /blog exactly like a database post.
 *
 * Server code imports this file, so runtime imports must stay relative (no `@/`).
 * Slugs: lowercase words joined by hyphens, unique across code and database posts
 * (a code post wins over a database post with the same slug).
 */
import type { BlogPost } from '../types'
import { LUNAR_NEW_YEAR_DATES_POST } from './posts/lunar-new-year-dates'
import { RELATIONS_POST } from './posts/chinese-zodiac-trines-secret-friends-clashes'
import { ELEMENT_BY_LAST_DIGIT_POST } from './posts/chinese-element-by-birth-year-last-digit'
import { BEN_MING_NIAN_POST } from './posts/ben-ming-nian-your-zodiac-year'
import { BIRTH_HOUR_POST } from './posts/chinese-zodiac-birth-hour-animal'
import { SIXTY_CYCLE_POST } from './posts/sixty-year-chinese-zodiac-cycle'
import { BABY_2027_POST } from './posts/baby-born-2027-fire-horse-or-fire-goat'
import { CHINESE_VS_WESTERN_POST } from './posts/chinese-zodiac-vs-western-zodiac-differences'
import { CNY_2027_POST } from './posts/chinese-new-year-2027-date-animal-traditions'

export const CODE_BLOG_POSTS: BlogPost[] = [
  {
    id: 'code-2027-year-of-the-fire-goat',
    slug: '2027-year-of-the-fire-goat',
    title: '2027: Year of the Fire Goat, What It Means for Your Sign',
    excerpt:
      'The Fire Goat year runs 6 February 2027 to 25 January 2028. See what it traditionally means for each animal and element, and how to find your sign.',
    authorName: 'Wu Xing Zodiac',
    tags: ['fire-goat', '2027', 'chinese-zodiac', 'wu-xing', 'year-ahead', 'zodiac-guide'],
    readTime: 7,
    publishedAt: '2026-11-10T18:00:00.000Z',
    // Facts from src/lib/zodiac-data.ts (Lunar New Year 1967-02-09, 2027-02-06, 2028-01-26),
    // src/lib/sign-content/fire-goat.ts and the reading's year relations
    // (src/lib/readings/server/context.ts); reading dates per src/lib/readings/reading-year.ts.
    content: `<h2>What Is the Fire Goat Year?</h2>
<p>The Chinese year that starts on 6 February 2027 is a Fire Goat year. It runs until 25 January 2028. In Chinese it is written 丁未 (Ding Wei).</p>
<p>The name has two parts. The Heavenly Stem 丁 (Ding) is yin fire. The Earthly Branch 未 (Wei) is the Goat. Put them together and you get the Fire Goat. Each animal and element pair comes around once every 60 years. The last Fire Goat year began in February 1967, on 9 February.</p>
<p>Note the start date. The Chinese year does not begin on 1 January. It begins at Lunar New Year. So anything you read about "2027" really means 6 February 2027 onward. This guide is for fun and reflection. Treat it as a lens for thinking about your year, not as a forecast.</p>
<h2>The Goat in Wu Xing Terms</h2>
<p>The Goat is a gentle, artistic sign. On our site the Fire Goat is called <strong>The Passionate Creator</strong>. Its core strength is expressive warmth. Its shadow is emotional combustion.</p>
<p>Fire's power to transform adds energy to the Goat's artistic side. The Fire Goat tends to turn ordinary things into something striking. The warmth is inviting rather than loud. The flip side is a need for emotional security, and a habit of feeling slights more deeply than others expect.</p>
<p>If you want the full portrait, read the <a href="/zodiac/fire-goat">Fire Goat profile</a>. You can also read about the <a href="/zodiac/animal/goat">Goat</a> across all five elements, or the <a href="/zodiac/element/fire">Fire element</a> across all twelve animals.</p>
<h2>From Fire Horse to Fire Goat</h2>
<p>2026 is the Fire Horse year. The Horse year carries yang fire. In the site's profiles, yang fire explodes outward.</p>
<p>On 6 February 2027 the fire turns yin. Yin fire does not explode. It glows, smolders and occasionally flares when provoked. It is warm and personal. In Wu Xing terms, the year moves from loud to personal.</p>
<p>The element stays the same. It is still fire. But the animal changes from the restless Horse to the artistic, sensitive Goat. A fair way to read the change is this: the bold energy of 2026 settles into something more inward and creative. Some people will welcome that. Others will miss the speed.</p>
<p>You can compare it with our <a href="/blog/2026-year-of-the-fire-horse">guide to the 2026 Fire Horse year</a>.</p>
<h2>What the Year Means for Each Animal</h2>
<p>Traditional Chinese astrology looks at how each animal relates to the animal of the year. Here is how the 2027 Goat year is read for all twelve. Remember that this is a tradition, and it is meant as entertainment and reflection. For every animal's allies and clashes in any year, see <a href="/blog/chinese-zodiac-trines-secret-friends-clashes">Chinese Zodiac Trines, Secret Friends and Clashes</a>.</p>
<ul><li><strong>Goat: Ben Ming Nian (本命年).</strong> This is your own zodiac year. Tradition sees it as a year of change and testing. It rewards caution and deliberate choices.</li>
<li><strong>Ox: Clash (丑未冲).</strong> The Ox sits opposite the Goat. Expect disruption, movement and forced change. It can be a year to stay flexible.</li>
<li><strong>Horse: Six Harmony (午未合).</strong> The Horse is the Goat's secret friend. This points to support through relationships.</li>
<li><strong>Rabbit: Trine ally (亥卯未).</strong> The Rabbit shares the Goat's wood trine. Tradition links this with momentum and confidence.</li>
<li><strong>Pig: Trine ally (亥卯未).</strong> The Pig is in the same trine as the Rabbit and the Goat. Again, think momentum and confidence.</li>
<li><strong>Rat: Harm (子未害).</strong> The Rat meets the Goat in a harm relation. This means quiet friction and misunderstandings. Saying things plainly may help.</li>
<li><strong>Tiger, Dragon, Snake, Monkey, Rooster and Dog:</strong> There is no traditional clash or alliance with the Goat. For these six animals, the element relationship sets the tone. That is the next section.</li>
</ul>
<h2>What the Year Means for Each Element</h2>
<p>The 2027 year carries fire. How that fire meets your own element matters in Wu Xing. The five elements follow a cycle of feeding and controlling, which we explain in <a href="/blog/five-elements-explained">The Five Elements Explained</a>.</p>
<h3>Fire people</h3>
<p>You share the year's element. Your strengths and your excesses get louder. It is a good year to notice where your passion helps and where it runs hot.</p>
<h3>Earth people</h3>
<p>The year's fire generates your earth. This is read as a nourishing year. Things you build may get support.</p>
<h3>Wood people</h3>
<p>Your wood feeds the year's fire. This is an output year. It can be creative and visible. It can also be draining if you overextend, so pace yourself.</p>
<h3>Metal people</h3>
<p>The year's fire controls your metal. This is a pressure year. Pressure can forge discipline, but it also demands rest. Plan for both.</p>
<h3>Water people</h3>
<p>Your water controls the year's fire. It asks for effort. That effort can turn into reward when you stay in charge of your own energy.</p>
<h2>Putting It Together</h2>
<p>Reading a year this way works best as a conversation with yourself. The animal and element relations give you prompts. They do not give you answers.</p>
<p>Your animal gives one reading. Your element gives another. They do not always agree. A Rabbit with a metal element, for example, has a friendly animal relation and a pressure element relation. That is normal. Most people get a mix.</p>
<p>One simple way to use all this is to ask two questions. What does my animal suggest about the people around me? What does my element suggest about how I use my energy? Write down the answers and see how you feel about them in a few months. If a point rings true, keep it. If it does not, drop it.</p>
<p>Nothing here is a promise. It does not replace advice from a doctor, a financial adviser or a lawyer. Use it the way you would use a good conversation about the year ahead.</p>
<h2>Find Your Sign</h2>
<p>To use any of this, you need your animal and your element. Use the <a href="/calculator">Zodiac Calculator</a> to find both from your birth date.</p>
<p>If you were born in January or February, be careful. Your Chinese year starts at Lunar New Year, not on 1 January. A birthday before that date counts toward the previous animal. The calculator applies the cutoff for you.</p>
<p>Curious about how two signs get along in a year like this? Try the <a href="/compatibility">compatibility tool</a>.</p>
<h2>Want It Made Personal?</h2>
<p>This post is general. It covers everyone born under an animal or an element. Your own sign combines both, and that combination is more specific than a single paragraph.</p>
<p>If you want that, the <a href="/reading">personal reading</a> is a PDF for $9.90 based on your sign. Orders from 1 January 2027 cover the Fire Goat year ahead, from 6 February 2027. Orders before then cover the rest of the Fire Horse year, until 5 February 2027. It is written for reflection and entertainment, and it makes no promises about what will happen.</p>
<p>Whatever you choose, we hope the Fire Goat year gives you something to think about. Warm, creative and a little sensitive: it may be a good year to look after your own flame.</p>`,
  },
  LUNAR_NEW_YEAR_DATES_POST,
  RELATIONS_POST,
  ELEMENT_BY_LAST_DIGIT_POST,
  BEN_MING_NIAN_POST,
  BIRTH_HOUR_POST,
  SIXTY_CYCLE_POST,
  BABY_2027_POST,
  CHINESE_VS_WESTERN_POST,
  CNY_2027_POST,
]

/**
 * Database posts and code posts as one list, newest first. A code post replaces a
 * database post with the same slug, so a post is never listed twice.
 */
export function mergeBlogPosts<T extends Pick<BlogPost, 'slug' | 'publishedAt'>>(
  databasePosts: T[],
  codePosts: T[],
): T[] {
  const codeSlugs = new Set(codePosts.map(post => post.slug))
  return [...databasePosts.filter(post => !codeSlugs.has(post.slug)), ...codePosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )
}

/** The code post with this slug, or null */
export function getCodeBlogPost(slug: string): BlogPost | null {
  return CODE_BLOG_POSTS.find(post => post.slug === slug) ?? null
}
