const userModel = require('../models/userModel');

const userService = {
  create: async (user) => {
    const newUser = await userModel.create(user);
    return newUser;
  },
  getAll: async () => {
    const allUsers = await userModel.getAll();
    return allUsers;
  },
  getById: async (id) => {
    const userId = await userModel.getById(id);
    return userId;
  },
};

module.exports = userService;
