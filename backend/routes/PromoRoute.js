const express = require("express");
const router = express.Router();
const PromotionController = require("../controllers/PromotionController");

router.get("/promotions", PromotionController.getPromotion);
router.get("/promotion/:id", PromotionController.getPromotion);
router.get("/addpromotion", PromotionController.addPromotion);
router.get("/deletepromotion/:id", PromotionController.deletePromotion);
router.get("/promotions", PromotionController.getPromotion);

module.exports = router;
