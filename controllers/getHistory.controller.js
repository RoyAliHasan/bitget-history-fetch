// get History
const api = require("../config/connectAPI");
client = api.client;
const getOrderHistory = async (req, res) => {
  try {
    client
      .getOrderHistory("IXTUSDT_SPBL", {
        after: req.query.after,
        before: req.query.before,
        limit: req.query.limit,
      })
      .then((result) => {
        res.send(result);
        console.log("getOrderHistory result: ", result);
      })
      .catch((err) => {
        console.error("getOrderHistory error: ", err);
        res.send(err);
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
module.exports = { getOrderHistory };
