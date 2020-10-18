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

import { TokenService } from '../TokenService';

import styles from './LoginPage.scss';

export const LoginPage = ({ changeRoute }) => {
  const [isSending, setIsSending] = useState(false);

  const goToRegistration = useCallback((e) => {
    e.preventDefault();

    changeRoute('registration');
  }, []);

  const onSubmit = useCallback(
    (values) => {
      setIsSending(true);

      request('auth/login', {
        method: 'POST',
        body: JSON.stringify(values),
      })
        .then((token) => {
          setIsSending(false);

          TokenService.setToken(token);

          changeRoute('welcome');
        })
        .catch(() => {
          setIsSending(false);

          alert('Логин и пароль не соответствуют.');
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
          className={styles.loginForm}
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
              label={isSending ? 'Входим...' : 'Войти'}
              disabled={isSending}
            />

            <a
              href="#"
              onClick={goToRegistration}
            >
              Регистрация
            </a>
          </div>
        </form>
      )}
    />
  );
};
