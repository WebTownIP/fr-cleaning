const bcrypt = require('bcrypt');

const encryptPassword = (saltRounds, password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) {
        return reject(err);
      }

      return resolve(hash);
    });
  });
};

const comparePassword = (password, encodedPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, encodedPassword, function(err, result) {
      if (err) {
        return reject(err);
      }

      return resolve(result);
    });
  });
}

module.exports = ({ config }) => {
  return {
    encryptPassword: encryptPassword.bind(null, config.auth.saltRounds),
    comparePassword: comparePassword,
  }
};
