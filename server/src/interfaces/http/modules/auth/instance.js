const container = require('src/container');
const { post } = require('src/app/auth');

module.exports = () => {
  const {
    encryption,
    jwt,
    repository: { userRepository },
  } = container.cradle;

  const postUseCase = post({ encryption, jwt, userRepository });

  return {
    postUseCase,
  }
}
