import React from 'react';
import ReactDOM from 'react-dom';

import { WindowCleaningPage } from './WindowCleaningPage';

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<WindowCleaningPage />, container);
}

export default WindowCleaningPage;
