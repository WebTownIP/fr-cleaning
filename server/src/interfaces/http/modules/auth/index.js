const router = require('./router');
const instance = require('./instance');

module.exports = () => {
  const app = instance();

  return {
    app,
    router: router({ ...app }),
  };
};
