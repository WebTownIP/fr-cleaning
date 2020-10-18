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
  PriceForm,
} from '../common';

import { WindowForm } from './WindowForm';

import windowCleaningLogo from './windowCleaningLogo.png';
import styles from './WindowCleaningPage.scss';

const initialValues = {
  price: 5,
  attributes: {
    'тип': 'Мойка окон',
    'створки': 1,
  },
};
const mutators = {
  changeWindows(args, state, utils) {
    const windowsNumber = args[0];

    utils.changeValue(state, 'attributes.створки', () => windowsNumber || undefined);
    utils.changeValue(state, 'price', () => (windowsNumber || 0) * 5);
  },
};

export const WindowCleaningPage = () => {
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
          mutators={mutators}
          render={({ form, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormTitle
                logo={windowCleaningLogo}
                title="Мойка окон"
              >
                <p>
                  Что входит в мойку окон:
                  <ul>
                    <li>Моем стекла и раму с двух сторон</li>
                    <li>Протираем подоконники</li>
                    <li>Убираем разводы</li>
                    <li>Моем окна после ремонта (снимаем оконную ленту и удаляем следы краски и строительных смесей)</li>
                    <li>Дополнительно можем использовать пароочиститель</li>
                  </ul>
                </p>
              </FormTitle>

              <WindowForm changeWindows={form.mutators.changeWindows} />

              <AddressForm />

              <ContactsFrom />

              <PriceForm />

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
