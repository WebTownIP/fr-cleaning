import React from 'react';
import { Field } from 'react-final-form';

import {
  FieldSet,
  TextField,
  TextArea,
} from '../../common';

import { EntityManager } from '../EntityManager';

export const CategoriesPage = () => {
  return (
    <EntityManager
      api="category"
    >
      <FieldSet title="">
        <div>
          <Field name="name">
            {props => (
              <TextField
                label="Название"
                required
                {...props.input}
              />
            )}
          </Field>
        </div>

        <div>
          <Field name="displayName">
            {props => (
              <TextArea
                label="Отображаемое имя"
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
