import { describe, expect, it } from 'vitest'
import { CODE_BLOG_POSTS } from '@/content/blog-posts'
import { RELATED_POSTS_LIMIT, RELATED_POST_SLUGS, relatedPostsFor } from './related-posts'
import type { BlogPost } from '@/types'

/** The published database posts (blog_posts table, checked live on 2026-11-23) */
const DATABASE_POST_SLUGS = [
  '2026-year-of-the-fire-horse',
  'best-zodiac-matches-2026-fire-horse',
  'chinese-zodiac-compatibility-guide',
  'five-elements-explained',
  'zodiac-compatibility-by-element',
]

const ALL_SLUGS = new Set([...CODE_BLOG_POSTS.map(post => post.slug), ...DATABASE_POST_SLUGS])

/** A minimal post for the ranking tests */
function makePost(slug: string, tags: string[], publishedAt = '2026-11-01T00:00:00.000Z'): BlogPost {
  return {
    id: slug,
    slug,
    title: slug,
    excerpt: '',
    content: '',
    authorName: 'Wu Xing Zodiac',
    publishedAt,
    tags,
    readTime: 1,
  }
}

describe('hand-picked related posts', () => {
  it('cover every published post', () => {
    expect(ALL_SLUGS.size).toBe(18)
    expect(new Set(Object.keys(RELATED_POST_SLUGS))).toEqual(ALL_SLUGS)
  })

  it('pick 3 existing other posts each, no doubles', () => {
    for (const [slug, related] of Object.entries(RELATED_POST_SLUGS)) {
      expect(related, slug).toHaveLength(RELATED_POSTS_LIMIT)
      expect(new Set(related).size, slug).toBe(related.length)
      expect(related, slug).not.toContain(slug)
      for (const relatedSlug of related) expect(ALL_SLUGS.has(relatedSlug), `${slug} -> ${relatedSlug}`).toBe(true)
    }
  })

  it('link every post from at least 1 other post (the 8 that had none: from 2)', () => {
    const inbound = new Map<string, number>()
    for (const related of Object.values(RELATED_POST_SLUGS)) {
      for (const slug of related) inbound.set(slug, (inbound.get(slug) ?? 0) + 1)
    }
    for (const slug of ALL_SLUGS) expect(inbound.get(slug) ?? 0, slug).toBeGreaterThanOrEqual(1)
    const hadNoInboundLink = [
      'baby-born-2027-fire-horse-or-fire-goat',
      'bazi-four-pillars-explained',
      'ben-ming-nian-your-zodiac-year',
      'best-zodiac-matches-2026-fire-horse',
      'chinese-element-by-birth-year-last-digit',
      'chinese-new-year-2027-date-animal-traditions',
      'chinese-zodiac-great-race-why-rat-is-first',
      'chinese-zodiac-vs-western-zodiac-differences',
    ]
    for (const slug of hadNoInboundLink) expect(inbound.get(slug) ?? 0, slug).toBeGreaterThanOrEqual(2)
  })
})

describe('relatedPostsFor', () => {
  it('returns the hand-picked posts in order', () => {
    const posts = [...CODE_BLOG_POSTS, ...DATABASE_POST_SLUGS.map(slug => makePost(slug, ['wu-xing']))]
    const bazi = posts.find(post => post.slug === 'bazi-four-pillars-explained')!
    expect(relatedPostsFor(bazi, posts).map(post => post.slug)).toEqual(RELATED_POST_SLUGS['bazi-four-pillars-explained'])
  })

  it('skips a hand-picked post that is gone and tops up by shared tags', () => {
    const fireGoat = makePost('2027-year-of-the-fire-goat', ['fire-goat', '2027'])
    const posts = [
      fireGoat,
      makePost('chinese-new-year-2027-date-animal-traditions', ['2027']),
      makePost('ben-ming-nian-your-zodiac-year', ['fire-goat']),
      makePost('unrelated', ['bazi']),
      makePost('fire-goat-love', ['fire-goat', '2027']),
    ]
    expect(relatedPostsFor(fireGoat, posts).map(post => post.slug)).toEqual([
      'chinese-new-year-2027-date-animal-traditions',
      'ben-ming-nian-your-zodiac-year',
      'fire-goat-love',
    ])
  })

  it('ranks an unknown (later database) post by shared tags, newest first on a tie, never itself', () => {
    const newPost = makePost('new-post', ['Wu Xing', 'compatibility'])
    const posts = [
      newPost,
      makePost('one-tag-old', ['wu-xing'], '2026-01-01T00:00:00.000Z'),
      makePost('one-tag-new', ['compatibility'], '2026-06-01T00:00:00.000Z'),
      makePost('two-tags', ['wu xing', 'compatibility'], '2025-01-01T00:00:00.000Z'),
      makePost('no-tags-shared', ['bazi']),
    ]
    expect(relatedPostsFor(newPost, posts).map(post => post.slug)).toEqual(['two-tags', 'one-tag-new', 'one-tag-old'])
  })

  it('returns nothing when no other post shares a tag', () => {
    const lonely = makePost('lonely', ['nothing-else'])
    expect(relatedPostsFor(lonely, [lonely, makePost('other', ['bazi'])])).toEqual([])
  })
})
