const { StatusCodes } = require('http-status-codes');
const productService = require('../services/productService');

const productController = {
  create: async (req, res) => {
    const { body } = req;
    const newProduct = await productService(body);
    return res.status(StatusCodes.CREATED).json(newProduct);
  },
};

module.exports = productController;
