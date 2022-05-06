const md5 = require('md5');

const passwordToHash = (userObj) => {
  const { password } = userObj;
  const passwordMd5 = md5(password);
  return { ...userObj, password: passwordMd5 };
};

const toConvertSale = (saleObj) => {
  const newSale = saleObj
    .map(({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber }) => ({
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
      }));
  return newSale;
};

module.exports = {
  passwordToHash,
  toConvertSale,
};
