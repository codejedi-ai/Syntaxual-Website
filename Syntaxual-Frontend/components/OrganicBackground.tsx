'use client';

import React from 'react';
import styles from './OrganicBackground.module.css';

interface OrganicBackgroundProps {
  children: React.ReactNode;
}

const OrganicBackground: React.FC<OrganicBackgroundProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default OrganicBackground;
