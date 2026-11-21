# Portfólio — Erick Henrique

Site pessoal de portfólio: experiência, projetos e stack, em português e inglês.

**Stack:** Vue 3 · TypeScript · Vite · CSS puro (sem bibliotecas de UI ou animação)

## Destaques

- Conteúdo PT/EN num único arquivo (`src/i18n.ts`), com escolha salva no navegador
- Animações no scroll com `IntersectionObserver` e uma diretiva própria (`v-reveal`)
- Frase que acende palavra por palavra conforme a rolagem
- Ilustrações dos projetos feitas em SVG/CSS (diagrama de microsserviços com eventos animados)
- Respeita `prefers-reduced-motion` e funciona do celular ao desktop

## Rodando

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

Deploy na Vercel: importar o repositório, framework **Vite**, saída `dist`.
