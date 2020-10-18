import React from 'react';

import styles from './CardsSet.scss';

export const CardsSet = ({ children }) => {
  return (
    <div className={styles.cardsSet}>
      { children }
    </div>
  );
};
