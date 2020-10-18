const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const User = db.define('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
    },
  });

  return User;
};
