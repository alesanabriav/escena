'use strict';
const casual = require('casual');

function random(til) {
  return Math.floor(Math.random() * parseInt(til)) + 0
}

module.exports = {
  up: function (queryInterface, Sequelize) {
    let users = [];
    let sizes = ['xs', 's', 'm', 'l', 'xl'];
    let availability = ['mañana', 'tarde', 'noche', 'fulltime'];

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
        size: sizes[random(6)],
        eyes: casual.safe_color_name,
        availability_week: availability[random(4)],
        availability_weekends: availability[random(4)]
      });
    }

      return queryInterface.bulkInsert('Users', users, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
