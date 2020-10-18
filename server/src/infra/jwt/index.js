const jsonwebtoken = require('jsonwebtoken');

const defaultOptions = {
  expiresIn: '12h',
};
const sign = (secret, payload, options = defaultOptions) => {
  return new Promise((resolve, reject) => {
    jsonwebtoken.sign(payload, secret, options, (err, token) => {
      if (err) {
        reject(err);
      }

      return resolve(token);
    })
  });
};

module.exports = ({ config }) => {
  return {
    sign: sign.bind(null, config.auth.secret),
  }
};
