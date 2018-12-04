const router = require('express').Router();
const bandController = require("../../controllers/bandController");

router.route("/")
      .get(bandController.findAllBands)
      .post(bandController.create);

router.route("/ready")
      .get(bandController.findReadyBands)

router.route("/api/bands/ticket_price/")
      .get(bandController.findBandByTicketPrice)

router.route("/api/bands/average_draw/")
      .get(bandController.findBandByDraw)

router.route("/search/:name")
      .get(bandController.findBandByName)

router.route("/:id")
      .get(bandController.findBand)
      .delete(bandController.deleteBand)
      .put(bandController.updateBand);

// router.route("/ratings/:id")
//       .get(bandController.getRating)
//       .put(bandController.addRating);

module.exports = router;




