const { authorization } = require('../common');

module.exports = ({ orderRepository, serviceRepository }) => {
  const getOrders = () => {
    return orderRepository.getAll();
  }

  const getOrder = async (id) => {
    const order = await orderRepository.getFullOrder(id);
    const services = await serviceRepository.getAll();

    const servicesMap = services.reduce((acc, service) => {
      acc[service.dataValues.id] = service.dataValues.title;

      return acc;
    }, {});

    return {
      ...order,
      services: order.services.map(serviceId => servicesMap[serviceId]),
    };
  }

  return {
    getOrders,
    getOrder,
  };
};
