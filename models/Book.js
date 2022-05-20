'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    Title: DataTypes.STRING,
    Author: DataTypes.STRING,
    Genre: DataTypes.STRING,
    Review: DataTypes.INTEGER,
    Favorite: DataTypes.BOOLEAN,
  }, {});
  Book.associate = function(models) {
    
  };
  return Book;
};
