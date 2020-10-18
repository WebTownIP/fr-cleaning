import React from 'react';

import styles from './HeaderNavigation.scss';
import CleaningLogo from './cleaning.png';
import RepairLogo from './repair.png';
import WindowLogo from './window.png';
import SofaLogo from './sofa.png';
import OfficeLogo from './office.png';

const NAV_LINKS = [
  {
    name: 'Обычная',
    link: '/standard-cleaning',
    img: CleaningLogo,
  },
  {
    name: 'Ремонт',
    link: '/repair-cleaning',
    img: RepairLogo,
  },
  {
    name: 'Окна',
    link: '/window-cleaning',
    img: WindowLogo,
  },
  {
    name: 'Химчистка',
    link: '/dry-cleaning',
    img: SofaLogo,
  },
  {
    name: 'Офис',
    link: '/office-cleaning',
    img: OfficeLogo,
  },
];

export const HeaderNavigation = () => {
  return (
    <nav>
      <ul className={styles.headerNavigation}>
        {
          NAV_LINKS.map(navLink => (
            <li
              className={styles.headerNavigationItem}
              key={navLink.name}
            >
              <a
                href={navLink.link}
                title={navLink.name}
              >
                <img
                  src={navLink.img}
                  alt={navLink.name}
                />
                <span>{navLink.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
