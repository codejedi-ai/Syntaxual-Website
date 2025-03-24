'use client';

import React, { useEffect, useRef, useState } from 'react';
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
}

const GlowingOrbs: React.FC<OrbProps> = ({
  count = 15,
  colors = ['var(--accent)', '#9370db', '#ba55d3', '#9932cc', '#4b0082'],
  minSize = 50,
  maxSize = 200,
  minOpacity = 0.1,
  maxOpacity = 0.4,
  interactive = true,
  focusPoint = null,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // Generate orbs on mount
  useEffect(() => {
    const newOrbs: Orb[] = [];
    
    for (let i = 0; i < count; i++) {
      newOrbs.push({
        id: i,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        scale: 1
      });
    }
    
    setOrbs(newOrbs);
  }, [count, colors, minSize, maxSize, minOpacity, maxOpacity]);

  // Track mouse position and window size
  useEffect(() => {
    if (!interactive) return;

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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [interactive]);

  // Update orbs based on mouse position
  useEffect(() => {
    if (!interactive || (!focusPoint && mousePosition.x === 0 && mousePosition.y === 0)) return;
    
    const point = focusPoint || mousePosition;
    
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    // Calculate relative position within container
    const relativeX = point.x - rect.left;
    const relativeY = point.y - rect.top;
    
    setOrbs(prevOrbs => 
      prevOrbs.map(orb => {
        // Calculate distance from mouse to orb center
        const orbCenterX = (orb.left / 100) * rect.width;
        const orbCenterY = (orb.top / 100) * rect.height;
        
        const dx = orbCenterX - relativeX;
        const dy = orbCenterY - relativeY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Influence decreases with distance
        const maxDistance = Math.max(rect.width, rect.height) * 0.5;
        const influence = Math.max(0, 1 - distance / maxDistance);
        
        // Apply subtle attraction/repulsion effect
        const newLeft = orb.left + (dx > 0 ? -1 : 1) * influence * 0.2;
        const newTop = orb.top + (dy > 0 ? -1 : 1) * influence * 0.2;
        
        // Ensure orbs stay within bounds
        const boundedLeft = Math.max(0, Math.min(100, newLeft));
        const boundedTop = Math.max(0, Math.min(100, newTop));
        
        return {
          ...orb,
          left: boundedLeft,
          top: boundedTop,
          scale: 1 + influence * 0.2,
          opacity: orb.opacity + influence * 0.1
        };
      })
    );
  }, [mousePosition, focusPoint, interactive]);

  return (
    <div className={`${styles.orbContainer} bg-syntaxual-background`} ref={containerRef}>
      <AnimatePresence>
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className={`${styles.orb} syntaxual-orb syntaxual-glow`}
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
              scale: orb.scale
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeInOut"
            }}
            style={{
              backgroundColor: orb.color,
              left: 0,
              top: 0,
              position: 'absolute',
              borderRadius: '50%',
              filter: 'blur(30px)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GlowingOrbs;
