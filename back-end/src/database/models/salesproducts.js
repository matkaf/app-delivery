module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProducts',
    {
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    },
    { 
      underscored: true,
      timestamps: false,
      tableName: 'sales_products'
    });

    SalesProduct.associate = (models) => {
      SalesProduct.belongsTo(models.sales, {
        // through: SalesProduct,
        foreignKey: 'productId',
        // otherKey: 'saleId',
        as: 'sales'
      });
      SalesProduct.belongsTo(models.products, {
        // through: SalesProduct,
        foreignKey: 'saleId',
        // otherKey: 'productId',
        as: 'products'
      });
  };

  return SalesProduct;
};