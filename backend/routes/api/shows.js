const router = require('express').Router();
const showController = require ("../../controllers/showController");

router.route("/")
        .get(showController.findAllShows);
      //   .post(showController.create);

router.route("/:id")
      .get(showController.findShow)
      .delete(showController.deleteShow)
      .put(showController.updateShow);
      // .post(showController.create);

router.route("/:user/:id")
      .post(showController.create);

router.route("/:showId/:user/:userId")
      .post(showController.joinShow)
      // router.route("/venue/:id")
      // .get(showController.findOneShow)
      .delete(showController.destroyRelationship);
      // .put(showController.updateOneShow)
      // .post(showController.create);


module.exports = router;