'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
      users.hasMany(models.orders, {foreignKey: 'id'})
    }
  };
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    restaurant: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};