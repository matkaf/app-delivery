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
  getById: async (id) => {
    const saleId = await saleModel.getById(id);
    return saleId;
  },
  update: async (id, saleObj) => {
    const updateSale = await saleModel.update(id, saleObj);
    return updateSale;
  },
};

module.exports = saleService;
