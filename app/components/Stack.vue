<script setup lang="ts">
const stack: Record<string, string[]> = {
  frontend: ['TypeScript', 'Vue.js', 'React', 'Tailwind CSS', 'Symfony UX', 'Astro'],
  backend: ['PHP', 'Symfony', 'API Platform', 'PrestaShop', 'Python', 'FastAPI'],
  data: ['MySQL', 'PostgreSQL', 'Prisma'],
  devops: ['Docker', 'CI/CD', 'GitHub', 'Vite', 'Jira'],
}
</script>

<template>
  <section id="stack" class="mx-auto max-w-7xl px-6 py-32 lg:px-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
    >
      <div class="mb-4 text-sm font-medium tracking-wider text-indigo-500 dark:text-indigo-400">
        STACK TECHNIQUE
      </div>

      <h2 class="mb-20 text-5xl font-bold text-zinc-900 lg:text-6xl dark:text-zinc-50">
        Technologies favorites
      </h2>

      <div class="space-y-12">
        <div
          v-for="(technologies, category, index) in stack"
          :key="category"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 100 },
          }"
        >
          <h3
            class="mb-6 text-xl font-bold tracking-wider text-zinc-500 uppercase dark:text-zinc-400"
          >
            {{ category }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="(tech, i) in technologies"
              :key="i"
              v-motion
              :initial="{ scale: 1 }"
              :hovered="{ scale: 1.05, y: -2 }"
              class="cursor-pointer rounded-xl border border-zinc-200 bg-zinc-100 px-6 py-3 transition-all hover:border-indigo-400 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-600 dark:hover:bg-zinc-800"
            >
              <span class="font-medium text-zinc-800 dark:text-zinc-200">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
