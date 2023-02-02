const axios = require("axios");

// Get Order Details User 1
const getContracts = async (req, res) => {
  console.log(req.query.productType);
  try {
    const response = await axios.get(
      `https://api.bitget.com/api/mix/v1/market/contracts?productType=${req.query.productType}`
    );
    res.send(response.data);
  } catch (err) {
    console.log(err);
     res.status(400).send({ error: "Something went wrong" + error });
  }
};
module.exports = { getContracts };
