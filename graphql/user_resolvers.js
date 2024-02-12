const User = require("../models/UserModel");

const user_resolvers = {
  Query: {
    testUser: () => "COMP3133_Assignment1 - Ahmet Buyukbas - User model",

    getUsers: async () => {
      const users = await User.find();
      return users;
    },
    getUserById: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    },
    loginUser: async (_, { input }) => {
      const user = await User(input);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    logoutUser: async (_, { input }) => {
      const user = await User(input);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  },
  Mutation: {
    signupUser: async (_, { input }) => {
      const newUser = new User(input);
      await newUser.save();
      console.log(newUser + "\nUser created successfully");
      return newUser;
    },
    deleteUser: async (_, { id }) => {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        throw new Error("User not found");
      }
      console.log(deletedUser + "\nUser deleted successfully");
      return deletedUser;
    },
  },
};

module.exports = user_resolvers;
