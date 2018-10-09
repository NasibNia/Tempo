const router = require('express').Router();
const bandController = require ("../../controllers/bandController");

router.route("/")
        .get(bandController.findAllBands)
        .post(bandController.create);

router.route("/:id")
      .get(bandController.findBand)
      .delete(bandController.deleteBand)
      .put(bandController.updateBand);

module.exports = router;




