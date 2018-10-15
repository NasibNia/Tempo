const router = require('express').Router();
const bandController = require("../../controllers/bandController");

router.route("/")
      .get(bandController.findAllBands)
      .post(bandController.create);

router.route("/ready")
      .get(bandController.findReadyBands)

router.route("/:id")
      .get(bandController.findBand)
      .delete(bandController.deleteBand)
      .put(bandController.updateBand);

// router.route("/ratings/:id")
//       .get(bandController.getRating)
//       .put(bandController.addRating);

module.exports = router;




