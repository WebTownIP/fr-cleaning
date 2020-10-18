import React from 'react';
import ReactDOM from 'react-dom';

import { AboutUsPage } from './AboutUsPage';

export default AboutUsPage;

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<AboutUsPage />, container);
}
