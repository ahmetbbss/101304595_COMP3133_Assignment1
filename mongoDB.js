const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://ahmetbuyukbas:Yozgatlim38@cluster0.edf73am.mongodb.net/register?retryWrites=true&w=majority";

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(mongoURL, connectionParams);
    console.log("\nMongoDb connected");
  } catch (er) {
    console.log("\nError connecting to the database. \n", er);
  }
};
