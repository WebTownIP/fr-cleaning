import React from 'react';

import styles from './FieldSet.scss';

export const FieldSet = ({ children, title }) => (
  <fieldset className={styles.fieldSet}>
    <h6 className={styles.fieldSetTitle}>{title}</h6>

    <div className={styles.fieldSetFields}>
      {children}
    </div>
  </fieldset>
);
