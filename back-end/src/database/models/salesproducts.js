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
      models.Product.belongsToMany(models.Sale, {
        as: 'sales',
        through: SalesProduct,
        foreignKey: 'productId',
        otherKey: 'saleId',
      });
      models.Sale.belongsToMany(models.Product, {
        as: 'products',
        through: SalesProduct,
        foreignKey: 'saleId',
        otherKey: 'productId',
      });
  };

  return SalesProduct;
};