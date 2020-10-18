import React, {
  useState,
  useEffect,
} from 'react';
import { Field } from 'react-final-form';

import {
  Checkbox,
  FieldSet,
  Select,
  TextField,

  request,
} from '../../common';

import { EntityManager } from '../EntityManager';

export const DiscountsPage = () => {
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request('category', {
      method: 'GET',
    })
      .then((data) => {
        setCategories(data);
      })
      .catch(() => {
        alert('Что-то пошло не так. Изменения могут быть невалдными. Попробуйте позже.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <EntityManager
      api="discount"
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
          <Field name="value">
            {props => (
              <TextField
                label="Значение"
                required
                {...props.input}
              />
            )}
          </Field>
        </div>

        <div>
          <Field
            name="isActive"
            type="checkbox"
            label="Активный"
          >
            {props => (
              <Checkbox
                label="Активный"
                {...props.input}
              />
            )}
          </Field>
        </div>

        <div>
          <Field
            name="categoryId"
            parse={v => +v}
          >
            {props => (
              <Select
                label="Категория"
                options={categories}
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
