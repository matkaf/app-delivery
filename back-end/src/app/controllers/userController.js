const { StatusCodes } = require('http-status-codes');
const userService = require('../services/userService');

const userController = {
  create: async (req, res) => {
    const { body } = req;
    const newUser = await userService.create(body);
    if (!newUser) {
      return res.status(StatusCodes.CONFLICT).json({ error: 'User already exists' });
    }
    return res.status(StatusCodes.CREATED).json(newUser);
  },
  getAll: async (_req, res) => {
    const allUsers = await userService.getAll();
    return res.status(StatusCodes.OK).json(allUsers);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const userId = await userService.getById(id);
    return res.status(StatusCodes.OK).json(userId);
  },
  update: async (req, res) => {
    const { params: { id }, body } = req;
    const updateUser = await userService.update(id, body);
    return res.status(StatusCodes.CREATED).json(updateUser);
  },
  deleteById: async (req, res) => {
    const { id } = req.params;
    await userService.deleteById(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  },
  getByRole: async (req, res) => {
    const { role } = req.query;
    const allSellers = await userService.getByRole(role);
    return res.status(StatusCodes.OK).json(allSellers);
  },
};

module.exports = userController;
