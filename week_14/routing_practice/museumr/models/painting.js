module.exports = (sequelize, DataTypes) => {
  var Painting = sequelize.define('Painting', {
    title: DataTypes.STRING,
    img_url: DataTypes.STRING,
    year_made: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER
  }, {});
  Painting.associate = function(models) {
    // associations can be defined here
    painting.belongsTo(models.artist, {foreignKey: 'artist_id'});
  };
  return Painting;
};