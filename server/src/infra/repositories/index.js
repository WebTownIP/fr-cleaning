const address = require('./address');
const category = require('./category');
const contract = require('./contract');
const discount = require('./discount');
const order = require('./order');
const service = require('./service');
const user = require('./user');

module.exports = ({ database }) => {
  const models = database.models;

  return {
    addressRepository: address({ model: models.addresses }),
    categoryRepository: category({ model: models.categories }),
    contractRepository: contract({ model: models.contracts }),
    discountRepository: discount({ model: models.discounts }),
    orderRepository: order({
      model: models.orders,
      modelAttrs: models.orderAttributes,
      modelServices: models.orderServices,
      modelAddr: models.addresses,
    }),
    serviceRepository: service({ model: models.services }),
    userRepository: user({ model: models.users }),
  };
};
