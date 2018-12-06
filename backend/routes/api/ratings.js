const router = require('express').Router();
const ratingController = require ("../../controllers/ratingController");

router.route("/")
        .get(ratingController.findAllRatings)
      //   .post(ratingController.create);
        .post(ratingController.createRating);


router.route("/:id")
      .get(ratingController.findRating)
      .delete(ratingController.deleteRating)
      .put(ratingController.updateRating);

// get all ratings that user is rating for others
router.route("/:user/:id/all")
      .get(ratingController.findRatingsById)

// gets all ratings that user needs to rate
router.route("/:user/:id/unrated")
      .get(ratingController.findNullRatingsById)

// gets all ratings that have been completed by user
router.route("/:user/:id/rated")
      .get(ratingController.findPastRatings)

// gets all ratings made for user
router.route("/:user/:id/rating/all")
      .get(ratingController.getUserRatings)

// calculates average rating for user and returns json
router.route("/:user/:id/rating")
      .get(ratingController.calculateRatingById)


module.exports = router;