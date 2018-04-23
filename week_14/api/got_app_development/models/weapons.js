'use strict';
module.exports = (sequelize, DataTypes) => {
  var Weapons = sequelize.define('Weapons', {
    name: DataTypes.STRING,
    material: DataTypes.STRING,
    damage: DataTypes.INTEGER,
    accuracy: DataTypes.INTEGER
  }, {});
  Weapons.associate = function(models) {
    // associations can be defined here
  };
  return Weapons;
};