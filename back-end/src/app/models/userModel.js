const { users } = require('../../database/models');

const userModel = {
  create: async ({ name, email, password, role }) => {
    const newUser = await users.create({ name, email, password, role });
    return newUser;
  },
  getAll: async () => {
    const allUsers = await users.findAll();
    return allUsers;
  },
};

module.exports = userModel;
