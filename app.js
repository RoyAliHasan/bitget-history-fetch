const express = require("express");
const app = express();
app.use("/v1/api", require("./routes/history.routes"));

const server = () => {
  try {
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Server is running on PORT ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};
server();
