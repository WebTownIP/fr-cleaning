import React, {
  useState,
  useEffect,
} from 'react';

import { CardsSet } from '../CardsSet';
import {
  request,
} from '../utils';

import { Service } from './Service';

export const Services = ({ type, onToggleService }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    request('service', {
      method: 'GET',
    })
      .then((data) => {
        setServices(data.filter(service => service.type === type));
      })
      .catch(() => {
        alert('Что-то пошло не так. Попробуйте позже.');
      });
  }, []);

  return (
    <CardsSet>
      {
        services.map(service => (
          <Service
            key={service.id}
            service={service}
            onToggleService={onToggleService}
          />
        ))
      }
    </CardsSet>
  );
};
