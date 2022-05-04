const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/loginService');

const loginController = {
  auth: async (req, res) => {
    const { body } = req;
    const user = await loginService.auth(body);
    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'User not found.' });
    }
    return res.status(StatusCodes.OK).json(user);
  },
};

module.exports = loginController;
