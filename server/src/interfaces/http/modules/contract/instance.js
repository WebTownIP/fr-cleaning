const container = require('src/container');
const { get, post } = require('src/app/contract');

module.exports = () => {
  const { repository: { contractRepository } } = container.cradle

  const getUseCase = get({ contractRepository });
  const postUseCase = post({ contractRepository });

  return {
    getUseCase,
    postUseCase,
  }
}
