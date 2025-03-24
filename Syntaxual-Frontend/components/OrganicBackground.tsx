'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import styles from './OrganicBackground.module.css';

interface OrganicBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  codeThemed?: boolean;
}

const OrganicBackground: React.FC<OrganicBackgroundProps> = ({ 
  children, 
  className = '',
  intensity = 'medium',
  codeThemed = false
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  });
  const [scrollY, setScrollY] = useState(0);

  // Handle mouse movement with throttling for performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  }, []);

  // Handle window resize
  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  // Handle scroll position
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    // Initialize window size
    handleResize();

    // Throttle mouse move events for better performance
    let timeoutId: NodeJS.Timeout;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleMouseMove(e);
          timeoutId = null as any;
        }, 16); // ~60fps
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleMouseMove, handleResize, handleScroll]);

  // Calculate blob positions based on mouse movement and scroll
  const getBlob1Style = () => {
    const offsetX = (mousePosition.x / windowSize.width - 0.5) * 30;
    const offsetY = (mousePosition.y / windowSize.height - 0.5) * 30 + (scrollY * 0.05);
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`
    };
  };

  const getBlob2Style = () => {
    const offsetX = (mousePosition.x / windowSize.width - 0.5) * -25;
    const offsetY = (mousePosition.y / windowSize.height - 0.5) * -25 - (scrollY * 0.03);
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`
    };
  };

  const getBlob3Style = () => {
    const offsetX = (mousePosition.x / windowSize.width - 0.5) * 20;
    const offsetY = (mousePosition.y / windowSize.height - 0.5) * 20 + (scrollY * 0.02);
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`
    };
  };

  // Adjust opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case 'low': return 0.15;
      case 'high': return 0.35;
      default: return 0.25;
    }
  };

  // Get code-themed class if enabled
  const getCodeThemeClass = () => codeThemed ? styles.codeThemed : '';

  return (
    <div className={`${styles.container} ${getCodeThemeClass()} syntaxual-container ${className}`}>
      {/* Code-themed grid overlay for code sections */}
      {codeThemed && <div className={styles.codeGrid}></div>}
      
      <motion.div 
        className={`${styles.blob1} syntaxual-orb syntaxual-glow`}
        style={{ ...getBlob1Style(), opacity: getOpacity() }}
        initial={{ scale: 0.9 }}
        animate={{ 
          scale: [0.9, 1.05, 0.95, 1.02, 0.9],
          opacity: [getOpacity() - 0.05, getOpacity(), getOpacity() - 0.03, getOpacity()]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className={`${styles.blob2} syntaxual-orb syntaxual-glow`}
        style={{ ...getBlob2Style(), opacity: getOpacity() }}
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 0.95, 1.03, 0.97, 1],
          opacity: [getOpacity(), getOpacity() - 0.05, getOpacity(), getOpacity() - 0.03]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className={`${styles.blob3} syntaxual-orb syntaxual-glow`}
        style={{ ...getBlob3Style(), opacity: getOpacity() }}
        initial={{ scale: 0.95 }}
        animate={{ 
          scale: [0.95, 1.03, 0.92, 1, 0.95],
          opacity: [getOpacity() - 0.03, getOpacity(), getOpacity() - 0.05, getOpacity()]
        }}
        transition={{ 
          duration: 28, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default OrganicBackground;
