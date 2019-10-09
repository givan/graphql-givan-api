const graphql = require('graphql');
const UserApiClient = require('./services/RandomUser/UserApiClient');

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: graphql.GraphQLString,
        resolve() {
          return 'world';
        },
      },
      randomUser: {
        type: graphql.GraphQLString,
        resolve() {
            const randomUserApi = UserApiClient.createInstance();
            return randomUserApi.get()
              .then((user) => {
                return user.name;
              })
              .catch((err) => {
                
              });
        }
      }
    },
  }),
});

module.exports = schema;