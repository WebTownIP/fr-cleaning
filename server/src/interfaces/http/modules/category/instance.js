const container = require('src/container');
const {
  get,
  post,
  put,
} = require('src/app/category');

module.exports = () => {
  const { repository: { categoryRepository } } = container.cradle;

  const getUseCase = get({ categoryRepository });
  const postUseCase = post({ categoryRepository });
  const putUseCase = put({ categoryRepository });

  return {
    getUseCase,
    postUseCase,
    putUseCase,
  }
}
