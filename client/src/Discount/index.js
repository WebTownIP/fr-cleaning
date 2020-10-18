import React from 'react';
import ReactDOM from 'react-dom';

import { DiscountPage } from './DiscountPage';

export default DiscountPage;

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<DiscountPage />, container);
}
