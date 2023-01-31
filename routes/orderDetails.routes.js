const express = require("express");
const router = express.Router();
const orderDetails = require("../controllers/gerOrderDetails");

router.get("/u1/order", orderDetails.getOrdersU1Controller);
router.get("/u2/order", orderDetails.getOrdersU2Controller);

module.exports = router;
