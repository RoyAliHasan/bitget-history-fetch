// get History
const api = require("../config/connectAPI");
client = api.client;
const getTransactionHistoryController = async (req, res) => {
  try {
    client
      .getTransactionHistory({
        coinId: req.query.coinId,
        groupType: req.query.groupType,
        bizType: req.query.bizType,
        before: req.query.before,
        after: req.query.after,
        limit: req.query.limit,
      })
      .then((result) => {
        console.log("GET: TransactionHistory", result);
        res.send(result);
      })
      .catch((err) => {
        console.error("ERROR: TransactionHistory", err);
        res.send(err);
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
module.exports = { getTransactionHistoryController };
