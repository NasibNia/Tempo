const router = require('express').Router();
const bandController = require("../../controllers/bandController");

router.route("/")
      .get(bandController.findAllBands)
      .post(bandController.create);

router.route("/ready")
      .get(bandController.findReadyBands);


router.route("/ticket_price/")
      .get(bandController.findBandByTicketPrice);

router.route("/average_draw/")
      .get(bandController.findBandByDraw);

router.route("/search/:name")
      .get(bandController.findBandByName);

router.route("/search/:genre")
      .get(bandController.findBandByGenre);

router.route("/rock")
      .get(bandController.findRockBands);

router.route("/jazz")
      .get(bandController.findJazzBands);

router.route("/electronic")
      .get(bandController.findElectronicBands);

router.route("/hiphop")
      .get(bandController.findHiphopBands);

router.route("/club")
      .get(bandController.findClubBands);

router.route("/pop")
      .get(bandController.findPopBands);

router.route("/acoustics")
      .get(bandController.findAcousticsBands);


router.route("/:id")
      .get(bandController.findBand)
      .delete(bandController.deleteBand)
      .put(bandController.updateBand);

// router.route("/ratings/:id")
//       .get(bandController.getRating)
//       .put(bandController.addRating);

module.exports = router;




