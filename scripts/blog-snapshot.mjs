#!/usr/bin/env node
/**
 * Blog snapshot for prerendering (runs before `vite-ssg build`, see package.json "build").
 *
 * The blog lives in Neon and the browser loads it from /api/blog/posts. Without a
 * snapshot, the prerendered /blog page only says "Loading posts..." and /blog/<slug>
 * isn't prerendered at all (Netlify serves the home page HTML, canonical = home), so
 * search engines and AI crawlers never see the articles.
 *
 * This script reads the published posts from the public blog API (no secrets needed)
 * and writes src/generated/blog-snapshot.json. vite.config.ts prerenders one page per
 * post from it, and BlogPage/BlogPostPage use it as their first render (the browser
 * still refreshes from the API, so a post published after the build shows up too).
 *
 * Never fails the build: if the API can't be reached it keeps an existing snapshot, or
 * writes an empty one (the blog then works exactly as before: loaded in the browser).
 *
 * Env: BLOG_API_ORIGIN (default https://wuxingzodiac.me), BLOG_SNAPSHOT_SKIP=1 to skip.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const OUT_FILE = resolve(ROOT, 'src/generated/blog-snapshot.json')
const API_ORIGIN = (process.env.BLOG_API_ORIGIN || 'https://wuxingzodiac.me').replace(/\/+$/, '')
const REQUEST_TIMEOUT_MS = 15_000
const MAX_PAGES = 50 // 12 posts per page; a safety stop, not a real limit
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

async function getJson(path) {
  const response = await fetch(`${API_ORIGIN}${path}`, {
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    headers: { accept: 'application/json' },
  })
  if (!response.ok) throw new Error(`${path} answered ${response.status}`)
  return response.json()
}

/** Keep only the fields the pages use, with the types they expect. */
function toSnapshotPost(post) {
  return {
    id: String(post.id),
    slug: String(post.slug),
    title: String(post.title),
    excerpt: String(post.excerpt ?? ''),
    content: String(post.content ?? ''),
    coverImage: post.coverImage || undefined,
    authorName: String(post.authorName ?? 'Wu Xing Zodiac'),
    tags: Array.isArray(post.tags) ? post.tags.map(String) : [],
    readTime: Number(post.readTime) || 1,
    publishedAt: String(post.publishedAt),
  }
}

async function fetchAllPosts() {
  const listed = []
  for (let page = 1; page <= MAX_PAGES; page++) {
    const data = await getJson(`/api/blog/posts?page=${page}`)
    listed.push(...data.posts)
    if (page >= (data.totalPages || 1)) break
  }

  const posts = []
  for (const item of listed) {
    // Slugs become file paths in dist/, so only plain lowercase-hyphen slugs
    if (!SLUG_PATTERN.test(item.slug)) {
      console.warn(`[blog-snapshot] skipped post with unusual slug: ${JSON.stringify(item.slug)}`)
      continue
    }
    const full = await getJson(`/api/blog/posts?slug=${encodeURIComponent(item.slug)}`)
    posts.push(toSnapshotPost(full))
  }

  // Newest first, same order as the API's list
  posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
  return posts
}

async function hasExistingSnapshot() {
  try {
    const existing = JSON.parse(await readFile(OUT_FILE, 'utf8'))
    return Array.isArray(existing.posts)
  } catch {
    return false
  }
}

async function writeSnapshot(posts) {
  await mkdir(dirname(OUT_FILE), { recursive: true })
  await writeFile(OUT_FILE, `${JSON.stringify({ source: API_ORIGIN, posts }, null, 2)}\n`)
}

async function main() {
  if (process.env.BLOG_SNAPSHOT_SKIP === '1') {
    if (!(await hasExistingSnapshot())) await writeSnapshot([])
    console.log('[blog-snapshot] skipped (BLOG_SNAPSHOT_SKIP=1)')
    return
  }

  try {
    const posts = await fetchAllPosts()
    await writeSnapshot(posts)
    console.log(`[blog-snapshot] ${posts.length} posts from ${API_ORIGIN}`)
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    if (await hasExistingSnapshot()) {
      console.warn(`[blog-snapshot] API not reachable (${reason}); keeping the existing snapshot`)
    } else {
      await writeSnapshot([])
      console.warn(`[blog-snapshot] API not reachable (${reason}); blog pages will load in the browser only`)
    }
  }
}

await main()
