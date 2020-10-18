module.exports = ({ model }) => {
  return {
    create,
    getAll,
    update,
  };

  function create(category) {
    return model.build(category).save();
  }

  function update(category) {
    return model.findByPk(category.id)
      .then(categoryEntity => {
        if (categoryEntity) {
          return categoryEntity.update(category);
        }

        return Promise.reject();
      })
      .then(categoryEntity => {
        return categoryEntity.dataValues;
      });
  }

  function getAll() {
    return model.findAll({ attributes: ['id', 'name', 'displayName'] });
  }
};
