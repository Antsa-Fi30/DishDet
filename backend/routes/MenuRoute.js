const express = require("express");
const router = express.Router();
const MenuController = require("../controllers/MenuController");

router.get("/menus", MenuController.getMenu);
router.get("/addmenu", MenuController.addMenu);

module.exports = router;
