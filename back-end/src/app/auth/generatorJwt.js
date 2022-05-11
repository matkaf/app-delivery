const jwt = require('jsonwebtoken');
const fs = require('fs');
const { StatusCodes } = require('http-status-codes');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const generatorJwt = (userObj) => {
  const configJwt = { expiresIn: '1d', algorithm: 'HS256' };

  const token = jwt.sign({ data: userObj }, SECRET, configJwt);

  return token;
};

const verifyJWT = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED);
  }
  jwt.verify(authorization, SECRET);
  next();
};

const verifyRoleToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const { data } = jwt.decode(authorization, SECRET);
  console.log(data);
  if (data.role !== 'administrator') {
    return res.status(StatusCodes.UNAUTHORIZED);
  }
  next();
};

module.exports = { generatorJwt, verifyJWT, verifyRoleToken };
