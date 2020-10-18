import React from 'react';

import {
  CardInfo,
  CardsSet,
  Container,
} from '../../common';

import equipment from './equipment.png';
import location from './location.png';
import salary from './salary.png';
import schedule from './schedule.png';
import distance from './distance.png';
import learn from './learn.png';

const cardItems = [
  {
    title: 'Бесплатный инвентарь и униформа',
    image: equipment,
    key: 1,
  },
  {
    title: 'Выездная работа',
    image: location,
    key: 2,
  },
  {
    title: 'Стабильный доход',
    image: salary,
    key: 3,
  },
  {
    title: 'Удобный график работы',
    image: schedule,
    key: 4,
  },
  {
    title: 'Возможность выбора заказа',
    image: distance,
    key: 5,
  },
  {
    title: 'Бесплатное обучение',
    image: learn,
    key: 6,
  },
];

export const JobCards = () => {
  return (
    <section>
      <Container>
        <CardsSet>
          {
            cardItems.map(cardItem => (
              <CardInfo {...cardItem} />
            ))
          }
        </CardsSet>
      </Container>
    </section>
  );
};
