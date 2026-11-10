// @vitest-environment node
// Lives outside netlify/functions/: every file there becomes a function, and a
// "blog-posts.test" function name (with a dot) would fail the whole deploy.
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { CODE_BLOG_POSTS } from '../../src/content/blog-posts'

// Database rows as the blog_posts table returns them (published only)
const databaseRows = [
  {
    id: 'bp-001',
    slug: '2026-year-of-the-fire-horse',
    title: '2026: Year of the Fire Horse',
    excerpt: 'Fire Horse excerpt',
    content: '<h2>Fire Horse</h2>',
    cover_image: null,
    author_name: 'Wu Xing Zodiac',
    tags: ['fire-horse'],
    read_time: 7,
    published_at: new Date('2026-02-17T00:00:00.000Z'),
  },
  {
    id: 'bp-002',
    slug: 'five-elements-explained',
    title: 'The Five Elements Explained',
    excerpt: 'Elements excerpt',
    content: '<h2>Elements</h2>',
    cover_image: null,
    author_name: 'Wu Xing Zodiac',
    tags: ['wu-xing'],
    read_time: 8,
    published_at: new Date('2026-02-15T00:00:00.000Z'),
  },
]

const queries: string[] = []

// Tagged-template stand-in for neon(): answers by the query's shape
vi.mock('@neondatabase/serverless', () => ({
  neon: () => async (strings: TemplateStringsArray, ...values: unknown[]) => {
    const text = strings.join('?')
    queries.push(text)
    if (text.includes('WHERE slug =')) return databaseRows.filter(row => row.slug === values[0])
    return databaseRows.map(({ content: _content, ...row }) => row)
  },
}))

const { default: handler } = await import('../functions/blog-posts')

async function get(query: string) {
  const response = await handler(new Request(`https://wuxingzodiac.me/api/blog/posts${query}`), {} as never)
  return { status: response.status, body: JSON.parse(await response.text()) }
}

const codePost = CODE_BLOG_POSTS[0]!
const TOTAL = CODE_BLOG_POSTS.length + databaseRows.length
/** Code posts are all newer than the two database rows above */
const codeSlugsNewestFirst = [...CODE_BLOG_POSTS]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  .map(post => post.slug)

beforeEach(() => {
  queries.length = 0
})

describe('blog-posts function', () => {
  it('lists database and code posts together, newest first, without full text', async () => {
    const { status, body } = await get('?page=1')
    expect(status).toBe(200)
    expect(body.posts.map((post: { slug: string }) => post.slug)).toEqual([
      ...codeSlugsNewestFirst,
      '2026-year-of-the-fire-horse',
      'five-elements-explained',
    ])
    expect(body.total).toBe(TOTAL)
    expect(body.page).toBe(1)
    expect(body.totalPages).toBe(1)
    for (const post of body.posts) expect(post).not.toHaveProperty('content')
    // Database fields keep the API's camelCase names
    expect(body.posts[CODE_BLOG_POSTS.length]).toMatchObject({ id: 'bp-001', authorName: 'Wu Xing Zodiac', readTime: 7 })
  })

  it('treats a missing or broken page number as page 1', async () => {
    for (const query of ['', '?page=abc', '?page=0']) {
      const { body } = await get(query)
      expect(body.page).toBe(1)
      expect(body.posts).toHaveLength(TOTAL)
    }
  })

  it('returns an empty page past the end', async () => {
    const { body } = await get('?page=2')
    expect(body.posts).toEqual([])
    expect(body.totalPages).toBe(1)
  })

  it('serves a code post by slug without asking the database', async () => {
    const { status, body } = await get(`?slug=${codePost.slug}`)
    expect(status).toBe(200)
    expect(body).toEqual(codePost)
    expect(queries).toHaveLength(0)
  })

  it('still serves database posts by slug', async () => {
    const { status, body } = await get('?slug=five-elements-explained')
    expect(status).toBe(200)
    expect(body).toMatchObject({ slug: 'five-elements-explained', content: '<h2>Elements</h2>' })
  })

  it('answers 404 for an unknown slug', async () => {
    const { status } = await get('?slug=no-such-post')
    expect(status).toBe(404)
  })

  it('only allows GET', async () => {
    const response = await handler(new Request('https://wuxingzodiac.me/api/blog/posts', { method: 'POST' }), {} as never)
    expect(response.status).toBe(405)
  })
})
