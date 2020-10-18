const Status = require('http-status')
const { Router } = require('express')

module.exports = ({
  postUseCase,
}) => {
  const router = Router();

  router
    .post('/login', (req, res) => {
      return postUseCase
        .login({ body: req.body })
        .then(data => {
          return res.status(Status.OK).json(data);
        })
        .catch((error) => {
          return res.status(Status.UNAUTHORIZED).send();
        });
    });

  router
    .post('/register', async (req, res, next) => {
      try {
        await postUseCase.register({ body: req.body });
      } catch (e) {
        return next(e);
      }

      return res.status(Status.OK).json({});
    })

  return router;
};
