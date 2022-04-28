'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sales', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false
      },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true 
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true 
    },
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.users, {
      as: 'users',
      foreignKey: 'userId',
    });
  };

  Sale.associate = (models) => {
    Sale.belongsTo(models.users, {
      as: 'sellers',
      foreignKey: 'sellerId',
    });
  };

  return Sale;
};