
const express = require ("express");
const mongoose = require("mongoose");
const passport = require('passport');

const routes = require ("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

require('./config/passport')(passport); // pass passport for configuration

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // persistent login sessions

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tempoDB"
);

app.listen(PORT, function (){
    console.log(`listening on port ${PORT}`);
});