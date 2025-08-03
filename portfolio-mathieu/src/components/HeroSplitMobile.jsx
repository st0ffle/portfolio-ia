import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

const HeroSplitMobile = () => {
  const [mouseX, setMouseX] = useState(0.5);
  const [activeMode, setActiveMode] = useState('center'); // 'left', 'right', 'center'
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animations pour desktop
  const leftReveal = useSpring({
    clipPath: isMobile 
      ? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
      : `polygon(0% 0%, ${Math.min(mouseX * 120, 100)}% 0%, ${Math.min(mouseX * 120, 100)}% 100%, 0% 100%)`,
    opacity: isMobile ? 0 : (mouseX < 0.4 ? Math.min(1, mouseX * 3) : Math.max(0.2, 1 - (mouseX - 0.4) * 2)),
    config: config.gentle,
  });

  const rightReveal = useSpring({
    clipPath: isMobile 
      ? 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)'
      : `polygon(${Math.max((1 - mouseX) * 120 - 20, 0)}% 0%, 100% 0%, 100% 100%, ${Math.max((1 - mouseX) * 120 - 20, 0)}% 100%)`,
    opacity: isMobile ? 0 : (mouseX > 0.6 ? Math.min(1, (mouseX - 0.6) * 3) : Math.max(0.2, 1 - (0.6 - mouseX) * 2)),
    config: config.gentle,
  });

  // Animation pour mobile - mode tap
  const mobileLeft = useSpring({
    opacity: activeMode === 'left' ? 1 : 0,
    transform: activeMode === 'left' ? 'translateX(0%)' : 'translateX(-100%)',
    config: config.slow,
  });

  const mobileRight = useSpring({
    opacity: activeMode === 'right' ? 1 : 0,
    transform: activeMode === 'right' ? 'translateX(0%)' : 'translateX(100%)',
    config: config.slow,
  });

  const centerContent = useSpring({
    opacity: activeMode === 'center' ? 1 : 0,
    scale: activeMode === 'center' ? 1 : 0.8,
    config: config.wobbly,
  });

  // Gestion des interactions
  const handleMouseMove = (e) => {
    if (isMobile) return;
    
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setMouseX(Math.max(0, Math.min(1, x)));
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setMouseX(0.5);
  };

  const handleTouch = (mode) => {
    if (!isMobile) return;
    setActiveMode(activeMode === mode ? 'center' : mode);
  };

  return (
    <div className="hero-split-container">
      <div 
        ref={containerRef}
        className={`hero-split ${isMobile ? 'mobile' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image de base */}
        <div className="base-image">
          <img 
            src="/api/placeholder/1040/600" 
            alt="Mathieu"
            className="hero-image"
          />
          <div className="base-overlay"></div>
        </div>

        {/* Desktop: Révélations basées sur la souris */}
        {!isMobile && (
          <>
            <animated.div style={leftReveal} className="reveal-left">
              <div className="side-image developer">
                <img 
                  src="/api/placeholder/520/600" 
                  alt="Mathieu Développeur"
                  className="hero-image"
                />
              </div>
              <div className="overlay-content left">
                <div className="content-wrapper">
                  <h1 className="title">Développeur</h1>
                  <p className="description">
                    Expert full-stack avec passion pour l'architecture moderne
                  </p>
                </div>
              </div>
            </animated.div>

            <animated.div style={rightReveal} className="reveal-right">
              <div className="side-image ai">
                <img 
                  src="/api/placeholder/520/600" 
                  alt="Mathieu IA Expert"
                  className="hero-image"
                />
              </div>
              <div className="overlay-content right">
                <div className="content-wrapper">
                  <h1 className="title">&lt;IA Expert&gt;</h1>
                  <p className="description">
                    Spécialisé en IA et automatisation des workflows
                  </p>
                </div>
              </div>
            </animated.div>
          </>
        )}

        {/* Mobile: Révélations basées sur les taps */}
        {isMobile && (
          <>
            <animated.div style={mobileLeft} className="mobile-reveal left">
              <div className="side-image developer">
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Mathieu Développeur"
                  className="hero-image"
                />
              </div>
              <div className="mobile-content">
                <h2 className="mobile-title">Développeur</h2>
                <p className="mobile-description">
                  Expert full-stack
                </p>
              </div>
            </animated.div>

            <animated.div style={mobileRight} className="mobile-reveal right">
              <div className="side-image ai">
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Mathieu IA Expert"
                  className="hero-image"
                />
              </div>
              <div className="mobile-content">
                <h2 className="mobile-title">&lt;IA Expert&gt;</h2>
                <p className="mobile-description">
                  Spécialisé en IA
                </p>
              </div>
            </animated.div>
          </>
        )}

        {/* Contenu central */}
        <animated.div style={centerContent} className="center-content">
          <h1 className="main-title">Mathieu</h1>
          <p className="main-subtitle">Développeur ↔ IA Expert</p>
          
          {isMobile && (
            <div className="mobile-controls">
              <button 
                className={`control-btn ${activeMode === 'left' ? 'active' : ''}`}
                onClick={() => handleTouch('left')}
              >
                Dev
              </button>
              <button 
                className={`control-btn ${activeMode === 'right' ? 'active' : ''}`}
                onClick={() => handleTouch('right')}
              >
                IA
              </button>
            </div>
          )}
        </animated.div>

        {/* Ligne de séparation pour desktop */}
        {!isMobile && (
          <div 
            className="dynamic-separator"
            style={{
              left: `${mouseX * 100}%`,
              opacity: Math.abs(mouseX - 0.5) > 0.1 ? 0.6 : 0,
            }}
          />
        )}
      </div>

      {/* Instructions pour desktop */}
      {!isMobile && (
        <div className="instructions">
          <p>Déplacez votre souris pour explorer</p>
        </div>
      )}
    </div>
  );
};

export default HeroSplitMobile;