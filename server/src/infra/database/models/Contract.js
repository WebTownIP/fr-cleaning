const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const Contract = db.define('contracts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    value: {
      type: Sequelize.STRING,
      allowNull: false,
      charset: 'utf8mb4',
    },
  });

  return Contract;
};
