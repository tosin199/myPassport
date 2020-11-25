'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Tasks', [{
        title: 'Coding is fun',
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {

  }
};
