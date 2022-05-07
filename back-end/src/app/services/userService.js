const userModel = require('../models/userModel');
const { passwordToHash } = require('../functions/helpers');

const userService = {
  create: async (user) => {
    const { email, name } = user;
    const userExists = await userModel.getByEmailAndName(email, name);
    if (!userExists) {
      const userObj = passwordToHash(user);
      const newUser = await userModel.create(userObj);
      return newUser;
    }
  },
  getAll: async () => {
    const allUsers = await userModel.getAll();
    return allUsers;
  },
  getById: async (id) => {
    const userId = await userModel.getById(id);
    return userId;
  },
  update: async (id, user) => {
    const userObj = passwordToHash(user);
    const updateUser = await userModel.update(id, userObj);
    return updateUser;
  },
  deleteById: async (id) => {
    await userModel.deleteById(id);
  },
  getByRole: async (role) => {
    const allSeller = await userModel.getByRole(role);
    return allSeller;
  },
};

module.exports = userService;
