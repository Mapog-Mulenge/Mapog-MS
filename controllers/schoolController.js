const School = require("../models/School");

// Create new school
exports.createSchool = async (req, res) => {
  try {
    const { name, location, type } = req.body;

    const school = new School({
      name,
      location,
      type,
    });

    await school.save();
    res.status(201).json(school);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create school" });
  }
};

// Get all schools
exports.getAllSchools = async (req, res) => {
  try {
    const schools = await School.find();
    res.status(200).json(schools);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch schools" });
  }
};
