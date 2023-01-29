// get History
// const api = require("../config/connectAPI");
const { SpotClient } = require("bitget-api");

// client = api.client;
const getOrderHistoryController = async (req, res) => {
  const client = new SpotClient({
    apiKey: req.query.apiKey,
    apiSecret: req.query.secretKey,
    apiPass: req.query.paraPhrase,
  });
  console.log(req.query.ApiKey)

  try {
    client
      .getOrderHistory("IXTUSDT_SPBL", {
        after: req.query.after,
        before: req.query.before,
        limit: req.query.limit,
      })
      .then((result) => {
        res.send(result);
        console.log("GET: OrderHistory", result);
      })
      .catch((err) => {
        console.error("ERROR: OrderHistory", err);
        res.send(err);
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
module.exports = { getOrderHistoryController };
