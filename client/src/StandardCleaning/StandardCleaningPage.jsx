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
  RoomForm,
  PriceForm,
} from '../common';

import { AdditionalServicesForm } from './AdditionalServicesForm';

import standardCleaningLogo from './standardCleaningLogo.png';
import styles from './StandardCleaningPage.scss';

const initialValues = {
  price: 59,
  services: [],
  attributes: {
    'тип': 'Обычная уборка',
    'комнаты': 1,
    'санузлы': 1,
  },
};

const mutators = {
  changeRooms(args, state, utils) {
    const roomsNumber = args[0] || 0;
    const prevRoomsNumber = state.formState.values.attributes['комнаты'] || 0;
    const { price } = state.formState.values;

    utils.changeValue(state, 'price', () => price + (roomsNumber - prevRoomsNumber) * 10);
    utils.changeValue(state, 'attributes.комнаты', () => args[0] || undefined);
  },
  changeBathrooms(args, state, utils) {
    const bathroomsNumber = args[0] || 0;
    const prevBathroomsNumber = state.formState.values.attributes['санузлы'] || 0;
    const { price } = state.formState.values;

    utils.changeValue(state, 'price', () => price + (bathroomsNumber - prevBathroomsNumber) * 30);
    utils.changeValue(state, 'attributes.санузлы', () => args[0] || undefined);
  },
  changeServices(args, state, utils) {
    const id = args[0];
    const servicePrice = args[1];
    const activeServices = [...state.formState.values.services];
    let { price } = state.formState.values;

    const servicePosition = activeServices.findIndex(activeId => activeId === id);

    if (servicePosition === -1) {
      price += servicePrice;
      activeServices.push(id);
    } else {
      price -= servicePrice;
      activeServices.splice(servicePosition, 1);
    }

    utils.changeValue(state, 'price', () => price);
    utils.changeValue(state, 'services', () => activeServices);
  },
};

export const StandardCleaningPage = () => {
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
                logo={standardCleaningLogo}
                title="Обычная уборка"
              />

              <RoomForm
                changeRooms={form.mutators.changeRooms}
                changeBathrooms={form.mutators.changeBathrooms}
              />

              <AdditionalServicesForm onChange={form.mutators.changeServices} />

              <AddressForm />

              <ContactsFrom />

              <OrderTypeForm />

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
