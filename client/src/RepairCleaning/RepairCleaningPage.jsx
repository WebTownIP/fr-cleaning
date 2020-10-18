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

import { RepairDescription } from './RepairDescription';
import repairCleaningLogo from './repairCleaningLogo.png';
import styles from './RepairCleaningPage.scss';

const initialValues = {
  attributes: {
    'тип': 'Ремонт',
  },
};

export const RepairCleaningPage = () => {
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
      <Container className={styles.repairCleaningFormContainer}>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormTitle
                logo={repairCleaningLogo}
                title="Уборка после ремонта"
              >
                <p>
                  Ремонт – это всегда пыль, мусор и беспорядок, от которых не спрячешься ни в одной из комнат.
                  Уборка помещений после ремонта сложна и утомительна – иногда она может растянуться на несколько дней, а то и на целую неделю.
                  Не тратьте время и силы попусту – обратитесь к профессионалам и закажите генеральную уборка квартиры после ремонта по приемлемым ценам!
                </p>

                <p>
                  Вам не нужно ходить и показывать, что сделать, ведь клинеры Планета Клининга работают по строгому стандарту чистоты и знают, что делать.
                </p>

                <p>
                  Мы также выполним уборку после ремонта коттеджей, домов и офисов.
                </p>
              </FormTitle>

              <RepairDescription />

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
