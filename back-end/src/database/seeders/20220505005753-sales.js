'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        total_price: 15.45,
        delivery_address: 'Rua Maria, 100 - Centro, São Paulo - SP',
        delivery_number: '1',
        sale_date: '2022-05-01',
        status: 'Pendente',
        user_id: 3,
        seller_id: 2,
      },
      {
        total_price: 55.10,
        delivery_address: 'Rua Joao, 55 - Centro, Salvador - BA',
        delivery_number: '2',
        sale_date: '2022-05-03',
        status: 'Preparando',
        user_id: 4,
        seller_id: 2,
      },
      {
        total_price: 123.99,
        delivery_address: 'Rua Zé, 15 - Centro, Porto Alegre - RS',
        delivery_number: '3',
        sale_date: '2022-05-03',
        status: 'Em Trânsito',
        user_id: 4,
        seller_id: 2,
      },
      {
        total_price: 68.70,
        delivery_address: 'Rua Joaquina, 1467 - Centro, Belo Horizonte - MG',
        delivery_number: '4',
        sale_date: '2022-05-04',
        status: 'Entregue',
        user_id: 3,
        seller_id: 2,
      },
      {
        total_price: 66.20,
        delivery_address: 'Rua Andino, 19 - Centro, Florianópolis - SC',
        delivery_number: '5',
        sale_date: '2022-05-04',
        status: 'Pendente',
        user_id: 3,
        seller_id: 2,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
