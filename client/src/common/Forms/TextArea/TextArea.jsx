import React from 'react';

import styles from './TextArea.scss';

export const TextArea = ({ label, name, ...rest }) => {
  return (
    <div className={styles.textAreaWrapper}>
      <label
        htmlFor={name}
        className={styles.textAreaLabel}
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className={styles.textAreaControl}
        {...rest}
      />
    </div>
  );
};
