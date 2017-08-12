const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require('graphql');

const GraphQLJSON = require('graphql-type-json');
const User = require('../types/userType');
const models = require('../../models');

const usersFilter = new GraphQLInputObjectType({
  name: 'usersFilters',
  fields: () => ({
    id: { type: GraphQLJSON },
    age: { type: GraphQLJSON },
    height: { type: GraphQLJSON },
    weight: { type: GraphQLJSON },
    size: { type: GraphQLJSON },
    gender: { type: GraphQLJSON },
    hair: { type: GraphQLJSON },
    eyes: { type: GraphQLJSON },
    accent: { type: GraphQLJSON },
    language: { type: GraphQLJSON },
    availability_week: { type: GraphQLJSON },
    availability_weekends: { type: GraphQLJSON },
  })
});

const users = {
  type: new GraphQLList(User),
  args: {
    where: {type: usersFilter },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
    order: { type: GraphQLJSON }
  },
  resolve(root, args, ctx) {
    // let where = Object.assign(args.where, {id: ctx.user.id});
    // console.log(typeof args.where == 'object' && typeof args.where.id == 'object')
    return models.User.findAll(args);
  }
};

module.exports = users;
