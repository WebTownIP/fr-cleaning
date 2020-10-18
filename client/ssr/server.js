import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import AdminPage from '../src/Admin';

import LandingPage from '../src/Landing';
import DevelopPage from '../src/Develop';
import StandardCleaningPage from '../src/StandardCleaning';
import OfficeCleaningPage from '../src/OfficeCleaning';
import RepairCleaningPage from '../src/RepairCleaning';
import WindowCleaningPage from '../src/WindowCleaning';
import DryCleaningPage from '../src/DryCleaning';

import CleaningPage from '../src/Cleaning';
import JobPage from '../src/Job';
import DiscountPage from '../src/Discount';
import ContractPage from '../src/Contract';
import AboutUsPage from '../src/AboutUs';
import FAQPage from '../src/FAQ';

const CLIENT_STATIC_FOLDER = path.resolve(__dirname, '../build/client');
const SERVER_STATIC_FOLDER = path.resolve(__dirname, '../build/server');

const URL_PAGE_MAPPER = {
  '/': {
    name: 'landing',
    title: 'Планета клининга',
    component: LandingPage,
  },

  '/admin': {
    name: 'admin',
    title: 'Планета клининга',
    component: AdminPage,
  },

  '/standard-cleaning': {
    name: 'standardCleaning',
    title: 'Обычная уборка',
    component: StandardCleaningPage,
  },
  '/office-cleaning': {
    name: 'officeCleaning',
    title: 'Уборка офиса',
    component: OfficeCleaningPage,
  },
  '/repair-cleaning': {
    name: 'repairCleaning',
    title: 'Уборка после ремонта',
    component: RepairCleaningPage,
  },
  '/window-cleaning': {
    name: 'windowCleaning',
    title: 'Мойка окон',
    component: WindowCleaningPage,
  },
  '/dry-cleaning': {
    name: 'dryCleaning',
    title: 'Химчистка',
    component: DryCleaningPage,
  },

  '/cleaning': {
    name: 'cleaning',
    title: 'Что мы убираем',
    component: CleaningPage,
  },
  '/job': {
    name: 'job',
    title: 'Вакансии',
    component: JobPage,
  },
  '/discount': {
    name: 'discount',
    title: 'Скидки и акции',
    component: DiscountPage,
  },
  '/contract': {
    name: 'contract',
    title: 'Публичный договор',
    component: ContractPage,
  },
  '/about_us': {
    name: 'aboutUs',
    title: 'О Нас',
    component: AboutUsPage,
  },
  '/faq': {
    name: 'faq',
    title: 'Вопросы и ответы',
    component: FAQPage,
  },

  '/develop': {
    name: 'develop',
    title: 'Страница в разработке',
    component: DevelopPage,
  },
};

const server = express();

server.use(express.static(CLIENT_STATIC_FOLDER, {
  index: false,
}));
server.use(express.static(SERVER_STATIC_FOLDER, {
  index: false,
}));

server.get('*', (req, res) => {
  const { path: requestPath } = req;

  const page = URL_PAGE_MAPPER[requestPath];

  if (!page) {
    return res.status(404).send('Not found');
  }

  const pageTemplate = path.resolve(CLIENT_STATIC_FOLDER, `${page.name}.html`);
  const PageComponent = page.component;

  const appContent = ReactDOMServer.renderToString(<PageComponent />);

  fs.readFile(pageTemplate, 'utf8', (err, data) => {
    if (err) {
      console.log('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    data = data.replace('<div id="app"></div>', `<div id="app">${appContent}</div>`);
    data = data.replace('<title></title>', `<title>${page.title}</title>`);
    // data = data.replace('<meta name="description" content=""/>', helmet.meta.toString());
    // data = data.replace('<script>__INITIAL_DATA__</script>', `<script>window.__INITIAL_DATA__ = ${JSON.stringify(store.getState())};</script>`);

    return res.send(data);
  });
});

export default server;
