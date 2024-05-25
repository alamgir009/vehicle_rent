const express = require("express");
const bookingController = require("../controllers/booking.js");

const router = express.Router();

router.post("/booking", bookingController);

module.exports = router;
