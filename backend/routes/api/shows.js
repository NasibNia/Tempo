const router = require('express').Router();
const showController = require ("../../controllers/showController");

router.route("/")
        .get(showController.findAllShows)
        .post(showController.create);

router.route("/:id")
      .get(showController.findOneShow)
      .delete(showController.deleteOneShow)
      .put(showController.updateOneShow);

module.exports = router;
