const express = require("express");
const router = express.Router();
const PromotionController = require("../controllers/PromotionController");

router.get("/promotions", PromotionController.getPromotion);

module.exports = router;
