const vehicleTypeModel = require("../models/vehicleType.js");

const vehicleTypeController = async (req, res) => {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "vehicles",
          localField: "vehicles",
          foreignField: "_id",
          as: "vehicleDetails",
        },
      },
      {
        $project: {
          _id: 0,
          type: 1,
          vehicleDetails: {
            name: 1,
            _id: 1,
          },
        },
      },
    ];

    const vehicleTypes = await vehicleTypeModel.aggregate(pipeline);

    return res.status(200).json(vehicleTypes);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = vehicleTypeController;
