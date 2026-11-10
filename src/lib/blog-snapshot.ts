/**
 * Build-time snapshot of the published blog posts (written by scripts/blog-snapshot.mjs
 * before the build). Used as the first render of /blog and /blog/<slug>, so those pages
 * are prerendered with their real content and hydrate without a "Loading..." flash.
 * The pages still refresh from /api/blog/posts in the browser.
 *
 * The file is generated (gitignored). When it's missing (dev without a build, tests) the
 * glob below returns nothing and the blog behaves as before: loaded in the browser only.
 */
import type { BlogPost } from '@/types'

interface BlogSnapshotFile {
  posts: BlogPost[]
}

const snapshotFiles = import.meta.glob<BlogSnapshotFile>('../generated/blog-snapshot.json', {
  eager: true,
  import: 'default',
})

const snapshotPosts: BlogPost[] = Object.values(snapshotFiles)[0]?.posts ?? []

/** Posts per page, same as the blog API */
export const BLOG_PAGE_SIZE = 12

/** All snapshot posts, newest first */
export function getSnapshotPosts(): BlogPost[] {
  return snapshotPosts
}

/** One snapshot post by slug, or null when it isn't in the snapshot */
export function getSnapshotPost(slug: string): BlogPost | null {
  return snapshotPosts.find(post => post.slug === slug) ?? null
}

/**
 * "February 15, 2026". In UTC, so the prerendered date (built in UTC) and the visitor's
 * browser always agree; a local time zone would show the day before west of UTC for
 * posts published at midnight UTC.
 */
export function formatBlogDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
