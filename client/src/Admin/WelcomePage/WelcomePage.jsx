import React, {
  useEffect,
  useState,
} from 'react';

import {
  BlockAlignment,
} from '../../common';

import { TokenService } from '../TokenService';

export const WelcomePage = ({ changeRoute }) => {
  const [email, setEmail] = useState();

  useEffect(() => {
    const token = TokenService.getToken();

    if (!token) {
      changeRoute('login');
    } else {
      setEmail(token.email);
    }
  }, []);

  return (
    <BlockAlignment align="center">
      Добро пожаловать,
      {email}
    </BlockAlignment>
  );
};
