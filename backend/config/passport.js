var db = require('../models');

var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport) {

    // var Band = user;
    var LocalStrategy = require('passport-local').Strategy;

    //for  band local signup
    passport.use('band-local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {
            var passwordHash = bCrypt.hashSync(password, bCrypt.genSaltSync(8));

            db.Band.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (user) {
                    return done(null, false, {

                        message: 'That email is already taken'
                    });

                } else {
                    var data =
                    {
                        name: req.body.name,
                        email: email,
                        password: passwordHash,
                        userType: req.body.userType,
                    };
                    db.Band.create(data).then(function (newUser) {
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

    //Band LOCAL SIGNIN
    passport.use('band-local-login', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };

            db.Band.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                // console.log("~~~~~~~~~~~~\nnew user is   : " ,user);

                if (!user) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }

                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }

                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));

    //for Venue local signup
    passport.use('venue-local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {

            var passwordHash = bCrypt.hashSync(password, bCrypt.genSaltSync(8));
            db.Venue.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else {
                    var data =
                    {
                        name: req.body.name,
                        email: email,
                        password: passwordHash,
                        userType: req.body.userType,
                        address: req.body.address,
                        zip: req.body.zip,
                        city: req.body.city,
                        state: req.body.state
                    };
                    db.Venue.create(data).then(function (newUser) {
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



    //VENUE LOCAL SIGNIN
    passport.use('venue-local-login', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };

            db.Venue.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                if (!user) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }

                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function (err) {

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }
    ));


    //serialize
    passport.serializeUser(function (user, done) {
        done(null, {id: user.id, type:user.userType });
    });

    // deserialize user 

    passport.deserializeUser(function (obj, done) {

        if(obj.type === "artist"){
            db.Band.findById(obj.id).then(function (user) {

                if (user) {

                    done(null, user.get());

                } else {

                    done(user.errors, null);
                }
            });
             
        } else if (obj.type === "venue"){
            db.Venue.findById(obj.id).then(function (user) {

                if (user) {

                    done(null, user.get());

                } else {

                    done(user.errors, null);
                }
            });

        }

    });
    
};