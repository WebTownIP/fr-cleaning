const { createContainer, asValue, asFunction } = require('awilix');

const app = require('./app');

const config = require('./config');

const server = require('./interfaces/http/server');
const router = require('./interfaces/http/router');
const auth = require('./interfaces/http/auth');

const {
  database,
  encryption,
  jwt,
  logger,
  mailer,
  repository,
} = require('./infra');

const container = createContainer();

// SYSTEM
container
  .register({
    app: asFunction(app).singleton(),

    config: asValue(config),

    server: asFunction(server).singleton(),
    router: asFunction(router).singleton(),
    auth: asFunction(auth).singleton(),

    database: asFunction(database).singleton(),
    encryption: asFunction(encryption).singleton(),
    jwt: asFunction(jwt).singleton(),
    logger: asFunction(logger).singleton(),
    mailer: asFunction(mailer).singleton(),
    repository: asFunction(repository).singleton(),
  });

module.exports = container;
