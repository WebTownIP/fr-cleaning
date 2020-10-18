import React from 'react';

import {
  Page,
} from '../common';

import { DoClean } from './DoClean';
import { Service } from './Service';
import { DontClean } from './DontClean';

export const CleaningPage = () => {
  return (
    <Page>
      <DoClean />

      <Service />

      <DontClean />
    </Page>
  );
};
