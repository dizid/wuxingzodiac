// Mock blog post data for E2E tests
export const mockBlogPosts = [
  {
    id: '1',
    slug: 'understanding-wu-xing',
    title: 'Understanding Wu Xing: The Five Elements',
    excerpt: 'Explore the ancient Chinese system of Five Elements and how they shape your zodiac personality.',
    content: '<h2>The Five Elements</h2><p>Wood, Fire, Earth, Metal, and Water form the foundation of Chinese cosmology.</p>',
    coverImage: null,
    authorName: 'Wu Xing Team',
    publishedAt: '2026-01-15T10:00:00Z',
    tags: ['wu-xing', 'elements', 'basics'],
    readTime: 5,
  },
  {
    id: '2',
    slug: 'fire-horse-2026',
    title: '2026: Year of the Fire Horse',
    excerpt: 'What the rare Fire Horse year means for every zodiac sign.',
    content: '<h2>The Fire Horse Returns</h2><p>Every 60 years, the Fire Horse returns.</p>',
    coverImage: 'https://example.com/fire-horse.jpg',
    authorName: 'Wu Xing Team',
    publishedAt: '2026-02-01T10:00:00Z',
    tags: ['fire-horse', '2026', 'predictions'],
    readTime: 8,
  },
  {
    id: '3',
    slug: 'compatibility-guide',
    title: 'Chinese Zodiac Compatibility Guide',
    excerpt: 'Find out which zodiac signs are most compatible with yours.',
    content: '<h2>Compatibility Basics</h2><p>In Chinese astrology, compatibility depends on both animal and element.</p>',
    coverImage: null,
    authorName: 'Wu Xing Team',
    publishedAt: '2026-02-10T10:00:00Z',
    tags: ['compatibility', 'relationships'],
    readTime: 6,
  },
]

// Single post for blog-post page tests
export const singlePost = mockBlogPosts[0]
