const { Op } = require('sequelize');
const { users } = require('../../database/models');

const userModel = {
  create: async (userPayload) => {
    const newUser = await users.create({ ...userPayload });
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
  getByEmailAndName: async (email, name) => {
    const userByEmail = await users.findOne({
      where: { [Op.or]: [{ email }, { name }] },
    });
    return userByEmail;
  },
  update: async (id, { name, email, password, role }) => {
    await users.update(
      { name, email, password, role },
      { where: { id } },
    );
    return { id, name, email, password, role };
  },
  deleteById: async (id) => {
    await users.destroy({ where: { id } });
  },
  getByRole: async (role) => {
    const allSellers = await users.findAll(
      { attributes: ['id', 'name'], where: { role } },
    );
    return allSellers;
  },
};

module.exports = userModel;
