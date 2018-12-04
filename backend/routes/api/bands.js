const router = require('express').Router();
const bandController = require("../../controllers/bandController");

router.route("/")
      .get(bandController.findAllBands)
      .post(bandController.create);

router.route("/ready")
      .get(bandController.findReadyBands);

router.route("/search/:name")
      .get(bandController.findBandByName);

router.route("search/:genre")
      .get(bandController.findBandByGenre);

router.route("/:id")
      .get(bandController.findBand)
      .delete(bandController.deleteBand)
      .put(bandController.updateBand);

// router.route("/ratings/:id")
//       .get(bandController.getRating)
//       .put(bandController.addRating);

module.exports = router;




