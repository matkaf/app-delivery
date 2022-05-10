const saleProductModel = require('../models/saleProductsModel');

const saleProductService = {
  create: async (saleProductObj) => {
    const newSaleProduct = await saleProductModel.create(saleProductObj);
    return newSaleProduct;
  },
};

module.exports = saleProductService;
