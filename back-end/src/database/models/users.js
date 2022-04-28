'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
        autoIncrement: true 
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING, 
      allowNull: false
    }
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      as: 'sales',
      foreignKey: 'userId',
    });
  };

  return User;
};