const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/", authMiddleware, schoolController.getAllSchools);

module.exports = router;
