import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vReveal } from './composables/reveal'
import { lang } from './i18n'

document.documentElement.lang = lang.value === 'pt' ? 'pt-BR' : 'en'

createApp(App).directive('reveal', vReveal).mount('#app')
