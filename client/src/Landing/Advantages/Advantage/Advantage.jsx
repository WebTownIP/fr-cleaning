import React from 'react';

import styles from './Advantage.scss';

export const Advantage = ({ img, title, description }) => {
  return (
    <div className={styles.advantage}>
      <img
        className={styles.advantageImg}
        alt={title}
        src={img}
      />
      <span className={styles.advantageTitle}>{title}</span>
      <span className={styles.advantageDescription}>{description}</span>
    </div>
  );
};
