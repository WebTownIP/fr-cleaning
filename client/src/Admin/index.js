import React from 'react';
import ReactDOM from 'react-dom';

import { AdminPage } from './AdminPage';

export default AdminPage;

const container = document.getElementById('app');

if (container) {
  ReactDOM.hydrate(<AdminPage />, container);
}
