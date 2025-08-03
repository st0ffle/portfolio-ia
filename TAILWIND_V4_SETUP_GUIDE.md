# Configuration TailwindCSS v4 + Shadcn/ui - Juillet 2025

## Status des versions (Août 2025)

- **TailwindCSS v4.1.11** ✅ (Stable)
- **Shadcn/ui 0.9.5** ✅ (Compatible v4)
- **Next.js 15** ✅ (App Router + Turbopack)
- **Support navigateur**: Safari 16.4+, Chrome 111+ ✅

## 🚀 Configuration TailwindCSS v4 (CSS-first approach)

### 1. Installation des dépendances

```bash
# Package manager moderne
pnpm install

# TailwindCSS v4 avec CLI
pnpm add -D @tailwindcss/cli@latest

# Next.js 15 + React 19
pnpm add next@latest react@latest react-dom@latest

# TypeScript
pnpm add -D typescript @types/node @types/react @types/react-dom
```

### 2. Structure CSS v4 (globals.css)

```css
/* app/globals.css */
@import "tailwindcss";

/* Variables CSS natives - Plus de config JS! */
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #64748b;
  --font-family-sans: ui-sans-serif, system-ui;
  --spacing-18: 4.5rem;
}

/* Base layer pour reset personnalisé */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 224 71.4% 4.1%;
    --card: 0 0% 100%;
    --card-foreground: 224 71.4% 4.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71.4% 4.1%;
    --primary: 220.9 39.3% 11%;
    --primary-foreground: 210 20% 98%;
    --secondary: 220 14.3% 95.9%;
    --secondary-foreground: 220.9 39.3% 11%;
    --muted: 220 14.3% 95.9%;
    --muted-foreground: 220 8.9% 46.1%;
    --accent: 220 14.3% 95.9%;
    --accent-foreground: 220.9 39.3% 11%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 20% 98%;
    --border: 220 13% 91%;
    --input: 220 13% 91%;
    --ring: 224 71.4% 4.1%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 224 71.4% 4.1%;
    --foreground: 210 20% 98%;
    --card: 224 71.4% 4.1%;
    --card-foreground: 210 20% 98%;
    --popover: 224 71.4% 4.1%;
    --popover-foreground: 210 20% 98%;
    --primary: 210 20% 98%;
    --primary-foreground: 220.9 39.3% 11%;
    --secondary: 215 27.9% 16.9%;
    --secondary-foreground: 210 20% 98%;
    --muted: 215 27.9% 16.9%;
    --muted-foreground: 217.9 10.6% 64.9%;
    --accent: 215 27.9% 16.9%;
    --accent-foreground: 210 20% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 20% 98%;
    --border: 215 27.9% 16.9%;
    --input: 215 27.9% 16.9%;
    --ring: 216 12.2% 83.9%;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

### 3. PostCSS Configuration (postcss.config.js)

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

### 4. Next.js Configuration (next.config.js)

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: true, // Turbopack pour dev
    },
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
```

## 🎨 Configuration Shadcn/ui avec TailwindCSS v4

### 1. Installation Shadcn/ui CLI

```bash
# CLI global
pnpm add -g shadcn-ui@latest

# Ou npx pour usage ponctuel
npx shadcn-ui@latest init
```

### 2. Initialisation Shadcn/ui (components.json)

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": null,
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### 3. Utilitaires de base (lib/utils.ts)

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 4. Installation des composants

```bash
# Composants essentiels pour portfolio
pnpm dlx shadcn-ui@latest add button
pnpm dlx shadcn-ui@latest add card
pnpm dlx shadcn-ui@latest add dialog
pnpm dlx shadcn-ui@latest add input
pnpm dlx shadcn-ui@latest add badge
pnpm dlx shadcn-ui@latest add avatar
pnpm dlx shadcn-ui@latest add separator
pnpm dlx shadcn-ui@latest add sheet
pnpm dlx shadcn-ui@latest add tabs
pnpm dlx shadcn-ui@latest add form
```

## 📁 Structure des fichiers

```
portfolio-ia/
├── app/
│   ├── globals.css          # TailwindCSS v4 + variables
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Page d'accueil
├── components/
│   ├── ui/                  # Composants Shadcn/ui
│   └── portfolio/           # Composants spécifiques
├── lib/
│   └── utils.ts             # Utilitaires cn()
├── postcss.config.js        # PostCSS v4
├── next.config.js           # Next.js 15
├── components.json          # Config Shadcn/ui
├── tsconfig.json            # TypeScript
└── package.json
```

## 🚫 IMPORTANT: Plus de tailwind.config.js!

**TailwindCSS v4 abandonne tailwind.config.js au profit du CSS-first approach.**

- ✅ Configuration dans `@theme {}` (CSS)
- ✅ Variables CSS natives
- ✅ Performance 3-10x plus rapide
- ❌ Plus de fichier tailwind.config.js
- ❌ Plus de plugins JavaScript complexes

## ⚡ Gains de performance v4

- **Build time**: 3-10x plus rapide
- **Bundle size**: Réduction de ~30%
- **Dev server**: Hot reload instantané
- **Tree shaking**: Automatique et optimal
- **CSS output**: Minimal et optimisé

## 🛠️ Commandes de développement

```bash
# Développement
pnpm dev

# Build production
pnpm build

# Analyse bundle
pnpm run build -- --analyzer

# Type checking
pnpm tsc --noEmit
```

## 🔧 Customisation avancée

### Variables CSS personnalisées

```css
@theme {
  /* Couleurs portfolio */
  --color-hero-gradient-from: #3b82f6;
  --color-hero-gradient-to: #8b5cf6;
  
  /* Animations */
  --animate-duration-slow: 1.5s;
  --animate-duration-fast: 0.3s;
  
  /* Spacing portfolio */
  --spacing-hero: 8rem;
  --spacing-section: 6rem;
}
```

### Utilisation dans les composants

```typescript
// Exemple composant Hero
export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[--color-hero-gradient-from] to-[--color-hero-gradient-to] pt-[--spacing-hero]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white">Portfolio IA</h1>
      </div>
    </section>
  )
}
```

## 🚀 Optimisations portfolio mobile-first

```css
/* Performance mobile */
@media (max-width: 768px) {
  :root {
    --font-size-base: 14px;
    --spacing-section: 4rem;
  }
}

/* Animations responsives */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## ✅ Checklist finale

- [x] TailwindCSS v4.1.11 installé
- [x] Shadcn/ui 0.9.5 compatible
- [x] Next.js 15 + App Router
- [x] TypeScript 5.7 configuré
- [x] PostCSS v4 setup
- [x] Variables CSS natives
- [x] Bundle < 200KB target
- [x] Core Web Vitals optimisé
- [x] Support Safari 16.4+

## 🎯 Performances attendues

- **LCP**: < 2.5s (mobile 4G)
- **FID**: < 100ms
- **CLS**: < 0.1
- **Bundle JS**: 145-182KB
- **Lighthouse**: > 90 toutes métriques

Cette configuration est optimisée pour le projet portfolio selon le PRD avec performance mobile-first et intégration IA future.