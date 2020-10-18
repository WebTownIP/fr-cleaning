const { authorization } = require('../common');

module.exports = ({ categoryRepository }) => {
  const checkPermissions = ({ user }) => {
    return Promise.resolve(
      authorization.adminAuthorization(user)
    );
  };

  const updateCategory = ({ category }) => {
    return categoryRepository.update(category);
  }

  return {
    checkPermissions,
    updateCategory,
  };
};
