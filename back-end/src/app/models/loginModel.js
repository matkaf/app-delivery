const { users } = require('../../database/models');

const loginModel = {
  auth: async ({ email, password }) => {
    const getUser = await users.findOne({
      where: { email, password },
    });
    return getUser;
  },
};

module.exports = loginModel;
