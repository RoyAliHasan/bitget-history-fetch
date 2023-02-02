const homeController = (req, res) => {
  res.render("history");
};
const orderViewController = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.render("order");
};
module.exports = { homeController, orderViewController };
