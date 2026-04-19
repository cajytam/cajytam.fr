<script setup lang="ts">
import { onMounted } from 'vue'

import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-vue-next'

defineProps<{
  articleId: number
}>()

const emit = defineEmits<{
  back: []
}>()

const codeExamples = {
  composition: `function Card({ children, header, footer }) {
  return (
    <div className="card">
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// Utilisation
<Card
  header={<h2>Mon titre</h2>}
  footer={<button>Action</button>}
>
  <p>Contenu de la carte</p>
</Card>`,

  renderProps: `function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return render(position);
}

// Utilisation
<MouseTracker
  render={({ x, y }) => (
    <div>Position: {x}, {y}</div>
  )}
/>`,

  hooks: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Utilisation
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  return <ProfileCard user={data} />;
}`,
}

const tags = ['React', 'JavaScript', 'TypeScript', 'Patterns', 'Hooks']

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-50">
    <header class="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg">
      <div class="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <button
          class="flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-200"
          @click="emit('back')"
        >
          <ArrowLeft class="h-5 w-5" />
          Retour
        </button>

        <button class="flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-200">
          <Share2 class="h-5 w-5" />
          Partager
        </button>
      </div>
    </header>

    <div class="relative h-[60vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&h=900&fit=crop"
        alt="Article cover"
        class="h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
    </div>

    <article class="relative z-10 mx-auto -mt-32 max-w-4xl px-6">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <div class="mb-6">
          <span class="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
            React
          </span>
        </div>

        <h1 class="mb-8 text-5xl leading-tight font-bold lg:text-7xl">
          Les patterns avancés en React
        </h1>

        <div class="mb-12 flex items-center gap-6 text-zinc-400">
          <div class="flex items-center gap-2">
            <Calendar class="h-5 w-5" />
            15 Mars 2026
          </div>
          <div class="flex items-center gap-2">
            <Clock class="h-5 w-5" />
            8 min de lecture
          </div>
        </div>

        <div class="prose prose-invert prose-lg max-w-none">
          <p class="mb-8 text-xl leading-relaxed text-zinc-300">
            React a révolutionné la façon dont nous construisons des interfaces utilisateur. Dans
            cet article, nous allons explorer des patterns avancés qui vous permettront de créer des
            composants plus flexibles, réutilisables et maintenables.
          </p>

          <h2 class="mt-16 mb-6 text-3xl font-bold">1. Composition de composants</h2>

          <p class="mb-6 leading-relaxed text-zinc-400">
            La composition est au cœur de React. Au lieu d'utiliser l'héritage, React favorise la
            composition de composants pour créer des interfaces complexes à partir de briques
            simples.
          </p>

          <CodeBlock language="tsx" :code="codeExamples.composition" />

          <h2 class="mt-16 mb-6 text-3xl font-bold">2. Render Props Pattern</h2>

          <p class="mb-6 leading-relaxed text-zinc-400">
            Le pattern Render Props permet de partager de la logique entre composants en utilisant
            une prop dont la valeur est une fonction.
          </p>

          <CodeBlock language="tsx" :code="codeExamples.renderProps" />

          <div class="my-12">
            <div class="relative aspect-video overflow-hidden rounded-2xl bg-zinc-900">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div
                    class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600"
                  >
                    <div
                      class="ml-1 h-0 w-0 border-t-8 border-b-8 border-l-12 border-t-transparent border-b-transparent border-l-white"
                    />
                  </div>
                  <p class="text-zinc-400">Démo vidéo - Patterns React en action</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="mt-16 mb-6 text-3xl font-bold">3. Hooks personnalisés</h2>

          <p class="mb-6 leading-relaxed text-zinc-400">
            Les hooks personnalisés permettent d'extraire la logique de composants dans des
            fonctions réutilisables. C'est l'une des fonctionnalités les plus puissantes de React.
          </p>

          <CodeBlock language="tsx" :code="codeExamples.hooks" />

          <div class="my-12 rounded-2xl border border-indigo-900 bg-indigo-950/30 p-8">
            <h3 class="mb-3 text-xl font-bold text-indigo-400">💡 Conseil pratique</h3>
            <p class="leading-relaxed text-zinc-300">
              Préfixez toujours vos hooks personnalisés avec "use" pour respecter les conventions
              React et permettre au linter de détecter les violations des règles des hooks.
            </p>
          </div>

          <h2 class="mt-16 mb-6 text-3xl font-bold">Conclusion</h2>

          <p class="mb-6 leading-relaxed text-zinc-400">
            Ces patterns avancés sont essentiels pour écrire du code React de qualité
            professionnelle. La composition, les render props et les hooks personnalisés vous
            permettront de créer des applications plus maintenables et évolutives.
          </p>

          <p class="leading-relaxed text-zinc-400">
            Dans le prochain article, nous explorerons les techniques d'optimisation des
            performances en React, notamment l'utilisation de React.memo, useMemo et useCallback.
          </p>
        </div>

        <div class="mt-16 flex flex-wrap gap-3 border-t border-zinc-800 pt-12">
          <span
            v-for="tag in tags"
            :key="tag"
            class="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </article>

    <div class="h-32" />
  </div>
</template>
