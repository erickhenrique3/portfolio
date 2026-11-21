<script setup lang="ts">
import { t } from '../i18n'
import ProjectVisual from './ProjectVisual.vue'
</script>

<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="projects__head">
        <p class="eyebrow" v-reveal>{{ t.projects.eyebrow }}</p>
        <h2 class="section-title" v-reveal="0.05">{{ t.projects.title }}</h2>
        <p class="projects__intro" v-reveal="0.1">{{ t.projects.intro }}</p>
      </div>

      <article
        v-for="(p, i) in t.projects.items"
        :key="p.title"
        class="project"
        :class="{ 'project--flip': i % 2 === 1 }"
      >
        <a :href="p.url" target="_blank" rel="noopener" class="project__visual" v-reveal :aria-label="p.title">
          <ProjectVisual :kind="p.visual" />
        </a>
        <div class="project__info" v-reveal="0.1">
          <div class="project__meta">
            <span>{{ String(i + 1).padStart(2, '0') }} / {{ String(t.projects.items.length).padStart(2, '0') }}</span>
            <span>{{ p.year }}</span>
          </div>
          <h3 class="project__title">{{ p.title }}</h3>
          <p class="project__text">{{ p.text }}</p>
          <ul class="project__tags">
            <li v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</li>
          </ul>
          <a :href="p.url" target="_blank" rel="noopener" class="project__link">
            {{ t.projects.code }} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: clamp(96px, 12vw, 160px) 0;
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.projects__intro {
  max-width: 520px;
  margin-top: 20px;
  color: var(--muted);
  font-size: 18px;
}

.project {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
  margin-top: clamp(72px, 10vw, 128px);
}

.project--flip .project__visual {
  order: 2;
}

.project__visual {
  display: block;
}

.project__visual:hover :deep(.visual) {
  transform: translateY(-6px) rotate(-0.6deg);
  border-color: rgba(255, 159, 46, 0.5);
}

.project__meta {
  display: flex;
  justify-content: space-between;
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  color: var(--dim);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
}

.project__title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(34px, 4.6vw, 56px);
  line-height: 1;
  letter-spacing: -0.025em;
  margin: 24px 0 18px;
}

.project__text {
  color: var(--muted);
  font-size: 16px;
}

.project__tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
}

.project__link {
  display: inline-flex;
  gap: 8px;
  margin-top: 28px;
  font-weight: 500;
  color: var(--amber);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}

.project__link:hover {
  border-color: var(--amber);
}

@media (max-width: 860px) {
  .project {
    grid-template-columns: 1fr;
  }

  .project--flip .project__visual {
    order: 0;
  }
}
</style>
