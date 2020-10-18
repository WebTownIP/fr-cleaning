const Status = require('http-status')
const { Router } = require('express')

module.exports = ({
  auth,
  getUseCase,
  putUseCase,
}) => {
  const router = Router();

  router
    .get('/', auth.authenticate(), async (req, res) => {
      const hasPermissions = await getUseCase.checkRestrickedPermissions({ user: req.user });

      if (!hasPermissions) {
        return res.status(Status.FORBIDDEN).send();
      }

      let users;

      try {
        users = await getUseCase.getUsers();
      } catch (e) {
        return res.status(Status.BAD_REQUEST).send();
      }

      return res.status(Status.OK).json(users);
    });

  router
    .get('/:id', auth.authenticate(), async (req, res) => {
      let user;

      try {
        user = await getUseCase.getUser({ id: req.params.id });
      } catch (e) {
        return res.status(Status.BAD_REQUEST).send();
      }

      if (!user) {
        return res.status(Status.NOT_FOUND).send();
      }

      const hasPermissions = await getUseCase.checkPermissions({ user, currentUser: req.user });

      if (!hasPermissions) {
        return res.status(Status.FORBIDDEN).send();
      }

      return res.status(Status.OK).json({
        email: user.email,
        isAdmin: user.isAdmin,
        isActive: user.isActive,
      });
    });

    router
      .put('/:id', auth.authenticate(), async (req, res) => {
        let hasPermissions;

        try {
          hasPermissions = await putUseCase.checkPermissions({ user: req.user });
        } catch (e) {
          return next(e);
        }

        if (!hasPermissions) {
          return res.status(Status.FORBIDDEN).send();
        }

        let user;

        try {
          user = await putUseCase.updateUser({ user: req.body });
        } catch (e) {
          return next(e);
        }

        return res.status(Status.OK).json({ ...user, password: undefined });
      });

  return router;
};
