const { authorization } = require('../common');

module.exports = ({ contractRepository }) => {
  const getContract = () => {
    return contractRepository.findRecent();
  }

  return {
    getContract,
  };
};
