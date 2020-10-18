import React from 'react';
import { Field } from 'react-final-form';

export const OrderTypeForm = () => {
  return (
    <Field name="attributes.тип">
      {props => (
        <input
          type="hidden"
          {...props.input}
        />
      )}
    </Field>
  );
};
