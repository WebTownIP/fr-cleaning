import React from 'react';
import ReactDOM from 'react-dom';

import { JobPage } from './JobPage';

export default JobPage;

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<JobPage />, container);
}
