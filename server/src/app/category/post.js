const { authorization } = require('../common');

module.exports = ({ categoryRepository }) => {
  const checkPermissions = ({ user }) => {
    return Promise.resolve(
      authorization.adminAuthorization(user)
    );
  };

  const createCategory = ({ category }) => {
    return categoryRepository.create(category);
  }

  return {
    checkPermissions,
    createCategory,
  };
};
