const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');
const bcrypt   = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const venueSchema = new Schema ({
    name : {
        type:String,
        required : true
    },
    address : {
        type : String,
        required : true,
    },
    city : {
        type: String,
        required : true
    },
    state: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
   capacity : {
       type : Number,
       required : true
    },
    genre: {
        type : String
    },
    ticket_price:{
        type : Number
    },
    Year_est:{
        type : Date
    },
    venue_tier : {
        type : Number,
        min : 1,
        Max : 3
    },
    rating  : {
        type : Number
    },
    reserved : [
        {
            from : Date,
            to   : Date
        }
    ],
    show: {
        type: Schema.Types.ObjectId,
        ref: "Show"
    }    
});

venueSchema.plugin(passportLocalMongoose, {
    //Updating username field to email rather than default "username" from LocalStrategy
    usernameField: 'email',
  });

// methods ======================
// generating a hash
venueSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
venueSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

const Venue = mongoose.model("Venue", venueSchema);
module.exports = Venue;