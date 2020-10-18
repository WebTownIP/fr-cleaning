import React from 'react';

import {
  Container,
  SectionTitle,
  Services,
} from '../../common';

export const Service = () => {
  return (
    <section>
      <Container>
        <SectionTitle>
          Что можно заказать дополнительно
        </SectionTitle>
      </Container>

      <Container>
        <Services type={0} />
      </Container>
    </section>
  );
};
