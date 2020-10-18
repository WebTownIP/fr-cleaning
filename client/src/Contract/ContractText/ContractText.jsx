import React, {
  useState,
  useEffect,
} from 'react';

import {
  Container,
  SectionTitle,

  request,
} from '../../common';

export const ContractText = () => {
  const [contract, setContract] = useState();

  useEffect(() => {
    request('contract', {
      method: 'GET',
    })
      .then((data) => {
        setContract(data);
      })
      .catch(() => {
        alert('Что-то пошло не так. Попробуйте позже.');
      });
  }, []);

  return (
    <section>
      <Container>
        <SectionTitle>
          Пользовательское соглашение
        </SectionTitle>
      </Container>

      <Container>
        <div dangerouslySetInnerHTML={{ __html: contract ? contract.value : '' }} />
      </Container>
    </section>
  );
};
