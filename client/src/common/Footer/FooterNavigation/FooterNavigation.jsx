import React from 'react';

import styles from './FooterNavigation.scss';

export const FooterNavigation = () => {
  return (
    <nav className={styles.footerNavigation}>
      <a href="/cleaning">Что мы убираем</a>

      <a href="/job">Вакансии</a>

      <a href="/discount">Скидки и акции</a>

      <a href="/contract">Пользовательское соглашение</a>

      <a href="/about_us">О нас</a>

      <a href="/faq">Вопросы и ответы</a>
    </nav>
  );
};
