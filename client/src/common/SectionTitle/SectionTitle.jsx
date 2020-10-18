import React from 'react';

import styles from './SectionTitle.scss';

export const SectionTitle = ({ children, className = '' }) => {
  return (
    <h3 className={`${styles.sectionTitle} ${className}`}>
      { children }
    </h3>
  );
};
