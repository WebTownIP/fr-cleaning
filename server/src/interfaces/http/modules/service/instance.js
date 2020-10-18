const container = require('src/container');
const {
  get,
  post,
  put,
} = require('src/app/service');

module.exports = () => {
  const { repository: { serviceRepository } } = container.cradle;

  const getUseCase = get({ serviceRepository });
  const postUseCase = post({ serviceRepository });
  const putUseCase = put({ serviceRepository });

  return {
    getUseCase,
    postUseCase,
    putUseCase,
  }
}
