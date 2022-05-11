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
  getOrderById: async (id) => {
    const orderId = await saleModel.getOrderById(id);
    return orderId;
  },
  getById: async (id) => {
    const saleId = await saleModel.getById(id);
    return saleId;
  },
  update: async (id, saleObj) => {
    const updateSale = await saleModel.update(id, saleObj);
    return updateSale;
  },
  deleteById: async (id) => {
    await saleModel.deleteById(id);
  },
};

module.exports = saleService;
