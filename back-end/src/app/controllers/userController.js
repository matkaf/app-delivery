const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const { body } = req;
    const newUser = await userService.create(body);
    return res.status(StatusCodes.CREATED).json(newUser);
  },
};

module.exports = userController;
