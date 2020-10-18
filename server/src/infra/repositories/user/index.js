module.exports = ({ model }) => {
  return {
    getAll,
    create,
    update,
    findOne,
    findById,
  };

  function getAll() {
    return model.findAll({ attributes: ['id', 'email', 'isActive', 'isAdmin'] });
  }

  function create(user) {
    return model.build(user).save();
  }

  function update(user) {
    return model.findByPk(user.id)
      .then(userEntity => {
        if (userEntity) {
          return userEntity.update(user);
        }

        return Promise.reject();
      })
      .then(userEntity => {
        return userEntity.dataValues;
      });
  }

  function findOne(field, value) {
    return model.findOne({ where: { [field]: value } });
  }

  function findById(id) {
    return model.findByPk(id);
  }
};
