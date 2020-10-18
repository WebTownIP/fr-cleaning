import React from 'react';

import {
  Container,
  SectionTitle,
} from '../../common';

import { WorkflowStep } from './WorkflowStep';

import styles from './Workflow.scss';

import DateLogo from './date.png';
import MeetLogo from './meet.png';
import PayLogo from './pay.png';
import EnjoyLogo from './enjoy.png';

const WORKFLOW_ITEMS = [
  {
    img: DateLogo,
    title: 'Выберите дату уборки',
    description: 'Вы заказываете уборку на любую удобную для себя дату. Оставьте заявку на сайте (менеджер перезвонит, чтобы подтвердить заказ) или позвоните нам по телефону (вайберу, телеграму, ватсапу) +375 (44) 459 24 10.',
  },
  {
    img: MeetLogo,
    title: 'Встретьте клинера',
    description: 'К вам приезжает прошедший обучение клинер, привезет с собой всё необходимое и выполнит качественную уборку.',
  },
  {
    img: PayLogo,
    title: 'Оплатите уборку',
    description: 'Оплатите уборку удобным для Вас способом: карточкой на сайте или наличными клинеру после уборки.',
  },
  {
    img: EnjoyLogo,
    title: 'Наслаждайтесь чистотой',
    description: 'Наслаждаетесь чистотой и свежестью своего дома. Наше качество уборки всегда на высоком уровне, но, если оно вас не устроит - мы все переделаем бесплатно',
  },
];

export const Workflow = () => {
  return (
    <section>
      <Container>
        <SectionTitle>
          Как мы работаем
        </SectionTitle>
      </Container>

      <Container className={styles.advantages}>
        {
          WORKFLOW_ITEMS.map(({ img, title, description }, idx) => {
            return (
              <WorkflowStep
                key={title}
                img={img}
                title={title}
                description={description}
                step={idx + 1}
              />
            );
          })
        }
      </Container>
    </section>
  );
};
