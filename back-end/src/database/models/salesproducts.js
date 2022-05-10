module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('salesProducts',
    {
      saleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        field: 'sale_id'
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        field: 'product_id'
      },
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
      models.products.belongsTo(models.sales, {
        foreignKey: 'productId',
        as: 'sales'
      });
      models.sales.belongsTo(models.products, {
        foreignKey: 'saleId',
        as: 'products'
      });
  };

  return SalesProduct;
};