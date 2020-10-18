const Sequelize = require('sequelize');

module.exports = ({ db }) => {
  const Discount = db.define('discounts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    isActive: {
      type: Sequelize.BOOLEAN,
    },
    categoryId : {
       type: Sequelize.INTEGER,
       references: 'categories',
       referencesKey: 'id',
     }
  });

  return Discount;
};
