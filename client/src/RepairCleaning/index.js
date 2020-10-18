import React from 'react';
import ReactDOM from 'react-dom';

import { RepairCleaningPage } from './RepairCleaningPage';

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<RepairCleaningPage />, container);
}

export default RepairCleaningPage;
