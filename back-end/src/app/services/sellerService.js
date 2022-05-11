const sellerModel = require('../models/sellerModel');

const sellerService = {
  getBySellerId: async (id) => {
    const sellerSales = await sellerModel.getBySellerId(id);

    return sellerSales;
  },
};

module.exports = sellerService;
