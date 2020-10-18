import React, {
  useState,
} from 'react';

import {
  Container,
} from '../common';

import { AdminMenu } from './AdminMenu';

import { WelcomePage } from './WelcomePage';
import { CategoriesPage } from './CategoriesPage';
import { DiscountsPage } from './DiscountsPage';
import { EditPublicContractPage } from './EditPublicContractPage';
import { ServicesPage } from './ServicesPage';
import { OrdersPage } from './OrdersPage';

import { LoginPage } from './LoginPage';
import { RegistrationPage } from './RegistrationPage';

import styles from './AdminPage.scss';

const routes = {
  welcome: {
    component: WelcomePage,
  },

  login: {
    title: 'Вход',
    component: LoginPage,
  },
  registration: {
    title: 'Регистрация',
    component: RegistrationPage,
  },

  contract: {
    title: 'Публичный договор',
    component: EditPublicContractPage,
    isVisible: true,
    isAdminOnly: true,
  },
  orders: {
    title: 'Заказы',
    component: OrdersPage,
    isVisible: true,
  },
  services: {
    title: 'Доп услуги',
    component: ServicesPage,
    isVisible: true,
    isAdminOnly: true,
  },
  categories: {
    title: 'Категории',
    component: CategoriesPage,
    isVisible: true,
    isAdminOnly: true,
  },
  discounts: {
    title: 'Скидки',
    component: DiscountsPage,
    isVisible: true,
    isAdminOnly: true,
  },
  users: {
    title: 'Пользователи',
    component: WelcomePage,
    isVisible: true,
    isAdminOnly: true,
  },
};

export const AdminPage = () => {
  const [activeRoute, setActiveRoute] = useState('welcome');

  const routeTitle = routes[activeRoute].title;
  const RouteComponent = routes[activeRoute].component;

  return (
    <>
      <header className={styles.adminPageHeader}>
        <Container>
          Планета клининга
          {routeTitle ? ` - ${routeTitle}` : ''}
        </Container>
      </header>

      <main>
        <Container className={styles.adminPageMainContainer}>
          <AdminMenu
            routes={routes}
            changeRoute={setActiveRoute}
          />

          <RouteComponent changeRoute={setActiveRoute} />
        </Container>
      </main>
    </>
  );
};
