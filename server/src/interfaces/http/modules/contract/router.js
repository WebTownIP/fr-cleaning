const Status = require('http-status');
const { Router } = require('express');

module.exports = ({
  auth,
  getUseCase,
  postUseCase,
}) => {
  const router = Router();

  router
    .get('/', async (req, res, next) => {
      let contract;

      try {
        contract = await getUseCase.getContract();
      } catch (e) {
        return next(e);
      }

      return res.status(Status.OK).json(contract);
    });

    router
      .post('/', auth.authenticate(), async (req, res, next) => {
        let hasPermissions;

        try {
          hasPermissions = await postUseCase.checkPermissions({ user: req.user });
        } catch (e) {
          return next(e);
        }

        if (!hasPermissions) {
          return res.status(Status.FORBIDDEN).send();
        }

        try {
          await postUseCase.saveContract({ contract: req.body });
        } catch (e) {
          return next(e);
        }

        return res.status(Status.NO_CONTENT).json({});
      });

  return router;
};
