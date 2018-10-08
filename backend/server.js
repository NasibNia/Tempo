
const express = require ("express");
const mongoose = require("mongoose");
const passport = require('passport');
const app = express();

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

require('./config/passport')(passport); // pass passport for configuration


app.use(express.urlencoded({ extended : true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // persistent login sessions
const routes = require ("./routes");
app.use('/', routes);


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tempoDB"
);

app.listen(PORT, function (){
    console.log(`listening on port ${PORT}`);
});