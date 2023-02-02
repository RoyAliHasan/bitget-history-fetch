const express = require("express");
const router = express.Router();
const orderSymbols = require("../controllers/getOrderSymbols.controller");

router.get("/productSymbol", orderSymbols.getOrderBySymbolsController);

module.exports = router;
