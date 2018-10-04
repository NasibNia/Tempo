const router = require('express').Router();
const bandController = require ("../../controllers/bandController");

router.route("/")
        .get(bandController.findAllBands)
        .post(bandController.create);

router.route("/:id")
      .get(bandController.findOneBand)
      .delete(bandController.deletOneBand)
      .put(bandController.updateOneBand)
      .delete(bandController.deletOneBand);

module.exports = router;
