'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING
        },
        lastname: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        city: {
          type: Sequelize.STRING
        },
        age: {
          type: Sequelize.INTEGER
        },
        height: {
          type: Sequelize.INTEGER
        },
        weight: {
          type: Sequelize.INTEGER
        },
        size: {
          type: Sequelize.STRING
        },
        eyes: {
          type: Sequelize.STRING
        },
        gender: {
          type: Sequelize.STRING
        },
        ethnic: {
          type: Sequelize.STRING
        },
        hair: {
          type: Sequelize.STRING
        },
        accent: {
          type: Sequelize.STRING
        },
        language: {
          type: Sequelize.STRING
        },
        availability_week: {
          type: Sequelize.STRING
        },
        availability_weekends: {
          type: Sequelize.STRING
        },
        experience: {
          type: Sequelize.TEXT
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        }
      });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('users');
  }
};
