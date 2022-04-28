const { User } = require('../../database/models');

const userModel = {
  create: async ({name, email, password, role}) => {
    const newUser = await User.create({name, email, password, role});
    return newUser;
  },
};

module.exports = userModel;