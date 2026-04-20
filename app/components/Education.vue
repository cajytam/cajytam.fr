<script setup lang="ts">
import { GraduationCap } from 'lucide-vue-next'

const education = [
  {
    school: 'M2i Formation Diplômante',
    location: "Villeneuve d'Ascq",
    degree: "Licence — Concepteur Développeur d'Applications",
    period: '2019',
    description: 'Formation orientée développement web et conception logicielle.',
    technologies: ['PHP', 'Symfony', 'JavaScript', 'Java', 'UML', 'Scrum'],
  },
  {
    school: 'Lycée Malraux',
    location: 'Béthune',
    degree: 'Diplôme de Comptabilité et de Gestion (DCG)',
    period: '2009',
    description: 'Comptabilité, contrôle de gestion et informatique de gestion.',
    technologies: ['Comptabilité', 'Bureautique', 'Informatique de gestion'],
  },
]
</script>

<template>
  <section id="formation" class="mx-auto max-w-7xl px-6 py-32 lg:px-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
    >
      <div class="mb-4 text-sm font-medium tracking-wider text-indigo-500 dark:text-indigo-400">
        FORMATION
      </div>

      <h2 class="mb-20 text-5xl font-bold text-zinc-900 lg:text-6xl dark:text-zinc-50">
        Éducation
      </h2>

      <div class="grid gap-8 lg:grid-cols-2">
        <div
          v-for="(edu, index) in education"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 100 },
          }"
          class="group rounded-2xl border border-zinc-200 bg-linear-to-br from-zinc-100/80 to-zinc-100/40 p-8 transition-all hover:border-indigo-500 dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-900/30 dark:hover:border-indigo-600"
        >
          <GraduationCap class="mb-6 h-12 w-12 text-indigo-500 dark:text-indigo-400" />
          <h3 class="mb-2 text-xl font-bold text-zinc-900 dark:text-zinc-50">{{ edu.degree }}</h3>
          <div class="mb-1 text-zinc-600 dark:text-zinc-400">{{ edu.school }}</div>
          <div class="mb-3 text-sm text-zinc-600 dark:text-zinc-400">{{ edu.location }}</div>
          <div class="mb-4 font-medium text-indigo-500 dark:text-indigo-400">{{ edu.period }}</div>
          <p class="mb-5 leading-relaxed text-zinc-600 dark:text-zinc-400">{{ edu.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tech, i) in edu.technologies"
              :key="i"
              class="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
