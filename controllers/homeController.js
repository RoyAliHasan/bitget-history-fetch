const homeController = (req, res) => {
  res.render("index");
};
const orderViewController = (req, res) => {
  res.render("order");
};
module.exports = { homeController, orderViewController };
