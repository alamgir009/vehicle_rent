const express = require("express");
const bookingController = require("../controllers/booking");

const router = express.Router();

router.post("/booking", bookingController);
