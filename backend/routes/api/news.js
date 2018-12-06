const router = require('express').Router();
const newsController = require("../../controllers/newsController");

console.log("inside news controller");
router.route("/")
      .get(newsController.findAllNews)
      .post(newsController.create);

module.exports = router;