const express = require('express');
const Status = require('http-status');

module.exports = ({ config, router, logger, auth, }) => {
  const app = express();

  app.disable('x-powered-by');
  app.use(auth.initialize());
  app.use(router);

  app.use((err, req, res, next) => {
    logger.error(err.stack);

    res.status(Status.SERVER_ERROR).send(err);
  });

  return {
    app,
    start: () => new Promise((resolve) => {
      const http = app.listen(config.port, () => {
        const { port } = http.address();
        logger.info(`🤘 API - Port ${port}`);
      })
    })
  };
};
