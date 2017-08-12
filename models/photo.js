
function PhotoModel(sequelize, Sequelize) {
  const Photo = sequelize.define(
    'Photo',
    {
      user_id: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      }
    },
    {
      classMethods: {
        associate(models) {

        },
      },
      hooks: {
        beforeCreate: (company, options) => {

        }
      },
      underscored: true
    }
  );

  return Photo;
}

module.exports = PhotoModel;
