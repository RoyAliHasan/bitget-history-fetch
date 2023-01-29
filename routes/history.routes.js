const express = require("express");
const router = express.Router();
const history = require("../controllers/getOrderHistory.controller");
const transactionHistory = require("../controllers/getTransactionHistory.controllers");
const transferHistory = require("../controllers/getTransfer.controller");
router.get("/history", history.getOrderHistoryController);
router.get("/transaction", transactionHistory.getTransactionHistoryController);
router.get("/transfer", transferHistory.getTransferHistoryController);

module.exports = router;
