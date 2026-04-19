<script setup lang="ts">
import { ref } from 'vue'

useSeoMeta({
  title: 'Cédric Matyja — Développeur Full Stack',
  description:
    'Basé près de Lille, spécialisé en PHP / Symfony, TypeScript / Vue.js / React.js et Python.',
})

const selectedArticle = ref<number | null>(null)
</script>

<template>
  <ArticleView
    v-if="selectedArticle !== null"
    :article-id="selectedArticle"
    @back="selectedArticle = null"
  />

  <div
    v-else
    class="min-h-screen bg-zinc-50 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-zinc-50"
  >
    <AppHeader />
    <main class="pt-16">
      <Hero />
      <Experience />
      <Education />
      <Stack />
      <Blog @article-click="selectedArticle = $event" />
      <Footer />
    </main>
  </div>
</template>
