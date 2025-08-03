import React from 'react';
import HeroSplitMobile from '../components/HeroSplitMobile';
import '../components/HeroSplitMobile.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      {/* Hero Section avec effet split */}
      <section className="hero-section">
        <HeroSplitMobile />
      </section>

      {/* Navigation contextuelle */}
      <nav className="context-nav">
        <div className="nav-container">
          <a href="#developer" className="nav-link developer">
            <span className="nav-icon">💻</span>
            <span className="nav-text">Projets Dev</span>
          </a>
          <a href="#about" className="nav-link center">
            <span className="nav-icon">👋</span>
            <span className="nav-text">À propos</span>
          </a>
          <a href="#ai-expert" className="nav-link ai">
            <span className="nav-icon">🤖</span>
            <span className="nav-text">Projets IA</span>
          </a>
        </div>
      </nav>

      {/* Section Développeur */}
      <section id="developer" className="content-section developer-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="code-bracket">&lt;</span>
              Développeur Full-Stack
              <span className="code-bracket">&gt;</span>
            </h2>
            <p className="section-subtitle">
              Architectures modernes, code élégant, performances optimales
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Projet E-commerce" />
                <div className="project-overlay">
                  <div className="tech-stack">
                    <span className="tech">React</span>
                    <span className="tech">Node.js</span>
                    <span className="tech">MongoDB</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Plateforme E-commerce</h3>
                <p>Application full-stack avec authentification JWT, paiements Stripe et dashboard admin.</p>
                <div className="project-links">
                  <a href="#" className="project-link">Voir le code</a>
                  <a href="#" className="project-link primary">Démo live</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/400/300" alt="Dashboard Analytics" />
              </div>
              <div className="project-content">
                <h3>Dashboard Analytics</h3>
                <p>Interface de visualisation de données avec D3.js et API REST.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/400/300" alt="App Mobile" />
              </div>
              <div className="project-content">
                <h3>App Mobile React Native</h3>
                <p>Application cross-platform avec offline-first et synchronisation.</p>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Stack Technique</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  <span>React</span>
                  <span>Vue.js</span>
                  <span>TypeScript</span>
                  <span>Next.js</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                  <span>Redis</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>DevOps</h4>
                <div className="skill-tags">
                  <span>Docker</span>
                  <span>AWS</span>
                  <span>CI/CD</span>
                  <span>Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section IA Expert */}
      <section id="ai-expert" className="content-section ai-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="ai-bracket">&lt;</span>
              Expert IA & Automatisation
              <span className="ai-bracket">/&gt;</span>
            </h2>
            <p className="section-subtitle">
              Intelligence artificielle, automatisation des workflows, optimisation business
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-image">
                <img src="/api/placeholder/600/400" alt="Assistant IA" />
                <div className="project-overlay">
                  <div className="tech-stack">
                    <span className="tech">GPT-4</span>
                    <span className="tech">LangChain</span>
                    <span className="tech">Vector DB</span>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>Assistant IA Personnalisé</h3>
                <p>Système de coaching business automatisé avec RAG et fine-tuning pour recommandations personnalisées.</p>
                <div className="project-links">
                  <a href="#" className="project-link">Architecture</a>
                  <a href="#" className="project-link primary">Voir la démo</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/400/300" alt="Automation Pipeline" />
              </div>
              <div className="project-content">
                <h3>Pipeline d'Automatisation</h3>
                <p>Orchestration de workflows complexes avec Zapier, Make et APIs custom.</p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src="/api/placeholder/400/300" alt="Analytics IA" />
              </div>
              <div className="project-content">
                <h3>Analytics Prédictifs</h3>
                <p>Modèles ML pour prédiction de revenus et optimisation business.</p>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Expertise IA</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>LLMs & APIs</h4>
                <div className="skill-tags">
                  <span>OpenAI GPT</span>
                  <span>Claude</span>
                  <span>LangChain</span>
                  <span>Vector Databases</span>
                  <span>RAG Systems</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Automatisation</h4>
                <div className="skill-tags">
                  <span>Zapier</span>
                  <span>Make</span>
                  <span>n8n</span>
                  <span>APIs Integration</span>
                  <span>Webhooks</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Data & ML</h4>
                <div className="skill-tags">
                  <span>Python</span>
                  <span>TensorFlow</span>
                  <span>Pandas</span>
                  <span>Jupyter</span>
                  <span>MLOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section className="contact-section">
        <div className="section-container">
          <h2>Travaillons Ensemble</h2>
          <p>Développement custom ou consultation IA, parlons de votre projet.</p>
          <div className="contact-links">
            <a href="mailto:contact@mathieu.dev" className="contact-link">
              📧 contact@mathieu.dev
            </a>
            <a href="https://linkedin.com/in/mathieu" className="contact-link">
              💼 LinkedIn
            </a>
            <a href="https://github.com/mathieu" className="contact-link">
              🔗 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;