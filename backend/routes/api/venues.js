const router = require('express').Router();
const venueController = require ("../../controllers/venueController");

router.route("/")
        .get(venueController.findAllVenues)
        .post(venueController.create);

router.route("/:id")
      .get(venueController.findOneVenue)
      .delete(venueController.deletOneVenue)
      .put(venueController.updateOneVenue)
      .delete(venueController.deletOneVenue);

module.exports = router;
