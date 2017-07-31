'use strict';
const casual = require('casual');

module.exports = {
  up: function (queryInterface, Sequelize) {
    let users = [];

    for (var i = 0; i < 20; i++) {
      users = users.concat({
        name: casual.first_name,
        lastname: casual.last_name,
        email: casual.email,
        password: casual.password,
        city: casual.city,
        age: casual.integer(18, 80),
        height: casual.double(1, 2),
        weight: casual.integer(30, 100),
      });
    }

      return queryInterface.bulkInsert('Users', users, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
