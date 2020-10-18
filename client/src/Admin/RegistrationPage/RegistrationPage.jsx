import React, {
  useState,
  useCallback,
} from 'react';
import {
  Form,
  Field,
} from 'react-final-form';

import {
  TextField,
  Button,

  request,
} from '../../common';

import styles from './RegistrationPage.scss';

export const RegistrationPage = ({ changeRoute }) => {
  const [isSending, setIsSending] = useState(false);

  const goToLogin = useCallback((e) => {
    e.preventDefault();

    changeRoute('login');
  }, []);

  const onSubmit = useCallback(
    (values) => {
      setIsSending(true);

      request('auth/register', {
        method: 'POST',
        body: JSON.stringify(values),
      })
        .then(() => {
          setIsSending(false);

          alert('Ваш аккаунт был создан. Вы сможете войти после активации администратором.');
        })
        .catch(() => {
          setIsSending(false);

          alert('Что-то пошло не так. Попробуйте позже или свяжитесь с администратором.');
        });
    },
    []
  );

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className={styles.registrationForm}
        >
          <div>
            <Field name="email">
              {props => (
                <TextField
                  label="Email"
                  required
                  {...props.input}
                />
              )}
            </Field>
          </div>

          <div>
            <Field name="password">
              {props => (
                <TextField
                  label="Пароль"
                  required
                  type="password"
                  {...props.input}
                />
              )}
            </Field>
          </div>

          <div>
            <Button
              label={isSending ? 'Регистрируем...' : 'Зарегистрироваться'}
              disabled={isSending}
            />

            <a
              href="#"
              onClick={goToLogin}
            >
              Вход
            </a>
          </div>
        </form>
      )}
    />
  );
};
