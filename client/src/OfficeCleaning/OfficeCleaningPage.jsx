import React, {
  useCallback,
  useState,
} from 'react';
import { Form } from 'react-final-form';

import {
  BlockAlignment,
  Container,
  Page,

  Button,
  FormTitle,

  request,

  AddressForm,
  ContactsFrom,
  RoomForm,
} from '../common';

import officeCleaningLogo from './officeCleaningLogo.png';
import styles from './OfficeCleaningPage.scss';

const initialValues = {
  attributes: {
    'тип': 'Уборка офиса',
  },
};

export const OfficeCleaningPage = () => {
  const [isSending, setIsSending] = useState(false);

  const onSubmit = useCallback(
    (values) => {
      setIsSending(true);

      request('order', {
        method: 'POST',
        body: JSON.stringify(values),
      })
        .then(() => {
          setIsSending(false);

          alert('Ваш запрос отправлен. С вами свжется наш менеджер.');
        })
        .catch(() => {
          setIsSending(false);

          alert('Что-то пошло не так, повторите позже.');
        });
    },
    []
  );

  return (
    <Page>
      <Container className={styles.officeCleaningFormContainer}>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormTitle
                logo={officeCleaningLogo}
                title="Уборка офиса"
              >
                <p>
                  Мы занимаемся как регулярной уборкой офисов, так и разовыми уборками.
                  Мы можем подготовить ваш офис к работе после строительства и ремонта, помыть только окна либо сделать химчистку мебели и ковролина.
                  <br />
                  <br />
                  Мы работаем в удобное для Вас время.
                </p>
              </FormTitle>

              <RoomForm />

              <AddressForm />

              <ContactsFrom />

              <BlockAlignment align="center">
                <Button
                  type="submit"
                  label={isSending ? 'Оформить заказ...' : 'Оформить заказ'}
                  disabled={isSending}
                />
              </BlockAlignment>
            </form>
          )}
        />
      </Container>
    </Page>
  );
};
