<template>
  <section class="mx-auto max-w-7xl px-6 py-32 lg:px-12">
    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, ease: [0.22, 1, 0.36, 1] } }"
    >
      <div class="mb-4 text-sm font-medium tracking-wider text-indigo-500 dark:text-indigo-400">
        À PROPOS
      </div>

      <h2 class="mb-12 max-w-3xl text-5xl font-bold text-zinc-900 lg:text-6xl dark:text-zinc-50">
        Transformer des idées en
        <span class="text-indigo-500 dark:text-indigo-400"> réalités numériques</span>
      </h2>

      <div class="grid gap-12 lg:grid-cols-2">
        <div class="space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Développeur Full Stack basé près de Lille, je me spécialise en PHP&nbsp;/&nbsp;Symfony,
            TypeScript&nbsp;/&nbsp;Vue.js&nbsp;/&nbsp;React.js et Python. Avec plus de 5 ans
            d'expérience en développement web, j'accompagne des entreprises dans leur transformation
            digitale.
          </p>
          <p>
            Passionné par le code propre et les architectures bien pensées, j'interviens aussi bien
            sur le backend que sur le frontend pour livrer des applications modernes, performantes
            et maintenables.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8">
          <div>
            <div class="mb-2 text-5xl font-bold text-indigo-500 dark:text-indigo-400">5+</div>
            <div class="text-zinc-600 dark:text-zinc-400">Années en dev web</div>
          </div>
          <div>
            <div class="mb-2 text-5xl font-bold text-indigo-500 dark:text-indigo-400">6</div>
            <div class="text-zinc-600 dark:text-zinc-400">Expériences pro</div>
          </div>
          <div>
            <div class="mb-2 text-5xl font-bold text-indigo-500 dark:text-indigo-400">12+</div>
            <div class="text-zinc-600 dark:text-zinc-400">Ans de transformation</div>
          </div>
          <div>
            <div class="mb-2 text-5xl font-bold text-indigo-500 dark:text-indigo-400">16</div>
            <div class="text-zinc-600 dark:text-zinc-400">Ans d'expérience totale</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
