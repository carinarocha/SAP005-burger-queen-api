'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orderItems extends Model {
    static associate(models) {
      orderItems.belongsTo(models.products, {foreignKey: 'productId'})
      orderItems.belongsTo(models.orders, {foreignKey: 'orderId'})
    }
  };
  orderItems.init({
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'orderItems',
  });
  return orderItems;
};