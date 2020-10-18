module.exports = ({ model, modelAttrs, modelServices, modelAddr }) => {
  return {
    create,
    createAttributes,
    createServices,
    getAll,
    getFullOrder,
    partialUpdate,
  };

  function create(order) {
    return model.build(order).save();
  }

  function createAttributes(attributes) {
    return modelAttrs.bulkCreate(attributes);
  }

  function createServices(services) {
    return modelServices.bulkCreate(services);
  }

  function partialUpdate(id, orderData) {
    return model.findByPk(id)
      .then(orderEntity => {
        if (orderEntity) {
          return orderEntity.update(orderData);
        }

        return Promise.reject();
      })
      .then(orderEntity => {
        return orderEntity.dataValues;
      });
  }

  function getAll() {
    return model.findAll({
      attributes: ['id', 'name', 'phone', 'email', 'price', 'comment'],
      order: [
        ['id', 'DESC'],
      ],
    });
  }

  async function getFullOrder(id) {
    const order = await model.findByPk(id);
    const orderAddress = await modelAddr.findByPk(order.address_id);
    const orderAttributes = await modelAttrs.findAll({
      attributes: ['name', 'value',],
      where: { order_id: order.id },
    });
    const orderServices = await modelServices.findAll({
      attributes: ['service_id',],
      where: { order_id: order.id },
    });

    return Promise.resolve({
      ...order.dataValues,
      address: orderAddress.dataValues,
      attributes: orderAttributes.map(orderAttribute => orderAttribute.dataValues),
      services: orderServices.map(orderService => orderService.dataValues.service_id),
    });
  }
};
