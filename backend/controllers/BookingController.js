const Booking = require("../models/Booking");

exports.getBooking = async (req, res) => {
  try {
    const Booking = await Booking.findAll();
    res.json(Booking);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.getOneBooking = async (req, res) => {
  try {
  } catch (error) {}
};

exports.addBooking = async (req, res) => {
  try {
  } catch (error) {}
};

exports.updateBooking = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deleteBooking = async (req, res) => {
  try {
  } catch (error) {}
};
