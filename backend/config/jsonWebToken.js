const JWT = require('jsonwebtoken');

const genWebToken = (id) => {
  return JWT.sign({ id }, 'Dont tell :)', {
    expiresIn: '7d',
  });
};

module.exports = genWebToken;
