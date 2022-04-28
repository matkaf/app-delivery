const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const generatorJwt = (userObj) => {
  const configJwt = { expiresIn: '1d', algorithm: 'HS256' };

  const token = jwt.sign({ data: userObj }, SECRET, configJwt);

  return token;
};

module.exports = generatorJwt;
