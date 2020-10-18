import React from 'react';

import styles from './SocialNetwork.scss';

import vkLogo from './vk.png';
import instaLogo from './insta.png';
import telegaLogo from './telega.png';

const NETWORK_TYPES = {
  vk: {
    title: 'Вконтакте',
    img: vkLogo,
    link: 'https://vk.com/club168296198',
  },
  insta: {
    title: 'Instagram',
    img: instaLogo,
    link: 'https://www.instagram.com/planetaklininga',
  },
  telega: {
    title: 'Telegram',
    img: telegaLogo,
    link: 'tg://resolve?domain=planet-gomel',
  },
};

export const SocialNetwork = ({ size, type }) => {
  const network = NETWORK_TYPES[type];

  if (!network) return null;

  return (
    <a
      href={network.link}
      title={network.title}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.socialNetwork}
    >
      <img
        src={network.img}
        alt={network.title}
        width={size}
        height={size}
      />
    </a>
  );
};
