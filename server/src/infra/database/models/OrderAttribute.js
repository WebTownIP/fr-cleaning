const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const OrderAttribute = db.define('orderAttributes', {
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
    value: {
      type: Sequelize.STRING,
      charset: 'utf8mb4',
      defaultValue: '',
    },
    order_id: {
      type: Sequelize.INTEGER,
      references: 'orders',
      referencesKey: 'id',
    },
  });

  return OrderAttribute;
};
