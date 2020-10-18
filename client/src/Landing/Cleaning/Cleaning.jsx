import React from 'react';

import {
  Container,
  SectionTitle,
} from '../../common';

import styles from './Cleaning.scss';

const CLEANING_INFO = [
  'Протираем все доступные поверхности, подоконники, батареи, плинтусы, двери, ручки, выключатели',
  'Моем зеркала и стеклянные поверхности, протираем под предметами, всё ставим на места',
  'Моем пол (под коврами и в открытых местах), пылесосим ковры и коврики',
  'Складываем вещи в доступных местах (внутрь шкафов не заглядываем!)',
  'Моем душевую кабину, ванную, краны, дезинфицируем унитаз',
  'Убираем и выносим мусор',
];

export const Cleaning = () => {
  return (
    <section>
      <Container>
        <SectionTitle>
          Из чего состоит уборка
        </SectionTitle>
      </Container>

      <Container className={styles.cleaningWrapper}>
        <Container className={styles.cleaningInfo}>
          {
            CLEANING_INFO.map((info) => {
              return (
                <span
                  key={info}
                  className={styles.cleaningInfoItem}
                >
                  {info}
                </span>
              );
            })
          }
        </Container>
      </Container>
    </section>
  );
};
