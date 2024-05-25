const cors = require("cors");
const express = require("express");
const env = require("dotenv");
const database = require("./config/db");

env.config();
const server = express();

server.use(express.json());
server.use(cors());

// server.use("/", bookingRouter);
// server.use("/", vehicleRouter);
server.get("/", (req, res) => {
  res.send("<h1>Hellow</h1>");
});

// Database connection
database();

server.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
