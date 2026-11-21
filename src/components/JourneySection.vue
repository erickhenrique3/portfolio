<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { t } from '../i18n'

const list = ref<HTMLElement | null>(null)
const fill = ref(0)

function onScroll() {
  if (!list.value) return
  const r = list.value.getBoundingClientRect()
  const mid = window.innerHeight * 0.6
  fill.value = Math.min(1, Math.max(0, (mid - r.top) / r.height))
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fill.value = 1
    return
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section id="journey" class="journey">
    <div class="container journey__grid">
      <div class="journey__head">
        <p class="eyebrow" v-reveal>{{ t.journey.eyebrow }}</p>
        <h2 class="section-title" v-reveal="0.05">{{ t.journey.title }}</h2>
        <p class="journey__intro" v-reveal="0.1">{{ t.journey.intro }}</p>
      </div>

      <ol ref="list" class="steps">
        <span class="steps__line" aria-hidden="true">
          <span class="steps__fill" :style="{ transform: `scaleY(${fill})` }" />
        </span>
        <li
          v-for="(s, i) in t.journey.steps"
          :key="s.title"
          class="step"
          :class="{ 'step--on': fill >= i / t.journey.steps.length }"
          v-reveal
        >
          <span class="step__dot" aria-hidden="true" />
          <div class="step__when">
            <span>{{ s.when }}</span>
            <span v-if="s.age" class="step__age">{{ s.age }}</span>
          </div>
          <h3 class="step__title">{{ s.title }}</h3>
          <p class="step__text">{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.journey {
  padding: clamp(96px, 12vw, 160px) 0;
  border-top: 1px solid var(--line);
}

.journey__grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(40px, 8vw, 120px);
  align-items: start;
}

.journey__head {
  position: sticky;
  top: 120px;
}

.journey__intro {
  margin-top: 24px;
  color: var(--muted);
  font-size: clamp(17px, 1.6vw, 19px);
  max-width: 460px;
}

.steps {
  position: relative;
  list-style: none;
  padding-left: 40px;
}

.steps__line {
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--line);
  overflow: hidden;
}

.steps__fill {
  position: absolute;
  inset: 0;
  background: linear-gradient(var(--amber-2), var(--amber));
  transform-origin: top;
}

.step {
  position: relative;
  padding-bottom: 56px;
}

.step:last-child {
  padding-bottom: 0;
}

.step__dot {
  position: absolute;
  left: -40px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--bg);
  border: 2px solid var(--line);
  transition:
    border-color 0.4s,
    background 0.4s,
    box-shadow 0.4s;
}

.step--on .step__dot {
  border-color: var(--amber);
  background: var(--amber);
  box-shadow: 0 0 0 6px rgba(255, 159, 46, 0.15);
}

.step__when {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
}

.step__age {
  padding: 2px 10px;
  border-radius: 999px;
  background: rgba(255, 159, 46, 0.12);
  color: var(--amber);
}

.step__title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(26px, 3vw, 36px);
  line-height: 1.1;
  margin: 10px 0 10px;
  transition: color 0.4s;
  color: var(--dim);
}

.step--on .step__title {
  color: var(--text);
}

.step__text {
  color: var(--muted);
  font-size: 16px;
  max-width: 520px;
}

@media (max-width: 860px) {
  .journey__grid {
    grid-template-columns: 1fr;
  }

  .journey__head {
    position: static;
  }
}
</style>
