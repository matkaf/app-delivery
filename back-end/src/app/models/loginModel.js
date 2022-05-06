const { users } = require('../../database/models');

const loginModel = {
  auth: async ({ email, password }) => {
    const user = await users.findOne({
      where: { email, password },
    });
    return user;
  },
};

module.exports = loginModel;
