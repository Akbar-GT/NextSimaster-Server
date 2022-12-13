'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.Class, {
        foreignKey: 'classId',
      });
      Course.belongsTo(models.Lecturer, {
        foreignKey: 'firstLecturerId'
      });
      Course.belongsTo(models.Lecturer, {
        foreignKey: 'secondLecturerId'
      });
      Course.belongsTo(models.Room, {
        foreignKey: 'roomId'
      });
      Course.hasMany(models.CourseResult, {
        foreignKey: 'courseId'
      })
    }
  }
  Course.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    day: DataTypes.STRING,
    time: DataTypes.STRING,
    roomId: DataTypes.INTEGER,
    firstLecturerId: DataTypes.INTEGER,
    secondLecturerId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    credit: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'course',
    timestamps: true
  });
  return Course;
};