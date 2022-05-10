'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('products', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true 
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: false,
    tableName: 'products',
    underscored: true
  });

  Product.associate = (models) => {
    Product.hasMany(models.salesProducts, {
      foreignKey: 'productId',
      as: 'products'
    });
  };

  return Product;
};