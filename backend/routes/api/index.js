const router = require('express').Router();
const venueRoutes = require('./venues');
const bandRoutes = require('./bands');
const showRoutes = require('./shows');


router.use("/venues", venueRoutes);
router.use("/bands", bandRoutes);
router.use("/shows", showRoutes);



module.exports = router;