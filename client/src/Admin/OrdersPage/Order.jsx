import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  Form,
  Field,
} from 'react-final-form';


import {
  Button,
  TextArea,
  TextField,
  Select,

  request,
} from '../../common';

import { TokenService } from '../TokenService';

const statuses = [
  { id: 0, name: 'Новый' },
  { id: 1, name: 'В обработке' },
  { id: 2, name: 'Готов к исполнению' },
  { id: 3, name: 'В прогрессе' },
  { id: 4, name: 'Завершен' },
];

export const Order = ({ id }) => {
  const [order, setOrder] = useState({});
  const [formData, setFormData] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request(`order/${id}`, {
      method: 'GET',
    }, TokenService.getToken().token)
      .then((data) => {
        setOrder(data);
        setFormData({
          comment: data.comment,
          price: data.price,
          status: data.status,
        });
      })
      .catch(() => {
        alert('Что-то пошло не так. Изменения могут быть невалдными. Попробуйте позже.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const onSubmit = useCallback(
    (values) => {
      setIsSending(true);

      request(`order/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(values),
      }, TokenService.getToken().token)
        .then(() => {
          alert('Успешно сохранена.');
        })
        .catch(() => {
          alert('Что-то пошло не так. Попробуйте позже.');
        })
        .finally(() => {
          setIsSending(false);
        });
    },
    []
  );

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div>
      <div>
        <Form
          initialValues={formData}
          onSubmit={onSubmit}
          render={({ handleSubmit, form }) => (
            <form
              onSubmit={handleSubmit}
            >
              <Field name="comment">
                {props => (
                  <TextArea
                    label="Дополнительная информация"
                    {...props.input}
                  />
                )}
              </Field>

              <Field name="price">
                {props => (
                  <TextField
                    label="Цена"
                    type="number"
                    {...props.input}
                  />
                )}
              </Field>

              <Field
                name="status"
                parse={v => +v}
              >
                {props => (
                  <Select
                    label="Статус"
                    options={statuses}
                    required
                    {...props.input}
                  />
                )}
              </Field>

              <div>
                <Button
                  label={isSending ? 'Сохраняем...' : 'Сохранить'}
                  disabled={isSending}
                />
              </div>
            </form>
          )}
        />
        {order.status}
        {order.comment}
        {order.price}
      </div>

      <div>
        <h4>Адрес</h4>
        <div>
          {order.address.street}
          &nbsp;дом&nbsp;
          {order.address.house_n}
          &nbsp;квартира&nbsp;
          {order.address.appartm_n}
        </div>
      </div>

      {
        order.services.length > 0 && (
          <div>
            <h4>Сервисы</h4>
            <ul>
              {order.services.map((service, idx) => (<li key={idx}>{service}</li>))}
            </ul>
          </div>
        )
      }

      {
        order.attributes.length > 0 && (
          <div>
            <h4>Аттрибуты</h4>
            <ul>
              {order.attributes.map((attribute, idx) => (<li key={idx}>{attribute.name} - {attribute.value}</li>))}
            </ul>
          </div>
        )
      }
    </div>
  );
};
