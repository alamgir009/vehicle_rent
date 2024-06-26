const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: String,
  type: { type: mongoose.Schema.Types.ObjectId, ref: "vehicleType" },
});

const vehicleModel = mongoose.model("vehicle", vehicleSchema);
module.exports = vehicleModel;
