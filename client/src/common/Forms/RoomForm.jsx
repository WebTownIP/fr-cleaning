import React, { useCallback } from 'react';
import { Field } from 'react-final-form';

import { FieldSet } from './FieldSet';
import { TextField } from './TextField';

const styles = {
  flex: 1,
};

export const RoomForm = ({ changeRooms, changeBathrooms }) => {
  const onChangeRooms = useCallback((e) => {
    changeRooms(parseInt(e.target.value, 10));
  }, [changeRooms]);

  const onChangeBathrooms = useCallback((e) => {
    changeBathrooms(parseInt(e.target.value, 10));
  }, [changeBathrooms]);

  return (
    <FieldSet title="Ваше помещение">
      <div style={styles}>
        <Field name="attributes.комнаты">
          {props => (
            <TextField
              label="Комнаты"
              type="number"
              {...props.input}
              onChange={changeRooms ? onChangeRooms : props.input.onChange}
              min={changeRooms ? 1 : 0}
              required={Boolean(changeRooms)}
            />
          )}
        </Field>
      </div>

      <div style={styles}>
        <Field name="attributes.санузлы">
          {props => (
            <TextField
              label="Санузлы"
              type="number"
              {...props.input}
              onChange={changeBathrooms ? onChangeBathrooms : props.input.onChange}
              min={changeBathrooms ? 1 : 0}
              required={Boolean(changeBathrooms)}
            />
          )}
        </Field>
      </div>

      <div style={styles}>
        <Field name="attributes.площадь">
          {props => (
            <TextField
              label="Площадь (м2)"
              type="number"
              min={0}
              {...props.input}
            />
          )}
        </Field>
      </div>
    </FieldSet>
  );
};
