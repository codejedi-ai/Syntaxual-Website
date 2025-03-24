'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './OrganicBackground.module.css';

interface OrganicBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const OrganicBackground: React.FC<OrganicBackgroundProps> = ({ 
  children, 
  className = '',
  intensity = 'medium'
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initialize window size
    handleResize();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate blob positions based on mouse movement
  const getBlob1Style = () => {
    const offsetX = (mousePosition.x / windowSize.width - 0.5) * 50;
    const offsetY = (mousePosition.y / windowSize.height - 0.5) * 50;
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`
    };
  };

  const getBlob2Style = () => {
    const offsetX = (mousePosition.x / windowSize.width - 0.5) * -40;
    const offsetY = (mousePosition.y / windowSize.height - 0.5) * -40;
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`
    };
  };

  const getBlob3Style = () => {
    const offsetX = (mousePosition.x / windowSize.width - 0.5) * 30;
    const offsetY = (mousePosition.y / windowSize.height - 0.5) * 30;
    return {
      transform: `translate(${offsetX}px, ${offsetY}px)`
    };
  };

  // Adjust opacity based on intensity
  const getOpacity = () => {
    switch (intensity) {
      case 'low': return 0.2;
      case 'high': return 0.5;
      default: return 0.3;
    }
  };

  return (
    <div className={`${styles.container} syntaxual-container ${className}`}>
      <motion.div 
        className={`${styles.blob1} syntaxual-orb syntaxual-glow`}
        style={{ ...getBlob1Style(), opacity: getOpacity() }}
        initial={{ scale: 0.9 }}
        animate={{ 
          scale: [0.9, 1.1, 0.95, 1.05, 0.9],
          opacity: [getOpacity() - 0.1, getOpacity(), getOpacity() - 0.05, getOpacity()]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className={`${styles.blob2} syntaxual-orb syntaxual-glow`}
        style={{ ...getBlob2Style(), opacity: getOpacity() }}
        initial={{ scale: 1 }}
        animate={{ 
          scale: [1, 0.9, 1.05, 0.95, 1],
          opacity: [getOpacity(), getOpacity() - 0.1, getOpacity(), getOpacity() - 0.05]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className={`${styles.blob3} syntaxual-orb syntaxual-glow`}
        style={{ ...getBlob3Style(), opacity: getOpacity() }}
        initial={{ scale: 0.95 }}
        animate={{ 
          scale: [0.95, 1.05, 0.9, 1, 0.95],
          opacity: [getOpacity() - 0.05, getOpacity(), getOpacity() - 0.1, getOpacity()]
        }}
        transition={{ 
          duration: 22, 
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
