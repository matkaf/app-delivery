const Joi = require('joi');
const schemas = require('./joiSchemas');

//

const responseMaker = (success, status, message, data) => ({
  success,
  status,
  message,
  data,
});

const schemaByPath = (path) => {
  switch (path) {
    case '/login':
      return schemas.login;
    case '/users':
      return schemas.user;
    default:
      return Joi.object().empty();
  }
};

const validateInputs = (req, res, next) => {
  if (req.method !== 'GET') {
    const { path } = req;
    const payload = req.body;

    const schema = schemaByPath(path);
    const { error } = schema.validate(payload);

    if (error) {
      const response = responseMaker(false, 400, error.message);

      return res.status(response.status).json({ message: response.message });
    }
  }

  next();
};

module.exports = validateInputs;
