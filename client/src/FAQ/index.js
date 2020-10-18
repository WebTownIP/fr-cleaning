import React from 'react';
import ReactDOM from 'react-dom';

import { FAQPage } from './FAQPage';

export default FAQPage;

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<FAQPage />, container);
}
