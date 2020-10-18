const { authorization } = require('../common');

module.exports = ({ serviceRepository }) => {
  const checkPermissions = ({ user }) => {
    return Promise.resolve(
      authorization.adminAuthorization(user)
    );
  };

  const updateService = ({ service }) => {
    return serviceRepository.update(service);
  }

  return {
    checkPermissions,
    updateService,
  };
};
