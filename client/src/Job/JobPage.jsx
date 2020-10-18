import React from 'react';

import {
  Page,
} from '../common';

import { JobInfo } from './JobInfo';
import { JobCards } from './JobCards';

export const JobPage = () => {
  return (
    <Page>
      <JobInfo />

      <JobCards />
    </Page>
  );
};
