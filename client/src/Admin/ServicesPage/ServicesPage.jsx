import React from 'react';
import { Field } from 'react-final-form';

import {
  FieldSet,
  TextField,
  Select,
} from '../../common';

import { EntityManager } from '../EntityManager';

const serviceTypes = [
  {
    id: 0,
    name: 'Доп. услуга',
  },
  {
    id: 1,
    name: 'Химчистка',
  },
];

export const ServicesPage = () => {
  return (
    <EntityManager
      api="service"
    >
      <FieldSet title="">
        <div>
          <Field name="title">
            {props => (
              <TextField
                label="Заголовок"
                required
                {...props.input}
              />
            )}
          </Field>
        </div>

        <div>
          <Field name="description">
            {props => (
              <TextField
                label="Описание"
                required
                {...props.input}
              />
            )}
          </Field>
        </div>

        <div>
          <Field name="price">
            {props => (
              <TextField
                label="Цена"
                required
                {...props.input}
              />
            )}
          </Field>
        </div>

        <div>
          <Field name="pic">
            {props => (
              <TextField
                label="Путь лого"
                required
                {...props.input}
              />
            )}
          </Field>
        </div>

        <div>
          <Field
            name="type"
            parse={v => +v}
          >
            {props => (
              <Select
                label="Тип"
                options={serviceTypes}
                required
                {...props.input}
              />
            )}
          </Field>
        </div>
      </FieldSet>
    </EntityManager>
  );
};
