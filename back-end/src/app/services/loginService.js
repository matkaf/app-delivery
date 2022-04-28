const md5 = require('md5');
const generatorJwt = require('../auth/generatorJwt');
const loginModel = require('../models/loginModel');

const loginService = {
  auth: async ({ email, password }) => {
    const passwordMd5 = md5(password);
    const getUser = await loginModel.auth({ email, password: passwordMd5 });
    const token = generatorJwt(getUser);
    return { token };
  },
};

module.exports = loginService;
