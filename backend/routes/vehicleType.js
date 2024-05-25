const express = require("express");
const vehicleTypeController = require("../controllers/vehicleType.js");

const router = express.Router();

router.get("/vehicle", vehicleTypeController);
