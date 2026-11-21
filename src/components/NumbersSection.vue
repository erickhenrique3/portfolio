<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { lang, t } from '../i18n'

const root = ref<HTMLElement | null>(null)
const shown = ref<number[]>(t.value.numbers.items.map(() => 0))
let started = false
let io: IntersectionObserver | null = null

function format(n: number, decimals = 0) {
  return n.toLocaleString(lang.value === 'pt' ? 'pt-BR' : 'en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

function run() {
  const targets = t.value.numbers.items.map((i) => i.value)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    shown.value = targets
    return
  }
  const start = performance.now()
  const dur = 1600
  const step = (now: number) => {
    const p = Math.min(1, (now - start) / dur)
    const e = 1 - Math.pow(1 - p, 3)
    shown.value = targets.map((v) => v * e)
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true
        run()
      }
    },
    { threshold: 0.4 },
  )
  if (root.value) io.observe(root.value)
})
onUnmounted(() => io?.disconnect())

watch(lang, () => {
  if (started) shown.value = t.value.numbers.items.map((i) => i.value)
})
</script>

<template>
  <section ref="root" class="numbers">
    <div class="container">
      <p class="eyebrow numbers__eyebrow" v-reveal>{{ t.numbers.title }}</p>
      <div class="numbers__grid">
        <div v-for="(item, i) in t.numbers.items" :key="item.label" class="numbers__item" v-reveal="i * 0.08">
          <span class="numbers__value">
            {{ format(shown[i] ?? 0, item.decimals ?? 0) }}<small>{{ item.suffix }}</small>
          </span>
          <span class="numbers__label">{{ item.label }}</span>
        </div>
      </div>
      <p class="numbers__note" v-reveal>{{ t.numbers.note }}</p>
    </div>
  </section>
</template>

<style scoped>
.numbers {
  background: var(--cream);
  color: var(--ink);
  padding: clamp(72px, 10vw, 128px) 0;
}

.numbers__eyebrow {
  color: var(--amber-deep);
}

.numbers__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.numbers__item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
  border-top: 1px solid rgba(26, 22, 18, 0.18);
}

.numbers__value {
  font-family: var(--serif);
  font-weight: 700;
  font-size: clamp(48px, 7vw, 96px);
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}

.numbers__value small {
  font-size: 0.4em;
  font-weight: 500;
  color: var(--amber-deep);
  letter-spacing: -0.01em;
}

.numbers__label {
  font-size: 15px;
  color: #5c544a;
}

.numbers__note {
  margin-top: 40px;
  font-family: var(--mono);
  font-size: 12px;
  color: #7a7166;
}

@media (max-width: 760px) {
  .numbers__grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }
}
</style>
