# Portfolio IA

## Vue d'ensemble du projet
Portfolio personnel de Mathieu Gonon (TechPath) avec IA chatbot intégrée.
**Objectif** : Attirer clients pour agence web 
**Innovation** : Hero section Dev ↔ IA + chatbot personnel intelligent


## Documentation du projet
- **PRD complet** : `@scripts/PRD.txt` contient toute la spécification technique et fonctionnelle
- **Gestion des tâches** : Utiliser le `taskmaster-orchestrator` agent pour décomposer et suivre l'avancement

## Décisions techniques
- Utiliser le `backend-architect` pour l'architecture et choix de stack
- Utiliser le `frontend-developer` pour les choix frontend et frameworks UI
- Utiliser le `tool-evaluator` pour évaluer les options techniques

## Agents spécialisés disponibles

### Développement
- `rapid-prototyper` - Prototypes rapides, MVP, proof-of-concept
- `frontend-developer` - Interfaces React, gestion d'état, performance
- `backend-architect` - APIs, bases de données, architectures scalables
- `mobile-app-builder` - Applications mobiles, React Native

### DevOps & Qualité
- `devops-automator` - CI/CD, déploiements, monitoring
- `test-writer-fixer` - Tests, analyse d'échecs, couverture
- `performance-benchmarker` - Optimisation performance, profiling
- `api-tester` - Tests API, charge, contrats

### Gestion de projet
- `taskmaster-orchestrator` - **ESSENTIEL** : Décomposition PRD, orchestration tâches
- `project-shipper` - Coordination lancements, releases
- `sprint-prioritizer` - Planification sprints 6 jours
- `studio-producer` - Coordination équipes, ressources
- `experiment-tracker` - A/B tests, feature flags

### Analyse & Recherche
- `feedback-synthesizer` - Analyse feedback utilisateurs
- `trend-researcher` - Opportunités marché, tendances
- `analytics-reporter` - Métriques, rapports performance
- `workflow-optimizer` - Optimisation workflows

### Design & UX
- `ui-designer` - Interfaces, composants, design systems
- `ux-researcher` - Recherche utilisateur, parcours
- `whimsy-injector` - Éléments ludiques, délice utilisateur
- `brand-guardian` - Cohérence visuelle, guidelines

### Business & Support
- `legal-compliance-checker` - RGPD, CGU, conformité
- `finance-tracker` - Budgets, revenus, projections
- `support-responder` - Documentation, support client
- `infrastructure-maintainer` - Monitoring, scaling, fiabilité

### Utilitaires
- `tool-evaluator` - Évaluation frameworks, outils
- `studio-coach` - Coordination et motivation agents
- `joker` - Moral d'équipe, humour

## Workflow recommandé

1. **Planification** : Utiliser `taskmaster-orchestrator` pour décomposer les features du PRD
2. **Développement** : `rapid-prototyper` pour MVP, puis agents spécialisés
3. **Qualité** : `test-writer-fixer` après chaque implémentation
4. **Déploiement** : `devops-automator` pour CI/CD et `project-shipper` pour releases

## Déclencheurs automatiques d'agents

**TOUJOURS utiliser ces agents dans ces situations :**

- 🏗️ `taskmaster-orchestrator` → Dès qu'on mentionne le PRD ou qu'on veut planifier
- 🚀 `rapid-prototyper` → Pour "créer une nouvelle app/feature" ou "prototype"
- ⚡ `frontend-developer` → Pour tout code React/UI/composants/interfaces
- 🏛️ `backend-architect` → Pour APIs/database/architecture/stack decisions
- 🧪 `test-writer-fixer` → AUTOMATIQUEMENT après chaque code ajouté/modifié
- 🚢 `project-shipper` → Quand on parle de "lancer", "déployer", "release"
- 📊 `analytics-reporter` → Pour "métriques", "analytics", "performance"
- 🎨 `ui-designer` → Pour "design", "interface", "UX", styling visuel

## Mots-clés déclencheurs

Si l'utilisateur dit ces mots → utiliser cet agent :
- "créer une app" → `rapid-prototyper`
- "problème de design" → `ui-designer` 
- "bug", "erreur", "test qui fail" → `test-writer-fixer`
- "déployer", "mettre en ligne" → `project-shipper`
- "quelle techno choisir" → `tool-evaluator`
- "plan", "étapes", "comment faire" → `taskmaster-orchestrator`

## Objectifs techniques
- Portfolio responsive mobile-first avec hero section interactive Dev ↔ IA
- IA chatbot personnalisée connaissant Mathieu (intégration directe Claude API)
- Stack optimisé : React 19 + Next.js 15 + TailwindCSS v4 + React Spring
- Performances optimales (bundle <200KB, Lighthouse >90, Core Web Vitals)
- Coûts IA maîtrisés avec Claude Haiku 3.5 + optimisations cache

## RÈGLES CRITIQUES - À RESPECTER ABSOLUMENT

⚠️ **AVANT toute action de code** → TOUJOURS utiliser le `taskmaster-orchestrator` d'abord
⚠️ **APRÈS chaque modification de code** → TOUJOURS utiliser le `test-writer-fixer`
⚠️ **Pour toute décision technique** → TOUJOURS consulter l'agent spécialisé approprié

**NE JAMAIS** :
- Écrire du code sans plan du `taskmaster-orchestrator`
- Modifier du code sans tests avec `test-writer-fixer`
- Choisir une techno sans `tool-evaluator` ou `backend-architect`
- Créer une interface sans `ui-designer` ou `frontend-developer`
- **CRÉER DE NOUVEAUX FICHIERS** quand on peut MODIFIER/REMPLACER l'existant
- Laisser du code inutilisé dans le projet

## Phase actuelle
Utiliser le `taskmaster-orchestrator` pour évaluer où nous en sommes dans le roadmap défini dans le PRD et planifier les prochaines étapes.

## 📋 **BONNES PRATIQUES DÉVELOPPEMENT WEB 2025**

### **🎯 WORKFLOW CLIENT-FIRST OBLIGATOIRE**
```markdown
1. ✅ Wireframe/maquette AVANT tout code
2. ✅ Validation client à chaque composant
3. ✅ Screenshots + feedback requis
4. ✅ Une feature = une validation
5. ✅ Jamais plus de 3 composants sans validation
6. ✅ Toujours montrer le rendu visuel avant de continuer
```

### **📦 STACK TECHNIQUE OPTIMISÉ 2025**
```bash
# Package Manager
pnpm

# Core Stack
React: 19 (stable)
Next.js: 15 (App Router + Turbopack)
TypeScript: 5.7
Node.js: LTS latest

# UI & Animations
Shadcn/ui: latest avec TailwindCSS v4
React Spring: remplace Framer Motion (30% plus léger)
TailwindCSS: v4 (CSS-first, 3-10x plus rapide)

# IA & Communication
Claude API: Haiku 3.5 (cost-optimized) + Sonnet 4 (premium)
Resend: remplace EmailJS (plus professionnel)

# Testing & Deploy
Playwright: E2E testing
Vercel: déploiement optimisé Next.js
```

### **🔧 MCP TOOLS RECOMMANDÉS**
```json
{
  "mcpServers": {
    "ref": "Documentation & context management",
    "taskmaster": "PRD parsing & task breakdown",
    "playwright": "Browser automation & testing"
  }
}
```

### **⚡ PROCESSUS DÉVELOPPEMENT**
- **Git Flow** : GitHub Flow (simplicité)
- **Testing** : Unit (Vitest) + E2E (Playwright)
- **Versions** : Toujours "latest" (jamais de versions figées)
- **Build Time** : < 10min maximum

### **🚫 ANTI-PATTERNS INTERDITS**
```markdown
❌ Coder sans wireframe/validation client
❌ Implémenter 5+ features sans validation
❌ Utiliser Webpack pour nouveaux projets
❌ Bundle > 200KB pour mobile-first
❌ Versions spécifiques sauf cas critique
```

## Task Master AI Instructions
**Import Task Master's development workflow commands and guidelines, treat as if import is in the main CLAUDE.md file.**
@./.taskmaster/CLAUDE.md
