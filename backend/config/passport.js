// // // config/passport.js

// // // load all the things we need
// // var LocalStrategy   = require('passport-local').Strategy;

// // // load up the user model
var Band    = require('../models/band');
// var Venue   = require('../models/venue');
// var db   = require('../models');
// var bcrypt = require("bcrypt-nodejs");

// // var User    = require('../models/User');


// // expose this function to our app using module.exports
// module.exports = function(passport) {

//     // =========================================================================
//     // passport session setup ==================================================
//     // =========================================================================
//     // required for persistent login sessions
//     // passport needs ability to serialize and unserialize users out of session

//     // used to serialize the user for the session
//     // passport.serializeUser(function(user, done) {
//     //     done(null, user.id);
//     // });

//     // // used to deserialize the user
//     // passport.deserializeUser(function(id, done) {
//     //     Band.findOne({where: {id : id}}, function(err, user) {
//     //         done(err, user);
//     //     });
//     //     Venue.findOne({where: {id : id}}, function(err, user) {
//     //         done(err, user);
//     //     });
//     // });

//     // =========================================================================
//     // LOCAL LOGIN =============================================================
//     // =========================================================================
//     passport.use('band-local-login', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//     },
//     function(req, email, password, done) {
//         if (email)
//             email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

//         // asynchronous
//         process.nextTick(function() {
//             Band.findOne({ 'email' :  email }, function(err, user) {
//                 // if there are any errors, return the error
//                 if (err)
//                     return done(err);

//                 // if no user is found, return the message
//                 if (!user)
//                     return done(null, false);

//                 if (!user.validPassword(password))
//                     return done(null, false);

//                 // all is well, return user
//                 else
//                     return done(null, user);
//             });
//         });

//     }));

// // =========================================================================
// // LOCAL SIGNUP ============================================================
// // =========================================================================
// passport.use('band-local-signup', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//     },
//     function(req, email, password, done) {
//         console.log("request is   ", req.body);
//         // email = req.body.email;
//         // password = req.body.password;
//         if (email)
//             email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

//         // asynchronous
//         process.nextTick(function() {
//             // if the user is not already logged in:
//             // console.log("db.band is   ", Band);
//             if (!req.user) {
//                 db.Band.findOne({
//                     where: {
//                         email : email }})
//                     .then((err, user) => {
//                         console.log("after database", user);
//                         // if there are any errors, return the error
//                         if (err)
//                             return done(err);

//                         // check to see if theres already a user with that email
//                         if (user) {
//                             console.log("User was found", user);
//                             return done(null, user);
//                         } else {

//                             // create the user
//                             console.log("create the user");
//                             // var newUser            = new Band();

//                             // newUser.email    = email;
//                             // newUser.password = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                           

//                             // console.log( "new User  " , newUser);
//                             return done(null, false);

//                             // newUser.save(function(err) {
//                             //     if (err)
//                             //         return done(err);

//                             //     return done(null, newUser);
//                             // });
//                         }

//                 });
//                 // if the user is logged in but has no local account...
//             } else if ( !req.user.local.email ) {
//                 // ...presumably they're trying to connect a local account
//                 // BUT let's check if the email used to connect a local account is being used by another user
//                 db.Band.findOne({where: { 'email' :  email }}, function(err, user) {
//                     if (err)
//                         return done(err);

//                     if (user) {
//                         return done(null, false);
//                         // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
//                     } else {
//                         var user = req.user;
//                         user.email = email;
//                         user.password = user.generateHash(password);
//                         user.save(function (err) {
//                             if (err)
//                                 return done(err);

//                             return done(null,user);
//                         });
//                     }
//                 });
//             } else {
//                 // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
//                 return done(null, req.user);
//             }

//         });

//     }));


// ///Similarly for venues
// // =========================================================================
//     // LOCAL LOGIN =============================================================
//     // =========================================================================
//     passport.use('venue-local-login', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//     },
//     function(req, email, password, done) {
//         if (email)
//             email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

//         // asynchronous
//         process.nextTick(function() {
//             Venue.findOne({where:{ 'email' :  email }}, function(err, user) {
//                 // if there are any errors, return the error
//                 if (err)
//                     return done(err);

//                 // if no user is found, return the message
//                 if (!user)
//                     return done(null, false);

//                 if (!user.validPassword(password))
//                     return done(null, false);

//                 // all is well, return user
//                 else
//                     return done(null, user);
//             });
//         });

//     }));

// // =========================================================================
// // LOCAL SIGNUP ============================================================
// // =========================================================================
// passport.use('venue-local-signup', new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'email',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
//     },
//     function(req, email, password, done) {
//         if (email)
//             email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

//         // asynchronous
//         process.nextTick(function() {
//             // if the user is not already logged in:
//             if (!req.user) {
//                 Venue.findOne({where:{ 'email' :  email }}, function(err, user) {
//                     // if there are any errors, return the error
//                     if (err)
//                         return done(err);

//                     // check to see if theres already a user with that email
//                     if (user) {
//                         return done(null, false);
//                     } else {

//                         // create the user
//                         var newUser            = new Venue();

//                         newUser.email    = email;
//                         newUser.password = newUser.generateHash(password);

//                         newUser.save(function(err) {
//                             if (err)
//                                 return done(err);

//                             return done(null, newUser);
//                         });
//                     }

//                 });
//                 // if the user is logged in but has no local account...
//             } else if ( !req.user.email ) {
//                 // ...presumably they're trying to connect a local account
//                 // BUT let's check if the email used to connect a local account is being used by another user
//                 Venue.findOne({where:{ 'email' :  email }}, function(err, user) {
//                     if (err)
//                         return done(err);

//                     if (user) {
//                         return done(null, false);
//                         // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
//                     } else {
//                         var user = req.user;
//                         user.email = email;
//                         user.password = user.generateHash(password);
//                         user.save(function (err) {
//                             if (err)
//                                 return done(err);

//                             return done(null,user);
//                         });
//                     }
//                 });
//             } else {
//                 // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
//                 return done(null, req.user);
//             }

//         });

//     }));

// };

// // Band.findOne({ 'local.email' :  email }, function(err, user) {
// //     // if there are any errors, return the error
// //     if (err)
// //         return done(err);

// //     // check to see if theres already a user with that email
// //     if (Band) {
// //         return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
// //     } else {

// //         // if there is no user with that email
// //         // create the user
// //         var newUser            = new User();

// //         // set the user's local credentials
// //         newUser.local.email    = email;
// //         newUser.local.password = newUser.generateHash(password);

// //         // save the user
// //         newUser.save(function(err) {
// //             if (err)
// //                 throw err;
// //             return done(null, newUser);
// //         });
// //     }

// // });



var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport) {

    // var Band = user;
    var LocalStrategy = require('passport-local').Strategy;

    //for local signup
    passport.use('band-local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            Band.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else {
                    var userPassword = generateHash(password);
                    var data =
                    {
                        userEmail: email,
                        userPassword: userPassword,
                        // userName: req.body.name,
                    };
                    Band.create(data).then(function (newUser,created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    // //LOCAL SIGNIN
    // passport.use('band-local-signin', new LocalStrategy(
    //     {
    //         // by default, local strategy uses username and password, we will override with email
    //         usernameField: 'email',
    //         passwordField: 'password',
    //         passReqToCallback: true // allows us to pass back the entire request to the callback
    //     },

    //     function (req, email, password, done) {
    //         var User = user;
    //         var isValidPassword = function (userpass, password) {
    //             return bCrypt.compareSync(password, userpass);
    //         }
    //         User.findOne({
    //             where: {
    //                 userEmail: email
    //             }
    //         }).then(function (user) {
    //             if (!user) {
    //                 return done(null, false, {
    //                     message: 'Email does not exist'
    //                 });
    //             }
    //             if (!isValidPassword(user.userPassword, password)) {
    //                 return done(null, false, {
    //                     message: 'Incorrect password.'
    //                 });
    //             }

    //             var userinfo = user.get();
    //             return done(null, userinfo);
    //         }).catch(function (err) {
    //             console.log("Error:", err);
    //             return done(null, false, {
    //                 message: 'Something went wrong with your Signin'
    //             });
    //         });
    //     }
    // ));

    //serialize
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {

        Band.findById(id).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });
};