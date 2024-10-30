const express = require("express");
const router = express.Router();
const BookingController = require("../controllers/BookingController");

router.get("/bookings", BookingController.getBooking);

module.exports = router;
