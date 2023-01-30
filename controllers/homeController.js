const homeController = (req, res) => {
  res.render("index", { name: "Ali Hasan" });
};

module.exports = { homeController };
