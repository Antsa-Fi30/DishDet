const express = require("express");
const router = express.Router();
const MenuController = require("../controllers/MenuController");

router.get("/menus", MenuController.getMenu);

module.exports = router;
