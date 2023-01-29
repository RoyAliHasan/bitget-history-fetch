const dotenv = require("dotenv");
dotenv.config();
const { SpotClient, FuturesClient, BrokerClient } = require("bitget-api");
// let API_KEY = null;
// let API_SECRETE = null;
// let API_PASS = null;
// const getCredentials = (API_KEY_P, API_SECRETE_P, API_PASS_P) => {
//   API_KEY = API_KEY_P;
//   API_SECRETE = API_SECRETE_P;
//   API_PASS = API_PASS_P;
// };

const client = new SpotClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.SECRETE_KEY,
  apiPass: process.env.PASS_PHRASE,
});
module.exports = { client };
