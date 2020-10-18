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
  OrderTypeForm,
} from '../common';

import { FurnitureForm } from './FurnitureForm';

import dryCleaningLogo from './dryCleaningLogo.png';
import styles from './DryCleaningPage.scss';

const initialValues = {
  attributes: {
    'тип': 'Химчистка',
  },
  services: [],
};

const mutators = {
  changeServices(args, state, utils) {
    const id = args[0];
    const activeServices = [...state.formState.values.services];

    const servicePosition = activeServices.findIndex(activeId => activeId === id);

    if (servicePosition === -1) {
      activeServices.push(id);
    } else {
      activeServices.splice(servicePosition, 1);
    }

    utils.changeValue(state, 'services', () => activeServices);
  },
};

export const DryCleaningPage = () => {
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
      <Container className={styles.standardCleaningFormContainer}>
        <Form
          initialValues={initialValues}
          mutators={mutators}
          onSubmit={onSubmit}
          render={({ form, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <FormTitle
                logo={dryCleaningLogo}
                title="Химчистка"
              >
                <p>
                  Полное удаление загрязнений с мягкой мебели обходится намного дешевле покупки новой,
                  поэтому популярность нашей услуги возрастает с каждым днем.
                  Сотрудники компании проведут чистку мягкой мебели на дому или в офисе качественно и быстро.
                  Мы быстро почистим следующие виды мебели: диваны, кресла, стулья, кухонные уголки, матрацы, пуфы.
                  Также мы: выполним чистку ковров, избавим от посторонних запахов, проведем сушку изделия после очистки.
                </p>
              </FormTitle>

              <FurnitureForm onChange={form.mutators.changeServices} />

              <AddressForm />

              <ContactsFrom />

              <OrderTypeForm />

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
