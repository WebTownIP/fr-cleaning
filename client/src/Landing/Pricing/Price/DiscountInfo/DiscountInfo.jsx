import React from 'react';

import css from './DiscountInfo.scss';

export const DiscountInfo = ({ discount }) => (
  <span className={css.discountInfo}>
    %
    <span className={css.discountInfoText}>
      {discount}
      &nbsp;на первый заказ
    </span>
  </span>
);
