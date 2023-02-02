const homeController = (req, res) => {
  res.render("history");
};
const orderViewController = (req, res) => {
  res.render("order");
};
module.exports = { homeController, orderViewController };
