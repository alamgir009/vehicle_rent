const cors = require("cors");
const express = require("express");
const env = require("dotenv");
const database = require("./config/db");
const bookingRouter = require("./routes/booking.js");
const vehicleTypeRouter = require("./routes/vehicleType.js");

env.config();
const server = express();

server.use(express.json());
server.use(cors());

server.use("/", bookingRouter);
server.use("/", vehicleTypeRouter);

// Database connection
database();

server.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
