const container = require('src/container');
const { post } = require('src/app/call');

module.exports = () => {
  const { mailer } = container.cradle

  const postUseCase = post({ mailer });

  return {
    postUseCase,
  }
}
