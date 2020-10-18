import React from 'react';
import ReactDOM from 'react-dom';

import { StandardCleaningPage } from './StandardCleaningPage';

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<StandardCleaningPage />, container);
}

export default StandardCleaningPage;
