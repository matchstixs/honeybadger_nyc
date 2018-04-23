module.exports = (sequelize, DataTypes) => {
  var Artist = sequelize.define('Artist', {
    artist_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
    nationality: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
    artist.hasMany(models.painting, {foreignKey: 'artist_id', onDelete: 'CASCADE'})
  };
  return Artist;
};