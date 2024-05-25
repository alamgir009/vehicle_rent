const mongoose = require("mongoose");

const vehicleTypeSchema = new mongoose.Schema({
  type: String,
  model: { type: mongoose.Schema.Types.ObjectId, ref: "vehicle" },
});

const vehicleModel = mongoose.model("vehicleType", vehicleTypeSchema);
module.exports = vehicleModel;
