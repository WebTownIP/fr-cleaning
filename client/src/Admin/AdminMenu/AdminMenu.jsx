import React, { useCallback } from 'react';

import { TokenService } from '../TokenService';

import styles from './AdminMenu.scss';

export const AdminMenu = ({ routes, changeRoute }) => {
  const goTo = useCallback((e) => {
    e.preventDefault();

    changeRoute(e.target.dataset.route);
  }, []);

  const token = TokenService.getToken();

  if (!token) {
    return null;
  }

  return (
    <nav className={styles.adminMenu}>
      <ul>
        {
          Object.keys(routes)
            .map((routeName) => {
              const route = routes[routeName];

              if (
                route.isVisible
                && (!route.isAdminOnly || token.isAdmin)
              ) {
                return (
                  <li key={routeName}>
                    <a
                      href="#"
                      onClick={goTo}
                      data-route={routeName}
                    >
                      {route.title}
                    </a>
                  </li>
                );
              }

              return undefined;
            })
        }
      </ul>
    </nav>
  );
};
