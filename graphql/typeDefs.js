const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    username: String!
    email: String!
    password: String!
  }

  type Employee {
    id: ID
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input EmployeeInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: String!
  }

  type Query {
    testUser: String
    testEmployee: String
    getUsers: [User]
    getUserById(id: ID!): User
    getEmployees: [Employee]
    getEmployeeById(id: ID!): Employee
    loginUser(input: UserInput): User
    logoutUser(input: UserInput): User
  }

  type Mutation {
    signupUser(input: UserInput): User
    deleteUser(id: ID!): User
    createEmployee(input: EmployeeInput): Employee
    updateEmployee(id: ID!, input: EmployeeInput): Employee
    deleteEmployee(id: ID!): Employee
  }
`;

module.exports = typeDefs;
