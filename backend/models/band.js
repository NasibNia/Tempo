const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bandSchema = new Schema ({
    name : {
        type:String,
        required : true
    },
    members : [
        {
            name     : String,
            imageUrl : String,
            role     : String,
            bio      : String
        }
    ],
    pastPerformances : [
        {
            date : Date,
            location : {type : Schema.ObjectId , ref : 'Venue'} ,
        }
    ],
    ratings  : {
        type : Number
    },
    lookingForVenue : [
        {
            from : Date,
            to   : Date,
            zipCode : String
        }
    ]   
});

const Band = mongoose.model("Band", bandSchema);
module.exports = Band;