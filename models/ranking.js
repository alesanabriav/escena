
function RankingModel(sequelize, Sequelize) {
  const Ranking = sequelize.define(
    "Ranking",
    {
      ranking: {
        type: Sequelize.STRING
      },
      ranking_type: {
        type: Sequelize.STRING
      },
      ranking_comment: {
        type: Sequelize.TEXT
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

  return Ranking;
}

module.exports = RankingModel;
