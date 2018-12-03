const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
const loginRoute = require("./login");

router.use("/api" , apiRoutes);
// router.use("/" , loginRoute);

// router.use(function(req, res){
//     res.sendFile(path.join(__dirname, " ../../client/build/index.html"));
// });


const passport = require('passport');

//============== new for test :Nasib
router.post('/venue/signup', passport.authenticate('venue-local-signup', {
      successRedirect : '/success',
      failureRedirect : '/signup'
  }));
  
  router.post('/venue/login', passport.authenticate('venue-local-login', {
      successRedirect : '/success',
      failureRedirect : '/login'
  }));

    router.post('/band/signup', passport.authenticate('band-local-signup', {
        successRedirect : '/success',
        failureRedirect : '/signup'
    }));

    router.post('/band/login', passport.authenticate('band-local-login', {
        successRedirect : '/success',
        failureRedirect : '/login'
    }));

    router.get('/api/user', function(req, res) {
        console.log("req.user is ", req.user);
        if (!req.user) {
            console.log("no user");
            // The user is not logged in
            res.json({'message': 'api user acting funcky'});
        } else {
            res.status(200).json({
                user: req.user
            });
        }
    });


  router.get('/logout', isLoggedIn, (req, res) => {
      console.log("logging out..", req.user);
      req.logout();
      console.log("current user: ", req.user);
      if (!req.user) {
        res.status(200).json({
            //in the profile page we should add a redirect
            logout : true,
            'message': 'successfully logout'
        });
      } else {
        res.status(200).json({
            logout : false,
            'message': 'failed logout'
      });
    }
    });

router.get('/login', function (req, res) {
    console.log("wasn't able to login",req.user);
    res.json({
        success: false,
        'message': 'wrong username or password'
    });
});

router.get('/success', isLoggedIn, function(req, res){
    console.log("\n**********this user has the following information \n************ ",req.user);

    res.status(200).json({
        id : req.user.id,
        success: true,
        'message': 'successfully passed this fucking gate'
    });
});



    // route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    console.log("inside login function");

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()){
        return next();
    }
    // if they aren't redirect them to the home page
    // res.redirect('/login');
}



router.get("*",(req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;