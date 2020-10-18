import React from 'react';

import { Container } from '../../common';

import { Advantage } from './Advantage';

import styles from './Advantages.scss';

import PaymentLogo from './payment.png';
import PriceLogo from './price.png';
import TasksLogo from './tasks.png';
import TimeLogo from './time.png';

const ADVANTAGE_ITEMS = [
  {
    img: PriceLogo,
    title: 'Цена известна заранее',
    description: 'Стоимость уборки известна заранее, простой и понятный калькулятор',
  },
  {
    img: PaymentLogo,
    title: 'Оплата',
    description: 'Оплата картой или наличными',
  },
  {
    img: TimeLogo,
    title: 'Удобное время',
    description: 'Наши клинеры приедут в удобное для вас время. Мы работаем без выходных с 8.00 до 20.00 ',
  },
  {
    img: TasksLogo,
    title: 'Индивидуальный подход',
    description: 'Индивидуальный подход к каждому клиенту. Мы используем только качественные и безопасные средства',
  },
];

export const Advantages = () => {
  return (
    <section>
      <Container className={styles.advantages}>
        {
          ADVANTAGE_ITEMS.map(({ img, title, description }) => {
            return (
              <Advantage
                key={title}
                img={img}
                title={title}
                description={description}
              />
            );
          })
        }
      </Container>
    </section>
  );
};
