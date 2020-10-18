const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const Address = db.define('addresses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    street: {
      type: Sequelize.STRING,
      allowNull: false,
      charset: 'utf8mb4',
    },
    house_n: {
      type: Sequelize.INTEGER,
    },
    appartm_n: {
      type: Sequelize.INTEGER,
    },
  });

  return Address;
};
