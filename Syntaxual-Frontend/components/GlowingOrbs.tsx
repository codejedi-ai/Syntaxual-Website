'use client';

import React, { useEffect, useRef } from 'react';
import styles from './GlowingOrbs.module.css';

interface OrbProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
}

const GlowingOrbs: React.FC<OrbProps> = ({
  count = 15,
  colors = ['#8a2be2', '#9370db', '#ba55d3', '#9932cc', '#4b0082'],
  minSize = 50,
  maxSize = 200,
  minOpacity = 0.1,
  maxOpacity = 0.4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
      const orb = document.createElement('div');
      orb.className = styles.orb;
      
      // Random properties
      const size = Math.random() * (maxSize - minSize) + minSize;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
      
      // Position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      
      // Animation duration and delay
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      // Apply styles
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;
      orb.style.backgroundColor = color;
      orb.style.opacity = opacity.toString();
      orb.style.left = `${left}%`;
      orb.style.top = `${top}%`;
      orb.style.animationDuration = `${duration}s`;
      orb.style.animationDelay = `${delay}s`;
      
      container.appendChild(orb);
    }
  }, [count, colors, minSize, maxSize, minOpacity, maxOpacity]);

  return (
    <div className={styles.orbContainer} ref={containerRef}>
      {/* Orbs will be dynamically added here */}
    </div>
  );
};

export default GlowingOrbs;
