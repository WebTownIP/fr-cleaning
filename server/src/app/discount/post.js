const { authorization } = require('../common');

module.exports = ({ discountRepository }) => {
  const checkPermissions = ({ user }) => {
    return Promise.resolve(
      authorization.adminAuthorization(user)
    );
  };

  const createDiscount = ({ discount }) => {
    return discountRepository.create(discount);
  }

  return {
    checkPermissions,
    createDiscount,
  };
};
