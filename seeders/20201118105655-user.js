'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Users', [{
        firstName: 'Lydia',
        lastName:'Tosin',
        email:'peakt@gmail.com',
        password:'123!tos',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {

  }
};
