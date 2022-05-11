const { sales } = require('../../database/models');

const customerModel = {
  getByCustomerId: async (id) => {
    const customerOrders = await sales.findAll(
      { where: { userId: id } },
    );

    return customerOrders;
  },
};

module.exports = customerModel;
