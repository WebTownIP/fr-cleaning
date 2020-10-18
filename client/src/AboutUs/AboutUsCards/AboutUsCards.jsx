import React from 'react';

import {
  CardInfo,
  CardsSet,
} from '../../common';

import safety from './safety.png';
import contract from './contract.png';
import discounts from './discounts.png';
import health from './health.png';
import workers from './workers.png';
import garanty from './garanty.png';

const cardItems = [
  {
    title: 'Мы заботимся о вашей безопасности',
    description: 'Мы знаем насколько тяжело в первый разпустить в свой дом незнакомого человека. Но вы на 100% можете нам довериться. У нас работают только проверенные и обученные клинеры',
    image: safety,
    key: 1,
  },
  {
    title: 'Мы заботимся о юридической чистоте каждой сделки',
    description: 'Мы всегда работаем с договором и всеми необходимыми документами',
    image: contract,
    key: 2,
  },
  {
    title: (
      <>
        Мы заботимся о доступности
        <wbr />
        профессиональной и качественной уборки каждому
      </>
    ),
    description: 'У нас есть скидки и бонусные программы, которые действуют как на разовые заказы, так и а регулярные уборки',
    image: discounts,
    key: 3,
  },
  {
    title: 'Мы заботимся о вашем здоровье',
    description: 'Мы используем только профессиональное оборудование и безопасные средства, вы не почувствуете никаких посторонних запахов после уборки.',
    image: health,
    key: 4,
  },
  {
    title: 'Мы заботимся о вашем спокойнствии',
    description: 'Наши клинеры бережно и трепетно относятся к имуществу. Во время уборки ваша квартира застрахована от ущерба (причиненного исполнителем).',
    image: workers,
    key: 5,
  },
  {
    title: 'Мы заботимся о качестве уборки',
    description: 'Наша миссия - идеальная чистота, в которой каждый клиент будет счастлив. Если вам не понравится, уборка вашей квартиры (дома) будет за счет клининговой компании',
    image: garanty,
    key: 6,
  },
];

export const AboutUsCards = () => {
  return (
    <CardsSet>
      {
        cardItems.map(cardItem => (
          <CardInfo {...cardItem} />
        ))
      }
    </CardsSet>
  );
};
