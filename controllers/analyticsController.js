const Analytics = require("../models/Analytics");

exports.trackEvent = async (req, res) => {
  try {
    const { event, user, metadata } = req.body;
    const newEvent = new Analytics({ event, user, metadata });
    await newEvent.save();
    res.status(201).json({ message: "Event tracked successfully" });
  } catch (error) {
    console.error("Track Event Error:", error);
    res.status(500).json({ error: "Server error tracking event" });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Analytics.find().populate("user", "name email");
    res.status(200).json(events);
  } catch (error) {
    console.error("Get Events Error:", error);
    res.status(500).json({ error: "Server error fetching events" });
  }
};
