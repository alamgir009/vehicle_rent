const vehicleTypeModel = require("../models/vehicleType.js");

const vehicleTypeController = async (req, res) => {
  try {
    const vehicleTypes = await vehicleTypeModel.find();

    return res.status(200).json(vehicleTypes);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = vehicleTypeController;
