const customerModel = require('../models/customerModel');

const customerService = {
  getByCustomerId: async (id) => {
    const customerOrders = await customerModel.getByCustomerId(id);

    return customerOrders;
  },
};

module.exports = customerService;
