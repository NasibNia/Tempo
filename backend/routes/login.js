const router = require('express').Router();
const venueController = require('../controllers/venueController');
const bandController = require('../controllers/bandController');
const loginController = require('../controllers/loginController');
const requireRole = require("../config/requireRole");


const passport = require('passport');

//============== new for test :Nasib
router.post('/venue/signup', passport.authenticate('venue-local-signup', {
      successRedirect : '/start/profile',
      failureRedirect : '/venue/signup'
  }));
  
  router.post('/venue/login', passport.authenticate('venue-local-login', {
      successRedirect : '/success',
      failureRedirect : '/venue/login'
  }));

    router.post('/band/signup', passport.authenticate('band-local-signup', {
        successRedirect : '/success',
        failureRedirect : '/signup'
    }));

    router.post('/band/login', passport.authenticate('band-local-login', {
        successRedirect : '/success',
        failureRedirect : '/signup'
    }));

//   router.get('/InfoForm', isLoggedIn, (req, res) => {
//     res.json("band login success");
//   });

  router.get('/logout', isLoggedIn, (req, res) => {
      req.logout();
      
      res.status(200).json({
          //in the profile page we should add a redirect
          logout : true,
          'message': 'successfully logout'
      });
    });
    
router.get('/signup', function (req, res) {
    console.log("wasn't able to login",req.user);
    res.json({
        success: false,
        'message': 'wrong username or password'
    });
});

router.get ('/success', isLoggedIn, function(req, res){
    console.log("\n**********this user has the following information \n************ ",req.user);
    res.status(200).json({
        success: true,
        'message': 'successfully passed this fucking gate'
    });
});



    // route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()){
    console.log("inside login function");
        return next();
    }
    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports = router;