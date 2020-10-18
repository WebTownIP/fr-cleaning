import React from 'react';
import { Field } from 'react-final-form';

import { FieldSet } from './FieldSet';
import { TextField } from './TextField';

const styles = {
  main: {
    flex: 2,
  },
  additional: {
    flex: 1,
  },
}

export const AddressForm = () => {
  return (
    <FieldSet title="Ваш адрес">
      <div style={styles.main}>
        <Field name="street">
          {props => (
            <TextField
              label="Улица"
              required
              {...props.input}
            />
          )}
        </Field>
      </div>

      <div style={styles.additional}>
        <Field name="house">
          {props => (
            <TextField
              label="Дом"
              type="number"
              {...props.input}
            />
          )}
        </Field>
      </div>

      <div style={styles.additional}>
        <Field name="flat">
          {props => (
            <TextField
              label="Квартира"
              type="number"
              {...props.input}
            />
          )}
        </Field>
      </div>
    </FieldSet>
  );
};
