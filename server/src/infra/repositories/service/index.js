module.exports = ({ model }) => {
  return {
    create,
    getAll,
    update,
  };

  function create(service) {
    return model.build(service).save();
  }

  function update(service) {
    return model.findByPk(service.id)
      .then(serviceEntity => {
        if (serviceEntity) {
          return serviceEntity.update(service);
        }

        return Promise.reject();
      })
      .then(serviceEntity => {
        return serviceEntity.dataValues;
      });
  }

  function getAll() {
    return model.findAll({ attributes: ['id', 'title', 'description', 'price', 'pic', 'type'] });
  }
};
