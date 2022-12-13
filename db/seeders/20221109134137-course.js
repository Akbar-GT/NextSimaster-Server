'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('course', [
      {
        code: 'MII3513',
        name: 'Pemrograman Jaringan dan Piranti Bergerak',
        day: 'Selasa',
        time: '13.30-14.40',
        roomId: '1',
        firstLecturerId: '3',
        secondLecturerId: '4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        classId: '1',
        credit: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: 'MII4003',
        name: 'Seminar',
        day: 'Selasa',
        time: '12.30-13.00',
        roomId: '2',
        firstLecturerId: '1',
        secondLecturerId: null,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        classId: '3',
        credit: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '	MII4001',
        name: 'Proposal',
        day: 'Senin',
        time: '13.30-14.40',
        roomId: '1',
        firstLecturerId: '2',
        secondLecturerId: '4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        classId: '2',
        credit: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        code: '	MII3311',
        name: 'Skripsi',
        day: 'Rabu',
        time: '10.00-12.00',
        roomId: '3',
        firstLecturerId: '2',
        secondLecturerId: '4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        classId: '1',
        credit: '6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('course', null, {});
  }
};
