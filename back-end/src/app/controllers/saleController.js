const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/saleService');

const saleController = {
  create: async (req, res) => {
    const { body } = req;
    const newSale = await saleService.create(body);
    return res.status(StatusCodes.CREATED).json(newSale);
  },
  getAll: async (_req, res) => {
    const allSales = await saleService.getAll();
    return res.status(StatusCodes.OK).json(allSales);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const saleId = await saleService.getById(id);
    return res.status(StatusCodes.OK).json(saleId);
  },
};

module.exports = saleController;
