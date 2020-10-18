import React from 'react';

import styles from './Button.scss';

export const Button = ({ label, type = 'submit', ...rest }) => (
  <button
    className={styles.button}
    type={type}
    {...rest}
  >
    {label}
  </button>
);
