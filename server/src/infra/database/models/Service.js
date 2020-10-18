const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const Service = db.define('services', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      charset: 'utf8mb4',
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      charset: 'utf8mb4',
    },
    price: {
      type: Sequelize.STRING,
      allowNull: false,
      charset: 'utf8mb4',
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    pic: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Service;
};
