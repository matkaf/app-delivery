'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        name:'Delivery App Admin',
        email:'adm@deliveryapp.com',
        password:'a4c86edecc5aee06eff8fdeda69e0d04',
        role:'administrator',
      },
      {
        name:'Fulana Pereira',
        email:'fulana@deliveryapp.com',
        password:'3c28d2b0881bf46457a853e0b07531c6',
        role:'seller',
      },
      {
        name:'Cliente Zé Birita',
        email:'zebirita@email.com',
        password:'1c37466c159755ce1fa181bd247cb925',
        role:'customer',
      },
      {
        name: 'Usuario Teste',
        email: 'teste@teste.com',
        password: 'aa1bf4646de67fd9086cf6c79007026c', //teste123
        role: 'customer',
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};