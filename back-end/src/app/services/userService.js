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
};

module.exports = userService;
