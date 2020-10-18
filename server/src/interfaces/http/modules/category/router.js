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
      let categories;

      try {
        categories = await getUseCase.getCategories();
      } catch (e) {
        return next(e);
      }

      return res.status(Status.OK).json(categories);
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
          await postUseCase.createCategory({ category: req.body });
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

        let category;

        try {
          category = await putUseCase.updateCategory({ category: req.body });
        } catch (e) {
          return next(e);
        }

        return res.status(Status.OK).json(category);
      });

  return router;
};
