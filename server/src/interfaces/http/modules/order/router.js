const Status = require('http-status')
const { Router } = require('express')

module.exports = ({
  auth,
  getUseCase,
  postUseCase,
  patchUseCase,
  logger,
}) => {
  const router = Router();

  router
    .get('/', auth.authenticate(), async (req, res, next) => {
      let orders;

      try {
        orders = await getUseCase.getOrders();
      } catch (e) {
        return next(e);
      }

      return res.status(Status.OK).json(orders);
    });

  router
    .get('/:id', auth.authenticate(), async (req, res, next) => {
      let order;

      try {
        order = await getUseCase.getOrder(req.params.id);
      } catch (e) {
        return next(e);
      }

      return res.status(Status.OK).json(order);
    });

  router
    .post('/', async (req, res, next) => {
      try {
        await postUseCase.createOrder({ body: req.body });
      } catch(e) {
        return next(e);
      }

      try {
        await postUseCase.sendCallNotification({ body: req.body });
      } catch(e) {
        return next(e);
      }

      return res.status(Status.NO_CONTENT).send({});
    });

  router
    .patch('/:id', async (req, res, next) => {
      try {
        await patchUseCase.updateOrder({ id: req.params.id, orderData: req.body });
      } catch(e) {
        return next(e);
      }

      return res.status(Status.OK).send({});
    });

  return router;
};
