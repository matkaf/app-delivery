const { users } = require('../../database/models');

const loginModel = {
  auth: async ({ email, password }) => {
    const user = await users.findOne({
      where: { email, password },
    });
    // const { name, email, role } = user;
    // return { name, email, role };
    return user;
  },
};

module.exports = loginModel;
