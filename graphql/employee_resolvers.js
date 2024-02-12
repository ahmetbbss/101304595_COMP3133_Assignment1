const Employee = require("../models/EmployeeModel");

const employee_resolvers = {
  Query: {
    testEmployee: () =>
      "COMP3133_Assignment1 - Ahmet Buyukbas - Employee model",

    getEmployees: async () => {
      const employees = await Employee.find();
      return employees;
    },
    getEmployeeById: async (_, { id }) => {
      const emp = await Employee.findById(id);
      return emp;
    },
  },

  Mutation: {
    createEmployee: async (_, { input }) => {
      const newEmployee = new Employee(input);
      await newEmployee.save();
      console.log(newEmployee + " \nEmployee created successfully");
      return newEmployee;
    },
    updateEmployee: async (_, { id, input }) => {
      const employee = await Employee.findByIdAndUpdate(id, input, {
        new: true,
      });
      console.log(employee + " \nEmployee updated successfully");
      return employee;
    },
    deleteEmployee: async (_, { id }) => {
      const employee = await Employee.findByIdAndDelete(id);
      console.log(employee + " \nEmployee deleted successfully");
      return employee;
    },
  },
};

module.exports = employee_resolvers;
