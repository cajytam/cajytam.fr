<script setup lang="ts">
const skills = [
  { name: 'PHP / Symfony', level: 90 },
  { name: 'Vue.js / TypeScript', level: 82 },
  { name: 'PostgreSQL / MySQL', level: 85 },
  { name: 'React', level: 74 },
  { name: 'Docker / CI-CD', level: 74 },
  { name: 'Python', level: 65 },
]
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 py-32 lg:px-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
    >
      <div class="mb-4 text-sm font-medium tracking-wider text-indigo-500 dark:text-indigo-400">
        COMPÉTENCES
      </div>

      <h2 class="mb-20 text-5xl font-bold text-zinc-900 lg:text-6xl dark:text-zinc-50">
        Expertises
      </h2>

      <div class="grid gap-12 lg:grid-cols-2">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible-once="{
            opacity: 1,
            x: 0,
            transition: { duration: 600, delay: index * 100 },
          }"
        >
          <div class="mb-3 flex items-center justify-between">
            <span class="text-lg font-medium text-zinc-800 dark:text-zinc-200">{{
              skill.name
            }}</span>
            <span class="font-bold text-indigo-500 dark:text-indigo-400">{{ skill.level }}%</span>
          </div>

          <div class="h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-900">
            <div
              v-motion
              :initial="{ scaleX: 0 }"
              :visible-once="{
                scaleX: 1,
                transition: {
                  duration: 1000,
                  delay: index * 100 + 300,
                  ease: [0.22, 1, 0.36, 1],
                },
              }"
              class="h-full origin-left rounded-full bg-linear-to-r from-indigo-600 to-violet-600"
              :style="{ width: `${skill.level}%` }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
