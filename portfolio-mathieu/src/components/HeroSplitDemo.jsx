import React, { useState } from 'react';
import HeroSplit from './HeroSplit';
import HeroSplitMobile from './HeroSplitMobile';
import './HeroSplit.css';
import './HeroSplitMobile.css';

const HeroSplitDemo = () => {
  const [version, setVersion] = useState('mobile-first'); // 'original' or 'mobile-first'

  return (
    <div className="demo-container">
      {/* Version Selector */}
      <div className="version-selector">
        <h2>Hero Split Component Demo</h2>
        <div className="selector-buttons">
          <button 
            className={version === 'original' ? 'active' : ''}
            onClick={() => setVersion('original')}
          >
            Version Originale
          </button>
          <button 
            className={version === 'mobile-first' ? 'active' : ''}
            onClick={() => setVersion('mobile-first')}
          >
            Version Mobile-First
          </button>
        </div>
      </div>

      {/* Component Display */}
      <div className="component-display">
        {version === 'original' ? <HeroSplit /> : <HeroSplitMobile />}
      </div>

      {/* Technical Info */}
      <div className="technical-info">
        <div className="info-section">
          <h3>🎯 Analyse de l'effet Adham Dannaway</h3>
          <ul>
            <li><strong>Structure :</strong> Container fixe 1040x600px avec positionnement absolu</li>
            <li><strong>Images :</strong> 3 couches - base, designer (gauche), coder (droite)</li>
            <li><strong>Animation :</strong> Clip-path dynamique basé sur position souris</li>
            <li><strong>Zones actives :</strong> 50% gauche/droite avec overlay content</li>
            <li><strong>Ligne séparation :</strong> Suit la souris avec effet glow</li>
          </ul>
        </div>

        <div className="info-section">
          <h3>⚡ Implémentation React Spring</h3>
          <ul>
            <li><strong>useSpring :</strong> Animations fluides avec config.gentle</li>
            <li><strong>clip-path :</strong> Révélation progressive des côtés</li>
            <li><strong>Responsive :</strong> Mobile-first avec fallback touch</li>
            <li><strong>Performance :</strong> GPU-accelerated transforms</li>
          </ul>
        </div>

        <div className="info-section">
          <h3>📱 Adaptations Mobile</h3>
          <ul>
            <li><strong>Touch controls :</strong> Boutons Dev/IA pour navigation</li>
            <li><strong>Simplified UI :</strong> Contenu adapté aux petits écrans</li>
            <li><strong>Accessibility :</strong> Focus states et reduced motion</li>
            <li><strong>Progressive enhancement :</strong> Desktop hover → Mobile tap</li>
          </ul>
        </div>

        <div className="info-section">
          <h3>🛠️ Structure technique recommandée</h3>
          <pre className="code-block">
{`// Assets nécessaires :
/images/mathieu-base.jpg        // Photo principale
/images/mathieu-developer.jpg   // Version développeur  
/images/mathieu-ai-robot.jpg    // Version IA Expert

// Dimensions optimales :
Desktop: 1040x600px
Mobile: 400x300px
Tablet: 600x400px`}
          </pre>
        </div>
      </div>

      {/* Implementation Notes */}
      <div className="implementation-notes">
        <h3>📝 Notes d'implémentation</h3>
        <div className="notes-grid">
          <div className="note-card">
            <h4>🎨 CSS Clip-Path</h4>
            <p>Utilise polygon() pour créer des révélations dynamiques. Alternative : mask-image pour plus de compatibilité.</p>
          </div>
          
          <div className="note-card">
            <h4>🏃‍♂️ Performance</h4>
            <p>Transform et opacity uniquement pour les animations 60fps. Éviter width/height changes.</p>
          </div>
          
          <div className="note-card">
            <h4>📱 Mobile UX</h4>
            <p>Remplace hover par tap states. Garde l'interaction simple et prévisible.</p>
          </div>
          
          <div className="note-card">
            <h4>♿ Accessibilité</h4>
            <p>Support clavier, prefers-reduced-motion, contrast élevé pour les overlays.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSplitDemo;