// get History
const api = require("../config/connectAPI");
client = api.client;
const getTransferHistoryController = async (req, res) => {
  try {
    client
      .getTransferHistory({
        coinId: req.query.coinId,
        fromType: req.query.groupType,
        before: req.query.before,
        after: req.query.after,
        limit: req.query.limit,
      })
      .then((result) => {
        console.log("GET: TransferHistory", result);
        res.send(result);
      })
      .catch((err) => {
        console.error("ERROR: TransactionHistory: ", err);
        res.send(err);
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
module.exports = { getTransferHistoryController };
