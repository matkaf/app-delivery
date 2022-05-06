const Sequelize = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const saleService = require('../services/saleService');
const saleProductService = require('../services/saleProductService');
const config = require('../../database/config/config');
const { toConvertSale } = require('../functions/helpers');

const sequelize = new Sequelize(config.development);

const saleController = {
  create: async (req, res) => {
    const saleObj = toConvertSale(req.body);

    await sequelize.transaction(async (t) => {
      const { productsArray } = req.body;
      const newSale = await saleService.create(saleObj, { transaction: t });

      const allProducts = productsArray.map(({ id, quantity }) => (
        saleProductService.create(
          { saleId: newSale.id, productId: id, quantity }, { transaction: t },
        )
      ));

      Promise.all(allProducts);

      return res.status(StatusCodes.CREATED).json(newSale);
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
