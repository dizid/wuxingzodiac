<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useAnalytics } from '@/composables/useAnalytics'
import type { BlogPost } from '@/types'

const { trackBlogRead } = useAnalytics()
const route = useRoute()
const post = ref<BlogPost | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const headData = computed(() => ({
  title: post.value ? `${post.value.title} | Wu Xing Zodiac` : 'Blog Post | Wu Xing Zodiac',
  meta: [
    {
      name: 'description',
      content: post.value?.excerpt || 'Read this article on Wu Xing Zodiac blog.'
    }
  ]
}))

useHead(headData)

async function fetchPost() {
  loading.value = true
  error.value = null

  try {
    const slug = route.params.slug as string
    const response = await fetch(`/api/blog/posts?slug=${slug}`)

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Post not found')
      }
      throw new Error('Failed to fetch post')
    }

    post.value = await response.json()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred'
  } finally {
    loading.value = false
  }
}

// Track blog post view when loaded
watch(post, (newPost) => {
  if (newPost) {
    trackBlogRead(newPost.slug, newPost.title)
  }
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

onMounted(() => {
  fetchPost()
})
</script>

<template>
  <div class="min-h-screen py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Back Link -->
      <RouterLink
        to="/blog"
        class="inline-flex items-center gap-2 text-ash-400 hover:text-ash-200 mb-8 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </RouterLink>

      <!-- Loading State -->
      <div
        v-if="loading"
        class="text-center py-20"
      >
        <div class="inline-block w-12 h-12 border-4 border-[var(--el-500)] border-t-transparent rounded-full animate-spin"></div>
        <p class="mt-4 text-ash-400">Loading post...</p>
      </div>

      <!-- Error State -->
      <div
        v-else-if="error"
        class="text-center py-20"
      >
        <p class="text-red-400 text-lg mb-4">{{ error }}</p>
        <button
          @click="fetchPost()"
          class="glass rounded-lg px-6 py-2 text-ash-200 hover:text-ash-100 transition-colors"
        >
          Try Again
        </button>
      </div>

      <!-- Post Content -->
      <article v-else-if="post">
        <div class="glass rounded-xl p-6 md:p-10">
          <!-- Cover Image -->
          <div
            v-if="post.coverImage"
            class="w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden"
          >
            <img
              :src="post.coverImage"
              :alt="post.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Post Header -->
          <header class="mb-8">
            <h1 class="text-4xl md:text-5xl font-display font-bold multi-element-text mb-4">
              {{ post.title }}
            </h1>

            <div class="flex flex-wrap items-center gap-4 text-sm text-ash-400 mb-4">
              <span>By {{ post.authorName }}</span>
              <span class="hidden sm:inline">&#183;</span>
              <span>{{ formatDate(post.publishedAt) }}</span>
              <span class="hidden sm:inline">&#183;</span>
              <span>{{ post.readTime }} min read</span>
            </div>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="px-3 py-1 bg-ash-700/50 text-ash-300 rounded-full text-sm"
              >
                {{ tag }}
              </span>
            </div>
          </header>

          <!-- Post Content -->
          <div
            class="prose-zodiac max-w-none"
            v-html="post.content"
          ></div>
        </div>
      </article>
    </div>
  </div>
</template>
