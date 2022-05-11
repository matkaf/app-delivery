const { sales, users, products } = require('../../database/models');

const saleModel = {
  create: async (saleObj) => {
    const newSale = await sales.create({ ...saleObj });
    return newSale;
  },
  getAll: async () => {
    const allSales = await sales.findAll();
    return allSales;
  },
  getOrderById: async (id) => {
    const orderId = sales.findByPk(id, {
      include: [{
        model: users,
        as: 'sellers',
        attributes: ['id', 'name'],
      }, {
        model: products,
        as: 'products',
        attributes: ['id', 'name', 'price'],
      }],
    });
    return orderId;
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
  deleteById: async (id) => {
    await sales.destroy({ where: { id } });
  },
};

module.exports = saleModel;
