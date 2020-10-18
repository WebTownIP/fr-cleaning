import React from 'react';

import styles from './FormTitle.scss';

export const FormTitle = ({ logo, title, children }) => {
  return (
    <div className={styles.formTitleWrapper}>
      <div className={styles.formLogo}>
        <img
          src={logo}
          alt={title}
        />
      </div>

      <div className={styles.formInfo}>
        <h1 className={styles.formTitle}>{title}</h1>

        <div className={styles.formDescription}>{children}</div>
      </div>
    </div>
  );
};
