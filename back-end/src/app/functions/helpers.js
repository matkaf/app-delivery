const md5 = require('md5');

const passwordToHash = (userObj) => {
  const { password } = userObj;
  const passwordMd5 = md5(password);
  return { ...userObj, password: passwordMd5 };
};

const toConvertSale = (saleObj) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber,
  } = saleObj;
  return {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
  };
};

const toConvertProductsArray = (saleId, productsArray) => {
  const newProductsArray = productsArray.map((product) => (
    {
      saleId,
      productId: Number(product.id),
      quantity: Number(product.quantity),
    }
  ));
  return newProductsArray;
};

module.exports = {
  passwordToHash,
  toConvertSale,
  toConvertProductsArray,
};
