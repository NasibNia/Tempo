const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
const loginRoute = require("./login");

router.use("/api" , apiRoutes);
router.use("/" , loginRoute);

// router.use(function(req, res){
//     res.sendFile(path.join(__dirname, " ../../client/build/index.html"));
// });

router.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;