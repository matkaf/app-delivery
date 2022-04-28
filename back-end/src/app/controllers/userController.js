const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const { body } = req;
    const newUser = await userService.create(body);
    return res.status(StatusCodes.CREATED).json(newUser);
  },
  getAll: async (_req, res) => {
    const allUsers = await userService.getAll();
    return res.status(StatusCodes.OK).json(allUsers);
  },
};

module.exports = userController;
