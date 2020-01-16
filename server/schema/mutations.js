const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLID, GraphQLInt, GraphQLFloat } = graphql;
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
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.login(args)
      }
    },
    logout: {
      type: UserType,
      args: {
        _id: { type: GraphQLID }
      }
    },
    verifyUser: {
      type: UserType,
      args: {
        token: { type: GraphQLString }
      },
      async resolve(_, { name, description, weight }, ctx) {
        const validUser = await AuthService.verifyUser({ token: ctx.token });
        // if our service returns true then our item is good to save!
        // anything else and we'll throw an error
        if (validUser.loggedIn) {
          return validUser;
        } else {
          throw new Error('Sorry, you need to be logged in to use the website.');
        }
      }
    },
    
  }
});

module.exports = mutations;