var db   = require('../models');

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
            console.log("=====================\nI'm the req/body    ",req.body);
            var passwordHash = bCrypt.hashSync(password, bCrypt.genSaltSync(8));
            
            console.log(passwordHash);
            console.log("before db.band");
            // console.log("password is   " ,password);
            db.Band.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                // console.log("~~~~~~~~~~~~\nnew user is   : " ,user);

                if (user) {
                    console.log("user doesnt exist");
                    return done(null, false, {
                        
                        message: 'That email is already taken'
                    });

                } else {
                    console.log("\n\n=========user doesnt exist");
                    var data =
                        {
                            name : req.body.name,
                            email: email,
                            password: passwordHash,
                            genre : req.body.genre

                            // userName: req.body.name,
                        };
                        console.log("\n==========data is ", data);
                    db.Band.create(data).then(function (newUser) {
                        console.log('inside db.band.create    '+ newUser);
                        if (!newUser) {
                            console.log("\n==========not a newUser");
                            return done(null, false);
                        }
                        if (newUser) {
                            console.log("\n==========newUser");
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
            console.log("I'm the req/body    " ,req.body);

            // var User = user;
            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            console.log("before db.band.findOnee");
            console.log("password is   " ,password);
            db.Band.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                // console.log("~~~~~~~~~~~~\nnew user is   : " ,user);

                if (!user) {
                    console.log("~~~~~~~~~~`\nnot a user");
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                console.log("~~~~~~~/beforevalidPassword");
                console.log("~~~~~~~/user.password" , user.password);
                console.log("~~~~~~~/password" , password);
                if (!isValidPassword(user.password, password)) {
                    console.log("~~~~~~~~~~`\nuserPassword" , user.password);
                    console.log("~~~~~~~~~~`\n[password]" , password);

                    console.log("Incorrect Password");
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
            console.log("@@@@@@@\nhitting venue local signup")
            console.log("I'm the req/body    " ,req.body);
            var passwordHash = bCrypt.hashSync(password, bCrypt.genSaltSync(8));
            
            console.log(passwordHash);
            console.log("before db.venue");
            console.log("password is   " ,password);
            db.Venue.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                // console.log("~~~~~~~~~~~~\nnew user is   : " ,user);

                if (user) {
                    console.log("user doesnt exist");
                    // return done(null, false, {
                        
                    //     message: 'That email is already taken'
                    // });

                } else {
                    console.log("user doesnt exist");
                    var data =
                        {
                            name : req.body.name,
                            email: email,
                            password: passwordHash,
                            // userName: req.body.name,
                        };
                    db.Venue.create(data).then(function (newUser) {
                        console.log('inside db.Venue.create    ', newUser);
                        if (!newUser) {
                            console.log("not a newUser");
                            return done(null, false);
                        }
                        if (newUser) {
                            console.log("newUser")
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
            console.log("I'm the req/body    " ,req.body);

            // var User = user;
            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            };

            console.log("before db.venue.findOnee");
            console.log("password is   " ,password);
            db.Venue.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                // console.log("~~~~~~~~~~~~\nnew user is   : " ,user);

                if (!user) {
                    console.log("~~~~~~~~~~`\nnot a user");
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                console.log("~~~~~~~/beforevalidPassword");
                console.log("~~~~~~~/user.password" , user.password);
                console.log("~~~~~~~/password" , password);
                if (!isValidPassword(user.password, password)) {
                    console.log("~~~~~~~~~~`\nuserPassword" , user.password);
                    console.log("~~~~~~~~~~`\n[password]" , password);

                    console.log("Incorrect Password");
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


          

    //serialize
    passport.serializeUser(function (user, done) {
        console.log("\n==========user inside seerialize  "+ user);
        done(null, user.id);

    });

    // deserialize user 

    passport.deserializeUser(function(id, done) {

        if(db.Band.findById(id)){
            db.Band.findById(id).then(function (user) {

                console.log("\n***********==========inside deserialize, user is a Band"+ user);
    
                if (user) {

                    done(null, user.get());

                } else {

                   if(db.Band.findById(id)) {
                    db.Venue.findById(id).then(function (user) {

                        console.log("\n==========inside deserialize, user is aVenue "+ user);
            
                        if (user) {
            
                            done(null, user.get());
            
                        } else {
            
                            done(user.errors, null);
            
                        }
                   });
               
                    }
                }
    
            });
        }
    });
    // passport.deserializeUser(function (id, done) {

    //     db.Band.findById(id).then(function (user) {

    //         console.log("user inside deserialize  "+ user);
    //         if (user) {

    //             done(null, user.get());

    //         } else {

    //             done(user.errors, null);

    //         }

    //     });

    //     db.Venue.findById(id).then(function (user) {

    //         console.log("\n==========user inside deserialize  "+ user);

    //         if (user) {

    //             done(null, user.get());

    //         } else {

    //             done(user.errors, null);

    //         }

    //     });

    // });
};