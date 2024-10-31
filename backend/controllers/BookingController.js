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
  const { userid, restaurantid, reservationDate, dateBooking, reservedPlaces } =
    req.body;

  try {
    const newReservation = await Booking.create({
      userid,
      restaurantid,
      reservationDate,
      dateBooking,
      reservedPlaces,
    });
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: "Error creating reservation" });
  }
};

exports.updateBooking = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deleteBooking = async (req, res) => {
  try {
  } catch (error) {}
};
