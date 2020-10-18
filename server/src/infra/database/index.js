const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

module.exports = ({ config }) => {
  const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);

  const models = {};

  fs.readdirSync(path.join(__dirname, './models')).forEach(file => {
    const model = require(path.join(__dirname, './models', file))({ db: sequelize });

    models[model.name] = model;
  })

  return {
    connect() {
      return sequelize.authenticate();
    },
    models,
  };
};
