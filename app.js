const express = require("express");
const app = express();
app.use("/v1/api", require("./routes/history.routes"));

app.get("/", (req, res) => {
  res.send({ message: "Hello I'm Your Friend BitGet History Fetcher" });
});

const server = () => {
  try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
  } catch (error) {
    console.log("Server ERROR:->" + error);
  }
};
server();
