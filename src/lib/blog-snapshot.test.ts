import { describe, expect, it } from 'vitest'
import { formatBlogDate, getSnapshotPost, getSnapshotPosts } from './blog-snapshot'

describe('formatBlogDate', () => {
  it('shows the UTC date, whatever the time zone (no day-before on midnight posts)', () => {
    expect(formatBlogDate('2026-02-15T00:00:00.000Z')).toBe('February 15, 2026')
    expect(formatBlogDate('2026-02-17T23:30:00.000Z')).toBe('February 17, 2026')
  })
})

describe('blog snapshot', () => {
  it('returns null for a slug that is not in the snapshot', () => {
    expect(getSnapshotPost('no-such-post-slug')).toBeNull()
  })

  it('finds every snapshot post by its own slug', () => {
    for (const post of getSnapshotPosts()) {
      expect(getSnapshotPost(post.slug)).toBe(post)
    }
  })
})
