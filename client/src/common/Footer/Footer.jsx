import React from 'react';

import { BlockAlignment } from '../BlockAlignment';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { SocialNetwork } from '../SocialNetwork';

import { FooterNavigation } from './FooterNavigation';

import styles from './Footer.scss';

export const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div>
        <Container className={styles.subscription}>
          <div className={styles.subscriptionTitle}>
            Подписывайтесь на наши страницы в социальных сетях, чтобы первыми узнавать о новинках и акциях нашей компании.
          </div>

          <div className={styles.subscriptionNetworks}>
            <SocialNetwork
              type="vk"
              size={70}
            />

            <SocialNetwork
              type="insta"
              size={110}
            />

            <SocialNetwork
              type="telega"
              size={70}
            />
          </div>
        </Container>
      </div>

      <div>
        <Container>
          <BlockAlignment align="center">
            ИП Павлов Константин Николаевич УНП 491428980
          </BlockAlignment>
          <BlockAlignment align="center">
            свидетельство от 01.12.2016 выдано администрацией Железнодорожного района г.Гомеля
          </BlockAlignment>
        </Container>
      </div>

      <div className={styles.footer}>
        <Container className={styles.footerContainer}>
          <div>
            <Logo />
          </div>

          <FooterNavigation />
        </Container>
      </div>
    </footer>
  );
};
