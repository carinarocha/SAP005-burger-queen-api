'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    static associate(models) {
      products.hasMany(models.orderItems, {foreignKey: 'id'})
    }
  };
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    type: DataTypes.STRING,
    subType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};