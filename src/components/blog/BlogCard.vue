<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { BlogPost } from '@/types'

defineProps<{
  post: BlogPost
}>()

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <RouterLink
    :to="`/blog/${post.slug}`"
    class="block group"
  >
    <div class="glass rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]">
      <!-- Cover Image -->
      <div
        v-if="post.coverImage"
        class="w-full h-48 mb-4 rounded-lg overflow-hidden"
      >
        <img
          :src="post.coverImage"
          :alt="post.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <!-- Title -->
      <h3 class="text-xl font-display font-bold multi-element-text mb-2 group-hover:opacity-80 transition-opacity">
        {{ post.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-ash-300 text-sm mb-4 line-clamp-3">
        {{ post.excerpt }}
      </p>

      <!-- Author + Date -->
      <div class="flex items-center justify-between text-xs text-ash-400">
        <span>{{ post.authorName }}</span>
        <span>{{ formatDate(post.publishedAt) }}</span>
      </div>

      <!-- Read Time + Tags -->
      <div class="flex items-center gap-3 mt-3 text-xs text-ash-400">
        <span>{{ post.readTime }} min read</span>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags.slice(0, 3)"
            :key="tag"
            class="px-2 py-1 bg-ash-700/50 text-ash-300 rounded"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
