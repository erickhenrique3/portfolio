import { ref, computed } from 'vue'

export type Lang = 'pt' | 'en'

const saved = (() => {
  try {
    return localStorage.getItem('lang') as Lang | null
  } catch {
    return null
  }
})()

export const lang = ref<Lang>(saved ?? (navigator.language.startsWith('pt') ? 'pt' : 'en'))

export function toggleLang() {
  lang.value = lang.value === 'pt' ? 'en' : 'pt'
  try {
    localStorage.setItem('lang', lang.value)
  } catch {
    /* sem storage: só não lembra a escolha */
  }
  document.documentElement.lang = lang.value === 'pt' ? 'pt-BR' : 'en'
}

export const links = {
  linkedin: 'https://www.linkedin.com/in/erick-henrique-269108340/',
  github: 'https://github.com/erickhenrique3',
}

const content = {
  pt: {
    nav: { work: 'Experiência', projects: 'Projetos', stack: 'Stack', contact: 'Contato' },
    hero: {
      kicker: 'Desenvolvedor Full Stack · Paraná, Brasil',
      focus: 'Foco em',
      roles: ['back-end', 'arquitetura de software', 'IA aplicada', 'sistemas distribuídos'],
      intro:
        'Construo produtos web de ponta a ponta com PHP, Laravel, Vue e TypeScript, e coloco IA para trabalhar dentro deles.',
      ctaProjects: 'Ver projetos',
      available: 'Aberto a oportunidades',
    },
    statement: {
      text: 'Gosto de sistemas que *aguentam* *escala*, de código que o próximo dev *entende* e de *IA* que resolve problema *real*.',
    },
    numbers: {
      title: 'Na Greenn, em números',
      items: [
        { value: 1900, suffix: '+', label: 'commits em produção' },
        { value: 580, suffix: '', label: 'pull requests' },
        { value: 330, suffix: '', label: 'entregas únicas' },
        { value: 2.5, suffix: ' anos', label: 'de casa', decimals: 1 },
      ],
      note: 'Repositórios privados: por isso esses números não aparecem no meu GitHub.',
    },
    work: {
      eyebrow: 'Experiência',
      role: 'Desenvolvedor Full Stack',
      company: 'Greenn',
      period: 'mai 2024 — hoje',
      summary:
        'Trabalho num ecossistema de produtos digitais usado por milhares de clientes: CRM SaaS multi-tenant (e-mail marketing, páginas e automações), painel do produtor, ERP interno, área de membros e uma extensão de Chrome que leva o CRM para o WhatsApp Web.',
      items: [
        {
          tag: 'IA',
          title: 'IA dentro do produto',
          text: 'APIs e ferramentas MCP para assistentes de IA consultarem a conta do cliente e criarem, testarem e agendarem campanhas de e-mail, com confirmação explícita, rate limit e sanitização de HTML.',
        },
        {
          tag: 'IA',
          title: 'IA na operação',
          text: 'Integrações para agentes de IA moderarem ofertas e resolverem atendimentos sem humano, como troca de e-mail com verificação em duas etapas pelo WhatsApp.',
        },
        {
          tag: 'Performance',
          title: 'De centenas de ms para < 1 ms',
          text: 'Reescrita da listagem de leads com índices compostos e desnormalização, em bases com centenas de milhares de registros. Pool de conexões e cache (Redis e IndexedDB) num SaaS multi-tenant.',
        },
        {
          tag: 'E-mail',
          title: 'Entregabilidade',
          text: 'Classificação de bounce hard/soft com retry automático (AWS SES) e reprocessamento de mais de 200 mil contatos.',
        },
        {
          tag: 'CRM',
          title: 'Cadência comercial automática',
          text: 'Workflows de atividades disparados por tag, SLA recalculado em cascata, cron de atrasadas e controle de concorrência.',
        },
        {
          tag: 'Integrações',
          title: 'Sistemas conversando',
          text: 'Integrações síncronas e assíncronas (RabbitMQ, webhooks) com CRMs externos, Meta Lead Ads/CAPI, checkout e área de membros.',
        },
      ],
      education: {
        eyebrow: 'Formação',
        title: 'Greenn School',
        text: 'Formação em desenvolvimento web · out 2023 — mai 2024',
      },
    },
    projects: {
      eyebrow: 'Projetos pessoais',
      title: 'Projetos selecionados',
      intro: 'Onde eu experimento arquitetura, tempo real e frameworks fora do dia a dia.',
      code: 'Código',
      items: [
        {
          title: 'E-commerce Microservices',
          year: '2025',
          text: 'Três microsserviços (usuários, pedidos e produtos), cada um num framework Node.js diferente, com banco próprio e uma saga coreografada via Apache Kafka: o pedido é criado, o catálogo valida o estoque e publica o resultado.',
          tags: ['TypeScript', 'Fastify', 'NestJS', 'Koa', 'Kafka', 'PostgreSQL', 'Prisma', 'Docker'],
          url: 'https://github.com/erickhenrique3/ecommerce-microservices',
          visual: 'arch',
        },
        {
          title: 'Reverb Reactions',
          year: '2024',
          text: 'Reações em tempo real com o Laravel Reverb, o servidor WebSocket nativo do Laravel. API com broadcasting de eventos e front em Vue 3 com Laravel Echo, tudo em Docker.',
          tags: ['Laravel', 'Reverb', 'WebSockets', 'Vue 3', 'Docker'],
          url: 'https://github.com/erickhenrique3/reverb_api',
          visual: 'realtime',
        },
        {
          title: 'Web Chat',
          year: '2024',
          text: 'Chat em tempo real como SPA: Laravel e Vue integrados com Inertia.js, autenticação com Jetstream e um servidor Socket.IO dedicado para as mensagens.',
          tags: ['Laravel', 'Inertia.js', 'Vue', 'Socket.IO', 'Tailwind'],
          url: 'https://github.com/erickhenrique3/web-chat',
          visual: 'chat',
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Ferramentas do dia a dia',
      groups: [
        { name: 'Back-end', items: ['PHP 8', 'Laravel', 'Node.js', 'NestJS', 'Fastify', 'DDD com Actions'] },
        { name: 'Front-end', items: ['Vue 2/3', 'TypeScript', 'Pinia / Vuex', 'Nuxt', 'Tailwind'] },
        { name: 'Dados & filas', items: ['MySQL', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Kafka'] },
        { name: 'IA', items: ['Model Context Protocol', 'Agentes com LLM', 'n8n'] },
        { name: 'Qualidade & infra', items: ['Pest', 'PHPUnit', 'Playwright', 'Jest', 'Docker', 'AWS SES'] },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos construir o próximo sistema juntos?',
      text: 'Estou aberto a vagas de Desenvolvedor Full Stack ou Back-end Pleno, remoto ou híbrido.',
    },
    footer: 'Feito com Vue 3, TypeScript e Vite.',
  },
  en: {
    nav: { work: 'Experience', projects: 'Projects', stack: 'Stack', contact: 'Contact' },
    hero: {
      kicker: 'Full Stack Developer · Paraná, Brazil',
      focus: 'Focused on',
      roles: ['back-end', 'software architecture', 'applied AI', 'distributed systems'],
      intro:
        'I build web products end to end with PHP, Laravel, Vue and TypeScript, and put AI to work inside them.',
      ctaProjects: 'See projects',
      available: 'Open to opportunities',
    },
    statement: {
      text: 'I like systems that *handle* *scale*, code the next developer *understands*, and *AI* that solves *real* problems.',
    },
    numbers: {
      title: 'At Greenn, by the numbers',
      items: [
        { value: 1900, suffix: '+', label: 'commits in production' },
        { value: 580, suffix: '', label: 'pull requests' },
        { value: 330, suffix: '', label: 'unique deliveries' },
        { value: 2.5, suffix: ' years', label: 'on the team', decimals: 1 },
      ],
      note: 'Private repositories: that is why these numbers do not show on my GitHub.',
    },
    work: {
      eyebrow: 'Experience',
      role: 'Full Stack Developer',
      company: 'Greenn',
      period: 'May 2024 — now',
      summary:
        'I work on an ecosystem of digital products used by thousands of customers: a multi-tenant SaaS CRM (email marketing, landing pages and automations), the seller dashboard, an internal ERP, a members area and a Chrome extension that brings the CRM into WhatsApp Web.',
      items: [
        {
          tag: 'AI',
          title: 'AI inside the product',
          text: 'APIs and MCP tools that let AI assistants read the customer account and create, test and schedule email campaigns, with explicit confirmation, rate limiting and HTML sanitization.',
        },
        {
          tag: 'AI',
          title: 'AI in operations',
          text: 'Integrations that let AI agents moderate offers and resolve support cases without a human, such as changing an email with two-step verification over WhatsApp.',
        },
        {
          tag: 'Performance',
          title: 'From hundreds of ms to < 1 ms',
          text: 'Rewrote the leads listing with composite indexes and denormalization, on datasets with hundreds of thousands of rows. Connection pooling and caching (Redis and IndexedDB) in a multi-tenant SaaS.',
        },
        {
          tag: 'Email',
          title: 'Deliverability',
          text: 'Hard/soft bounce classification with automatic retry (AWS SES) and reprocessing of more than 200k contacts.',
        },
        {
          tag: 'CRM',
          title: 'Automated sales cadence',
          text: 'Activity workflows triggered by tags, cascading SLA recalculation, overdue cron jobs and concurrency control.',
        },
        {
          tag: 'Integrations',
          title: 'Systems talking to each other',
          text: 'Synchronous and asynchronous integrations (RabbitMQ, webhooks) with external CRMs, Meta Lead Ads/CAPI, checkout and the members area.',
        },
      ],
      education: {
        eyebrow: 'Education',
        title: 'Greenn School',
        text: 'Web development program · Oct 2023 — May 2024',
      },
    },
    projects: {
      eyebrow: 'Personal projects',
      title: 'Selected projects',
      intro: 'Where I experiment with architecture, real time and frameworks outside my daily work.',
      code: 'Code',
      items: [
        {
          title: 'E-commerce Microservices',
          year: '2025',
          text: 'Three microservices (users, orders and products), each built with a different Node.js framework, each with its own database, connected by a choreographed saga over Apache Kafka: the order is created, the catalog validates stock and publishes the result.',
          tags: ['TypeScript', 'Fastify', 'NestJS', 'Koa', 'Kafka', 'PostgreSQL', 'Prisma', 'Docker'],
          url: 'https://github.com/erickhenrique3/ecommerce-microservices',
          visual: 'arch',
        },
        {
          title: 'Reverb Reactions',
          year: '2024',
          text: 'Real-time reactions with Laravel Reverb, Laravel’s native WebSocket server. An API that broadcasts events and a Vue 3 front end with Laravel Echo, all in Docker.',
          tags: ['Laravel', 'Reverb', 'WebSockets', 'Vue 3', 'Docker'],
          url: 'https://github.com/erickhenrique3/reverb_api',
          visual: 'realtime',
        },
        {
          title: 'Web Chat',
          year: '2024',
          text: 'A real-time chat as an SPA: Laravel and Vue glued together with Inertia.js, Jetstream authentication and a dedicated Socket.IO server for messages.',
          tags: ['Laravel', 'Inertia.js', 'Vue', 'Socket.IO', 'Tailwind'],
          url: 'https://github.com/erickhenrique3/web-chat',
          visual: 'chat',
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Everyday tools',
      groups: [
        { name: 'Back-end', items: ['PHP 8', 'Laravel', 'Node.js', 'NestJS', 'Fastify', 'DDD with Actions'] },
        { name: 'Front-end', items: ['Vue 2/3', 'TypeScript', 'Pinia / Vuex', 'Nuxt', 'Tailwind'] },
        { name: 'Data & queues', items: ['MySQL', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Kafka'] },
        { name: 'AI', items: ['Model Context Protocol', 'LLM agents', 'n8n'] },
        { name: 'Quality & infra', items: ['Pest', 'PHPUnit', 'Playwright', 'Jest', 'Docker', 'AWS SES'] },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Shall we build the next system together?',
      text: 'I am open to Full Stack or Back-end (mid-level) roles, remote or hybrid.',
    },
    footer: 'Built with Vue 3, TypeScript and Vite.',
  },
}

export const t = computed(() => content[lang.value])
