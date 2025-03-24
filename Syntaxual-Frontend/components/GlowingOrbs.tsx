'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './GlowingOrbs.module.css';

interface OrbProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  interactive?: boolean;
  focusPoint?: { x: number, y: number } | null;
  codeThemed?: boolean;
  density?: 'low' | 'medium' | 'high';
}

interface Orb {
  id: number;
  size: number;
  color: string;
  opacity: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
  scale: number;
  type?: 'circle' | 'square' | 'diamond';
}

const GlowingOrbs: React.FC<OrbProps> = ({
  count = 12,
  colors = ['var(--accent)', 'var(--accent-secondary)', 'var(--accent-light)'],
  minSize = 40,
  maxSize = 180,
  minOpacity = 0.08,
  maxOpacity = 0.25,
  interactive = true,
  focusPoint = null,
  codeThemed = false,
  density = 'medium',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });
  const [scrollY, setScrollY] = useState(0);

  // Adjust count based on density
  const getOrbCount = useCallback(() => {
    switch (density) {
      case 'low': return Math.floor(count * 0.6);
      case 'high': return Math.floor(count * 1.5);
      default: return count;
    }
  }, [count, density]);

  // Generate orbs on mount
  useEffect(() => {
    const actualCount = getOrbCount();
    const newOrbs: Orb[] = [];
    
    for (let i = 0; i < actualCount; i++) {
      // For code-themed, add some square and diamond shapes
      let type: 'circle' | 'square' | 'diamond' = 'circle';
      if (codeThemed) {
        const rand = Math.random();
        if (rand > 0.7) type = 'square';
        else if (rand > 0.4) type = 'diamond';
      }
      
      newOrbs.push({
        id: i,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 15 + 15,
        delay: Math.random() * 5,
        scale: 1,
        type
      });
    }
    
    setOrbs(newOrbs);
  }, [getOrbCount, colors, minSize, maxSize, minOpacity, maxOpacity, codeThemed]);

  // Track mouse position, window size, and scroll with throttling
  useEffect(() => {
    if (!interactive) return;

    let mouseTimeoutId: NodeJS.Timeout;
    let scrollTimeoutId: NodeJS.Timeout;
    
    const throttledMouseMove = (e: MouseEvent) => {
      if (!mouseTimeoutId) {
        mouseTimeoutId = setTimeout(() => {
          setMousePosition({
            x: e.clientX,
            y: e.clientY
          });
          mouseTimeoutId = null as any;
        }, 16); // ~60fps
      }
    };

    const throttledScroll = () => {
      if (!scrollTimeoutId) {
        scrollTimeoutId = setTimeout(() => {
          setScrollY(window.scrollY);
          scrollTimeoutId = null as any;
        }, 16);
      }
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', throttledMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', throttledScroll);
      clearTimeout(mouseTimeoutId);
      clearTimeout(scrollTimeoutId);
    };
  }, [interactive]);

  // Update orbs based on mouse position and scroll
  useEffect(() => {
    if (!interactive || (!focusPoint && mousePosition.x === 0 && mousePosition.y === 0)) return;
    
    const point = focusPoint || mousePosition;
    
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Calculate relative position within container
    const relativeX = point.x - rect.left;
    const relativeY = point.y - rect.top + scrollY;
    
    setOrbs(prevOrbs => 
      prevOrbs.map(orb => {
        // Calculate distance from mouse to orb center
        const orbCenterX = (orb.left / 100) * rect.width;
        const orbCenterY = (orb.top / 100) * rect.height;
        
        const dx = orbCenterX - relativeX;
        const dy = orbCenterY - relativeY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Influence decreases with distance
        const maxDistance = Math.max(rect.width, rect.height) * 0.4;
        const influence = Math.max(0, 1 - distance / maxDistance);
        
        // Apply subtle attraction/repulsion effect - more subtle for code theme
        const influenceFactor = codeThemed ? 0.1 : 0.15;
        const newLeft = orb.left + (dx > 0 ? -1 : 1) * influence * influenceFactor;
        const newTop = orb.top + (dy > 0 ? -1 : 1) * influence * influenceFactor;
        
        // Ensure orbs stay within bounds
        const boundedLeft = Math.max(0, Math.min(100, newLeft));
        const boundedTop = Math.max(0, Math.min(100, newTop));
        
        return {
          ...orb,
          left: boundedLeft,
          top: boundedTop,
          scale: 1 + influence * 0.15,
          opacity: orb.opacity + influence * 0.08
        };
      })
    );
  }, [mousePosition, focusPoint, interactive, scrollY, codeThemed]);

  return (
    <div className={`${styles.orbContainer} ${codeThemed ? styles.codeThemed : ''}`} ref={containerRef}>
      {codeThemed && <div className={styles.codeGrid}></div>}
      
      <AnimatePresence>
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className={`${styles.orb} ${orb.type ? styles[orb.type] : ''} syntaxual-orb syntaxual-glow`}
            initial={{ 
              width: orb.size, 
              height: orb.size,
              x: `${orb.left}%`,
              y: `${orb.top}%`,
              opacity: orb.opacity,
              scale: 0.8
            }}
            animate={{ 
              width: orb.size,
              height: orb.size,
              x: `${orb.left}%`,
              y: `${orb.top}%`,
              opacity: orb.opacity,
              scale: orb.scale,
              rotate: orb.type === 'diamond' ? 45 : 0
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
            style={{
              backgroundColor: orb.color,
              left: 0,
              top: 0,
              position: 'absolute',
              borderRadius: orb.type === 'square' ? '4px' : '50%',
              filter: `blur(${codeThemed ? 25 : 30}px)`,
              transform: `translate(-50%, -50%) ${orb.type === 'diamond' ? 'rotate(45deg)' : ''}`,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Code-themed elements */}
      {codeThemed && (
        <div className={styles.codeElements}>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
          <div className={styles.codeLine}></div>
        </div>
      )}
    </div>
  );
};

export default GlowingOrbs;
