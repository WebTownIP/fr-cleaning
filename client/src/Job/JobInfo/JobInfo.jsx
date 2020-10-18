import React from 'react';

import {
  Container,
  SectionTitle,
} from '../../common';

export const JobInfo = () => {
  return (
    <section>
      <Container>
        <SectionTitle>
          Вакансии
        </SectionTitle>
      </Container>

      <Container>
        <p>
          Мы всегда рады принять в нашу команду специалистов, Ваши резюме Вы можете направить на электронную почту&nbsp;
          <a href="mailto:Planet-gomel@yandex.by">Planet-gomel@yandex.by</a>
          &nbsp;или оставить заявку и мы с вами свяжемс
        </p>
      </Container>
    </section>
  );
};
