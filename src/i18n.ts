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
    nav: { journey: 'Trajetória', work: 'Experiência', projects: 'Projetos', stack: 'Stack', contact: 'Contato' },
    hero: {
      kicker: 'Desenvolvedor Full Stack · Paraná, Brasil',
      focus: 'Foco em',
      roles: ['back-end', 'arquitetura de software', 'IA aplicada', 'sistemas distribuídos'],
      intro:
        'Construo produtos web de ponta a ponta com PHP, Laravel, Vue e TypeScript, e coloco IA para trabalhar dentro deles.',
      ctaProjects: 'Ver projetos',
      available: 'Desenvolvedor Full Stack na Greenn',
    },
    statement: {
      text: 'Gosto de sistemas que *aguentam* *escala*, de código que o próximo dev *entende* e de *IA* que resolve problema *real*.',
    },
    journey: {
      eyebrow: 'Trajetória',
      title: 'Comecei aos 14. Entrei no mercado aos 15.',
      intro:
        'Minha carreira nasceu dentro da Greenn: fiz o curso que a empresa criou para formar desenvolvedores e, no fim dele, fui contratado. Desde então cresço junto com os produtos.',
      steps: [
        {
          when: '2023',
          age: '14 anos',
          title: 'Greenn School',
          text: 'Curso de 6 meses que a Greenn oferece para formar desenvolvedores. Foi ali que escrevi minhas primeiras linhas de HTML, CSS, JavaScript, PHP, Laravel e Vue.',
        },
        {
          when: 'mai 2024',
          age: '15 anos',
          title: 'Contratado pela Greenn',
          text: 'Saí do curso direto para o time de desenvolvimento, como desenvolvedor full stack, entregando features, melhorias e correções em produção.',
        },
        {
          when: '2024 — 2025',
          age: '',
          title: 'Ganhando os produtos',
          text: 'Passei a atuar no CRM SaaS, na área de membros, no ERP e na extensão de Chrome, com integrações como Exact Spotter, Meta e filas com RabbitMQ.',
        },
        {
          when: '2026',
          age: '',
          title: 'Dono de áreas inteiras',
          text: 'Performance, entregabilidade de e-mail e IA aplicada: ferramentas MCP, agentes que moderam ofertas e resolvem atendimentos.',
        },
        {
          when: 'Hoje',
          age: '',
          title: 'Ainda começando',
          text: 'Mais de 1.900 commits depois, sigo evoluindo em back-end, arquitetura de software e IA aplicada, com a mesma curiosidade do primeiro dia.',
        },
      ],
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
      title: 'Vamos conversar?',
      text: 'Gosto de trocar ideias sobre back-end, arquitetura de software e IA aplicada. Me chama no LinkedIn.',
    },
    footer: 'Feito com Vue 3, TypeScript e Vite.',
  },
  en: {
    nav: { journey: 'Journey', work: 'Experience', projects: 'Projects', stack: 'Stack', contact: 'Contact' },
    hero: {
      kicker: 'Full Stack Developer · Paraná, Brazil',
      focus: 'Focused on',
      roles: ['back-end', 'software architecture', 'applied AI', 'distributed systems'],
      intro:
        'I build web products end to end with PHP, Laravel, Vue and TypeScript, and put AI to work inside them.',
      ctaProjects: 'See projects',
      available: 'Full Stack Developer at Greenn',
    },
    statement: {
      text: 'I like systems that *handle* *scale*, code the next developer *understands*, and *AI* that solves *real* problems.',
    },
    journey: {
      eyebrow: 'Journey',
      title: 'Started at 14. Hired at 15.',
      intro:
        'My career was born inside Greenn: I took the program the company created to train developers and was hired right after it. Since then I have grown together with the products.',
      steps: [
        {
          when: '2023',
          age: '14 years old',
          title: 'Greenn School',
          text: 'A 6-month program Greenn runs to train new developers. That is where I wrote my first lines of HTML, CSS, JavaScript, PHP, Laravel and Vue.',
        },
        {
          when: 'May 2024',
          age: '15 years old',
          title: 'Hired by Greenn',
          text: 'I went straight from the program to the development team as a full stack developer, shipping features, improvements and fixes to production.',
        },
        {
          when: '2024 — 2025',
          age: '',
          title: 'Owning more products',
          text: 'I started working on the SaaS CRM, the members area, the ERP and the Chrome extension, with integrations such as Exact Spotter, Meta and RabbitMQ queues.',
        },
        {
          when: '2026',
          age: '',
          title: 'Owning whole areas',
          text: 'Performance, email deliverability and applied AI: MCP tools and agents that moderate offers and resolve support cases.',
        },
        {
          when: 'Now',
          age: '',
          title: 'Just getting started',
          text: 'More than 1,900 commits later, I keep growing in back-end, software architecture and applied AI, with the same curiosity as on day one.',
        },
      ],
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
      title: 'Let’s talk?',
      text: 'I enjoy talking about back-end, software architecture and applied AI. Reach out on LinkedIn.',
    },
    footer: 'Built with Vue 3, TypeScript and Vite.',
  },
}

export const t = computed(() => content[lang.value])
