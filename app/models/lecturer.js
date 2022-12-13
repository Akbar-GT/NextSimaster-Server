'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lecturer.hasMany(models.Course, {
        foreignKey: 'firstLecturerId'
      });
      Lecturer.hasMany(models.Course, {
        foreignKey: 'secondLecturerId'
      });
    }
  }
  Lecturer.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lecturer',
    tableName: 'lecturer',
    timestamps: true
  });
  return Lecturer;
};