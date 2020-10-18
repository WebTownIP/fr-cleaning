import React from 'react';

import {
  FieldSet,
  Services,
} from '../common';


export const FurnitureForm = ({ onChange }) => {
  return (
    <FieldSet title="Выберите услуги химчистки">
      <Services
        type={1}
        onToggleService={onChange}
      />
    </FieldSet>
  );
};
