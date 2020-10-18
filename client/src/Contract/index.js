import React from 'react';
import ReactDOM from 'react-dom';

import { ContractPage } from './ContractPage';

export default ContractPage;

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<ContractPage />, container);
}
