const productModel = require('../models/productModel');

const productService = {
  create: async (productObj) => {
    const newProduct = await productModel.create(productObj);
    return newProduct;
  },
  getAll: async () => {
    const allProducts = await productModel.getAll();
    return allProducts;
  },
};

module.exports = productService;
