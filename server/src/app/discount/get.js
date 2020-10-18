const { authorization } = require('../common');

module.exports = ({ discountRepository }) => {
  const getDiscounts = () => {
    return discountRepository.getAll();
  }

  return {
    getDiscounts,
  };
};
