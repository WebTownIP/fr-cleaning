const Status = require('http-status')
const { Router } = require('express')

module.exports = ({
  postUseCase,
  logger,
}) => {
  const router = Router();

  router
    .post('/', (req, res) => {
      return postUseCase
        .sendCallNotification({ body: req.body })
        .then(data => {
          return res.status(Status.OK).send({});
        })
        .catch((error) => {
          logger.error(error);

          return res.status(Status.BAD_REQUEST).send();
        });
    });

  return router;
};
