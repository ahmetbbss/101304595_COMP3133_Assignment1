const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoDB_connect = require("./mongoDB.js");
const PORT = 4000;

const typeDefs = require("./graphql/typeDefs");
const Employee_resolvers = require("./graphql/employee_resolvers");
const User_resolvers = require("./graphql/user_resolvers");

async function serverStarter() {
  try {
    await mongoDB_connect();
    const app = express();

    const server_listen = new ApolloServer({
      typeDefs,
      resolvers: [Employee_resolvers, User_resolvers],
      plugins: [
        // Install a landing page plugin based on NODE_ENV
        process.env.NODE_ENV === 'production'
          ? ApolloServerPluginLandingPageProductionDefault({
              graphRef: 'my-graph-id@my-graph-variant',
              footer: false,
            })
          : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
      ],
    });

    await server_listen.start();
    server_listen.applyMiddleware({ app });

    app.listen({ port: process.env.PORT || 4000 }, () => {
      console.log(
        `Server ready at http://localhost:4000${server_listen.graphqlPath}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

serverStarter();
