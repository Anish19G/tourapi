'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        name:'The Hobbit',
        author: 'J.R Token',
        year_published: 1923
      },
      {
        name:'Hairyo Ban',
        author: 'Laxmi Prasad',
        year_published: 1283
      },
      {
        name:'Muna Madan',
        author: 'Laxim Prasad',
        year_published: 2032
      },
      {
        name:'One cup Tea',
        author: 'Anish Gurung',
        year_published: 1923
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.buldDelete('books', null, {});
  }
};
