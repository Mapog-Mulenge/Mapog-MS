const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  event: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  metadata: { type: Object },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Analytics", analyticsSchema);
