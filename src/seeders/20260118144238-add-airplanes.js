'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    /**
     * In seeders we need to give all attributes...
     * Even default one...
     */
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boeing 737 MAX 8',
        capacity: 178,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Boeing 747-8',
        capacity: 524,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Boeing 777-300',
        capacity: 368,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Boeing 787-9',
        capacity: 290,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'AIrbus A330',
        capacity: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
