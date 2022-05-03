const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/saleService');

const saleController = {
  create: async (req, res) => {
    const { body } = req;
    const newSale = await saleService.create(body);
    return res.status(StatusCodes.CREATED).json(newSale);
  },
};

module.exports = saleController;
