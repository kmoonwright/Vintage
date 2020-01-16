const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphWLID, GraphQLInt, GraphQLFloat } = graphql;
const mongoose = require('mongoose');
const AuthService = require('../services/auth');

//Types
const UserType = require('./types/user_type');

//Models
const User = mongoose.model('user');

const mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.register(args);
      }
    },


  }
})