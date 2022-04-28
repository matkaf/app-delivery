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
      tablename: 'salesProducts' 
    });

    SalesProduct.associate = (models) => {
      models.products.belongsToMany(models.sales, {
        as: 'sales',
        through: SalesProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });
      models.sales.belongsToMany(models.products, {
        as: 'products',
        through: SalesProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      });
  };

  return SalesProduct;
};