import React from 'react';

import {
  Container,
  SectionTitle,
} from '../../common';

import { Discount } from './Discount';
import styles from './Discounts.scss';

export const DiscountSection = ({ title, discounts }) => {
  return (
    <section>
      <Container>
        <SectionTitle>
          {title}
        </SectionTitle>
      </Container>

      <Container className={styles.discountSectionsWrapper}>
        {
          discounts.map((discount) => {
            return (
              <Discount
                key={discount.id}
                name={discount.name}
                value={discount.value}
              />
            );
          })
        }
      </Container>
    </section>
  );
};
