<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { t } from '../i18n'

// Palavras entre *asteriscos* ficam em destaque (âmbar)
const words = computed(() =>
  t.value.statement.text.split(' ').map((w) => {
    const hl = w.startsWith('*')
    return { text: w.replace(/\*/g, ''), hl }
  }),
)

const el = ref<HTMLElement | null>(null)
const progress = ref(0)

function onScroll() {
  if (!el.value) return
  const r = el.value.getBoundingClientRect()
  const vh = window.innerHeight
  // 0 quando o bloco entra pela base, 1 quando chega a ~35% do topo
  const p = (vh - r.top) / (vh * 0.65 + r.height * 0.5)
  progress.value = Math.min(1, Math.max(0, p))
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    progress.value = 1
    return
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const lit = (i: number) => i / words.value.length < progress.value
</script>

<template>
  <section id="statement" class="statement">
    <div class="container">
      <p ref="el" class="statement__text">
        <template v-for="(w, i) in words" :key="i"
          ><span class="w" :class="{ hl: w.hl, lit: lit(i) }">{{ w.text }}</span>{{ ' ' }}</template
        >
      </p>
    </div>
  </section>
</template>

<style scoped>
.statement {
  padding: clamp(96px, 16vw, 200px) 0;
  border-top: 1px solid var(--line);
}

.statement__text {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(32px, 6vw, 76px);
  line-height: 1.08;
  letter-spacing: -0.025em;
  max-width: 18ch;
  margin: 0 auto;
  text-align: center;
}

.w {
  color: #3a332b;
  transition:
    color 0.4s,
    filter 0.4s;
  filter: blur(1.5px);
}

.w.lit {
  color: var(--text);
  filter: none;
}

.w.hl.lit {
  color: var(--amber);
  font-style: italic;
}

@media (max-width: 560px) {
  .statement__text {
    max-width: none;
  }
}
</style>
