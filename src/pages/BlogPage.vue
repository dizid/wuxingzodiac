<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import BlogCard from '@/components/blog/BlogCard.vue'
import type { BlogPost } from '@/types'

useHead({
  title: 'Blog | Wu Xing Zodiac',
  meta: [
    { name: 'description', content: 'Explore articles on Chinese astrology, zodiac insights, five elements wisdom, and the ancient art of Wu Xing.' }
  ]
})

const posts = ref<BlogPost[]>([])
const loading = ref(true)
const error = ref<string | null>(null)
const currentPage = ref(1)
const totalPages = ref(1)

async function fetchPosts(page: number = 1) {
  loading.value = true
  error.value = null

  try {
    const response = await fetch(`/api/blog/posts?page=${page}`)

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }

    const data = await response.json()
    posts.value = data.posts
    currentPage.value = data.page
    totalPages.value = data.totalPages
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred'
  } finally {
    loading.value = false
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    fetchPosts(currentPage.value + 1)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    fetchPosts(currentPage.value - 1)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

onMounted(() => {
  fetchPosts()
})
</script>

<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-5xl md:text-6xl font-display font-bold multi-element-text mb-4">
          Blog
        </h1>
        <p class="text-ash-300 text-lg max-w-2xl mx-auto">
          Insights, stories, and wisdom from the world of Chinese astrology and the Five Elements
        </p>
      </div>

      <!-- Loading State -->
      <div
        v-if="loading"
        class="text-center py-20"
      >
        <div class="inline-block w-12 h-12 border-4 border-[var(--el-500)] border-t-transparent rounded-full animate-spin"></div>
        <p class="mt-4 text-ash-400">Loading posts...</p>
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="text-center py-20"
      >
        <p class="text-red-400 text-lg mb-4">{{ error }}</p>
        <button
          @click="fetchPosts(currentPage)"
          class="glass rounded-lg px-6 py-2 text-ash-200 hover:text-ash-100 transition-colors"
        >
          Try Again
        </button>
      </div>

      <!-- Blog Grid -->
      <div v-else>
        <div
          v-if="posts.length > 0"
          class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <BlogCard
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />
        </div>

        <div
          v-else
          class="text-center py-20 text-ash-400"
        >
          No blog posts yet. Check back soon!
        </div>

        <!-- Pagination -->
        <div
          v-if="totalPages > 1"
          class="flex items-center justify-center gap-4 mt-8"
        >
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="glass rounded-lg px-4 py-2 text-ash-300 hover:text-ash-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            &larr; Previous
          </button>

          <span class="text-ash-300">
            Page {{ currentPage }} of {{ totalPages }}
          </span>

          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="glass rounded-lg px-4 py-2 text-ash-300 hover:text-ash-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
