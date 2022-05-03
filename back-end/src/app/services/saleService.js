const saleModel = require('../models/saleModel');

const saleService = {
  create: async (saleObj) => {
    const newSale = await saleModel.create(saleObj);
    return newSale;
  },
};

module.exports = saleService;
