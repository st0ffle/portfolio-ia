"use client"

import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const HeroSplit = () => {
  const [mouseX, setMouseX] = useState(0.5);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  // Animation avant/après - image IA se révèle selon position souris
  const aiImageReveal = useSpring({
    clipPath: `polygon(${mouseX * 100}% 0%, 100% 0%, 100% 100%, ${mouseX * 100}% 100%)`,
    config: config.gentle,
  });

  // Animation du texte central
  const centerText = useSpring({
    opacity: Math.abs(mouseX - 0.5) < 0.15 ? 1 : 0,
    scale: Math.abs(mouseX - 0.5) < 0.15 ? 1 : 0.9,
    config: config.wobbly,
  });

  // Gestion du mouvement de la souris
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setMouseX(Math.max(0, Math.min(1, x)));
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setMouseX(0.5); // Retour au centre
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div className="hero-split-container">
      <div 
        ref={containerRef}
        className="hero-split"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {/* Image de base - Développeur (toujours visible) */}
        <div className="base-image">
          <img 
            src="/images/mathieu-developer.png" 
            alt="Mathieu Développeur"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image IA qui se révèle de droite vers gauche */}
        <animated.div 
          style={aiImageReveal}
          className="reveal-image"
        >
          <img 
            src="/images/mathieu-ai-robot.png" 
            alt="Mathieu IA Expert"
            className="w-full h-full object-cover"
          />
        </animated.div>

        {/* Overlay texte côté gauche - Développeur */}
        <div className="text-overlay left">
          <div className="content-wrapper">
            <p className="description">Expert en développement full-stack</p>
            <div className="tech-icons">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Overlay texte côté droit - IA Expert */}
        <div className="text-overlay right">
          <div className="content-wrapper">
            <p className="description">Spécialisé en Intelligence Artificielle</p>
            <div className="tech-icons">
              <span className="tech-tag">Claude</span>
              <span className="tech-tag">GPT</span>
              <span className="tech-tag">Automation</span>
            </div>
          </div>
        </div>

        {/* Ligne de séparation dynamique */}
        <div 
          className="dynamic-separator"
          style={{
            left: `${mouseX * 100}%`,
            opacity: isHovering ? 0.8 : 0,
          }}
        />
      </div>
    </div>
  );
};

export default HeroSplit;