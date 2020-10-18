import React from 'react';

import {
  Container,
  Page,
} from '../common';

import { AboutUsCards } from './AboutUsCards';

import styles from './AboutUsPage.scss';

export const AboutUsPage = () => {
  return (
    <Page>
      <section>
        <Container>
          <h1 className={styles.title}>
            Профессиональ
            <wbr />
            ная уборка квартир и домов в Гомеле
          </h1>

          <div className={styles.subTitle}>
            Отдыхайте, занимайтесь любимым делом, проводите время с семьёй.
            <br />
            Уборка - это наша забота.
          </div>
        </Container>

        <Container>
          <AboutUsCards />
        </Container>
      </section>
    </Page>
  );
};
