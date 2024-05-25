const mongoose = require("mongoose");
const VehicleType = require("../models/vehicleType.js");
const Vehicle = require("../models/vehicle.js");
require("dotenv").config();
const connectDB = require("../config/db");

connectDB();

const seedDB = async () => {
  await VehicleType.deleteMany({});
  await Vehicle.deleteMany({});

  const carType = new VehicleType({ type: "car" });
  const bikeType = new VehicleType({ type: "bike" });

  const hatchback = new Vehicle({ name: "Hatchback", type: carType._id });
  const suv = new Vehicle({ name: "SUV", type: carType._id });
  const sedan = new Vehicle({ name: "Sedan", type: carType._id });

  const cruiser = new Vehicle({ name: "Cruiser", type: bikeType._id });

  carType.vehicles = [hatchback._id, suv._id, sedan._id];
  bikeType.vehicles = [cruiser._id];

  await carType.save();
  await bikeType.save();

  await hatchback.save();
  await suv.save();
  await sedan.save();
  await cruiser.save();

  mongoose.connection.close();
};

seedDB();
