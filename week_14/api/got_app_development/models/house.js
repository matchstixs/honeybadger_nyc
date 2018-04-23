'use strict';
module.exports = (sequelize, DataTypes) => {
  var House = sequelize.define('House', {
    name: DataTypes.STRING,
    sigil: DataTypes.STRING,
    region: DataTypes.STRING
  }, {});
  House.associate = function(models) {
    // associations can be defined here
  };
  return House;
};