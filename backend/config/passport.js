// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var Band            = require('../app/models/band');
var Venue            = require('../app/models/venue');


// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Band.findById(id, function(err, user) {
            done(err, user);
        });
        Venue.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Band.findOne({ 'local.email' :  email }, function(err, band) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (band) {
                // log the band in and go to band page
                return done(null, band);
            } else {
                // if not found search venues
                Venue.findOne({ 'local.email' :  email }, function(err, venue) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);
        
                    // check to see if theres already a user with that email
                    if (venue) {
                        // log in venue and go to venue page
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        // go to signup page
                        // if there is no user with that email
                        // create the user
                        /*
                        var newUser            = new User();

                        // set the user's local credentials
                        newUser.local.email    = email;
                        newUser.local.password = newUser.generateHash(password);

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                            */
                });
            }

        });    

        });

    }));

};




// Band.findOne({ 'local.email' :  email }, function(err, user) {
//     // if there are any errors, return the error
//     if (err)
//         return done(err);

//     // check to see if theres already a user with that email
//     if (Band) {
//         return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//     } else {

//         // if there is no user with that email
//         // create the user
//         var newUser            = new User();

//         // set the user's local credentials
//         newUser.local.email    = email;
//         newUser.local.password = newUser.generateHash(password);

//         // save the user
//         newUser.save(function(err) {
//             if (err)
//                 throw err;
//             return done(null, newUser);
//         });
//     }

// });