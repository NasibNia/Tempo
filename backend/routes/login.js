const router = require('express').Router();
const venueController = require('../controllers/venueController');
const bandController = require('../controllers/bandController');
const loginController = require('../controllers/loginController');
const requireRole = require("../config/requireRole");


const passport = require('passport');

//============== new for test :Nasib
router.post('/signup', passport.authenticate('venue-local-signup', {
      successRedirect : '/start/profile',
      failureRedirect : 'signup'
  }));
  
  router.post('/login', passport.authenticate('venue-local-login', {
      successRedirect : '/start/profile',
      failureRedirect : 'login'
  }));
  router.get('/profile', isLoggedIn, (req, res) => {
      res.status(200).json(req.user);
  });
  router.get('/logout', isLoggedIn, (req, res) => {
      req.logout();
      res.status(200).json({
          'message': 'successfully logout'
      });
  });




//============== new for test :Nasib
// router.route('/signup')
//       .post(loginController.signUp, loginController.login);

// router.route("/band/signup")
//       .get(loginController.bandSignup);

// router.route("/venue/login")
//       .get(loginController.login);
      
// router.route("/signup")
//       .get(loginController.create);    

// router.route('/logout')
//         .get( function(req, res) {
//         req.logout();
//         res.redirect('/');
//     });



    // route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


module.exports = router;