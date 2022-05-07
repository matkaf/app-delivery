'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('products',
    [
      {
        name:'Antarctica Pilsen 300ml',
        price: 4.99,
        url_image: '/back-end/public/antarctica_pilsen_300ml.jpg',
      },
      {
        name:'Becks 330ml',
        price: 7.59,
        url_image: '/back-end/public/becks_330ml.jpg',
      },
      {
        name:'Becks 600ml',
        price: 10.90,
        url_image: '/back-end/public/becks_600ml.jpg',
      },
      {
        name:'Brahma 600ml',
        price: 6.99,
        url_image: '/back-end/public/brahma_600ml.jpg',
      },
      {
        name:'Brahma Duplo Malte 350ml',
        price: 3.50,
        url_image: '/back-end/public/brahma_duplo_malte_350ml.jpg',
      },
      {
        name:'Da Mantiqueira Red Ale',
        price: 6.90,
        url_image: '/back-end/public/da_mantiqueira_red_ale.jpg',
      },
      {
        name:'Heineken 600ml',
        price: 11.50,
        url_image: '/back-end/public/heineken_600ml.jpg',
      },
      {
        name:'Skol 269ml',
        price: 2.49,
        url_image: '/back-end/public/skol_269ml.jpg',
      },
      {
        name:'Skol Beats Senses 269ml',
        price: 2.99,
        url_image: '/back-end/public/skol_beats_senses_269ml.jpg',
      },
      {
        name:'Skol Beats Senses 313ml',
        price: 3.70,
        url_image: '/back-end/public/skol_beats_senses_313ml.jpg',
      },
      {
        name:'Skol Lata 350ml',
        price: 3.64,
        url_image: '/back-end/public/skol_lata_350ml.jpg',
      },
      {
        name:'Stella Artois 275ml',
        price: 4.95,
        url_image: '/back-end/public/stella_artois_275ml.jpg',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};