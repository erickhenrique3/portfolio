<script setup lang="ts">
defineProps<{ kind: string }>()
</script>

<template>
  <div class="visual" aria-hidden="true">
    <!-- Microsserviços: serviços ligados ao Kafka, com eventos circulando -->
    <svg v-if="kind === 'arch'" viewBox="0 0 400 300" class="arch">
      <defs>
        <path id="p-order" d="M200 150 L90 70" />
        <path id="p-product" d="M200 150 L310 70" />
        <path id="p-user" d="M200 150 L200 250" />
      </defs>
      <g class="links">
        <use href="#p-order" />
        <use href="#p-product" />
        <use href="#p-user" />
      </g>
      <circle r="5" class="evt">
        <animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
          <mpath href="#p-order" />
        </animateMotion>
      </circle>
      <circle r="5" class="evt">
        <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite">
          <mpath href="#p-product" />
        </animateMotion>
      </circle>
      <circle r="5" class="evt evt--back">
        <animateMotion dur="2.4s" begin="1.8s" repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
          <mpath href="#p-product" />
        </animateMotion>
      </circle>

      <g class="node node--kafka">
        <rect x="150" y="125" width="100" height="50" rx="12" />
        <text x="200" y="155">Kafka</text>
      </g>
      <g class="node">
        <rect x="30" y="45" width="120" height="50" rx="12" />
        <text x="90" y="66">order</text>
        <text x="90" y="83" class="sub">Fastify</text>
      </g>
      <g class="node">
        <rect x="250" y="45" width="120" height="50" rx="12" />
        <text x="310" y="66">product</text>
        <text x="310" y="83" class="sub">NestJS</text>
      </g>
      <g class="node">
        <rect x="140" y="225" width="120" height="50" rx="12" />
        <text x="200" y="246">user</text>
        <text x="200" y="263" class="sub">Koa · JWT</text>
      </g>
      <text x="120" y="122" class="label">order_created</text>
      <text x="282" y="122" class="label">order_validated</text>
    </svg>

    <!-- Tempo real: reações subindo -->
    <div v-else-if="kind === 'realtime'" class="rt">
      <div class="rt__screen">
        <span class="rt__live">● live</span>
        <span v-for="(e, i) in ['🔥', '👏', '🚀', '❤️', '😂', '🔥', '🚀', '👏']" :key="i" class="rt__emoji" :style="{ '--i': i, '--x': [12, 62, 30, 80, 46, 20, 70, 54][i] + '%' }">{{ e }}</span>
      </div>
      <div class="rt__bar">
        <span v-for="e in ['🔥', '👏', '🚀', '❤️', '😂']" :key="e">{{ e }}</span>
      </div>
    </div>

    <!-- Chat -->
    <div v-else class="chat">
      <div class="chat__msg chat__msg--in" style="--i: 0">Socket.IO conectado ✓</div>
      <div class="chat__msg chat__msg--out" style="--i: 1">Bora testar o tempo real?</div>
      <div class="chat__msg chat__msg--in" style="--i: 2">Chegou na hora ⚡</div>
      <div class="chat__typing" style="--i: 3"><span /><span /><span /></div>
    </div>
  </div>
</template>

<style scoped>
.visual {
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 20px;
  border: 1px solid var(--line);
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 159, 46, 0.12), transparent 55%),
    linear-gradient(160deg, #1b1713, #110f0c);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1),
    border-color 0.4s;
}

.visual::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 28px 28px;
}

/* arch */
.arch {
  width: 88%;
  position: relative;
}

.links use {
  stroke: #3a332b;
  stroke-width: 2;
  stroke-dasharray: 5 6;
  fill: none;
}

.evt {
  fill: var(--amber);
  filter: drop-shadow(0 0 6px var(--amber));
}

.evt--back {
  fill: #4ade80;
  filter: drop-shadow(0 0 6px #4ade80);
}

.node rect {
  fill: #1f1a15;
  stroke: #3a332b;
}

.node--kafka rect {
  fill: var(--amber);
  stroke: var(--amber);
}

.node text {
  font-family: var(--mono);
  font-size: 14px;
  fill: var(--text);
  text-anchor: middle;
}

.node--kafka text {
  fill: var(--ink);
  font-weight: 700;
}

.node .sub {
  font-size: 10px;
  fill: var(--muted);
}

.label {
  font-family: var(--mono);
  font-size: 9px;
  fill: var(--dim);
  text-anchor: middle;
}

/* realtime */
.rt {
  position: relative;
  width: 78%;
  height: 78%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rt__screen {
  position: relative;
  flex: 1;
  border-radius: 14px;
  background: #0c0a08;
  border: 1px solid #2a251f;
  overflow: hidden;
}

.rt__live {
  position: absolute;
  top: 10px;
  left: 12px;
  font-family: var(--mono);
  font-size: 11px;
  color: #f87171;
}

.rt__emoji {
  position: absolute;
  bottom: -30px;
  left: var(--x);
  font-size: 26px;
  animation: floatup 3.2s ease-in infinite;
  animation-delay: calc(var(--i) * 0.45s);
}

@keyframes floatup {
  0% {
    transform: translateY(0) scale(0.6);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: translateY(-220px) scale(1.15) rotate(12deg);
    opacity: 0;
  }
}

.rt__bar {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 8px;
  border-radius: 999px;
  background: #1f1a15;
  border: 1px solid #2a251f;
  font-size: 20px;
}

/* chat */
.chat {
  position: relative;
  width: 76%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat__msg,
.chat__typing {
  max-width: 78%;
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  animation: pop 6s infinite;
  animation-delay: calc(var(--i) * 0.7s);
  opacity: 0;
}

.chat__msg--in,
.chat__typing {
  background: #1f1a15;
  border: 1px solid #2a251f;
  border-bottom-left-radius: 4px;
}

.chat__msg--out {
  align-self: flex-end;
  background: var(--amber);
  color: var(--ink);
  border-bottom-right-radius: 4px;
  font-weight: 500;
}

.chat__typing {
  display: flex;
  gap: 5px;
  width: fit-content;
}

.chat__typing span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--muted);
  animation: blink 1s infinite;
}

.chat__typing span:nth-child(2) {
  animation-delay: 0.15s;
}

.chat__typing span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes pop {
  0%,
  4% {
    opacity: 0;
    transform: translateY(10px) scale(0.96);
  }
  10%,
  85% {
    opacity: 1;
    transform: none;
  }
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  50% {
    opacity: 0.3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .chat__msg,
  .chat__typing {
    opacity: 1;
  }
  .rt__emoji {
    display: none;
  }
}
</style>
