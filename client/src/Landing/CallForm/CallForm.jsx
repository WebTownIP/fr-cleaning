import React, {
  useRef,
  useCallback,
  useState,
} from 'react';

import {
  Container,
  request,
} from '../../common';

import styles from './CallForm.scss';

export const CallForm = () => {
  const phoneRef = useRef();
  const nameRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const submitCallForm = useCallback(
    () => {
      const phone = phoneRef.current.value;
      const name = nameRef.current.value;

      if (phone && name) {
        setIsSending(true);

        request('call', {
          method: 'POST',
          body: JSON.stringify({ name, phone }),
        })
          .then(() => {
            setIsSending(false);

            alert('Ваш запрос отправлен. С вами свжется наш менеджер.');
          })
          .catch(() => {
            setIsSending(false);

            alert('Что-то пошло не так, повторите позже.');
          });
      }
    },
    []
  );

  return (
    <section className={styles.callFormWrapper}>
      <Container>
        <h1 className={styles.callFormSectionTitle}>Профессиональная уборка квартир и домов</h1>
        <div className={styles.callFormSectionSubTitle}>
          Чистота не приходит сама. Она приходит вместе с нами
        </div>

        <form
          className={styles.callForm}
        >
          <h6 className={styles.callFormTitle}>Заказать обратный звонок</h6>

          <input
            ref={phoneRef}
            name="phone"
            placeholder="Телефон"
          />

          <input
            ref={nameRef}
            name="name"
            placeholder="Имя"
          />

          <button
            type="button"
            onClick={submitCallForm}
            disabled={isSending}
          >
            Заказать
            {isSending && ' ... '}
          </button>
        </form>
      </Container>
    </section>
  );
};
