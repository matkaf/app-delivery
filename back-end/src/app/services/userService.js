const userModel = require('../models/userModel');

const userService = {
  create: async (user) => {
    const newUser = await userModel.create(user);
    return newUser;
  },
};

module.exports = userService;
