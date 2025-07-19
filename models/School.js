const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: String,
  address: String,
  contactEmail: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("School", schoolSchema);
