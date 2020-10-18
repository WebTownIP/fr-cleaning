import React from 'react';

import styles from './CardInfo.scss';

export const CardInfo = ({ title, image, description }) => {
  return (
    <div className={styles.card}>
      <img
        src={image}
        alt={title}
        className={styles.cardImage}
      />

      <span className={styles.cardTitle}>{title}</span>

      <span className={styles.cardDescription}>{description}</span>
    </div>
  );
};
