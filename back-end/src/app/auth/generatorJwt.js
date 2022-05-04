const jwt = require('jsonwebtoken');
const fs = require('fs');
// const { StatusCodes } = require('http-status-codes');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

const generatorJwt = (userObj) => {
  const configJwt = { expiresIn: '1d', algorithm: 'HS256' };

  const token = jwt.sign({ data: userObj }, SECRET, configJwt);

  return token;
};

// const validateJWT = async (req, res, next) => {
//   const { Authorization } = req.headers;

//   if (!Authorization) {
//     return res.status(StatusCodes.UNAUTHORIZED);
//   }

//   try {
//     const token = await jwt.verify(Authorization, SECRET);
    
//   } catch (error) {
    
//   }
// };

module.exports = {
  generatorJwt,
  // validateJWT,
};
