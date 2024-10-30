const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/ReviewController");

router.get("/reviews", ReviewController.getReview);

module.exports = router;
