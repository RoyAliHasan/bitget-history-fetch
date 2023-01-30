const { SpotClient } = require("bitget-api");
const homeController = (req, res) => {
  const client = new SpotClient({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.SECRETE_KEY,
    apiPass: process.env.PASS_PHRASE,
  });
  client
    .getApiKeyInfo()
    .then((result) => {
      console.log("GET: ApiKEY INFO:", result);
      res.render("index", { result: result });
    })

    .catch((err) => {
      console.error("ERROR: API KEY : ", err);
    });

  console.log("LOGGING: HOME PAGE ");
};

module.exports = { homeController };
