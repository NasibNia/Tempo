const router = require('express').Router();
const bandController = require ("../../controllers/bandController");

router.route("/")
        .get(bandController.findAllBands)
        .post(bandController.create);

router.route("/:id")
      .get(bandController.findOneBand)
      .delete(bandController.deleteOneBand)
      .put(bandController.updateOneBand);

module.exports = router;
