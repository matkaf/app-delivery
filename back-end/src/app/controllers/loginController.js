const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginService');

const loginController = {
  auth: async (req, res) => {
    const { body } = req;
    const login = await loginService.auth(body);
    if (!login) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found.' });
    }
    return res.status(StatusCodes.OK).json(login);
  },
};

module.exports = loginController;
