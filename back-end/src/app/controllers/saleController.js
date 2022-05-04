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
  update: async (req, res) => {
    const { params: { id }, body } = req;
    const updateSale = await saleService.update(Number(id), body);
    return res.status(StatusCodes.CREATED).json(updateSale);
  },
  deleteById: async (req, res) => {
    const { id } = req.params;
    await saleService.deleteById(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  },
};

module.exports = saleController;
