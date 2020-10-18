import React from 'react';
import { Field } from 'react-final-form';

import { FieldSet } from './FieldSet';
import { TextArea } from './TextArea';
import { TextField } from './TextField';

const styles = {
  partialWidth: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
  }
}

export const ContactsFrom = () => {
  return (
    <FieldSet title="Контактные данные">
      <div style={styles.partialWidth}>
        <Field name="name">
          {props => (
            <TextField
              label="Ваше имя"
              required
              {...props.input}
            />
          )}
        </Field>
      </div>

      <div style={styles.partialWidth}>
        <Field name="phone">
          {props => (
            <TextField
              label="Номер телефона"
              required
              type="phone"
              {...props.input}
            />
          )}
        </Field>
      </div>

      <div style={styles.fullWidth}>
        <Field name="email">
          {props => (
            <TextField
              label="E-mail"
              required
              type="email"
              {...props.input}
            />
          )}
        </Field>
      </div>

      <div style={styles.fullWidth}>
        <Field name="description">
          {props => (
            <TextArea
              label="Дополнительная информация"
              {...props.input}
            />
          )}
        </Field>
      </div>
    </FieldSet>
  );
};
