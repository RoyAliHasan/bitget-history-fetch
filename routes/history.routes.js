const express = require("express");
const router = express.Router();
const history = require("../controllers/getHistory.controller");


router.get("/history", history.getOrderHistory);
module.exports = router ;
