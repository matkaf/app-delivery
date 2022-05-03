const saleModel = require('../models/saleModel');

const saleService = {
  create: async (saleObj) => {
    const newSale = await saleModel.create(saleObj);
    return newSale;
  },
  getAll: async () => {
    const allSales = await saleModel.getAll();
    return allSales;
  },
};

module.exports = saleService;
