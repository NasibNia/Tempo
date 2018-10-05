const router = require('express').Router();
const venueRoutes = require('./venue');
const bandRoutes = require('./band');

router.use("/venue", venueRoutes);
router.use("/band", bandRoutes);

module.exports = router;