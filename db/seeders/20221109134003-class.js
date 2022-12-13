'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('class', [
      {
        name: 'EL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ELB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ELA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('class', null, {});
  }
};
