const { authorization } = require('../common');

module.exports = ({ discountRepository }) => {
  const checkPermissions = ({ user }) => {
    return Promise.resolve(
      authorization.adminAuthorization(user)
    );
  };

  const updateDiscount = ({ discount }) => {
    return discountRepository.update(discount);
  }

  return {
    checkPermissions,
    updateDiscount,
  };
};
