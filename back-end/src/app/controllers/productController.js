const { StatusCodes } = require('http-status-codes');
const productService = require('../services/productService');

const productController = {
  create: async (req, res) => {
    const { body } = req;
    const newProduct = await productService(body);
    return res.status(StatusCodes.CREATED).json(newProduct);
  },
  getAll: async (_req, res) => {
    const allProducts = await productService.getAll();
    return res.status(StatusCodes.OK).json(allProducts);
  },
};

module.exports = productController;
