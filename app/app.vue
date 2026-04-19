<template>
  <NuxtPage />
</template>

<script>
// Inline script prevents flash of wrong theme before hydration
if (import.meta.client) {
  const stored = localStorage.getItem('theme')
  const dark = stored ? stored === 'dark' : true
  document.documentElement.classList.toggle('dark', dark)
}
</script>
