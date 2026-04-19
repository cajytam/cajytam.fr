<script setup lang="ts">
import { PenLine } from 'lucide-vue-next'
</script>

<template>
  <section id="blog" class="mx-auto max-w-7xl px-6 py-32 lg:px-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
    >
      <div class="mb-4 text-sm font-medium tracking-wider text-indigo-500 dark:text-indigo-400">
        BLOG
      </div>

      <h2 class="mb-8 text-5xl font-bold text-zinc-900 lg:text-6xl dark:text-zinc-50">
        Derniers articles
      </h2>

      <p class="mb-20 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        Partage de connaissances techniques, retours d'expérience et bonnes pratiques de
        développement.
      </p>

      <div
        class="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 py-24 text-center dark:border-zinc-700"
      >
        <div
          class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <PenLine class="h-7 w-7 text-indigo-500 dark:text-indigo-400" />
        </div>
        <h3 class="mb-2 text-xl font-semibold text-zinc-800 dark:text-zinc-200">
          Aucun article pour l'instant
        </h3>
        <p class="max-w-sm text-zinc-500 dark:text-zinc-500">
          Des articles techniques arrivent bientôt. Revenez prochainement !
        </p>
      </div>
    </div>
  </section>
</template>
