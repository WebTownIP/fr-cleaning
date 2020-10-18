import React, {
  useState,
  useEffect,
  useCallback,
} from 'react';

import {
  request,
} from '../../common';

import { TokenService } from '../TokenService';

import { Orders } from './Orders';
import { Order } from './Order';

export const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request('order', {
      method: 'GET',
    }, TokenService.getToken().token)
      .then((data) => {
        setOrders(data);
      })
      .catch(() => {
        alert('Что-то пошло не так. Изменения могут быть невалдными. Попробуйте позже.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const renderDetails = useCallback(id => (<Order id={id} />));

  if (isLoading) {
    return 'Loading...';
  }

  return (
    <Orders
      orders={orders}
      renderDetails={renderDetails}
    />
  );
};
