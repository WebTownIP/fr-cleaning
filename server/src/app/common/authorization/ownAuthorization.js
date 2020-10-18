module.exports = (entity, user, userField) => {
  return entity[userField] === user.id;
};
