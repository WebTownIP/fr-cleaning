module.exports = ({ model }) => {
  return {
    create,
    findRecent,
  };

  function create(contract) {
    return model.build(contract).save();
  }

  function findRecent() {
    return model.findAll({
      limit: 1,
      order: [['id', 'DESC']]
    })
    .then((entries) => {
      const contractEntry = entries[0] || {};

      return contractEntry.dataValues || {};
    });
  }
};
