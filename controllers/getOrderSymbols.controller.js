const { SpotClient } = require("bitget-api");
const getOrderBySymbolsController = async (req, res) => {
  const client = new SpotClient({
    apiKey: req.query.apiKey,
    apiSecret: req.query.secretKey,
    apiPass: req.query.paraPhrase,
  });
  try {
    client.getSymbols()
      .then((result) => {
        res.send(result);
        console.log("GET: Order  Symbols");
      })
      .catch((err) => {
        console.error("ERROR: Wrong Credentials Order  Symbols");
        res.status(400).json({ error: "Something went wrong" });
      });
  } catch (error) {
    return res.status(400).json({ error: "Something went wrong" });
  }
};
module.exports = { getOrderBySymbolsController };
