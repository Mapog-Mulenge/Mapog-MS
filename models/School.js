const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Primary", "Secondary", "Tertiary"],
    default: "Primary",
  },
}, { timestamps: true });

module.exports = mongoose.model("School", SchoolSchema);
