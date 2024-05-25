const mongoose = require("mongoose");

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongoDB Connected...");
  } catch (error) {
    console.error("Something went wrong");
  }
};

module.exports = database;
