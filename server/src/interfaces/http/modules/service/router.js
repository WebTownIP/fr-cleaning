const Status = require('http-status');
const { Router } = require('express');

module.exports = ({
  auth,
  getUseCase,
  postUseCase,
  putUseCase,
}) => {
  const router = Router();

  router
    .get('/', async (req, res, next) => {
      let discounts;

      try {
        discounts = await getUseCase.getServices();
      } catch (e) {
        return next(e);
      }

      return res.status(Status.OK).json(discounts);
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
          await postUseCase.createService({ service: req.body });
        } catch (e) {
          return next(e);
        }

        return res.status(Status.NO_CONTENT).json({});
      });

    router
      .put('/:id', auth.authenticate(), async (req, res, next) => {
        let hasPermissions;

        try {
          hasPermissions = await putUseCase.checkPermissions({ user: req.user });
        } catch (e) {
          return next(e);
        }

        if (!hasPermissions) {
          return res.status(Status.FORBIDDEN).send();
        }

        let service;

        try {
          service = await putUseCase.updateService({ service: req.body });
        } catch (e) {
          return next(e);
        }

        return res.status(Status.OK).json(service);
      });

  return router;
};
