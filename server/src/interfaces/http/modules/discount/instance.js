const container = require('src/container');
const {
  get,
  post,
  put,
} = require('src/app/discount');

module.exports = () => {
  const { repository: { discountRepository } } = container.cradle;

  const getUseCase = get({ discountRepository });
  const postUseCase = post({ discountRepository });
  const putUseCase = put({ discountRepository });

  return {
    getUseCase,
    postUseCase,
    putUseCase,
  }
}
