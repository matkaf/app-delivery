const { users } = require('../../database/models');

const userModel = {
  create: async ({ name, email, password, role }) => {
    const newUser = await users.create({ name, email, password, role });
    return newUser;
  },
  getAll: async () => {
    const allUsers = await users.findAll({
      attributes: ['name', 'email', 'role'],
    });
    return allUsers;
  },
  getById: async (id) => {
    const userId = await users.findByPk(id, {
      attributes: ['name', 'email', 'role'],
    });
    return userId;
  },
  update: async (id, { name, email, password, role }) => {
    await users.update(
      { name, email, password, role },
      { where: { id } },
    );
    return { id, name, email, password, role };
  },
  deleteById: async (id) => {
    await users.destroy(id);
  },
};

module.exports = userModel;
