const bcrypt = require('bcrypt');

const UserModel = function(sequelize, Sequelize) {
  const User = sequelize.define(
    "User",
    {
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
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      eyes: {
        type: Sequelize.STRING
      },
      hair: {
        type: Sequelize.STRING
      },
      ethnic: {
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
      }
    },
    {
      classMethods: {
        associate(models) {

        },
        checkPassword(user, plainPass) {
					return bcrypt.compare(plainPass, user.password).then(function(res) {
							if(res == true) return true;
							return false;
					});
				}
      },
      hooks: {
        beforeCreate: (user, options) => {
          if(user.password) {
            return bcrypt.hash(user.password, 10)
              .then(hash => user.password = hash );
          }
        }
      },
      underscored: true,
      timestamps: true
    }
  );

  return User;
}

module.exports = UserModel;
