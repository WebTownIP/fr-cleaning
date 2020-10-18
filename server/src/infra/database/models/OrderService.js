const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const OrderService = db.define('orderServices', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    order_id: {
      type: Sequelize.INTEGER,
      references: 'orders',
      referencesKey: 'id',
    },
    service_id: {
      type: Sequelize.INTEGER,
      references: 'services',
      referencesKey: 'id',
    },
  });

  return OrderService;
};
