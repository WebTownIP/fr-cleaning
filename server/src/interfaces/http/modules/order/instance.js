const container = require('src/container');
const { post, get, patch } = require('src/app/order');

module.exports = () => {
  const {
    mailer,
    repository: { orderRepository, addressRepository, serviceRepository },
  } = container.cradle;

  const getUseCase = get({ orderRepository, serviceRepository });
  const patchUseCase = patch({ orderRepository });
  const postUseCase = post({ mailer, orderRepository, addressRepository });

  return {
    getUseCase,
    patchUseCase,
    postUseCase,
  }
}
