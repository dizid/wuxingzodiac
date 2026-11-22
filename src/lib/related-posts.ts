/**
 * "Related guides" under each blog post (T-0636, Nov 2026).
 *
 * Before this, 8 of the 18 posts had no link from any other post: a reader (or a
 * crawler) could only reach them from /blog. Every post now links to 3 others, picked
 * by hand by topic, so every post is linked from at least one other post.
 *
 * A post that isn't in the hand-picked list (a database post published later) gets the
 * posts that share the most tags with it, newest first. A hand-picked slug that no
 * longer exists is skipped and topped up the same way.
 */
import type { BlogPost } from '@/types'

/** How many related posts to show under a post */
export const RELATED_POSTS_LIMIT = 3

/** Hand-picked related posts per slug, best match first */
export const RELATED_POST_SLUGS: Record<string, string[]> = {
  '2026-year-of-the-fire-horse': [
    'best-zodiac-matches-2026-fire-horse',
    'ben-ming-nian-your-zodiac-year',
    'baby-born-2027-fire-horse-or-fire-goat',
  ],
  '2027-year-of-the-fire-goat': [
    'chinese-new-year-2027-date-animal-traditions',
    'baby-born-2027-fire-horse-or-fire-goat',
    'ben-ming-nian-your-zodiac-year',
  ],
  'baby-born-2027-fire-horse-or-fire-goat': [
    'chinese-zodiac-january-february-birthday',
    'chinese-new-year-2027-date-animal-traditions',
    'chinese-zodiac-birth-hour-animal',
  ],
  'bazi-four-pillars-explained': [
    'chinese-zodiac-birth-hour-animal',
    'chinese-element-by-birth-year-last-digit',
    'sixty-year-chinese-zodiac-cycle',
  ],
  'ben-ming-nian-your-zodiac-year': [
    '2027-year-of-the-fire-goat',
    '2026-year-of-the-fire-horse',
    'chinese-zodiac-trines-secret-friends-clashes',
  ],
  'best-zodiac-matches-2026-fire-horse': [
    'chinese-zodiac-trines-secret-friends-clashes',
    'zodiac-compatibility-by-element',
    'chinese-zodiac-compatibility-guide',
  ],
  'chinese-element-by-birth-year-last-digit': [
    'five-elements-explained',
    'sixty-year-chinese-zodiac-cycle',
    'bazi-four-pillars-explained',
  ],
  'chinese-new-year-2027-date-animal-traditions': [
    '2027-year-of-the-fire-goat',
    'chinese-zodiac-january-february-birthday',
    'vietnamese-japanese-korean-zodiac-differences',
  ],
  'chinese-zodiac-birth-hour-animal': [
    'bazi-four-pillars-explained',
    'chinese-zodiac-vs-western-zodiac-differences',
    'chinese-zodiac-great-race-why-rat-is-first',
  ],
  'chinese-zodiac-compatibility-guide': [
    'zodiac-compatibility-by-element',
    'chinese-zodiac-trines-secret-friends-clashes',
    'best-zodiac-matches-2026-fire-horse',
  ],
  'chinese-zodiac-great-race-why-rat-is-first': [
    'vietnamese-japanese-korean-zodiac-differences',
    'chinese-zodiac-vs-western-zodiac-differences',
    'sixty-year-chinese-zodiac-cycle',
  ],
  'chinese-zodiac-january-february-birthday': [
    'chinese-new-year-2027-date-animal-traditions',
    'chinese-zodiac-vs-western-zodiac-differences',
    'chinese-element-by-birth-year-last-digit',
  ],
  'chinese-zodiac-trines-secret-friends-clashes': [
    'chinese-zodiac-compatibility-guide',
    'best-zodiac-matches-2026-fire-horse',
    'zodiac-compatibility-by-element',
  ],
  'chinese-zodiac-vs-western-zodiac-differences': [
    'bazi-four-pillars-explained',
    'chinese-zodiac-great-race-why-rat-is-first',
    'chinese-zodiac-birth-hour-animal',
  ],
  'five-elements-explained': [
    'chinese-element-by-birth-year-last-digit',
    'zodiac-compatibility-by-element',
    'bazi-four-pillars-explained',
  ],
  'sixty-year-chinese-zodiac-cycle': [
    'chinese-element-by-birth-year-last-digit',
    'ben-ming-nian-your-zodiac-year',
    'bazi-four-pillars-explained',
  ],
  'vietnamese-japanese-korean-zodiac-differences': [
    'chinese-zodiac-great-race-why-rat-is-first',
    'chinese-zodiac-vs-western-zodiac-differences',
    'chinese-new-year-2027-date-animal-traditions',
  ],
  'zodiac-compatibility-by-element': [
    'five-elements-explained',
    'chinese-zodiac-compatibility-guide',
    'chinese-zodiac-trines-secret-friends-clashes',
  ],
}

/** Tags are written both ways ("wu xing" and "wu-xing"); compare them the same way */
function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase().replace(/\s+/g, '-')
}

/** The other posts ranked by shared tags (most first), newest first on a tie */
function postsBySharedTags(post: BlogPost, candidates: BlogPost[]): BlogPost[] {
  const postTags = new Set(post.tags.map(normalizeTag))
  return candidates
    .map(candidate => ({
      candidate,
      shared: candidate.tags.filter(tag => postTags.has(normalizeTag(tag))).length,
    }))
    .filter(entry => entry.shared > 0)
    .sort(
      (a, b) =>
        b.shared - a.shared ||
        new Date(b.candidate.publishedAt).getTime() - new Date(a.candidate.publishedAt).getTime(),
    )
    .map(entry => entry.candidate)
}

/**
 * Up to RELATED_POSTS_LIMIT other posts to link under `post`: the hand-picked ones that
 * exist in `allPosts`, topped up by shared tags. Never the post itself, never twice.
 */
export function relatedPostsFor(
  post: BlogPost,
  allPosts: BlogPost[],
  limit = RELATED_POSTS_LIMIT,
): BlogPost[] {
  const others = allPosts.filter(candidate => candidate.slug !== post.slug)
  const bySlug = new Map(others.map(candidate => [candidate.slug, candidate]))

  const picked: BlogPost[] = []
  for (const slug of RELATED_POST_SLUGS[post.slug] ?? []) {
    const candidate = bySlug.get(slug)
    if (candidate && !picked.includes(candidate)) picked.push(candidate)
  }

  for (const candidate of postsBySharedTags(post, others)) {
    if (picked.length >= limit) break
    if (!picked.includes(candidate)) picked.push(candidate)
  }

  return picked.slice(0, limit)
}
