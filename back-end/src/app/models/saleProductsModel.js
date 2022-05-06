const { salesproducts } = require('../../database/models');

const saleProductModel = {
  create: async (saleProductObj) => {
    const newSaleProduct = await salesproducts.create({ ...saleProductObj });
    return newSaleProduct;
  },
};

module.exports = saleProductModel;
