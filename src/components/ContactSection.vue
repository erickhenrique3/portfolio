<script setup lang="ts">
import { cv, links, t } from '../i18n'
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__glow" aria-hidden="true" />
    <div class="container contact__inner">
      <p class="eyebrow" v-reveal>{{ t.contact.eyebrow }}</p>
      <h2 class="contact__title" v-reveal="0.05">{{ t.contact.title }}</h2>
      <p class="contact__text" v-reveal="0.1">{{ t.contact.text }}</p>
      <div class="contact__links" v-reveal="0.15">
        <a :href="links.linkedin" target="_blank" rel="noopener" class="btn btn--primary">LinkedIn <span aria-hidden="true">↗</span></a>
        <a :href="links.github" target="_blank" rel="noopener" class="btn">GitHub <span aria-hidden="true">↗</span></a>
        <a :href="cv.href" download class="btn">{{ cv.label }} <span aria-hidden="true">↓</span></a>
      </div>
    </div>

    <footer class="footer">
      <div class="container footer__inner">
        <span>© {{ new Date().getFullYear() }} Erick Henrique</span>
        <span>{{ t.footer }}</span>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  padding: clamp(120px, 16vw, 200px) 0 0;
  overflow: hidden;
}

.contact__glow {
  position: absolute;
  left: 50%;
  bottom: -40vmax;
  width: 90vmax;
  height: 70vmax;
  transform: translateX(-50%);
  background: radial-gradient(ellipse, rgba(255, 159, 46, 0.22), transparent 60%);
  pointer-events: none;
}

.contact__inner {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact__title {
  font-family: var(--serif);
  font-weight: 600;
  font-size: clamp(40px, 8vw, 112px);
  line-height: 0.98;
  letter-spacing: -0.015em;
  max-width: 14ch;
  margin-top: 16px;
}

.contact__text {
  max-width: 520px;
  margin-top: 24px;
  color: var(--muted);
  font-size: 18px;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 40px;
}

.footer {
  position: relative;
  margin-top: clamp(96px, 12vw, 160px);
  border-top: 1px solid var(--line);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding: 28px var(--gutter);
  font-family: var(--mono);
  font-size: 12px;
  color: var(--dim);
}
</style>
