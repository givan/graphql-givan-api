const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const MyGraphQLSchema = require('./MyGraphQLSchema');

app.use(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: !process.env.NODE_ENV || process.env.NODE_ENV === "development",
  }),
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));