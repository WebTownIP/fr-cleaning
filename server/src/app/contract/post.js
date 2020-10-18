const { authorization } = require('../common');

module.exports = ({ contractRepository }) => {
  const checkPermissions = ({ user }) => {
    return Promise.resolve(
      authorization.adminAuthorization(user)
    );
  };

  const saveContract = ({ contract }) => {
    return contractRepository.create(contract);
  }

  return {
    checkPermissions,
    saveContract,
  };
};
