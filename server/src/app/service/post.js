const { authorization } = require('../common');

module.exports = ({ serviceRepository }) => {
  const checkPermissions = ({ user }) => {
    return Promise.resolve(
      authorization.adminAuthorization(user)
    );
  };

  const createService = ({ service }) => {
    return serviceRepository.create(service);
  }

  return {
    checkPermissions,
    createService,
  };
};
