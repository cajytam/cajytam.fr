<script setup lang="ts">
import { ArrowDown } from 'lucide-vue-next'
</script>

<template>
  <section id="accueil" class="relative flex h-screen items-center justify-center overflow-hidden">
    <div
      class="absolute inset-0 bg-linear-to-br from-indigo-100 via-zinc-50 to-zinc-50 dark:from-indigo-950 dark:via-zinc-950 dark:to-zinc-950"
    />

    <div class="absolute inset-0 opacity-20 dark:opacity-20">
      <div
        class="absolute inset-0"
        :style="{
          backgroundImage:
            'linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }"
      />
    </div>

    <div class="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
        >
          <div
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 200, duration: 600 } }"
            class="mb-4 font-medium tracking-wider text-indigo-500 dark:text-indigo-400"
          >
            DÉVELOPPEUR FULL STACK
          </div>

          <h1
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: 300, duration: 800, ease: [0.22, 1, 0.36, 1] },
            }"
            class="mb-6 text-6xl font-bold tracking-tight text-zinc-900 lg:text-8xl dark:text-zinc-50"
          >
            Cédric
            <br />
            <span
              class="bg-linear-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent"
            >
              Matyja
            </span>
          </h1>

          <p
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 500, duration: 600 } }"
            class="mb-8 max-w-lg text-xl leading-relaxed text-zinc-600 dark:text-zinc-400"
          >
            Basé près de Lille, spécialisé en PHP&nbsp;/&nbsp;Symfony,
            TypeScript&nbsp;/&nbsp;Vue.js&nbsp;/&nbsp;React.js et Python.
          </p>

          <div
            v-motion
            :initial="{ opacity: 0 }"
            :enter="{ opacity: 1, transition: { delay: 700, duration: 600 } }"
            class="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              class="rounded-lg bg-indigo-600 px-8 py-4 font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Me contacter
            </a>
            <a
              href="#experience"
              class="rounded-lg border border-zinc-300 px-8 py-4 font-medium text-zinc-700 transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600"
            >
              Mon parcours
            </a>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { delay: 400, duration: 1000, ease: [0.22, 1, 0.36, 1] },
          }"
          class="relative flex justify-center lg:justify-end"
        >
          <div class="relative">
            <div
              class="absolute inset-0 scale-110 rounded-full bg-linear-to-br from-indigo-600 to-violet-600 opacity-20 blur-3xl dark:opacity-30"
            />
            <div class="relative h-80 w-80 lg:h-96 lg:w-96">
              <img
                src="/portrait.png"
                alt="Cédric Matyja"
                class="relative z-10 h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 1200, duration: 600 } }"
      class="absolute bottom-12 left-1/2 -translate-x-1/2"
    >
      <ArrowDown class="h-6 w-6 animate-bounce text-zinc-400 dark:text-zinc-500" />
    </div>
  </section>
</template>
