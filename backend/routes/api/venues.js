const router = require('express').Router();
const venueController = require ("../../controllers/venueController");

router.route("/")
        .get(venueController.findAllVenues)
        .post(venueController.create);

router.route("/:id")
      .get(venueController.findVenue)
      .delete(venueController.deleteVenue)
      .put(venueController.updateVenue);

module.exports = router;
