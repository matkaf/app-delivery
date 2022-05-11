const { sales } = require('../../database/models');

const sellerModel = {
  getBySellerId: async (id) => {
    const sellerSales = await sales.findAll(
      { where: { seller_id: id } },
    );

    return sellerSales;
  },
};

module.exports = sellerModel;
