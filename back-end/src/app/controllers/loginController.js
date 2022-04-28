const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginService');

const loginController = {
  auth: async (req, res) => {
    const { body } = req;
    const login = await loginService.auth(body);
    return res.status(StatusCodes.OK).json(login);
  },
};

module.exports = loginController;
