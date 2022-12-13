'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('course_result', [
      {
        courseId: '1',
        mark: 'A',
        value: '4.00',
        classId: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: '2',
        mark: 'B',
        value: '4.00',
        classId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: '3',
        mark: 'C',
        value: '4.00',
        classId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('course_result', null, {});
  }
};
