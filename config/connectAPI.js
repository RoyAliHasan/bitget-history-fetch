const dotenv = require("dotenv");
dotenv.config();
const { SpotClient } = require("bitget-api");
const client = new SpotClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.SECRETE_KEY,
  apiPass: process.env.PASS_PHRASE,
});

client
  .getOrder("TRXUSDT_SPBL", "974792554995224576", "974792060738441216")
  .then((result) => {
    console.log("GET: Orders", result);
   
  })
  .catch((err) => {
    console.error("ERROR: Orders: ", err);
  });
module.exports = { client };
