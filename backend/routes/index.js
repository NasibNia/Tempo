const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
const loginRoute = require("./login");

router.use("/api" , apiRoutes);
router.use("/" , loginRoute);

module.exports = router;