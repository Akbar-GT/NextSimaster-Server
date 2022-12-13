'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('course', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      day: {
        allowNull: false,
        type: Sequelize.STRING
      },
      time: {
        allowNull: false,
        type: Sequelize.STRING
      },
      roomId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'room',
          key: 'id',
        }
      },
      firstLecturerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lecturer',
          key: 'id',
        },
      },
      secondLecturerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'lecturer',
          key: 'id',
        },
      },
      classId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'class',
          key: 'id'
        }
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      credit: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('course');
  }
};