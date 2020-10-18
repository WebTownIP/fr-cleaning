const statusMonitor = require('express-status-monitor');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const { Router } = require('express');
const { partialRight } = require('ramda');

const {
  httpLogger,
  errorHandler,
} = require('./middlewares');
const { createController } = require('./utils');

module.exports = ({ config, logger }) => {
  const router = Router();

  /* istanbul ignore if */
  if (config.env === 'development') {
    router.use(statusMonitor());
  }

  /* istanbul ignore if */
  if (config.env !== 'test') {
    router.use(httpLogger(logger));
  }

  const apiRouter = Router();

  apiRouter
    .use(cors({
      origin: config.env === 'development' ? [
        'http://localhost:3000'
      ] : [],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }))
    .use(bodyParser.json())
    .use(compression());

  apiRouter.use('/', createController('index'));
  apiRouter.use('/call', createController('call').router);
  apiRouter.use('/order', createController('order').router);
  apiRouter.use('/auth', createController('auth').router);
  apiRouter.use('/user', createController('user').router);
  apiRouter.use('/contract', createController('contract').router);
  apiRouter.use('/discount', createController('discount').router);
  apiRouter.use('/category', createController('category').router);
  apiRouter.use('/service', createController('service').router);

  router.use(`/api/${config.version}`, apiRouter);

  router.use(partialRight(errorHandler, [logger, config]));

  return router;
};
