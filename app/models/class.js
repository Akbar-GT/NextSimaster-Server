'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Class.hasMany(models.Course, {
        foreignKey: 'classId'
      });
      Class.hasMany(models.CourseResult, {
        foreignKey: 'classId'
      });
    }
  }
  Class.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Class',
    tableName: 'class',
    timestamps: true
  });
  return Class;
};