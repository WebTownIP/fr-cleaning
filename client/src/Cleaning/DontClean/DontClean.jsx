import React from 'react';

import {
  Container,
  SectionTitle,
} from '../../common';

import styles from './DontClean.scss';

export const DontClean = () => {
  return (
    <section>
      <Container>
        <SectionTitle>
          Что мы не делаем
        </SectionTitle>
      </Container>

      <Container>
        <div className={styles.dontCleanItems}>
          <div>
            <div className={styles.dontCleanItem}>
              Не двигаем мебель
            </div>
          </div>

          <div>
            <div className={styles.dontCleanItem}>
              Не чистим жалюзи и шторы
            </div>
          </div>

          <div>
            <div className={styles.dontCleanItem}>
              Не моем стены и потолки
            </div>
          </div>

          <div>
            <div className={styles.dontCleanItem}>
              Не дезинфицируем помещения
            </div>
          </div>

          <div>
            <div className={styles.dontCleanItem}>
              Не применяем биологически опасные материалы
            </div>
          </div>

          <div>
            <div className={styles.dontCleanItem}>
              Не моем люстры и плафоны
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
