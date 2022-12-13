'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('lecturer', [
      {
        name: 'Ika Candradewi, S.Si., M.Cs.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Muhammad Idham Ananta Timur, M.Kom.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dr. Mardhani Riasetiawan, SE Ak, M.T.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Drs. Bambang Nurcahyo Prastowo, M.Sc.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('lecturer', null, {});
  }
};
