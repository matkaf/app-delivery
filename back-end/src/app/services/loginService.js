const md5 = require('md5');
const { generatorJwt } = require('../auth/generatorJwt');
const loginModel = require('../models/loginModel');

const loginService = {
  auth: async ({ email, password }) => {
    const passwordMd5 = md5(password);
    const user = await loginModel.auth({ email, password: passwordMd5 });
    if (user) {
      const token = generatorJwt(user);
      const { id, name, role } = user;
      return { token, id, name, email: user.email, role };
    }
  },
};

module.exports = loginService;
