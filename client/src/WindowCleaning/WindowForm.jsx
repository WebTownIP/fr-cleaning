import React, { useCallback } from 'react';
import { Field } from 'react-final-form';

import {
  FieldSet,
  TextField,
} from '../common';

const styles = {
  flex: 1,
};

export const WindowForm = ({ changeWindows }) => {
  const onChange = useCallback((e) => {
    changeWindows(parseInt(e.target.value, 10));
  }, [changeWindows]);

  return (
    <FieldSet>
      <div style={styles}>
        <Field name="attributes.створки">
          {props => (
            <TextField
              label="Створки"
              type="number"
              min={1}
              {...props.input}
              onChange={onChange}
              required
            />
          )}
        </Field>
      </div>
    </FieldSet>
  );
};
