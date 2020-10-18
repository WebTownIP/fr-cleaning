const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const Category = db.define('categories', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      charset: 'utf8mb4',
    },
    displayName: {
      type: Sequelize.STRING,
      allowNull: false,
      charset: 'utf8mb4',
    },
  });

  return Category;
};
