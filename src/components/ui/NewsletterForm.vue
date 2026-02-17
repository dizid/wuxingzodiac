<script setup lang="ts">
import { ref } from 'vue'
import { useAnalytics } from '@/composables/useAnalytics'

const props = withDefaults(defineProps<{
  sourcePage?: string
}>(), {
  sourcePage: 'homepage',
})

const { trackNewsletterSignup } = useAnalytics()

const email = ref('')
const submitted = ref(false)
const errorMsg = ref('')

function handleSubmit(event: Event) {
  errorMsg.value = ''

  if (!email.value.trim()) {
    errorMsg.value = 'Please enter your email address.'
    return
  }

  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
  })
    .then(() => {
      submitted.value = true
      trackNewsletterSignup(props.sourcePage)
    })
    .catch(() => {
      errorMsg.value = 'Something went wrong. Please try again.'
    })
}
</script>

<template>
  <div>
    <!-- Success state -->
    <div v-if="submitted" class="glass rounded-xl p-6 text-center">
      <p class="text-ash-100 text-lg font-semibold">You're in!</p>
      <p class="text-ash-300 mt-2">Watch your inbox for zodiac insights.</p>
    </div>

    <!-- Form state -->
    <form
      v-else
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p class="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div class="flex flex-col sm:flex-row gap-3">
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          class="flex-1 px-6 py-4 bg-ash-900/50 border border-ash-700 rounded-xl text-ash-100 placeholder-ash-500 focus:border-[var(--el-500)] focus:ring-2 focus:ring-[var(--el-500)]/20 outline-none transition-all"
        />
        <button type="submit" class="btn-element px-8 py-4 font-semibold">
          Subscribe
        </button>
      </div>

      <p v-if="errorMsg" class="text-sm text-red-400 mt-3 text-center">
        {{ errorMsg }}
      </p>

      <p class="text-xs text-ash-500 mt-4 text-center">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  </div>
</template>
