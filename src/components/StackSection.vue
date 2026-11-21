<script setup lang="ts">
import { t } from '../i18n'
</script>

<template>
  <section id="stack" class="stack">
    <div class="container">
      <p class="eyebrow" v-reveal>{{ t.stack.eyebrow }}</p>
      <h2 class="section-title" v-reveal="0.05">{{ t.stack.title }}</h2>

      <div class="stack__grid">
        <div v-for="(g, i) in t.stack.groups" :key="g.name" class="stack__group" v-reveal="i * 0.06">
          <h3 class="stack__name">{{ g.name }}</h3>
          <ul>
            <li v-for="item in g.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <span v-for="n in 2" :key="n">
          Laravel ✦ Vue.js ✦ TypeScript ✦ Node.js ✦ Kafka ✦ RabbitMQ ✦ Redis ✦ PostgreSQL ✦ MCP ✦ Docker ✦
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stack {
  padding: clamp(96px, 12vw, 160px) 0 0;
  overflow: hidden;
}

.stack__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  margin-top: 56px;
}

.stack__group {
  padding-top: 20px;
  border-top: 1px solid var(--line);
}

.stack__name {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--amber);
  margin-bottom: 16px;
}

.stack__group ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  color: var(--text);
}

.marquee {
  margin-top: clamp(80px, 10vw, 128px);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 24px 0;
  white-space: nowrap;
}

.marquee__track {
  display: inline-flex;
  animation: marquee 40s linear infinite;
}

.marquee__track span {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(32px, 5vw, 64px);
  color: var(--dim);
  padding-right: 0.5em;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 960px) {
  .stack__grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 40px;
  }
}

@media (max-width: 480px) {
  .stack__grid {
    grid-template-columns: 1fr;
  }
}
</style>
