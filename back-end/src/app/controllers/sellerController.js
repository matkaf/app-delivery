const { StatusCodes } = require('http-status-codes');
const sellerService = require('../services/sellerService');

const sellerController = {
  getBySellerId: async (req, res) => {
    const { id } = req.params;
    const sellerSales = await sellerService.getBySellerId(id);

    return res.status(StatusCodes.OK).json(sellerSales);
  },
};

module.exports = sellerController;
