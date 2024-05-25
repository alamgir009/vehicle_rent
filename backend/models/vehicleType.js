const mongoose = require("mongoose");

const vehicleTypeSchema = new mongoose.Schema({
  type: String,
  model: { type: mongoose.Schema.Types.ObjectId, ref: "vehicle" },
});

const vehicleTypeModel = mongoose.model("vehicleType", vehicleTypeSchema);
module.exports = vehicleTypeModel;
