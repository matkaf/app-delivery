const { products } = require('../../database/models');

const productModel = {
  create: async ({ name, price, urlImage }) => {
    const newProduct = await products.create({ name, price, urlImage });
    return newProduct;
  },
};

module.exports = productModel;
