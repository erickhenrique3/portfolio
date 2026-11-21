<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const enabled = ref(false)
const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)
const hovering = ref(false)
const visible = ref(false)

let x = 0,
  y = 0,
  rx = 0,
  ry = 0,
  raf = 0

function move(e: PointerEvent) {
  if (!visible.value) {
    rx = e.clientX
    ry = e.clientY
    visible.value = true
  }
  x = e.clientX
  y = e.clientY
  const el = e.target as HTMLElement | null
  hovering.value = !!el?.closest('a, button')
}

function loop() {
  rx += (x - rx) * 0.18
  ry += (y - ry) * 0.18
  if (dot.value) dot.value.style.transform = `translate(${x}px, ${y}px)`
  if (ring.value) ring.value.style.transform = `translate(${rx}px, ${ry}px)`
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  const fine = window.matchMedia('(pointer: fine)').matches
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!fine || reduced) return
  enabled.value = true
  window.addEventListener('pointermove', move, { passive: true })
  raf = requestAnimationFrame(loop)
})

onUnmounted(() => {
  window.removeEventListener('pointermove', move)
  cancelAnimationFrame(raf)
})
</script>

<template>
  <template v-if="enabled && visible">
    <div ref="ring" class="ring" :class="{ 'ring--hover': hovering }" aria-hidden="true" />
    <div ref="dot" class="dot" aria-hidden="true" />
  </template>
</template>

<style scoped>
.dot,
.ring {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 100;
  border-radius: 50%;
}

.dot {
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  background: var(--amber);
}

.ring {
  width: 36px;
  height: 36px;
  margin: -18px 0 0 -18px;
  border: 1px solid rgba(255, 159, 46, 0.5);
  transition:
    width 0.3s,
    height 0.3s,
    margin 0.3s,
    background 0.3s;
}

.ring--hover {
  width: 64px;
  height: 64px;
  margin: -32px 0 0 -32px;
  background: rgba(255, 159, 46, 0.1);
}
</style>
