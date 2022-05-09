const { salesProducts } = require('../../database/models');

const saleProductModel = {
  create: async (saleProductObj) => {
    const newSaleProduct = await salesProducts.create({ ...saleProductObj });
    return newSaleProduct;
  },
};

module.exports = saleProductModel;
