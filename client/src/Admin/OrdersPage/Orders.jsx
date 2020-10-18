import React, {
  useCallback,
  useState,
} from 'react';

import {
  Button,
} from '../../common';

export const Orders = ({ orders, renderDetails }) => {
  const [detailsStatus, setDetailStatus] = useState({});

  const openDetails = useCallback((e) => {
    const { id } = e.target.dataset;

    setDetailStatus(prevStatus => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  }, []);

  return (
    <table
      border={2}
      align="center"
      width="100%"
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Телефон</th>
          <th>Email</th>
          <th>Цена</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {
          orders.map((order) => {
            return (
              <React.Fragment key={order.id}>
                <tr>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>
                  <td>{order.email}</td>
                  <td>{order.price}</td>
                  <td width="100px">
                    <Button
                      label="Детали"
                      data-id={order.id}
                      onClick={openDetails}
                    />
                  </td>
                </tr>

                {
                  Boolean(detailsStatus[order.id]) && (
                    <tr>
                      {renderDetails(order.id)}
                    </tr>
                  )
                }
              </React.Fragment>
            );
          })
        }
      </tbody>
    </table>
  );
};
