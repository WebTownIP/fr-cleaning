import React from 'react';
import ReactDOM from 'react-dom';

import { DevelopPage } from './DevelopPage';

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<DevelopPage />, container);
}

export default DevelopPage;
