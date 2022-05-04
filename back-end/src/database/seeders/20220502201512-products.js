'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('products',
    [
      {
        name:'Antarctica Pilsen 300ml',
        price: 4.99,
        url_image: './back-end/public/antarctica_pilsen_300ml.jpg',
      },
      {
        name:'Becks 330ml',
        price: 7.59,
        url_image: './back-end/public/becks_330ml.jpg',
      },
      {
        name:'Becks 600ml',
        price: 10.90,
        url_image: './back-end/public/becks_600ml.jpg',
      },
      {
        name:'Brahma 600ml',
        price: 6.99,
        url_image: './back-end/public/brahma_600ml.jpg',
      },
      {
        name:'Brahma Duplo Malte 350ml',
        price: 3.50,
        url_image: './back-end/public/brahma_duplo_malte_350ml.jpg',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};