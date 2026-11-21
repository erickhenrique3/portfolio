<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { lang, t, toggleLang } from '../i18n'

const progress = ref(0)
const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? window.scrollY / max : 0
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const sections = ['journey', 'work', 'projects', 'contact'] as const
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="nav__progress" :style="{ transform: `scaleX(${progress})` }" />
    <div class="nav__inner">
      <a href="#top" class="nav__logo" aria-label="Erick Henrique, início">EH<span>.</span></a>

      <nav class="nav__links" :class="{ 'is-open': open }" aria-label="Seções">
        <a v-for="s in sections" :key="s" :href="`#${s}`" @click="open = false">{{ t.nav[s] }}</a>
      </nav>

      <div class="nav__actions">
        <button class="nav__lang" type="button" :aria-label="lang === 'pt' ? 'Switch to English' : 'Mudar para português'" @click="toggleLang">
          <span :class="{ on: lang === 'pt' }">PT</span>
          <span class="sep">/</span>
          <span :class="{ on: lang === 'en' }">EN</span>
        </button>
        <button class="nav__burger" type="button" :aria-expanded="open" aria-label="Menu" @click="open = !open">
          <span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 50;
  transition:
    background 0.3s,
    backdrop-filter 0.3s;
}

.nav--scrolled {
  background: rgba(15, 13, 11, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}

.nav__progress {
  position: absolute;
  left: 0;
  bottom: -1px;
  height: 2px;
  width: 100%;
  background: var(--amber);
  transform-origin: left;
}

.nav__inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 var(--gutter);
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.nav__logo {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 24px;
  letter-spacing: -0.02em;
}

.nav__logo span {
  color: var(--amber);
}

.nav__links {
  display: flex;
  gap: 32px;
  font-size: 14px;
  color: var(--muted);
}

.nav__links a {
  position: relative;
  transition: color 0.2s;
}

.nav__links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 1px;
  background: var(--amber);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s;
}

.nav__links a:hover {
  color: var(--text);
}

.nav__links a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav__lang {
  font-family: var(--mono);
  font-size: 12px;
  background: none;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--dim);
  padding: 8px 12px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.nav__lang:hover {
  border-color: var(--amber);
}

.nav__lang .on {
  color: var(--amber);
}

.nav__lang .sep {
  margin: 0 4px;
}

.nav__burger {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
}

.nav__burger span {
  width: 16px;
  height: 1.5px;
  background: var(--text);
  transition: transform 0.3s;
}

.nav__burger[aria-expanded='true'] span:first-child {
  transform: translateY(3.75px) rotate(45deg);
}

.nav__burger[aria-expanded='true'] span:last-child {
  transform: translateY(-3.75px) rotate(-45deg);
}

@media (max-width: 760px) {
  .nav__burger {
    display: flex;
  }

  .nav__links {
    position: fixed;
    inset: 68px 0 auto;
    flex-direction: column;
    gap: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--line);
    padding: 8px var(--gutter) 24px;
    font-size: 22px;
    font-family: var(--serif);
    color: var(--text);
    transform: translateY(-120%);
    transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
    z-index: -1;
  }

  .nav__links.is-open {
    transform: none;
  }

  .nav__links a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
  }

  .nav__links a::after {
    display: none;
  }
}
</style>
