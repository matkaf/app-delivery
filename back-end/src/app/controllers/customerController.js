const { StatusCodes } = require('http-status-codes');
const customerService = require('../services/customerService');

const customerController = {
  getByCustomerId: async (req, res) => {
    const { id } = req.params;
    const customerOrders = await customerService.getByCustomerId(id);

    return res.status(StatusCodes.OK).json(customerOrders);
  },
};

module.exports = customerController;
