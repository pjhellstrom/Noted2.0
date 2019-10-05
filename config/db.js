const mongoose = require("mongoose");

require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb://noted2master:rarjar-bajzev-2wEbhi@ds229068.mlab.com:29068/heroku_9j7dkbtq",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }
    );
    console.log("MongoDB connection established.");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
