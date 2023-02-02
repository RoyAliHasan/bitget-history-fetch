// get History
const { SpotClient } = require("bitget-api");
// const api = require("../config/connectAPI");
// client = api.client;
const getOrderHistoryController = async (req, res) => {
  console.log(req.query);
  try {
    const client = new SpotClient({
      apiKey: req.query.ApiKey,
      apiSecret: req.query.secretKey,
      apiPass: req.query.paraPhrase,
    });
    client
      .getOrderHistory(req.query.symbol, {
        after: req.query.after,
        before: req.query.before,
        limit: req.query.limit,
      })
      .then((result) => {
        if (result.data.length === 0) {
          const orderHistory = {
            accountId: "10012",
            symbol: "btcusdt_spbl",
            orderId: "2222222",
            clientOrderId: "xxxxxxx",
            price: "34982.12",
            quantity: "1",
            orderType: "limit",
            side: "buy",
            status: "new",
            fillPrice: "34982.12",
            fillQuantity: "1",
            fillTotalAmount: "34982.12",
            cTime: "1622697148",
          };
          result.data.push(orderHistory);
          res.send(result);
          console.log("GET: OrderHistory If Data not Avail");
        } else {
          res.send(result);
          console.log("GET: OrderHistory When Data Avail");
        }
      })
      .catch((err) => {
        console.error("ERROR: OrderHistory", err);
        res.status(400).json({ error: "Something went wrong" });
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};

module.exports = { getOrderHistoryController };

//getOrderHistoryController
