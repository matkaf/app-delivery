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
  update: async (id, userObj) => {
    const updateUser = await userModel.update(id, userObj);
    return updateUser;
  },
};

module.exports = userService;
