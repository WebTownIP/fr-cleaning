import React from 'react';

import {
  Page,
  SectionTitle,
} from '../common';

import { CallForm } from '../Landing/CallForm';

export const DevelopPage = () => {
  return (
    <Page>
      <CallForm />

      <SectionTitle>Страница находится в разработке</SectionTitle>
    </Page>
  );
};
