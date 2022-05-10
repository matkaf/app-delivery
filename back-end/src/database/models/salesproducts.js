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
      tableName: 'salesProducts'
    });

    SalesProduct.associate = (models) => {
      models.products.belongsToMany(models.sales, {
        through: SalesProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
        as: 'sales'
      });
      models.sales.belongsToMany(models.products, {
        through: SalesProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
        as: 'products'
      });
  };

  return SalesProduct;
};