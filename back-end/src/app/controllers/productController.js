const { StatusCodes } = require('http-status-codes');
const productService = require('../services/productService');

const productController = {
  create: async (req, res) => {
    const { body } = req;
    const newProduct = await productService.create(body);
    return res.status(StatusCodes.CREATED).json(newProduct);
  },
  getAll: async (_req, res) => {
    const allProducts = await productService.getAll();
    return res.status(StatusCodes.OK).json(allProducts);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const productId = await productService.getById(id);
    return res.status(StatusCodes.OK).json(productId);
  },
  update: async (req, res) => {
    const { params: { id }, body } = req;
    const updateProduct = await productService.update(id, body);
    return res.status(StatusCodes.CREATED).json(updateProduct);
  },
  deleteById: async (req, res) => {
    const { id } = req.params;
    await productService.deleteById(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  },
};

module.exports = productController;
