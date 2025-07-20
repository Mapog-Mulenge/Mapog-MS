const express = require("express");
const router = express.Router();
const pageController = require("../controllers/pageController");

// CRUD for pages
router.post("/", pageController.createPage);
router.get("/:slug", pageController.getPage);
router.put("/:slug", pageController.updatePage);
router.delete("/:slug", pageController.deletePage);

module.exports = router;
