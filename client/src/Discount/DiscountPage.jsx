import React from 'react';

import {
  Page,
  Container,
  SectionTitle,
} from '../common';

import { Discounts } from './Discounts';

export const DiscountPage = () => {
  return (
    <Page>
      <Container>
        <SectionTitle>
          Как получить скидку на уборку
        </SectionTitle>
      </Container>

      <Discounts />
    </Page>
  );
};
