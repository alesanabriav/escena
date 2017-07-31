const {
  GraphQLSchema,
  GraphQLObjectType
} =  require("graphql");


const usersQuery =  require('./queries/userQueries');

const Query = new GraphQLObjectType({
  name: "AppQueries",
  description: "Root Schema",
  fields: () => ({
    users: usersQuery
  })
});

// const Mutation = new GraphQLObjectType({
//   name: "AppMutations",
//   fields: () => ({
//
//   })
// });

const Schema = new GraphQLSchema({
  query: Query,
  // mutation: Mutation
});



module.exports =  Schema;
