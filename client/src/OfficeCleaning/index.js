import React from 'react';
import ReactDOM from 'react-dom';

import { OfficeCleaningPage } from './OfficeCleaningPage';

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<OfficeCleaningPage />, container);
}

export default OfficeCleaningPage;
