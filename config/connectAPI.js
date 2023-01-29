const dotenv = require("dotenv");
dotenv.config();
const { SpotClient, FuturesClient, BrokerClient } = require("bitget-api");
const { param } = require("../routes/history.routes");
const API_KEY = process.env.API_KEY;
const API_SECRETE = process.env.SECRETE_KEY;
const API_PASS = process.env.PASS_PHRASE;
const client = new SpotClient({
  apiKey: API_KEY,
  apiSecret: API_SECRETE,
  apiPass: API_PASS,
});


module.exports = { client };
