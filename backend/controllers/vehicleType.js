const vehicleTypesModel = require("../models/vehicle.js");

const vehicleTypeController = async (req, res) => {
  try {
    const vehicleTypes = await vehicleTypesModel.find().populate("vehicles");

    return res.status(200).json(vehicleTypes);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = vehicleTypeController;
