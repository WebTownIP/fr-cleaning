import React, {
  useState,
} from 'react';

import styles from './Accordion.scss';

export const Accordion = ({ title, children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.accordion}>
      <button
        type="button"
        className={`${styles.accordionToggle} ${isOpened ? '' : styles.accordionToggleClosed}`}
        onClick={() => setIsOpened(!isOpened)}
      >
        {title}
      </button>

      <div className={!isOpened ? styles.accordionContent : ''}>
        {children}
      </div>
    </div>
  );
};
