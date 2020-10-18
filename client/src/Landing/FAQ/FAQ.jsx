import React from 'react';

import {
  Accordion,
  Container,
  SectionTitle,
} from '../../common';

import styles from './FAQ.scss';

const QUESTION_ITEMS = [
  {
    key: 1,
    question: <span className={styles.question}>Убираете ли Вы за городом?</span>,
    answer: (
      <p>
        Да, наша клининговая компания осуществляет уборки в пределах Гомельского района. Возможно три варианта:
        <ol>
          <li>Клиент самостоятельно осуществляет транспортировку клинера в обе стороны.</li>
          <li>Клиент оплачивает клинеру такси туда и обратно.</li>
          <li>Клиент оплачивает дополнительную стоимость по доставке клинера силами Планета Клининга.</li>
        </ol>
      </p>
    ),
  },
  {
    key: 2,
    question: <span className={styles.question}>Нужно ли присутствовать в процессе уборки?</span>,
    answer: (
      <p>
        Это ваше право. Вы можете присутствовать при уборке или же отправиться по своим делам. Для этого мы и существуем, чтобы экономить Ваше время.
      </p>
    ),
  },
  {
    key: 3,
    question: <span className={styles.question}>Сколько времени нужно на уборку?</span>,
    answer: (
      <p>
        Уборка однокомнатной квартиры займет около 3 часов. Время может варьироваться по нескольким причинам: степень загрязнения, дополнительные услуги.
      </p>
    ),
  },
  {
    key: 4,
    question: <span className={styles.question}>Отодвигаете ли Вы мебель для уборки в труднодоступных местах?</span>,
    answer: (
      <p>
        Клинер уберет труднодоступные места в том случае, если Вы самостоятельно подготовите помещение.
      </p>
    ),
  },
  {
    key: 5,
    question: <span className={styles.question}>Нужно ли предоставлять свои моющие средства?</span>,
    answer: (
      <p>
        У клинера есть все необходимое для полноценной уборки квартиры и мытья окон. Мы используем только профессиональные чистящие средства.
      </p>
    ),
  },
];

export const FAQ = () => {
  return (
    <section>
      <Container>
        <SectionTitle>
          Популярные вопросы наших клиентов
        </SectionTitle>
      </Container>

      <Container className={styles.faqWrapper}>
        <div className={styles.questions}>
          {
            QUESTION_ITEMS.map((questionItem) => {
              return (
                <Accordion
                  key={questionItem.key}
                  title={questionItem.question}
                >
                  {questionItem.answer}
                </Accordion>
              );
            })
          }
        </div>
      </Container>
    </section>
  );
};
