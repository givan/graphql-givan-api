To pull up the localhost GarphiQL, pull up http://localhost:4000/graphql in your browser.

There is one query type defined - RootQueryType which has 2 fields - hello and randomUser. The resolver on randomUser field goes and makes an async HTTP request to the randomuser API to pull up a random user name from this API.