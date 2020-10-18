const { authorization } = require('../common');

module.exports = ({ serviceRepository }) => {
  const getServices = () => {
    return serviceRepository.getAll();
  }

  return {
    getServices,
  };
};
