const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const Order = db.define('orders', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      charset: 'utf8mb4',
      defaultValue: '',
    },
    email: {
      type: Sequelize.STRING,
      charset: 'utf8mb4',
      defaultValue: '',
    },
    phone: {
      type: Sequelize.STRING,
      charset: 'utf8mb4',
      defaultValue: '',
    },
    price: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    comment: {
      type: Sequelize.TEXT,
      charset: 'utf8mb4',
      defaultValue: '',
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    address_id: {
      type: Sequelize.INTEGER,
      references: 'addresses',
      referencesKey: 'id',
    },
  });

  return Order;
};
