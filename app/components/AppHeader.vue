<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { Menu, Moon, Sun, X } from 'lucide-vue-next'

import { useAppTheme } from '~/composables/useAppTheme'

const { isDark, toggleDark } = useAppTheme()
const mobileOpen = ref(false)
const activeSection = ref('accueil')

const navLinks = [
  { label: 'Accueil', href: '#accueil', id: 'accueil' },
  { label: 'Expérience', href: '#experience', id: 'experience' },
  { label: 'Formation', href: '#formation', id: 'formation' },
  { label: 'Stack', href: '#stack', id: 'stack' },
  { label: 'Blog', href: '#blog', id: 'blog' },
]

function closeMenu() {
  mobileOpen.value = false
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  const sectionIds = navLinks.map((l) => l.id)
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean) as HTMLElement[]

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
  )

  sections.forEach((s) => observer!.observe(s))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <header
    class="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-lg transition-colors dark:border-zinc-800 dark:bg-zinc-950/80"
  >
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-12">
      <!-- Logo -->
      <a href="#accueil" class="nav-logo" aria-label="Retour à l'accueil" @click="closeMenu">
        CM<span class="text-indigo-500 dark:text-indigo-400">.</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="relative px-3 py-2 text-sm font-medium transition-colors"
          :class="
            activeSection === link.id
              ? 'text-zinc-900 dark:text-zinc-50'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
          "
        >
          {{ link.label }}
          <span
            class="absolute right-3 bottom-0 left-3 h-0.5 origin-left rounded-full bg-indigo-500 transition-all duration-300 dark:bg-indigo-400"
            :class="activeSection === link.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'"
          />
        </a>
      </nav>

      <!-- Right actions -->
      <div class="flex items-center gap-2">
        <button
          class="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
          @click="() => toggleDark()"
        >
          <Sun v-if="isDark" class="h-4.5 w-4.5" />
          <Moon v-else class="h-4.5 w-4.5" />
        </button>

        <button
          class="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          @click="mobileOpen = !mobileOpen"
        >
          <X v-if="mobileOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="border-t border-zinc-200 bg-white/95 backdrop-blur-lg md:hidden dark:border-zinc-800 dark:bg-zinc-950/95"
    >
      <nav class="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors"
          :class="
            activeSection === link.id
              ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50'
              : 'text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-100'
          "
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-logo {
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  color: var(--color-zinc-900);
  letter-spacing: -0.05rem;
  text-decoration: none;
  line-height: 1;
}

:is(.dark *) .nav-logo {
  color: var(--color-zinc-50);
}
</style>
