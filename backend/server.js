
const express = require ("express");
// const mongoose = require("mongoose");
const app = express();

const passport = require('passport');


require('./config/passport')(passport); // pass passport for configuration

/// ====
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

// required for passport
app.use(session({
    secret: 'eminem', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



///===== 



const PORT = process.env.PORT || 3001;

var db = require("./models");




app.use(express.urlencoded({ extended : true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
const path = require ('path');
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//     app.get("/", function(req, res) {
//       res.sendFile(path.join(__dirname, "../client/build/index.html"));
//     });
//   }
  /*
  else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "../client/public/index.html"));
    });
  }
*/
app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // persistent login sessions
const routes = require ("./routes/index.js");
app.use("/",routes);
// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Syncing our sequelize models and then starting our Express app
// =============================================================
// Requiring our models for syncing
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });