import React from 'react';
import { Field } from 'react-final-form';

import { TextField } from './TextField';

export const PriceForm = () => {
  return (
    <Field name="price">
      {props => (
        <TextField
          label="Цена, руб"
          type="number"
          min={1}
          {...props.input}
          disabled
        />
      )}
    </Field>
  );
};
