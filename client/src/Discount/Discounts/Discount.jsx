import React from 'react';

import styles from './Discounts.scss';

export const Discount = ({ name, value }) => {
  return (
    <div className={styles.discount}>
      <div className={styles.discountValue}>
        {value}
      </div>

      <div className={styles.discountName}>
        {name}
      </div>
    </div>
  );
};
