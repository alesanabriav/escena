const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = require('graphql');

const GraphQLJSON = require('graphql-type-json');

const User = new GraphQLObjectType({
  name: 'user',
  description: 'Represent a user',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },

      name: {
        type: GraphQLString
      },
      lastname: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
      city: {
        type: GraphQLString
      },
      age: {
        type: GraphQLInt
      },
      height: {
        type: GraphQLInt
      },
      weight: {
        type: GraphQLInt
      },
      size: {
        type: GraphQLString
      },
      eyes: {
        type: GraphQLString
      },
      gender: {
        type: GraphQLString
      },
      ethnic: {
        type: GraphQLString
      },
      hair: {
        type: GraphQLString
      },
      accent: {
        type: GraphQLString
      },
      language: {
        type: GraphQLString
      },
      availability_week: {
        type: GraphQLString
      },
      availability_weekends: {
        type: GraphQLString
      },
      rushing_hour: {
        type: GraphQLBoolean
      },
      experience: {
        type: GraphQLString
      }
  })
});

module.exports = User;
