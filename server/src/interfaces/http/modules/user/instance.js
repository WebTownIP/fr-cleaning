const container = require('src/container');
const { get, put } = require('src/app/user');

module.exports = () => {
  const { repository: { userRepository } } = container.cradle

  const getUseCase = get({ userRepository });
  const putUseCase = put({ userRepository });

  return {
    getUseCase,
    putUseCase,
  };
};
