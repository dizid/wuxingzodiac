import type { Context } from "@netlify/functions"
import { neon } from '@neondatabase/serverless'
// Relative import: the `@/` alias only works in Vite, not in the functions bundle
import { CODE_BLOG_POSTS, getCodeBlogPost, mergeBlogPosts } from '../../src/content/blog-posts'

/** Posts per page (the blog pages use the same number) */
const PAGE_SIZE = 24

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  })
}

export default async (req: Request, _context: Context) => {
  if (req.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  try {
    const sql = neon(process.env.DATABASE_URL!)
    const url = new URL(req.url)
    const slug = url.searchParams.get('slug')

    // Single post by slug. Code posts (src/content/blog-posts.ts) need no database.
    if (slug) {
      const codePost = getCodeBlogPost(slug)
      if (codePost) return json(codePost, 200)

      const [post] = await sql`
        SELECT
          id,
          slug,
          title,
          excerpt,
          content,
          cover_image,
          author_name,
          tags,
          read_time,
          published_at,
          created_at
        FROM blog_posts
        WHERE slug = ${slug} AND is_published = true
      `

      if (!post) {
        return new Response(JSON.stringify({ error: 'Post not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        })
      }

      const formattedPost = {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.cover_image,
        authorName: post.author_name,
        tags: post.tags,
        readTime: post.read_time,
        publishedAt: post.published_at
      }

      return new Response(JSON.stringify(formattedPost), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // List of posts (paginated, PAGE_SIZE per page): every published database post
    // (a handful of rows) merged with the code posts, newest first, then one page.
    const pageNumber = parseInt(url.searchParams.get('page') || '1')
    const page = Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1

    const rows = await sql`
      SELECT
        id,
        slug,
        title,
        excerpt,
        cover_image,
        author_name,
        tags,
        read_time,
        published_at
      FROM blog_posts
      WHERE is_published = true
    `

    const databasePosts = rows.map(post => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      coverImage: post.cover_image,
      authorName: post.author_name,
      tags: post.tags,
      readTime: post.read_time,
      publishedAt: post.published_at
    }))
    // The list never carries the full text
    const codePosts = CODE_BLOG_POSTS.map(({ content: _content, ...summary }) => summary)

    const allPosts = mergeBlogPosts(databasePosts, codePosts)
    const total = allPosts.length

    return json({
      posts: allPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE)
    }, 200)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: 'Failed to fetch blog posts', detail: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

export const config = { path: "/api/blog/posts" }
