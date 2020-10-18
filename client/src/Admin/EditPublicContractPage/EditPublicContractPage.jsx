import React, {
  useState,
  useCallback,
  useEffect,
} from 'react';
import {
  Form,
} from 'react-final-form';

import {
  Button,

  HtmlEditor,

  request,
} from '../../common';

import { TokenService } from '../TokenService';

const mutators = {
  setContractValue: ([contractValue], state, utils) => {
    utils.changeValue(state, 'value', () => contractValue);
  },
};

export const EditPublicContractPage = () => {
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contract, setContract] = useState();

  useEffect(() => {
    request('contract', {
      method: 'GET',
    })
      .then((data) => {
        setContract({
          value: data.value,
        });
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

      request('contract', {
        method: 'POST',
        body: JSON.stringify(values),
      }, TokenService.getToken().token)
        .then(() => {
          alert('Публичный договор успешно сохранен.');
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
    <Form
      initialValues={contract}
      onSubmit={onSubmit}
      mutators={mutators}
      render={({ handleSubmit, form }) => (
        <form
          onSubmit={handleSubmit}
        >
          <div>
            <HtmlEditor
              onChange={form.mutators.setContractValue}
              content={contract.value}
            />
          </div>

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
};
