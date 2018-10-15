const router = require('express').Router();
const venueRoutes = require('./venues');
const bandRoutes = require('./bands');
const showRoutes = require('./shows');
const ratingRoutes = require('./ratings');



router.use("/venues", venueRoutes);
router.use("/bands", bandRoutes);
router.use("/shows", showRoutes);
router.use("/ratings", ratingRoutes);




module.exports = router;