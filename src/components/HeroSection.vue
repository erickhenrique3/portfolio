<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { links, t } from '../i18n'

const roleIndex = ref(0)
let timer = 0

onMounted(() => {
  timer = window.setInterval(() => {
    roleIndex.value = (roleIndex.value + 1) % t.value.hero.roles.length
  }, 2400)
})
onUnmounted(() => clearInterval(timer))

const role = computed(() => t.value.hero.roles[roleIndex.value % t.value.hero.roles.length])
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__glow" aria-hidden="true" />
    <div class="container hero__inner">
      <p class="hero__kicker">
        <span class="pulse" aria-hidden="true" />
        {{ t.hero.available }}
      </p>

      <h1 class="hero__name">
        <span class="line"><span class="word">Erick</span></span>
        <span class="line"><span class="word word--italic">Henrique<em>.</em></span></span>
      </h1>

      <div class="hero__role" aria-live="polite">
        <span class="hero__role-label">{{ t.hero.focus }}</span>
        <span :key="role" class="hero__role-word">{{ role }}</span>
      </div>

      <p class="hero__intro">{{ t.hero.intro }}</p>

      <div class="hero__cta">
        <a href="#projects" class="btn btn--primary">{{ t.hero.ctaProjects }} <span aria-hidden="true">→</span></a>
        <a :href="links.linkedin" target="_blank" rel="noopener" class="btn">LinkedIn</a>
        <a :href="links.github" target="_blank" rel="noopener" class="btn">GitHub</a>
      </div>
    </div>

    <a href="#statement" class="hero__scroll" aria-label="Rolar para baixo">
      <span>scroll</span>
      <span class="hero__scroll-line" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 120px 0 96px;
}

.hero__glow {
  position: absolute;
  width: 70vmax;
  height: 70vmax;
  right: -25vmax;
  top: -30vmax;
  background: radial-gradient(circle, rgba(255, 159, 46, 0.18), transparent 60%);
  filter: blur(20px);
  animation: drift 14s ease-in-out infinite alternate;
}

@keyframes drift {
  to {
    transform: translate(-8vmax, 10vmax) scale(1.1);
  }
}

.hero__inner {
  position: relative;
}

.hero__kicker {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 8px 16px;
  animation: fade 1s 0.1s both;
}

.pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  70% {
    box-shadow: 0 0 0 10px rgba(74, 222, 128, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
  }
}

.hero__name {
  font-family: var(--serif);
  font-weight: 700;
  font-size: clamp(64px, 15vw, 200px);
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin: 28px 0 24px;
}

.line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.06em;
}

.word {
  display: inline-block;
  animation: rise 1.1s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.line:nth-child(2) .word {
  animation-delay: 0.12s;
}

.word--italic {
  font-style: italic;
  font-weight: 400;
  color: var(--amber);
}

.word--italic em {
  color: var(--text);
  font-style: normal;
}

@keyframes rise {
  from {
    transform: translateY(105%);
  }
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

.hero__role {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
  font-size: clamp(18px, 2.4vw, 26px);
  animation: fade 1s 0.4s both;
}

.hero__role-label {
  color: var(--muted);
}

.hero__role-word {
  display: inline-block;
  font-family: var(--serif);
  font-style: italic;
  color: var(--amber-2);
  animation: rolein 0.5s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

@keyframes rolein {
  from {
    opacity: 0;
    transform: translateY(12px);
    filter: blur(4px);
  }
}

.hero__intro {
  max-width: 560px;
  margin-top: 20px;
  font-size: clamp(16px, 1.6vw, 19px);
  color: var(--muted);
  animation: fade 1s 0.55s both;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
  animation: fade 1s 0.7s both;
}

.hero__scroll {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--dim);
}

.hero__scroll-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(var(--amber), transparent);
  animation: scrollline 2s ease-in-out infinite;
  transform-origin: top;
}

@keyframes scrollline {
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
    opacity: 0;
  }
}

@media (max-width: 560px) {
  .hero__scroll {
    display: none;
  }
}
</style>
