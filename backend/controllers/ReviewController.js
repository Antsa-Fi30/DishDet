const Review = require("../models/Review");

exports.getReview = async (req, res) => {
  try {
    const Review = await Review.findAll();
    res.json(Review);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.getOneReview = async (req, res) => {
  try {
  } catch (error) {}
};

exports.addReview = async (req, res) => {
  try {
  } catch (error) {}
};

exports.updateReview = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deleteReview = async (req, res) => {
  try {
  } catch (error) {}
};
