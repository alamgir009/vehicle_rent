const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "vehicle" },
  bookingDate: {
    startingDate: Date,
    endingDate: Date,
  },
});

const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;
