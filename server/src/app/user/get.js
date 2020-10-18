const { authorization } = require('../common');

module.exports = ({ userRepository }) => {
  const checkPermissions = ({ user, currentUser }) => {
    return Promise.resolve(
      authorization.adminAuthorization(currentUser) || authorization.ownAuthorization(user, currentUser, 'id')
    );
  };

  const checkRestrickedPermissions = ({ user }) => {
    return Promise.resolve(authorization.adminAuthorization(user));
  };

  const getUser = ({ id }) => {
    return userRepository.findById(id);
  }

  const getUsers = () => {
    return userRepository.getAll();
  }

  return {
    checkPermissions,
    checkRestrickedPermissions,
    getUser,
    getUsers,
  };
};
