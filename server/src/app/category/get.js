const { authorization } = require('../common');

module.exports = ({ categoryRepository }) => {
  const getCategories = () => {
    return categoryRepository.getAll();
  }

  return {
    getCategories,
  };
};
