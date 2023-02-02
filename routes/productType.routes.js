const express = require("express");
const router = express.Router();
const productType = require("../controllers/getProductType.controller");

router.get("/productType", productType.getProductTypeController);

module.exports = router;
