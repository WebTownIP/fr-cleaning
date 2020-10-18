import React from 'react';

import styles from './Container.scss';

export const Container = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      { children }
    </div>
  );
};
