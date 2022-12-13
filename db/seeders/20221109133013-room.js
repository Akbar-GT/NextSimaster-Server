'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('room', [
      {
        name: 'S1MIPA05',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'S1.212',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'S1.204',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('room', null, {});
  }
};
