const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analyticsController");

// Track event
router.post("/track", analyticsController.trackEvent);

// Get all events
router.get("/", analyticsController.getEvents);

module.exports = router;
