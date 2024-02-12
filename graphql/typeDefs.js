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

/*
mutation{
  createEmployee (
    input:{
      first_name:"ahmet",
      last_name:"buyukbas",
      email:"ahmet@bbs.ca",
      gender:"Male",
      salary:"60000"
    }){
      id
      first_name
      last_name
      email
      gender
      salary
    }
}
*/

/*
mutation {
  registerUser(
    input: {
      username: "ahmetbbs"
      email: "ahmet@bbs.net"
      password: "123456"
    }
  ) {
    id
    username
    email
    password
  }
}
*/

/*
query{
  getEmployees{
    id
    first_name
    last_name
  }
}

query {
  getUsers {
    id
    username
    email
    password
  }
}

*/

//login user query
/*
query{
  loginUser(
    input:{
      username:""
      email:""
      password:""
    }
  ){
    id
    username
    email
    password
  }
}

/*
mutation{
    updateEmployee(
        id:"65c98ecd34642920ab9dd1e1"
        input:{
            first_name:"AhmetB",
            last_name:"Buyukbas",
            email:"ahmetbbss@gmail.ca",
            gender:Male,
            salary:80000
        }
    ){
        id
        first_name
        last_name
        email
        gender
        salary
    }
}
*/

/*
mutation{
    deleteEmployee(
        id:"65c98ecd34642920ab9dd1e1"
    ){
        id
        first_name
        last_name
        email
        gender
        salary
    }
}
*/

/*
query{
    getEmployeeById(id:"65c98ecd34642920ab9dd1e1"){
        id
        first_name
        last_name
        email
    }
}
*/

/*
query{
    getUserById(id:"65c98c511068ea28c024eef3"){
        id
        username
        email
    }
}

Mutation{
    loginUser(
        input:{
            email:"ahmet_buyukbas.net"
            password:"test12345"
        }
    ){
        id
        username
        email
    }
}
*/
