import React from 'react';

import {
  FieldSet,
  Services,
} from '../common';


export const AdditionalServicesForm = ({ onChange }) => {
  return (
    <FieldSet title="Доп. услуги">
      <Services
        type={0}
        onToggleService={onChange}
      />
    </FieldSet>
  );
};
