'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.hasMany(models.Course, {
        foreignKey: 'roomId'
      })
    }
  }
  Room.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'room',
    timestamps: true
  });
  return Room;
};