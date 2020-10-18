import React from 'react';

import styles from './TextField.scss';

export const TextField = ({ label, name, ...rest }) => {
  return (
    <div className={styles.textFieldWrapper}>
      <label
        htmlFor={name}
        className={styles.textFieldLabel}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.textFieldControl}
        {...rest}
      />
    </div>
  );
};
