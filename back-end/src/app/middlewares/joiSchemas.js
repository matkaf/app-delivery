const Joi = require('joi');

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(6),
});

// const user = Joi.object({ // Work in progress <<
//   name: ,
//   email: ,
//   password: ,
//   role: ,
// });

module.exports = {
  login,
};
