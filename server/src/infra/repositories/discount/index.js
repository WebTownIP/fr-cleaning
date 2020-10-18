module.exports = ({ model }) => {
  return {
    create,
    getAll,
    update,
  };

  function create(discount) {
    return model.build(discount).save();
  }

  function update(discount) {
    return model.findByPk(discount.id)
      .then(discountEntity => {
        if (discountEntity) {
          return discountEntity.update(discount);
        }

        return Promise.reject();
      })
      .then(discountEntity => {
        return discountEntity.dataValues;
      });
  }

  function getAll() {
    return model.findAll({ attributes: ['id', 'name', 'value', 'isActive', 'categoryId'] });
  }
};
