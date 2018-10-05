const router = require('express').Router();
const venueRoutes = require('./venues');
const bandRoutes = require('./shows');

router.use("/venues", venueRoutes);
router.use("/bands", bandRoutes);
router.use("/shows", bandRoutes);


module.exports = router;