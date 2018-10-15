const router = require('express').Router();
const venueController = require("../../controllers/venueController");

router.route("/")
      .get(venueController.findAllVenues)
      .post(venueController.create);

router.route("/ready")
      .get(venueController.findReadyVenues)

router.route("/:id")
      .get(venueController.findVenue)
      .delete(venueController.deleteVenue)
      .put(venueController.updateVenue);

// router.route("/ratings/:id")
//       .get(venueController.getRating)
//       .put(venueController.addRating);

module.exports = router;