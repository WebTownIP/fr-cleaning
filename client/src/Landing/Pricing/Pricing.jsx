import React, {
  useEffect,
  useState,
} from 'react';

import {
  Container,
  SectionTitle,

  request,
} from '../../common';

import { Price } from './Price';

import styles from './Pricing.scss';

const PRICE_ITEMS = [
  {
    title: 'Однокомнатная',
    price: '59 руб.',
    description: 'В стоимость включена уборка одной комнаты, кухни, коридора и одного санузла',
  },
  {
    title: 'Двухкомнатная',
    price: '69 руб.',
    description: 'В стоимость включена уборка двух комнат, кухни, коридора и одного санузла',
  },
  {
    title: 'Трехкомнатная',
    price: '79 руб.',
    description: 'В стоимость включена уборка трех комнат, кухни, коридора и одного санузла',
  },
];

export const Pricing = () => {
  const [discount, setDiscount] = useState('-10%');

  useEffect(() => {
    request('discount', { method: 'GET' })
      .then((discounts) => {
        setDiscount(((discounts || []).find(d => d.name === ' ') || {}).value);
      });
  }, []);

  return (
    <section>
      <Container>
        <SectionTitle>Клининговые услуги по доступной цене</SectionTitle>
      </Container>

      <Container className={styles.prices}>
        {
          PRICE_ITEMS.map(({ price, title, description }) => {
            return (
              <Price
                key={title}
                price={price}
                title={title}
                description={description}
                discount={discount}
              />
            );
          })
        }
      </Container>

      <Container className={styles.pricingCaption}>
        Чем чаще ваша уборка - тем ниже стоимость
      </Container>
    </section>
  );
};
