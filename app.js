const api = require("./config/connectAPI");
const express = require("express");
const app = express();
client = api.client;
// // Client Api Info Collect
// client
//   .getApiKeyInfo()
//   .then((result) => {
//     console.log("getApiKeyInfo result: ", result);
//   })
//   .catch((err) => {
//     console.error("getApiKeyInfo error: ", err);
//   });

// // Get Order History

client
  .getOrderHistory("IXTUSDT_SPBL", {
    after: "1659076670000",
    before: "1659076670000",
    limit: "100",
  })
  .then((result) => {
    console.log("getOrderHistory result: ", result);
  })
  .catch((err) => {
    console.error("getOrderHistory error: ", err);
  });

// // get  Transaction History

// client
//   .getTransactionHistory("IXTUSDT_SPBL", {
//     after: "1659076670000",
//     before: "1659076670000",
//     limit: "100",
//   })
//   .then((result) => {
//     console.log("getOrderHistory result: ", result);
//   })
//   .catch((err) => {
//     console.error("getOrderHistory error: ", err);
//   });
//start Server

app.use("/v1/api", require("./routes/history.routes"));

const server = () => {
  try {
    app.listen(5000, () => console.log("Server is running on PORT 4000"));
  } catch (error) {
    console.log(error);
  }
};
server();
