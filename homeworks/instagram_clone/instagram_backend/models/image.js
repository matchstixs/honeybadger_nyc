'use strict';
module.exports = (sequelize, DataTypes) => {
  var image = sequelize.define('image', {
    id: {
    primaryKey: true
    },  
    tag: DataTypes.STRING(25),
    comment: DataTypes.STRING(125)
  }, {});
  image.associate = function(models) {
    models.image.belongsTo(models.user, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return image;
};