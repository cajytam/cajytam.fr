import { onMounted, ref } from 'vue'

export function useAppTheme() {
  const isDark = ref(true)

  function applyTheme(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  function toggleDark() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  onMounted(() => {
    const stored = localStorage.getItem('theme')
    isDark.value = stored ? stored === 'dark' : true
    applyTheme(isDark.value)
  })

  return { isDark, toggleDark }
}
