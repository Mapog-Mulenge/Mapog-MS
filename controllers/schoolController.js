const School = require("../models/School");

exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schools", error });
  }
};
