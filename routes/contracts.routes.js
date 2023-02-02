const express = require("express");
const router = express.Router();
const productType = require("../controllers/Contracts.controller");

router.get("/contracts", productType.getContracts);

module.exports = router;
