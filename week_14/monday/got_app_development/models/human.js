'use strict';
module.exports = (sequelize, DataTypes) => {
  var Human = sequelize.define('Human', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    status: DataTypes.STRING,
    portrait: DataTypes.STRING
  }, {});
  Human.associate = function(models) {
    // associations can be defined here
  };
  return Human;
};