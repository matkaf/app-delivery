const { users } = require('../../database/models');

const loginModel = {
  auth: async ({ email, password }) => {
    const user = await users.findOne({
      where: { email, password },
    });
    return { name: user.name, email: user.email, role: user.role };
  },
};

module.exports = loginModel;
