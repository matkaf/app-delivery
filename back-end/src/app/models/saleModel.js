const { sales } = require('../../database/models');

const saleModel = {
  create: async (saleObj) => {
    const newSale = await sales.create({ ...saleObj });
    return newSale;
  },
  getAll: async () => {
    const allSales = await sales.findAll();
    return allSales;
  },
  getById: async (id) => {
    const saleId = await sales.findByPk(id);
    return saleId;
  },
  update: async (id, saleObj) => {
    await sales.update(
      { ...saleObj },
      { where: { id } },
    );
    return { id, ...saleObj };
  },
};

module.exports = saleModel;
