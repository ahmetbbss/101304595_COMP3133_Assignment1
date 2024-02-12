const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoDB_connect = require("./mongoDB.js");

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
    });

    await server_listen.start();
    server_listen.applyMiddleware({ app });

    app.listen({ port: 8001 }, () => {
      console.log(
        `Server ready at http://localhost:8001${server_listen.graphqlPath}`
      );
    });
  } catch (err) {
    console.log(err);
  }
}

serverStarter();
