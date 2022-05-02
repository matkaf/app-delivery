const { products } = require('../../database/models');

const productModel = {
  create: async ({ name, price, urlImage }) => {
    const newProduct = await products.create({ name, price, urlImage });
    return newProduct;
  },
  getAll: async () => {
    const allProducts = await products.findAll();
    return allProducts;
  },
  getById: async (id) => {
    const productId = await products.findByPk(id);
    return productId;
  },
};

module.exports = productModel;
