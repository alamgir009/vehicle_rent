const bookingModel = require("../models/booking.js");

const bookingController = async (req, res) => {
  try {
    const { firstName, lastName, vehicle, bookingDate } = req.body;

    // Check if the booking dates overlap with any existing bookings

    const existingBooking = await bookingModel.findOne({
      vehicle,
      "bookingDate.startingDate": { $lt: bookingDate.endingDate },
      "bookingDate.endingDate": { $gt: bookingDate.startingDate },
    });

    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "Vehicle already booked for this time period" });
    }

    const newBooking = new bookingModel({
      firstName,
      lastName,
      vehicle,
      bookingDate,
    });

    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = bookingController;
