import React from 'react';
import ReactDOM from 'react-dom';

import { CleaningPage } from './CleaningPage';

export default CleaningPage;

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<CleaningPage />, container);
}
