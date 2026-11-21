<script setup lang="ts">
import { t } from '../i18n'
</script>

<template>
  <section id="work" class="work">
    <div class="container">
      <div class="work__head">
        <div>
          <p class="eyebrow" v-reveal>{{ t.work.eyebrow }}</p>
          <h2 class="section-title" v-reveal="0.05">
            {{ t.work.role }}
            <span class="at">@ {{ t.work.company }}</span>
          </h2>
        </div>
        <span class="work__period" v-reveal="0.1">{{ t.work.period }}</span>
      </div>

      <p class="work__summary" v-reveal>{{ t.work.summary }}</p>

      <ol class="work__list">
        <li v-for="(item, i) in t.work.items" :key="item.title" class="work__item" v-reveal="(i % 2) * 0.08">
          <span class="work__index">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="work__body">
            <span class="work__tag">{{ item.tag }}</span>
            <h3 class="work__title">{{ item.title }}</h3>
            <p class="work__text">{{ item.text }}</p>
          </div>
        </li>
      </ol>

      <div class="edu" v-reveal>
        <span class="eyebrow">{{ t.work.education.eyebrow }}</span>
        <div>
          <h3 class="edu__title">{{ t.work.education.title }}</h3>
          <p class="edu__text">{{ t.work.education.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.work {
  padding: clamp(96px, 12vw, 160px) 0;
}

.work__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
}

.at {
  display: block;
  font-style: italic;
  font-weight: 400;
  color: var(--amber);
}

.work__period {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 8px 14px;
}

.work__summary {
  max-width: 720px;
  margin-top: 32px;
  font-size: clamp(17px, 1.7vw, 20px);
  color: var(--muted);
}

.work__list {
  list-style: none;
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--line);
}

.work__item {
  display: flex;
  gap: 24px;
  padding: 36px 32px 36px 0;
  border-bottom: 1px solid var(--line);
  transition: background 0.3s;
}

.work__item:nth-child(even) {
  padding-left: 32px;
  border-left: 1px solid var(--line);
}

.work__index {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--dim);
  padding-top: 4px;
}

.work__tag {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--amber);
}

.work__title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(22px, 2.4vw, 28px);
  line-height: 1.15;
  margin: 8px 0 10px;
}

.work__text {
  color: var(--muted);
  font-size: 15px;
}

.work__item:hover .work__title {
  color: var(--amber-2);
}

.edu {
  display: flex;
  gap: 48px;
  align-items: baseline;
  margin-top: 64px;
  flex-wrap: wrap;
}

.edu__title {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 600;
}

.edu__text {
  color: var(--muted);
  font-size: 15px;
}

@media (max-width: 760px) {
  .work__list {
    grid-template-columns: 1fr;
  }

  .work__item,
  .work__item:nth-child(even) {
    padding: 28px 0;
    border-left: none;
  }

  .edu {
    gap: 12px;
    flex-direction: column;
  }
}
</style>
