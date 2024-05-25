const bookingModel = require("../models/booking");

const bookingController = async (req, res) => {
  try {
    const { firstName, lastName, vehicle, bookingTime } = req.body;

    // Check if the booking time is available
    const existingBooking = await bookingModel.findOne({
      vehicle,
      $or: [
        {
          "bookingTime.start": {
            $gte: bookingTime.start,
            $lt: bookingTime.end,
          },
        },
        {
          "bookingTime.end": { $gt: bookingTime.start, $lte: bookingTime.end },
        },
        {
          "bookingTime.start": { $lte: bookingTime.start },
          "bookingTime.end": { $gte: bookingTime.end },
        },
      ],
    });

    if (existingBooking) {
      return res
        .status(400)
        .json({ message: "Vehicle already booked for this time period" });
    }

    const booking = new bookingModel({
      firstName,
      lastName,
      vehicle,
      bookingTime,
    });

    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = bookingController;
