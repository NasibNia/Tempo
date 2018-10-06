const router = require('express').Router();
const venueController = require('../../controllers/venueController');
const bandController = require('../../controllers/bandController');
const loginController = require('../../controllers/loginController');


const passport = require('../../config');



router.route('/signup')
      .post(loginController.signUp, loginController.login);

router.route("/band/signup")
      .get(loginController.bandSignup);

router.route("/venue/login")
      .get(loginController.login);
      
router.route("/signup")
      .get(loginController.create);    

router.route('/logout')
        .get( function(req, res) {
        req.logout();
        res.redirect('/');
    });



    // route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}