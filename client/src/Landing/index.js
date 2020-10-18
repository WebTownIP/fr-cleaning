import React from 'react';
import ReactDOM from 'react-dom';

import { LandingPage } from './LandingPage';

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<LandingPage />, container);
}

export default LandingPage;
