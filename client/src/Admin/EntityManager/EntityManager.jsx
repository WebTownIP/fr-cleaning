import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  Form,
} from 'react-final-form';

import {
  Button,

  request,
} from '../../common';

import { TokenService } from '../TokenService';

export const EntityManager = ({ api, children }) => {
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [entyties, setEntyties] = useState([]);

  useEffect(() => {
    request(api, {
      method: 'GET',
    })
      .then((data) => {
        setEntyties(data);
      })
      .catch(() => {
        alert('Что-то пошло не так. Изменения могут быть невалдными. Попробуйте позже.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const onSubmit = useCallback(
    (values) => {
      setIsSending(true);

      const isUpdate = Boolean(values.id);
      const path = isUpdate ? `${api}/${values.id}` : api;
      const method = isUpdate ? 'PUT' : 'POST';

      request(path, {
        method,
        body: JSON.stringify(values),
      }, TokenService.getToken().token)
        .then(() => {
          alert('Успешно сохранена.');

          return request(api, {
            method: 'GET',
          });
        })
        .then((data) => {
          setEntyties(data);
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
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form
            onSubmit={handleSubmit}
          >
            {children}

            <div>
              <Button
                label={isSending ? 'Добавляем...' : 'Добавить'}
                disabled={isSending}
              />
            </div>
          </form>
        )}
      />

      {
        entyties.map((entity) => {
          return (
            <Form
              key={entity.id}
              initialValues={entity}
              onSubmit={onSubmit}
              render={({ handleSubmit, form }) => (
                <form
                  onSubmit={handleSubmit}
                >
                  {children}

                  <div>
                    <Button
                      label={isSending ? 'Сохраняем...' : 'Сохранить'}
                      disabled={isSending}
                    />
                  </div>
                </form>
              )}
            />
          );
        })
      }
    </div>
  );
};
