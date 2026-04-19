<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import { Check, Copy } from 'lucide-vue-next'

const props = defineProps<{
  code: string
  language: string
}>()

const copied = ref(false)

async function handleCopy() {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}

onMounted(async () => {
  const Prism = (await import('prismjs')).default
  await import('prismjs/components/prism-jsx')
  await import('prismjs/components/prism-typescript')
  await import('prismjs/components/prism-tsx')
  Prism.highlightAll()
})

watch(
  () => props.code,
  async () => {
    const Prism = (await import('prismjs')).default
    Prism.highlightAll()
  },
)
</script>

<template>
  <div class="group relative my-8">
    <div class="absolute top-4 right-4 z-10">
      <button
        class="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700"
        @click="handleCopy"
      >
        <Check v-if="copied" class="h-4 w-4" />
        <Copy v-else class="h-4 w-4" />
        {{ copied ? 'Copié' : 'Copier' }}
      </button>
    </div>

    <div class="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <div class="flex items-center gap-2 border-b border-zinc-700 bg-zinc-800/50 px-6 py-3">
        <div class="flex gap-2">
          <div class="h-3 w-3 rounded-full bg-red-500/80" />
          <div class="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div class="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span class="ml-4 font-mono text-xs text-zinc-500">{{ language }}</span>
      </div>

      <pre
        class="overflow-x-auto p-6"
      ><code :class="`language-${language} text-sm`">{{ code }}</code></pre>
    </div>
  </div>
</template>
