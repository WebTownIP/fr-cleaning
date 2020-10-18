module.exports = ({ model }) => {
  return {
    create,
  };

  function create(address) {
    return model.build(address).save();
  }
};
