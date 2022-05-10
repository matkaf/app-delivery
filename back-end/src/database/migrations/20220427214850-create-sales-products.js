module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('salesProducts', {
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sale_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        // field: 'sale_id'
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey:true,
        // field: 'product_id'
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};