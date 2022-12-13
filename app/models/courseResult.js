'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseResult extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CourseResult.belongsTo(models.Course, {
        foreignKey: 'courseId'
      });
      CourseResult.belongsTo(models.Class, {
        foreignKey: 'classId'
      });
    }
  }
  CourseResult.init({
    courseId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER,
    mark: DataTypes.STRING,
    value: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CourseResult',
    tableName: 'course_result',
    timestamps: true
  });
  return CourseResult;
};