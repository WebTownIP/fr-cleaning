const container = require('src/container');
const router = require('./router');
const instance = require('./instance');

module.exports = () => {
  const { auth, logger } = container.cradle;
  const app = instance();

  return {
    app,
    router: router({ auth, logger, ...app }),
  };
};
