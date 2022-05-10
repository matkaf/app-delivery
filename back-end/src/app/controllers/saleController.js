const Sequelize = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/saleService');
const saleProductService = require('../services/saleProductService');
const config = require('../../database/config/config');
const { toConvertSale, toConvertProductsArray } = require('../functions/helpers');

const sequelize = new Sequelize(config.development);

const saleController = {
  create: async (req, res) => {
    const { productsArray } = req.body;
    const saleObj = toConvertSale(req.body);

    await sequelize.transaction(async (transaction) => {
      const newSale = await saleService.create(saleObj, { transaction });
      const products = toConvertProductsArray(newSale.id, productsArray);
      await Promise.all(products.map((saleProductObj) => (
        saleProductService.create(saleProductObj, { transaction })
      )));
      return res.status(StatusCodes.CREATED).json(newSale.id);
    });
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
