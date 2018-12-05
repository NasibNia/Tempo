
// const express = require ("express");
// // const mongoose = require("mongoose");
// const app = express();

// const passport = require('passport');


// require('./config/passport')(passport); // pass passport for configuration

// /// ====
// var morgan       = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser   = require('body-parser');
// var session      = require('express-session');

// const path = require ('path');

// // set up our express application
// app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)

// // required for passport
// app.use(session({
//     secret: 'eminem', // session secret
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions



// ///===== 



// const PORT = process.env.PORT || 3001;

// var db = require("./models");




// app.use(express.urlencoded({ extended : true }));
// app.use(express.json());

// if(process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
// }

// app.use(passport.initialize()); // initialize passport
// app.use(passport.session()); // persistent login sessions
// const routes = require ("./routes/index.js");
// app.use(routes);
// // Send every other request to the React app
// // Define any API routes before this runs
// // app.get("*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// // });

// // Adding Socket.io
// //=============================================================
// const http = require('http');

// const server = http.createServer(app);
// const socket = require('socket.io');
// const io = socket(server);
// io.on('connection', (socket) => {

//     console.log('made socket connection', socket.id);
//     console.log(socket.id);

//     socket.on('SEND_MESSAGE', function(data){
//         io.emit('RECEIVE_MESSAGE', data);
//     });

// });



// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// // Requiring our models for syncing
// db.sequelize.sync({ force: false }).then(function() {
//     app.listen(PORT, function() {
//       console.log("App listening on PORT " + PORT);
//     });
//   });



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


app.use(passport.initialize()); // initialize passport
app.use(passport.session()); // persistent login sessions
const routes = require ("./routes");
app.use('/', routes);



// Syncing our sequelize models and then starting our Express app
// =============================================================
const http = require('http');

const server = http.createServer(app);
const socket = require('socket.io');

//   var socket = require('socket.io');
// Socket setup & pass server
// var io = socket(server);
const io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    });

});



// Requiring our models for syncing
db.sequelize.sync({ force: false }).then(function() {
    server.listen(PORT, function() {
       console.log("App listening on PORT " + PORT);
     });
   });