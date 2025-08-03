import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook personnalisé pour gérer la logique de l'effet Hero Split
 * Inspiré de l'effet d'Adham Dannaway
 */
export const useHeroSplit = (options = {}) => {
  const {
    threshold = 0.3,        // Seuil de déclenchement (0-1)
    sensitivity = 1.2,      // Sensibilité du mouvement
    resetDelay = 300,       // Délai avant reset (ms)
    mobileBreakpoint = 768, // Point de rupture mobile
  } = options;

  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [activeZone, setActiveZone] = useState('center'); // 'left', 'right', 'center'
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const resetTimeoutRef = useRef(null);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= mobileBreakpoint);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  // Calcul de la zone active basé sur la position X
  const calculateActiveZone = useCallback((x) => {
    if (x < threshold) return 'left';
    if (x > (1 - threshold)) return 'right';
    return 'center';
  }, [threshold]);

  // Gestionnaire de mouvement de souris
  const handleMouseMove = useCallback((event) => {
    if (isMobile || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height));

    // Application de la sensibilité
    const adjustedX = Math.pow(x, sensitivity);
    
    setMousePosition({ x: adjustedX, y });
    setActiveZone(calculateActiveZone(adjustedX));
    
    // Clear reset timeout si souris bouge
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  }, [isMobile, sensitivity, calculateActiveZone]);

  // Gestionnaire d'entrée de souris
  const handleMouseEnter = useCallback(() => {
    if (isMobile) return;
    setIsHovering(true);
  }, [isMobile]);

  // Gestionnaire de sortie de souris
  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    
    setIsHovering(false);
    
    // Reset avec délai
    resetTimeoutRef.current = setTimeout(() => {
      setMousePosition({ x: 0.5, y: 0.5 });
      setActiveZone('center');
    }, resetDelay);
  }, [isMobile, resetDelay]);

  // Gestionnaire de tap mobile
  const handleMobileTap = useCallback((zone) => {
    if (!isMobile) return;
    
    setActiveZone(activeZone === zone ? 'center' : zone);
  }, [isMobile, activeZone]);

  // Calcul des valeurs d'animation
  const getAnimationValues = useCallback(() => {
    const { x, y } = mousePosition;
    
    // Révélation gauche (développeur)
    const leftReveal = {
      clipPath: `polygon(0% 0%, ${Math.min(x * 100 + 15, 100)}% 0%, ${Math.min(x * 100 + 15, 100)}% 100%, 0% 100%)`,
      opacity: x < threshold ? Math.min(1, x * 3) : Math.max(0.2, 1 - (x - threshold) * 2),
    };

    // Révélation droite (IA Expert)
    const rightReveal = {
      clipPath: `polygon(${Math.max((1 - x) * 100 - 15, 0)}% 0%, 100% 0%, 100% 100%, ${Math.max((1 - x) * 100 - 15, 0)}% 100%)`,
      opacity: x > (1 - threshold) ? Math.min(1, (x - (1 - threshold)) * 3) : Math.max(0.2, 1 - ((1 - threshold) - x) * 2),
    };

    // Contenu central
    const centerContent = {
      opacity: Math.abs(x - 0.5) < 0.2 ? 1 : Math.max(0, 1 - Math.abs(x - 0.5) * 3),
      scale: Math.abs(x - 0.5) < 0.2 ? 1 : Math.max(0.8, 1 - Math.abs(x - 0.5) * 0.5),
    };

    // Ligne de séparation
    const separatorLine = {
      left: `${x * 100}%`,
      opacity: Math.abs(x - 0.5) > 0.1 ? 0.8 : 0,
    };

    return {
      leftReveal,
      rightReveal,
      centerContent,
      separatorLine,
      mousePosition,
      activeZone,
      isHovering,
      isMobile,
    };
  }, [mousePosition, threshold, activeZone, isHovering, isMobile]);

  // Nettoyage
  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  return {
    // Refs
    containerRef,
    
    // État
    mousePosition,
    activeZone,
    isHovering,
    isMobile,
    
    // Gestionnaires d'événements
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMobileTap,
    
    // Valeurs d'animation
    ...getAnimationValues(),
  };
};

/**
 * Hook pour gérer les transitions React Spring
 */
export const useHeroSplitAnimations = (animationValues, config = {}) => {
  const { useSpring } = require('@react-spring/web');
  
  const defaultConfig = {
    tension: 280,
    friction: 60,
    mass: 1,
    ...config,
  };

  const leftRevealSpring = useSpring({
    ...animationValues.leftReveal,
    config: defaultConfig,
  });

  const rightRevealSpring = useSpring({
    ...animationValues.rightReveal,
    config: defaultConfig,
  });

  const centerContentSpring = useSpring({
    ...animationValues.centerContent,
    config: { ...defaultConfig, tension: 400, friction: 30 },
  });

  return {
    leftRevealSpring,
    rightRevealSpring,
    centerContentSpring,
  };
};

/**
 * Hook pour les performances (debounce, throttle)
 */
export const useHeroSplitPerformance = (callback, delay = 16) => {
  const [isThrottled, setIsThrottled] = useState(false);
  
  const throttledCallback = useCallback((...args) => {
    if (isThrottled) return;
    
    setIsThrottled(true);
    callback(...args);
    
    setTimeout(() => setIsThrottled(false), delay);
  }, [callback, delay, isThrottled]);

  return throttledCallback;
};

export default useHeroSplit;