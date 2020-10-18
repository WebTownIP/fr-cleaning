const { authorization } = require('../common');

module.exports = ({ userRepository }) => {
  const checkPermissions = ({ user }) => {
    return Promise.resolve(
      authorization.adminAuthorization(user)
    );
  };

  const updateUser = ({ user }) => {
    return userRepository.update(user);
  }

  return {
    checkPermissions,
    updateUser,
  };
};
