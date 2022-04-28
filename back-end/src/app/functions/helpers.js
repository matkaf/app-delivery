const md5 = require('md5');

const passwordToHash = (userObj) => {
  const { password } = userObj;
  const passwordMd5 = md5(password);
  return { ...userObj, password: passwordMd5 };
};

module.exports = passwordToHash;
