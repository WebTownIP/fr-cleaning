import React from 'react';

import { DiscountInfo } from './DiscountInfo';

import styles from './Price.scss';

export const Price = ({ title, price, description, discount }) => {
  return (
    <div className={styles.price}>
      <span className={styles.priceTitle}>{title}</span>

      <span className={styles.priceValue}>
        {price}

        {Boolean(discount) && (
          <span className={styles.discount}>
            <DiscountInfo discount={discount} />
          </span>
        )}
      </span>

      <span className={styles.priceDescription}>{description}</span>

      <a
        className={styles.priceOrder}
        href="/standard-cleaning"
        rel="noopener noreferrer"
      >
        Заказать
      </a>
    </div>
  );
};
