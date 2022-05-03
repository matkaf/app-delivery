const { sales } = require('../../database/models');

const saleModel = {
  create: async (saleObj) => {
    const {
      userId, sallerId, totalPrice, deliveryAnddress, deliveryNumber, saleDate, status,
    } = saleObj;
    const newSale = await sales.create({
      userId, sallerId, totalPrice, deliveryAnddress, deliveryNumber, saleDate, status,
    });
    return newSale;
  },
  getAll: async () => {
    const allSales = await sales.findAll();
    return allSales;
  },
};

module.exports = saleModel;
