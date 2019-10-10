const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const UserApiClient = require('./services/RandomUser/UserApiClient');

// sources:
// https://graphql.org/graphql-js/constructing-types/
// https://graphql.org/graphql-js/running-an-express-graphql-server/
// https://github.com/graphql/graphiql/
// https://graphql.org/learn/schema/#type-system
// https://medium.com/codingthesmartway-com-blog/creating-a-graphql-server-with-node-js-and-express-f6dddc5320e1
// https://blog.apollographql.com/graphql-vs-rest-5d425123e34b

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        },
      },
      randomUser: {
        type: GraphQLString,
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