const { SpotClient } = require("bitget-api");

// client = api.client;
const getProductTypeController = async (req, res) => {
  console.log(req.query.apiKey);
  const client = new SpotClient({
    // apiKey: req.query.apiKey,
    // apiSecret: req.query.secretKey,
    // apiPass: req.query.paraPhrase,
    apiKey: "bg_fdf0c544f97dba51cf26c69afd19138d",
    apiSecret:
      "badc33736883af224cc9d3f897860234a9020ebe96fc3546fdd664cf96eb33f9",
    apiPass: "Aqsw1234",
  });
  try {
    client
      .getApiKeyInfo()
      .then((result) => {
        const productType = {
          code: "00000",
          msg: "success",
          requestTime: 1675258045596,
          data: {
            nextFlag: true,
            endId: "1004570725601406977",
            orderList: [
              {
                symbol: "ADAUSDT_UMCBL",
                size: 100,
                orderId: "1004592525978791955",
                clientOid: "1004592525917929472",
                filledQty: 100,
                fee: -0.0228732,
                price: null,
                priceAvg: 0.38122,
                state: "filled",
                side: "close_short",
                timeInForce: "normal",
                totalProfits: -0.17623076,
                posSide: "short",
                marginCoin: "USDT",
                filledAmount: 38.122,
                orderType: "market",
                leverage: "10",
                marginMode: "crossed",
                reduceOnly: true,
                cTime: "1675239443298",
                uTime: "1675239443394",
              },
              {
                symbol: "ADAUSDT_UMCBL",
                size: 50,
                orderId: "1004577504615886856",
                clientOid: "1004577504555024384",
                filledQty: 50,
                fee: -0.0114633,
                price: null,
                priceAvg: 0.38211,
                state: "filled",
                side: "close_long",
                timeInForce: "normal",
                totalProfits: 0.36376362,
                posSide: "long",
                marginCoin: "USDT",
                filledAmount: 19.1055,
                orderType: "market",
                leverage: "10",
                marginMode: "crossed",
                reduceOnly: true,
                cTime: "1675235861926",
                uTime: "1675235862019",
              },
              {
                symbol: "ADAUSDT_UMCBL",
                size: 50,
                orderId: "1004576584482058242",
                clientOid: "1004576584417001473",
                filledQty: 50,
                fee: -0.011454,
                price: null,
                priceAvg: 0.3818,
                state: "filled",
                side: "close_long",
                timeInForce: "normal",
                totalProfits: 0.34826362,
                posSide: "long",
                marginCoin: "USDT",
                filledAmount: 19.09,
                orderType: "market",
                leverage: "10",
                marginMode: "crossed",
                reduceOnly: true,
                cTime: "1675235642549",
                uTime: "1675235642651",
              },
              {
                symbol: "ADAUSDT_UMCBL",
                size: 50,
                orderId: "1004571966540771334",
                clientOid: "1004571966479908864",
                filledQty: 50,
                fee: -0.0114615,
                price: null,
                priceAvg: 0.38205,
                state: "filled",
                side: "close_short",
                timeInForce: "normal",
                totalProfits: -0.12961538,
                posSide: "short",
                marginCoin: "USDT",
                filledAmount: 19.1025,
                orderType: "market",
                leverage: "10",
                marginMode: "crossed",
                reduceOnly: true,
                cTime: "1675234541546",
                uTime: "1675234541707",
              },
              {
                symbol: "ADAUSDT_UMCBL",
                size: 50,
                orderId: "1004570725601406977",
                clientOid: "1004570725536350209",
                filledQty: 50,
                fee: -0.0115161,
                price: null,
                priceAvg: 0.38387,
                state: "filled",
                side: "close_long",
                timeInForce: "normal",
                totalProfits: 0.45176362,
                posSide: "long",
                marginCoin: "USDT",
                filledAmount: 19.1935,
                orderType: "market",
                leverage: "10",
                marginMode: "crossed",
                reduceOnly: true,
                cTime: "1675234245683",
                uTime: "1675234245787",
              },
            ],
          },
        };

        console.log(result);
        res.send(productType);
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
module.exports = { getProductTypeController };
