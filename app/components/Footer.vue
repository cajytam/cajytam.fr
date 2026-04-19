<script setup lang="ts">
import { Github, Linkedin } from 'lucide-vue-next'
</script>

<template>
  <footer id="contact" class="border-t border-zinc-200 px-6 py-12 lg:px-12 dark:border-zinc-800">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
        <p class="text-sm text-zinc-500 dark:text-zinc-500">
          © 2026 Cédric Matyja. Tous droits réservés.
        </p>

        <div class="flex gap-4">
          <a
            href="https://github.com/cajytam"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 transition-all hover:border-indigo-400 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-600 dark:hover:bg-zinc-800"
            aria-label="GitHub"
          >
            <Github class="h-4.5 w-4.5 text-zinc-700 dark:text-zinc-300" />
          </a>
          <a
            href="https://gitlab.com/cmatyja"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 transition-all hover:border-indigo-400 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-600 dark:hover:bg-zinc-800"
            aria-label="GitLab"
          >
            <svg
              class="h-4.5 w-4.5 text-zinc-700 dark:text-zinc-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/c-matyja/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 transition-all hover:border-indigo-400 hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-indigo-600 dark:hover:bg-zinc-800"
            aria-label="LinkedIn"
          >
            <Linkedin class="h-4.5 w-4.5 text-zinc-700 dark:text-zinc-300" />
          </a>
        </div>

        <p class="text-sm text-zinc-500 dark:text-zinc-500">Conçu et développé avec passion</p>
      </div>
    </div>
  </footer>
</template>
