const productModel = require('../models/productModel');

const productService = {
  create: async (productObj) => {
    const newProduct = await productModel.create(productObj);
    return newProduct;
  },
};

module.exports = productService;
