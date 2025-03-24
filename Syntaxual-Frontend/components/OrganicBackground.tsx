'use client';

import React from 'react';
import styles from './OrganicBackground.module.css';

interface OrganicBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const OrganicBackground: React.FC<OrganicBackgroundProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} syntaxual-container ${className}`}>
      <div className={`${styles.blob1} syntaxual-orb syntaxual-glow`}></div>
      <div className={`${styles.blob2} syntaxual-orb syntaxual-glow`}></div>
      <div className={`${styles.blob3} syntaxual-orb syntaxual-glow`}></div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default OrganicBackground;
