import React from 'react';

import {
  Page,
} from '../common';

import { CallForm } from './CallForm';
import { Advantages } from './Advantages';
import { Pricing } from './Pricing';
import { Cleaning } from './Cleaning';
import { FAQ } from './FAQ';
import { Workflow } from './Workflow';

export const LandingPage = () => {
  return (
    <Page>
      <CallForm />

      <Advantages />

      <Pricing />

      <Cleaning />

      <FAQ />

      <Workflow />
    </Page>
  );
};
