import type { Directive } from 'vue'

const observer =
  typeof IntersectionObserver !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer?.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      )
    : null

/** v-reveal ou v-reveal="0.2" (atraso em segundos) */
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.setProperty('--delay', `${binding.value}s`)
    if (observer) observer.observe(el)
    else el.classList.add('is-visible')
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
