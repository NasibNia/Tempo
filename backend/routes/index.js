const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
const loginRoute = require("./login");

router.use("/api" , apiRoutes);
router.use("/login" , loginRoute);

router.use(function(req, res){
    res.sendFile(path.join(__dirname, " ../client/public/index.html"));
});

module.exports = router;