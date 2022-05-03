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
  getById: async (id) => {
    const productId = await productModel.getById(id);
    return productId;
  },
  update: async (id, productObj) => {
    const updateProduct = await productModel.update(id, productObj);
    return updateProduct;
  },
  deleteById: async (id) => {
    await productModel.deleteById(id);
  },
};

module.exports = productService;
