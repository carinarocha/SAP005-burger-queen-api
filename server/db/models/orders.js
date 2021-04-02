'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate(models) {
      orders.hasMany(models.orders, {foreignKey: 'id'})
      orders.belongsTo(models.orders, {foreignKey: 'waiterId'})
      orders.belongsTo(models.orders, {foreignKey: 'chefId'})
    }
  };
  orders.init({
    cliente: DataTypes.STRING,
    mesa: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'orders',
  });
  return orders;
};