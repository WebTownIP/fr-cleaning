import React from 'react';

import { Container } from '../Container';
import { Logo } from '../Logo';

import { HeaderNavigation } from './HeaderNavigation';
import styles from './Header.scss';

import phoneLogo from './phone.png';
import viberLogo from './viber.png';
import watLogo from './wat.png';
import vkLogo from './vk_a.png';
import telegaLogo from './telega-a.png';

export const Header = () => {
  return (
    <header>
      <div className={styles.subHeader}>
        <Container className={styles.subHeaderContainer}>
          <a
            href="tel:+375444592410"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              src={phoneLogo}
              width="30"
              height="30"
            />
            <span>+375 (44) 459-24-10</span>
          </a>

          <a
            href="whatsapp://send?phone=375444592410"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              src={watLogo}
              width="30"
              height="30"
            />
            <span>WhatsApp</span>
          </a>

          <a
            href="viber://add?number=+375444592410"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              src={viberLogo}
              width="30"
              height="30"
            />
            <span>Viber</span>
          </a>

          <a
            href="tg://resolve?domain=planet-gomel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              src={telegaLogo}
              width="30"
              height="30"
            />

            <span>Telegram</span>
          </a>

          <a
            href="https://vk.com/club168296198"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt=""
              src={vkLogo}
              width="30"
              height="30"
            />

            <span>Вконтакте</span>
          </a>
        </Container>
      </div>

      <div className={styles.header}>
        <Container className={styles.headerContainer}>
          <div className={styles.headerLogoWrapper}>
            <a
              href="/"
            >
              <Logo />
            </a>
          </div>

          <div className={styles.headerNavWrapper}>
            <HeaderNavigation />
          </div>
        </Container>
      </div>
    </header>
  );
};
