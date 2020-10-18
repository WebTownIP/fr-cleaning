import React, {
  useState,
  useCallback,
} from 'react';

import styles from './Services.scss';

export const Service = ({ service, onToggleService }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleService = useCallback(() => {
    setIsActive(prev => !prev);

    onToggleService(service.id, parseInt(service.price, 10));
  }, [onToggleService]);

  return (
    <div
      className={`${styles.service} ${isActive ? styles.activeService : ''} ${onToggleService ? styles.interactableService : ''}`}
      onClick={onToggleService ? toggleService : undefined}
    >
      <img
        className={styles.serviceImage}
        src={service.pic}
        alt={service.title}
      />

      <div className={styles.serviceTitle}>{service.title}</div>
      <div className={styles.serviceDescription}>{service.description}</div>

      <div className={styles.servicePrice}>{service.price}</div>
    </div>
  );
};
