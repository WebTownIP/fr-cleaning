import React from 'react';
import ReactDOM from 'react-dom';

import { DryCleaningPage } from './DryCleaningPage';

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<DryCleaningPage />, container);
}

export default DryCleaningPage;
